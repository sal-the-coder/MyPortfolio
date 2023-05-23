import React from 'react'

function Form() {
  return (

    <div id = 'contact'>
      <h3>Contact</h3>
        <form >
            <label for='name'>Full Name</label>
            <input type='text' id='name'></input>

            <label for='email'>Email Address</label>
            <input type='email' id='email'></input>

            <label for='number'>Cell Number</label>
            <input type='text' id='number'></input>

            
            <label for="message">Message</label>
            <textarea id='message'></textarea>

            <button>Submit</button>

        </form>
    </div>
  )
}

export default Form