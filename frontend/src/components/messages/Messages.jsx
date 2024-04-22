import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../Loaders/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  
  const { messages , loading} = useGetMessages() ;
  useListenMessages() ;
  
  const lastMessage = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessage.current?.scrollIntoView({ behavior : "smooth"});
    }, 100)
  } , [messages]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
      
      {!loading && messages.length === 0 &&
          <p className='text-center'>Send a message to Connect with peoples...</p>      
      }
      
      { !loading && 
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessage}>
            <Message message={message} />
          </div>
        ))} 

      {loading && [...Array(3)].map((_ ,idx) => <MessageSkeleton key={idx}/>)}


    </div> 
  )
}

export default Messages
