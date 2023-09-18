import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import { useState } from "react";
import { useEffect } from "react";
const wes = new WebSocket("ws://192.168.29.146:8080/websocketserver");


let a =0;
let messages =[]
function sett(message){
    messages.push(<p key={messages.length}>Me: {message}</p>)
    console.log('setting messges')
}
function call(valu){
    

}

const CompnentMethod = () => {
    console.log('render one')
    let [val2,setval2] =useState('')
    let [valu,setval]= useState('')
    let [reax , setreax] =useState('');
    useEffect(()=>{

        wes.addEventListener("message", (event) => {
            const values = event.data;
            messages.push(<p key={messages.length+1}>{values}</p>)
            setval2(`${messages.length+2}`)})
  
    }, []);
    return (
        <>
            <input type="text" id="lname" placeholder="text" onChange={(e)=>{setval(e.target.value)}}/>
            <button onClick={()=>{sett(valu)
                    wes.send(valu)  
                    setreax(`${messages.length}`)}} >continue</button>
            <div id="root2">{messages}</div>
      </>);
  }
  

const domelm = document.getElementById('root');
const root =  createRoot(domelm);

root.render(<CompnentMethod/>)
// wes.onopen = ()=>{
//     wes.send('helloworld')
// }
