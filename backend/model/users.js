import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    type: { type: String, enum: ['SELLER', 'CUSTOMER', 'SERVICE'] },
    name: { type: String },
    email: { type: String ,unique:true },
    history:{  type: Array, default: []}
}
);
const User = mongoose.model('User', userSchema, 'users');
export default User;