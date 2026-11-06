import { useRef, useState } from 'react';
 
import './App.css'
function App() {
  const [name,setName] = useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState(""); 
  const [password,setPassword]=useState("");
  const [confirmpass,setConfirmpass]=useState("");
  const Emailpattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [checkpoint,setcheckpoint]=useState(false);
  const handle=(e)=>{
   let element=document.getElementById("result");
  e.preventDefault();
    if(name.trim()===""){
      element.innerText="invalid name";
      element.style.color="red";
       
    }
    else if(!Emailpattern.test(email) || email.trim()=="") 
      {
      element.innerText="invalid email id";
      element.style.color="red";
       
    }
    else if(phone.trim()===""){
      element.innerText="phone number is empty";
      element.style.color="red";

    }
    else if(password.length < 8 ||password.trim()===""){
      if(password.trim()===""){
      element.innerText='password is empty'
      element.style.color="red"; 
      element.style.alignSelf="center";
      }
      else{
      element.innerText='password must contain atleast 8 charector'
      element.style.color="red"; 
      element.style.alignSelf="center";
    }
      
    }
    else if(password!=confirmpass){
      element.innerText="password & confirmpass word not match"
      element.style.color="red"; 
      element.style.alignSelf="center";
       }
    else{
     console.log("executed");
      element.innerText="register success";
       element.style.color="greenyellow";
    }
  }


  return (
     <section className="App">
      <form action="" onSubmit={handle} autoComplete='off'>
      <div className="title">
        <img src="src/assets/Logo.png" alt="Logo" /> 
      <h1>SIGN UP</h1>
      </div>

      <div className='input-field'>

        <input type="text" placeholder='Full Name' maxLength={50}  value={name} onChange={(e)=>setName(e.target.value)} autoComplete='off'/>
        <input type="text" placeholder='Email Address' value={email} onChange={(e)=>setEmail(e.target.value)} autoComplete='off'/>
        <input type="text" placeholder='Phone Number'maxLength={10} onChange={(e)=>setPhone(e.target.value)} autoComplete='off'/>
        <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} autoComplete='new-password'/>
        <input type="password" placeholder='Confirm Password'onChange={(e)=>setConfirmpass(e.target.value)} autoComplete='new-password'/>
       <div className='check-box'>
        <input type="checkbox" />
         <p>i agree to the <a href="">Terms & Conditions</a></p>
       </div>

       <button type="submit" className='reg-btn'>Registor</button>
       <div className='return-login'>
        <p>Already have an account?<a href="">Login</a></p>
       </div>
      </div>
      <h1 id='result'></h1> 
      </form>
      </section>
  )
}

export default App
