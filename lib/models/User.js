import pool from '../utils/pool';


module.exports = class User {

    id;
    name;
    email;
    password;

    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.email = row.email;
        this.password = row.password;
    }

    static async insert({ name, email, password }) {
        const { rows } = await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
        [name, email, password])
        return new User(rows);
    }
};