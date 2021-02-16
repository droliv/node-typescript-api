import { Schema, model } from 'mongoose'
import UserInterface from '../interfaces/UserInterface'

const UserSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String
}, {timestamps: true})

export default model<UserInterface>('User', UserSchema)