const {z} = require('zod');

const createUserSchema = z.object({
    name: z 
    .string()
    .min(2,'Name must be at least 2 characters')
    .max(100,'Name must be not exceed by 100 characters'),

    email:z
    .string()
    .email('Invalid email address'),
        age: z
        .number()
        .int('Age must be a whole number')
        .min(1, 'Age must be at least 1')
        .max(120, 'Age must not exceed 120')
});

module.exports = {
    createUserSchema
};
