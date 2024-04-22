import React, { useEffect, useState } from 'react'
import useConversation from '../store/useConversation';
import toast from 'react-hot-toast';

const useGetMessages = () => {
    const [loading , setLoading] = useState(false) ;
    const {messages , setMessages, selectConversation} = useConversation() ;

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true) ;
            try {
                const res = await fetch(`/api/messages/${selectConversation._id}`);
                const data = res.json() ;
                if (data.error) throw new Error(data.error) ;
                setMessages(data) ;
                
            } catch (error) {
                toast.error(error.message)
            }
            finally {
                setLoading(false) 
            }
        }

        if (selectConversation?._id) getMessages();

    } , [selectConversation?._id , setMessages])

    
    return {messages , loading}
}

export default useGetMessages
