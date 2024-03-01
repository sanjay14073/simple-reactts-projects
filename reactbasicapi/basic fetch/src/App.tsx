import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
async function getRandomQuote():Promise<string>{
  let api:string="";
  let responsed:any;
  let responsejson:any;
  try{
  responsed=await fetch(
    "https://api.quotable.io/quotes/random?maxlength=80"
  )
  responsejson=await responsed.json();
  console.log(responsejson);
  api=responsejson[0]['content']
  }catch(e){
    console.log(e)
    api="something went wrong";
  }
  //api="";
 // console.log(api)
  return api;
}
function App() {
  let [content,setcontent]=useState("");
  useEffect(()=>{
  getRandomQuote().then((st:any)=>{setcontent(st)})
  },[])
  function genNewQuote() {
    getRandomQuote().then((st:any)=>{setcontent(st)})
  }
  return (
   <div>
    <h2>Hey ! Here is your Motivation dose</h2>
    <div className="content">
    <h4>{content}</h4>
    <button onClick={()=>{genNewQuote()}}>Generate new Quote.</button>
    </div>
    
   </div>
  )
}

export default App
