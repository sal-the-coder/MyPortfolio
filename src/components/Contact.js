import React, { useState } from 'react'

function Form() {
  const [name, setNamme] = useState('');
  const [email, setEmail]= useState('')
  const [number, setNumber]= useState('')
  const [mesage, setMessage]= useState('')




  const validateEmail = ()=>{
    console.log(email)
  }

  return (

    <div id = 'contact' className='contact-form'>
      <h3>Contact</h3>
        <form action="https://formspree.io/f/mbjeeden"
          method="POST">
          <div>
          <label htmlFor='name'>Full Name</label>
            <input type='text' id='name' required name='fname'></input>
          </div>
          <div>
          <label htmlFor='email'>Email Address</label>
            <input onChange={(e) => setEmail(e.target.value)} onKeyUp={validateEmail()} type='email' id='email' required name='email'></input>
          </div>
            
          <div>
          <label htmlFor='number'>Cell Number</label>
            <input type='tel' id='number' name='cellphone' required ></input>
          </div>
           
           <div>
            <label htmlFor="message">Message</label>
            <textarea id='message' required></textarea>
          </div>
          <button className='contact-btn'>Submit</button>

        </form>
    </div>
  )
}

export default Form