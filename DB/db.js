import mongoose from 'mongoose';

const Connection = async () => {
    try {
        await mongoose.connect("mongodb+srv://shubhamrajput252000:Shubham252000@cluster0.h2k9o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("DB connected successfully")
    } catch (error) {
        console.log("Error while connecting DB", error)
    }
}

export default Connection;