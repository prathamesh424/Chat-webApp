
import { useEffect } from 'react';
import {useSocketContext} from '../context/socketContext';
import useConversation from '../store/useConversation'

// import musicName from "../assets/sound/____"


const useListenMessages = () => {
    const {socket} = useSocketContext();
    const {messages , setMessages}  = useConversation();

    useEffect(() => {
        socket?.on("newMessages" , (newMessage) => {
            newMessage.shouldShake = true ;
            /*
                const sound = new Audio(musicName) ;
                sound.play() ;
             */
            setMessages([...messages , newMessage]);
        });

        return () => socket?.off("newMessage") ;
    }, [socket , setMessages , messages]) ;
}

export default useListenMessages
