import React, {useState} from 'react'
import microphone from '../../assests/img/microphone.png'
import "../../assests/tailwindcss.min.css"
import BackgroundBizGPT from "../../assests/img/BackgroundBizGPT.png"
export default function Chat() {
    const [chat, setChat] = useState("");
    console.log(chat)
  return (
    <>
    <div className='d-flex justify-content-center ' style={{xIndex:"1"}}>
    <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
<div style={{color:"white"}}>
        Got question about UAE's Corporate tax 
        </div>
      <h1 className="mx-auto  mt-4 max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl" style={{color:"white"}}>
        Just Ask {' '}
        <span className="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-500/60"
            preserveAspectRatio="none"
          >
            <path
              d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
            ></path>
          </svg>
          <span className="relative">BizGPT</span>
        </span>
      </h1>
      <h2 className="mx-auto mt-4 max-w-xl text-sm sm:text-white-400 text-white-500 leading-7" style={{color:"white"}}>
      BizGPT is a first All in one Business Solution Assistant Ever(Brount to you by Adam Global )
      </h2>
      <img src={BackgroundBizGPT} style={{height:"200px", width:"800px"}} />
     
    </main>
</div>

<div className='container chat'> 

  <div className='d-flex justify-content-end'>
    <div className='position-relative w-100 zIndex-1'>
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

  <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 sm:mb-0 mb-3 border-gray-700 sm:space-y-0 space-y-2">
      <div className="text-gray-500">
        Powered by{' '}
     
        xEarnDao
    
      </div>
      <div className="text-gray-500">
        Created by{' '}
     
        ktam 
     
      </div>
      <div className="flex space-x-4 pb-4 sm:pb-0">
        <a
          className="group"
          aria-label="TaxPal on Twitter"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6 fill-gray-500 group-hover:fill-gray-300"
          >
            <path
              d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84"
            ></path>
          </svg>
        </a>
        <a
          className="group"
          aria-label="TaxPal on GitHub"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6 fill-gray-500 group-hover:fill-gray-300"
          >
            <path
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
            ></path>
          </svg>
        </a>
      </div>
    </footer>
</div>
    </>
  )
}
