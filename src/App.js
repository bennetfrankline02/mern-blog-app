// import logo from './logo.svg';
// import './App.css';



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;





// function app(){
//   return(
//     <div>
//       <h1>hello react</h1>
//       <p>react setup</p>
//     </div>
//   );
// }
// export default app;

// import Student from "./Student";
// function App(){
//   return(
//     <div>
//       <Student name="ben" course="react"/>
    
//     </div>
//   );
// }
// export default App


// import{useState} from 'react'
// function Counter(){
//   const[count,setcount]=useState(0)
//   return(
//     <div>
//       <h2>count:{count}</h2>
//       <button onClick={()=>setcount(count +1)}>+</button>
//       <button onClick={()=>setcount(count -1)}>-</button>
//     </div>
//   )
// }
// export default Counter




// import {useEffect}from 'react'
// function Message(){
//   useEffect(()=>{
//     console.log("Component Loaded")
//   },[])
//   return <h2>april fool </h2>
// }
// export default Message;







// import {useRef} from "react";
// function FocusInput(){
//   const inputRef=useRef(null);
//   const handlefocus=()=>{
//     inputRef.current.focus();
//     };
//     return(
//       <div>
//         <input ref={inputRef} type="text"/>
//         <button onClick={handlefocus}>focus input</button>
//       </div>
//     );
// }
// export default FocusInput;











// code--fetch api 

// import react,{useEffect,useState}from "react";
// function FetchUsers(){
//   const [users,setUsers]=useState([]);
//   useEffect(()=>{
//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res)=>res.json())
//   .then((data)=>setUsers(data))
//   .catch((error)=>console.log(error));
// },[]);
// return(
//   <div>
//     <h2>Users(Fetch API)</h2>
//     <ul>
//       {users.map((user)=>(
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   </div>
// );
// }
// export default FetchUsers;




// axios code
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function AxiosUsers() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => setUsers(response.data))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div>
//       <h2>Users (Axios)</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default AxiosUsers;





// import Navbar from "./components/Navbar";
// import Dashboard from "./components/Dashboard";
// import Profile from "./components/Profile";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Dashboard />
//       <Profile />
//     </>
//   );
// }

// export default App;





const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello from Node Server");
  res.end();
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

