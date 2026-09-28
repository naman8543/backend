const userRepository = require('../repositories/userRepository');

// CREATE USER
const createUser = async (userData) => {
    const { name, email, age } = userData;

    const existingUser = await userRepository.findByEmail(email);

    if (existingUser) {
        throw new Error('User with this email already exists');
    }

    const userId = await userRepository.createUser(
        name,
        email,
        age
    );

    return userId;
};


// GET ALL USERS
const getAllUsers = async () => {
    return await userRepository.getAllUsers();
};


// GET USER BY ID
const getUserById = async (id) => {
    const user = await userRepository.getUserById(id);

    if (!user) {
        throw new Error('User not found');
    }

    return user;
};


// UPDATE USER
const updateUser = async (id, userData) => {
    const { name, email, age } = userData;

    const existingUser = await userRepository.getUserById(id);

    if (!existingUser) {
        throw new Error('User not found');
    }

    return await userRepository.updateUser(
        id,
        name,
        email,
        age
    );
};


// DELETE USER
const deleteUser = async (id) => {
    const existingUser = await userRepository.getUserById(id);

    if (!existingUser) {
        throw new Error('User not found');
    }

    return await userRepository.deleteUser(id);
};


module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};