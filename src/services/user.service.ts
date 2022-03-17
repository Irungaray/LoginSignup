// Ext modules
import { DocumentDefinition } from "mongoose"

// Int modules
import { UserDocument, UserModel } from "../models/user.model"

const createUser = async (
    input: DocumentDefinition<
        Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">
    >
) => {
    try {
        const user = await UserModel.create(input)

        return  user
    } catch (err: any) {
        throw new Error(err)
    }
}

const validatePassword = async (
    {email, password}:{email: string, password: string}
) => {
    const user = await UserModel.findOne({ email })
    if (!user) return false

    const isValid = await user.comparePassword(password)
    if (!isValid) return false

    return user.toJSON()
}

export { createUser, validatePassword }
