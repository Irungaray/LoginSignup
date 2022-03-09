// Ext modules
import { DocumentDefinition } from "mongoose"

// Int modules
import { UserDocument, UserModel } from "../models/user/user.model"

const createUser = async (
    input: DocumentDefinition<
        Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">
    >
) => {
    try {
        return await UserModel.create(input)
    } catch (err: any) {
        throw new Error(err)
    }
}

export { createUser }
