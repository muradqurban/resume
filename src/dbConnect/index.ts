import mongoose from "mongoose";

const connect = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection

        connection.on('connected', ()=>{
            console.log('Data baza ilə əlaqə quruldu')
        })
        
    } catch (error:any) {
        console.log('Data baza xətası baş verdi!');
        console.log(error)
    }

}


export default connect