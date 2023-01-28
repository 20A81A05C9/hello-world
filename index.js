import React  from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import Demo from './demo';
function Helloworld(){
    const[count,setCount]=useState(0);
    const handleClick=()=>{
        console.log("clicked...");
        setCount(count+1);
    };
    return(
        <>
        <button onClick={handleClick}>clicked{count}times</button></>
    )
    
    // return (
    //     <>
    // <h1 style={{color:"red"}}>Hello World!...</h1>
    // <Demo message="hello....."/>
    // </>
    // );

}

ReactDOM.createRoot(document.getElementById('root')).render(<Helloworld/>)
// export default Helloworld;