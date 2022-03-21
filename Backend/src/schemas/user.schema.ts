import { object, string, TypeOf } from 'zod';

const createUserSchema = object({
    body: object({
        name: string({
            required_error: 'Name is required.'
        }),

        password: string({
            required_error: 'Password is required'
        }).min(6, 'Password should be at least 6 characters long.'),

        passwordConfirmation: string({
            required_error: 'Password confirmation is required.'
        }),

        email: string({
            required_error: 'Email confirmation is required.'
        }).email('Invalid email.'),
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords don't match.",
        path: ["passwordConfirmation"]
    })
})

type CreateUserInput = Omit<
    TypeOf<typeof createUserSchema>, "body.passwordConfirmation"
>

export { createUserSchema, CreateUserInput }
