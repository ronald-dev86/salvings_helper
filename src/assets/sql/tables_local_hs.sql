CREATE TABLE IF NOT EXISTS categories(
  _id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  watch INTEGER NOT NULL
);
CREATE TABLE IF NOT EXISTS buyout(
  _id INTEGER PRIMARY KEY,
  _id_category INTEGER,
  description TEXT NOT NULL,
  amount REAL NOT NULL,
  badge TEXT NOT NULL,
  month TEXT NOT NULL,
  create_at TEXT NOT NULL,
  CONSTRAINT fk_category
    FOREIGN KEY (_id_category)
    REFERENCES categories(_id) ON UPDATE RESTRICT
)