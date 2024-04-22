import { useState } from "react"
import useConversation from "../store/useConversation";
import toast from "react-hot-toast";

const useSendMessages = () => {
    const [loading , setLoading] = useState(false) ;
    const {messages , setMessages , selectConversation} = useConversation() ;


    const sendMessages = async (message) => {
        setLoading(true) ;

        try {

            const res = await fetch (`/api/messages/send/${selectConversation._id}`, {
                method: "POST",
                headers :  {
                    'Content-Type' : 'application/json' 
                } ,
                body: JSON.stringify({message})
            })

            const data = await res.json() ;
            if (data.error) throw new Error(data.error) ;

            setMessages([...messages , data]);
            
        } catch (error) {
            toast.error(error.message);
        }
        finally {
            setLoading(false) ;
        }
    }

    return {loading , sendMessages}
}

export default useSendMessages
