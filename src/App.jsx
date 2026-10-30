import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
     <section className="App">
      <div className="title">
        <img src="src/assets/hero.png" alt="Logo" /> 
      <h1>SIGN UP</h1>
      </div>

      <div className='input-field'>

        <input type="text" placeholder='Full Name' />
        <input type="email" placeholder='Email Address' />
        <input type="tel" placeholder='Phone Number'maxLength={10} />
        <input type="password" placeholder='Password' />
        <input type="password" placeholder='Confirm Password' />
       <div className='check-box'>
        <input type="checkbox" /> <p>i agree to the <a href="">Terms & Conditions</a></p>
       </div>

       <button className='reg-btn'>Registor</button>
       <div className='return-login'>
        <p>Already have an account?<a href="">Login</a></p>
       </div>
       
        

      <div>


      </div>

      </div>
      </section>
  )
}

export default App
