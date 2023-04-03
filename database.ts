import * as SQLite from 'expo-sqlite';


export const CREATE_ACTIONS_TABLE = `CREATE TABLE IF NOT EXISTS actions (
    id INTEGER PRIMARY KEY NOT NULL,
    title TEXT NOT NULL,
    score INTEGER NOT NULL,
    positive BOOLEAN NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`
export const DELETE_ACTIONS_TABLE = `DROP TABLE actions`
export const INSERT_ACTION = `INSERT INTO actions (title, score, positive) VALUES (?, ?, ?) `
export const CREATE_DAILY_REPORTS_TABLE = `CREATE TABLE IF NOT EXISTS daily_reports (
    id INTEGER PRIMARY KEY NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    actions TEXT NOT NULL,
    total_score INTEGER NOT NULL
);`
export const DELETE_DAILY_REPORTS_TABLE = `DROP TABLE daily_reports`
export const INSERT_DAILY_REPORT = `INSERT INTO daily_reports (actions, total_score) VALUES (?, ?) `
export const SEED_DAILY_REPORT_ROW = `INSERT INTO daily_reports (actions, total_score, created_at) VALUES (?, ?, ?) `

export const SEED_ACTIONS = `
    INSERT INTO actions (title, score, positive) VALUES
    ('Gym', 20, 1),
    ('Meditation', 20, 1),
    ('Hurling', 30, 1),
    ('Drinking', 100, 0)
`

export const SEED_DAILY_REPORTS = `
INSERT INTO daily_reports (actions, total_score, created_at)
SELECT '[' || group_concat('{"id": ' || t || ', "title": "Task ' || t || '", "score": ' || (RANDOM() % 21 - 10) || ', "positive": ' || (RANDOM() % 2) || '}') || ']',
       ABS(RANDOM() % 100),
       strftime('%s', 'now', '-' || '(t-1)' || ' days')
FROM (SELECT 1 AS t UNION SELECT 2 UNION SELECT 3 UNION SELECT 4 UNION SELECT 5 UNION SELECT 6 UNION SELECT 7 UNION SELECT 8 UNION SELECT 9 UNION SELECT 10)
`


class Database {

    public db: SQLite.WebSQLDatabase | null = null;
    public dbName: string = '';

    constructor(dbName: string) {
        if (this.db !== null) {
            return;
        } else {
            this.dbName = dbName;
            this.openDatabase();
        }
    }

    private openDatabase() {
        this.db = SQLite.openDatabase(`${this.dbName}.db`);
        this.setupDatabase();
    }

    private setupDatabase() {
        this.db?.transaction(tx => {
            tx.executeSql(CREATE_ACTIONS_TABLE);
            tx.executeSql(CREATE_DAILY_REPORTS_TABLE);
        });
    }

    public resetDatabase() {
        this.db?.transaction(tx => {
            tx.executeSql(DELETE_ACTIONS_TABLE);
            tx.executeSql(DELETE_DAILY_REPORTS_TABLE);
        });
        this.setupDatabase();
    }

    public logTableSchema(tableName: string) {
        this.db?.transaction(tx => {
            tx.executeSql(`PRAGMA table_info(${tableName})`, [], (_, { rows: { _array } }) => {
                console.log(_array);
            });
        });
    }

    public seedDatabase() {
        this.db?.transaction(tx => {
            tx.executeSql(SEED_ACTIONS);
            for (let index = 0; index < 10; index++) {
                const date = new Date();
                date.setDate(date.getDate() - index);
                tx.executeSql(SEED_DAILY_REPORT_ROW, [
                    JSON.stringify([{id: 1, title: "Gym", score: 20, created_at: "2023-03-24 22:21:39"}]), 
                    Math.round(Math.random() * 100), 
                    date.getTime()
                ])
            }
        }, (err) => {
            console.log({ err })
        })
    }

}

const spartanDB = new Database('spartan');
export default spartanDB;
