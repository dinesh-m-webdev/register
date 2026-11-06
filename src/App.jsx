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
  const element=document.getElementById("result");
  e.preventDefault();
    if(name.trim()===""){
      element.innerText="name is empty";
      element.style.color="red";
       
    }
    else if(!Emailpattern.test(email) || email.trim()=="") 
      {
        if(email.trim()==""){
          element.innerText="please enter email id";
          element.style.color="red";
        }
        else{
        element.innerText="invalid email id";
      element.style.color="red";
        }
      
       
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
      element.style.justifySelf="center";
    }
      
    }
    else if(password!=confirmpass){
      element.innerText="password & confirmpass word not match"
      element.style.color="red"; 
      element.style.justifySelf="center";
       }
       else if(checkpoint===false){
         element.innerText="please read & mark the term & conditions"
      element.style.color="red"; 
      element.style.justifySelf="center";
       }
    else{
     console.log("executed");
      element.innerText="register success";
       element.style.color="greenyellow";
       element.style.justifySelf="center";
       console.log(checkpoint);
    }
  }
  const handleChange = (e) => {
  const value = e.target.value;

  if (/^[0-9]*$/.test(value)) {
    setPhone(value);
  }
};
  


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
        <input type="text" placeholder='Phone Number'maxLength={10} value={phone} onChange={handleChange} autoComplete='off'/>
        <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} autoComplete='new-password'/>
        <input type="password" placeholder='Confirm Password'onChange={(e)=>/^[0-9]*$/.test(e.target.value)?setConfirmpass(e.target.value):null} autoComplete='new-password'/>
       <div className='check-box' >
        <input type="checkbox" checked={checkpoint} onChange={(e)=>setcheckpoint(!checkpoint)}/>
         <p>i agree to the <a href='' >Terms & Conditions</a></p>
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
