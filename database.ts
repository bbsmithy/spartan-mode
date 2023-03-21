import * as SQLite from 'expo-sqlite';


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
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS actions (
                    id INTEGER PRIMARY KEY NOT NULL,
                    title TEXT NOT NULL,
                    score INTEGER NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                );`
            );
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS daily_reports (
                    id INTEGER PRIMARY KEY NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    actions JSONB NOT NULL,
                    total_score INTEGER NOT NULL
                );`
            )
        });
    }
}

const spartanDB = new Database('spartan');
export default spartanDB;