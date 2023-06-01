import React, {useState} from 'react'
import microphone from '../../assests/img/microphone.png'
export default function Chat() {
    const [chat, setChat] = useState("");
    console.log(chat)
  return (
    <>
<div className='container chat'> 

  <div className='d-flex justify-content-end'>
    <div className='position-relative w-100'>
      <input type='text' value={chat} onChange={(e) => setChat(e.target.value)} className='chatInput' placeholder='Write your message' />
    
      <div style={{
        position: "absolute",
        right: "12px",
        top: "50%",
        transform: "translateY(-50%)",
        padding: "20px",
        borderRadius: "10px", 
        backgroundColor: "black",
        color: "white",
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" style={{marginRight:"-7px", width:"23px"}} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="microphoneIcon">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
        </svg>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
