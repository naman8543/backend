const userService = require('../services/userService');
const { createUserSchema } = require('../schemas/userSchema');


// CREATE USER
const createUser = async (req, res) => {
    try {
        const validatedData = createUserSchema.parse(req.body);

        const userId = await userService.createUser(validatedData);

        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: {
                id: userId
            }
        });

    } catch (error) {

        if (error.name === 'ZodError') {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: error.issues
            });
        }

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// GET ALL USERS
const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();

        res.status(200).json({
            success: true,
            data: users
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// GET USER BY ID
const getUserById = async (req, res, next) => {
    try {

        throw new Error('Testing error handling');

    } catch (error) {
        next(error);
    }
};


// UPDATE USER
const updateUser = async (req, res) => {
    try {
        await userService.updateUser(
            req.params.id,
            req.body
        );

        res.status(200).json({
            success: true,
            message: 'User updated successfully'
        });

    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
};


// DELETE USER
const deleteUser = async (req, res) => {
    try {
        await userService.deleteUser(req.params.id);

        res.status(200).json({
            success: true,
            message: 'User deleted successfully'
        });

    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
};


module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};