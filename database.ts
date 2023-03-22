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
    actions JSONB NOT NULL,
    total_score INTEGER NOT NULL
);`
export const DELETE_DAILY_REPORTS_TABLE = `DROP TABLE daily_reports`
export const INSERT_DAILY_REPORT = `INSERT INTO daily_reports (actions, total_score) VALUES (?, ?) `



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
}

const spartanDB = new Database('spartan');
export default spartanDB;