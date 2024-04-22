import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../store/useConversation';
import {messageTime} from '../../utils/messageTime.js'

const Message = ({message}) => {
  const {authUser} = useAuthContext() ;
  const {selectConversation} = useConversation() ;
  const me = message.senderId === authUser._id ;
  const whomChat = me ? "chat-end" : "chat-start" ;
  const profilePic = me ? authUser.profilePic : selectConversation?.profilePic  ;
  const messageBg = me ? "bg-blue-500" : "" ;
  const FormatTime = messageTime(message.createAt);
  const shake = message.shouldShake ? "shake" : "" ;  

  return (
    <div className={`chat ${whomChat}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img alt="Tailwind CSS chat bubble component" 
                src={profilePic} />
            </div>
        </div>
        <div className={`chat-bubble text-white ${messageBg} ${shake} pb-2`}>{message.message}</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{FormatTime}</div>
    </div>
  )
}
export default Message;
