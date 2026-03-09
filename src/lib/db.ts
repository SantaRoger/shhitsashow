import Database from "better-sqlite3";
import path from "path";

const DB_PATH = path.join(process.cwd(), "data", "contacts.db");

let db: Database.Database | null = null;

function getDb(): Database.Database {
  if (!db) {
    const fs = require("fs");
    const dir = path.dirname(DB_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    db = new Database(DB_PATH);
    db.pragma("journal_mode = WAL");
    db.exec(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        faire TEXT,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TEXT DEFAULT (datetime('now'))
      )
    `);
  }
  return db;
}

export function saveContact(data: {
  name: string;
  faire?: string;
  email: string;
  message: string;
}) {
  const stmt = getDb().prepare(
    "INSERT INTO contacts (name, faire, email, message) VALUES (?, ?, ?, ?)"
  );
  return stmt.run(data.name, data.faire ?? null, data.email, data.message);
}
