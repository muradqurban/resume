"use client"
import axios from "axios"
import { useEffect, useState } from "react"

interface messages {
    _id: string,
    name: string,
    email: string,
    subject: string,
    message:string,
    createdAt: string,
    isReaded:boolean,
    readedBy:string
}
const GetMessage = () => {
    const [messages,setMessages] = useState<messages[] | null>(null)
    const [render,setRender] = useState(true)
   


    const getMessages = async () => {
        try {
            const res = await axios.post('/api/request/read')
            setMessages(res.data.data)
            console.log(res.data.data)
        } catch (error:any) {
            console.log(error.message)            
        }
    }

    useEffect(()=>{
    getMessages()
    setRender(false)
    },[render])


    const handleDelete = async (_id: string) => {
            try {
                const res = await axios.post('/api/request/delete',{ filter:{_id} })
                console.log(res)
                
            } catch (error) {
                console.error(error)                
            } finally{ setRender(true) }
    }

    const cardStyle = "rounded-lg flex flex-col md:min-w-[300px] md:max-w-[900px]  p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
    return(
        <div className="md:mt-28 flex flex-col-2 gap-4 md:max-w-[80%] mx-auto text-black">
            {messages? <>{messages.map((item,index)=>(
                <div key={index} className={item.isReaded  ? `bg-green-300 ${cardStyle}` : `bg-indigo-200 ${cardStyle}`}>
                    <div className="">
                        <p className="italic"> <span className="font-bold not-italic px-1 border border-sky-900 bg-indigo-300">{index+1}</span> Name &#xbb; </p>
                        <p className="font-bold">{item.name}</p>
                    </div>
                    <div className="border-t-2">
                        <p className="italic">E-mail &#xbb; </p>
                        <p className="font-bold">{item.email}</p>
                    </div>
                    <div className="border-t-2">
                        <p className="italic">Subject &#xbb; </p>
                        <p className="font-bold">{item.subject}</p>
                    </div>
                    <div className="border-t-2">
                        <p className="italic">Message &#xbb; </p>
                        <p className="font-bold">{item.message}</p>
                    </div>
                    <div className="border-t-2">
                        <p className="italic">Create Time &#xbb; </p>
                        <p className="font-bold">{item.createdAt.slice(0,10)}   {item.createdAt.slice(11,15)}</p>
                    </div>
                    {item.isReaded ?
                        <div className="border-t-2">
                            <p className="italic">Readed &#xbb; </p>
                            <p className="font-bold">{item.readedBy}</p>
                        </div> : ""
                    }
                    <div className="w-full flex justify-end items-center gap-4">
                        <button onClick={()=>handleDelete(item._id)} className="bg-red-400 hover:bg-red-500 hover:text-white max-w-[70px]  rounded-xl py-1 px-2"> Delete </button>
                    </div>
                </div>

            ))}
            </> :  <div className="text-center mt-50 text-4xl"><p>Loading...</p></div> }
        </div>
    )
}

export default GetMessage