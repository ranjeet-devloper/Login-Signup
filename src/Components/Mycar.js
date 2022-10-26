import { useContext, useEffect, useState } from "react";
 import A from './A';
import userContext from './Mycontext';

export default function Mycars(){
//    console.log(props);
   
   const props=useContext(userContext);
   console.log(props)

   const [mytext,setMyText]=useState("");
   useEffect(()=>{
     console.log("component did mount");
   },[])
   return <>
   <h1>Welcome to new Components</h1>
   <button onClick={()=>{
    if(mytext!=="hello")
    setMyText("hello");
    else
    setMyText("hiii");
   }}>change my text</button>
     <h1>{mytext}</h1>
      <A name={props.car00.name} model={props.car00.model}
      price={props.car00.price}/> 
   </>
}