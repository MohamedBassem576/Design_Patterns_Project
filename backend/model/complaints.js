import mongoose from 'mongoose';
const { Schema } = mongoose;

const complaintSchema = new Schema({
    email: { type: String,},
    complaint: { type: String },
    response:{type:String}
}
);
const Complaint = mongoose.model('Complaint', complaintSchema,'complaints');
export default Complaint;