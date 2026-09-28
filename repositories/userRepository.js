const db = require('../config/db');

const createUser = async (name, email, age) => {
    const [result] = await db.query(
        `INSERT INTO users (name, email, age)
         VALUES (?, ?, ?)`,
        [name, email, age]
    );

    return result.insertId;
};

const getAllUsers = async () => {
    const [rows] = await db.query(
        'SELECT * FROM users'
    );

    return rows;
};

const getUserById = async (id) => {
    const [rows] = await db.query(
        'SELECT * FROM users WHERE id = ?',
        [id]
    );

    return rows[0] || null;
};

const findByEmail = async (email) => {
    const [rows] = await db.query(
        'SELECT * FROM users WHERE email = ?',
        [email]
    );

    return rows[0] || null;
};

const updateUser = async (id, name, email, age) => {
    const [result] = await db.query(
        `UPDATE users
         SET name = ?, email = ?, age = ?
         WHERE id = ?`,
        [name, email, age, id]
    );

    return result.affectedRows;
};

const deleteUser = async (id) => {
    const [result] = await db.query(
        'DELETE FROM users WHERE id = ?',
        [id]
    );

    return result.affectedRows;
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    findByEmail,
    updateUser,
    deleteUser
};