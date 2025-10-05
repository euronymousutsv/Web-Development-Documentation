import React,{useState} from "react";
const Result =()=>{
    const [status,setStatus] = useState("Not Delivered");
    return(
        <>
        <h1>The package is:{status}</h1>
        <button onClick={()=>{setStatus("Delivered")}}></button>
        </> 
    )
}
export default Result 
