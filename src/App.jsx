import { useState } from 'react';
 
import './App.css'
function App() {
  const [name,setName] = useState("");
  const [email,setEmail]=useState("");
  const [phone,setPhone]=useState(""); 
  const [password,setPassword]=useState("");
  const [confirmpass,setConfirmpass]=useState("");

  function handle(){
   if(trim(name)===""){
    setName("");

   }


  }



  return (
     <section className="App">
      <form action="" onSubmit={handle}>
      <div className="title">
        <img src="src/assets/Logo.png" alt="Logo" /> 
      <h1>SIGN UP</h1>
      </div>

      <div className='input-field'>

        <input type="text" placeholder='Full Name' maxLength={50}  value={name} onChange={(e)=>setName(e.target.value)} required/>
        <input type="email" placeholder='Email Address' />
        <input type="tel" placeholder='Phone Number'maxLength={10} />
        <input type="password" placeholder='Password' />
        <input type="password" placeholder='Confirm Password' />
       <div className='check-box'>
        <input type="checkbox" /> <p>i agree to the <a href="">Terms & Conditions</a></p>
       </div>

       <button type="submit" className='reg-btn'>Registor</button>
       <div className='return-login'>
        <p>Already have an account?<a href="">Login</a></p>
       </div>
       
        

      <div>


      </div>

      </div>
      </form>
      </section>
  )
}

export default App
