import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    isTeacher: {
        type: Boolean,
        default: false
    }
}, {
    timestamp: true
})

export default mongoose.model('User', UserSchema);
