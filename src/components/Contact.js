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
          method="POST" className='form-group'>
          <div>
          <label htmlFor='name'>Full Name <span className='star'>*</span></label>
            <input type='text' id='name' required name='fname' className='form-control'></input>
          </div>
          <div>
          <label htmlFor='email'>Email Address <span className='star'>*</span></label>
            <input onChange={(e) => setEmail(e.target.value)} 
            onKeyUp={validateEmail()} 
            type='email' id='email' required name='email' className='form-control'></input>
          </div>
            
          <div>
          <label htmlFor='number'>Cell Number<span className='star'>*</span></label>
            <input type='tel' id='number' name='cellphone' required className='form-control' ></input>
          </div>
           
           <div>
            <label htmlFor="message">Message <span className='star'>*</span></label>
            <textarea id='message' required className='form-control'></textarea>
          </div>
          <button className='btn btn-primary' > Submit<span className='star'>*</span></button>

        </form>
    </div>
  )
}

export default Form