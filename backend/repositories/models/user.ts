import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    cpm: {
        type: Number,
        default: 0
    }
})
const model = mongoose.model('User', UserSchema);
export default model