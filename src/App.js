import logo from './logo.svg';
import './App.css';
import { useEffect, useRef,useState } from 'react';
import Id from './Id';
import Button from './Button'
import Success from './Success';
import server from './server'

function App({}){

  
  const [success, setSucces] = useState(false)
  const [msg, setMsg] = useState([])


  const input_ref = useRef("")
  const scroll_ref = useRef(0)
  const nickName_ref = useRef("")

  function handleLogin(){

  server.emit('login',nickName_ref.current.value)
  setSucces(true)   
  }

    function handlesend(){
      // fetch('http://localhost:3000/login/'+input_ref.current.value)
      // .then(res=>res.json())
      // .then(data=>{
      //   console.log(data)
      // })
      if(input_ref.current.value != ""){
        let msgArray = [...msg]
        msgArray.push({level:"me", msg:input_ref.current.value})
        setMsg(msgArray)
        server.emit('send',input_ref.current.value)
      }
    }

    useEffect(()=>{
      if(scroll_ref.current){
      scroll_ref.current.scrollTop = scroll_ref.current.scrollHeight
      }
      server.on('msg',(data)=>{
        let msgArray = [...msg]
        console.log(data)
        msgArray.push(data)
        setMsg(msgArray)
      })
      if(input_ref.current){
      input_ref.current.value=""
      }
    },[msg])

  return(
      <>

          {!success ?
          
          <div className='Id'>
            <div Classname='log'>
            Id<input ref={nickName_ref}></input>
            <div><Button name={"ID"} click={handleLogin}/></div>
            </div>
          </div>    
          :
          <div className='Ct'>

            <div ref={scroll_ref} className='m'>
              {msg.map(c=>{
                return  <div className='msgBox' 
                  style={{
                    justifyContent: c.level == "sys" ? "center" :  c.level == "" ? "start" : "end"}}>
                    
                    
                  <div className={c.level == "sys" ? 'j_center' : "j"}>{c.msg}</div></div>
              }
              )}
            </div>
          
            <div>
            <input ref={input_ref}></input>
            <Button name={"전송"} click={handlesend}/>
            </div>
          </div>
          }
      </>
  )
}


export default App;