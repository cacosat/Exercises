import sqlite3 from "sqlite3";
// Destructuring verbose from sqlite3 for debugging
const {verbose} = sqlite3;
// Creating a new verbose database instance for logging SQL queries
const db = verbose();

new db.Database('./expense-tracker.db', (err) => {
    // create database at ./expense-tracker.db and handle error
    if (err) {
        console.error(err.message);
    } else {
        console.log('SQLite DB conected')
    }
});

// export to use in other parts of the app
export default db