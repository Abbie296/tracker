import React from 'react'

export default function Signup() {
  return (
    <div className='form-outer'>
      <h1 className='playfair-display centre title'>Signup</h1>
      <div className='form-inner'>
        {/* Full Name - Validation - Text Only */}
        <form action="">
        <input type='text' id='username' name='username' placeholder='Full Name' required/>
        <input type='email' id='email' name='email' placeholder='Email Address' required/>
        <input type='text' id='phonenumber' name='phonenumber' placeholder='Phone Number' required/>
        <input type='number' id='age' name='age' placeholder='Age' required/>

        <input type='radio' id='male' name='sex' value='Male'/>
        <label for="male">Male</label><br></br>
        <input type='radio' id='female' name='sex' value='Female'/>
        <label for="female">Female</label><br></br>

        <input type="number" id='height' name='height' placeholder='Height in cm' required />
        <input type="weight" id='weight' name='weight' placeholder='Weight in kg' required />

        <input type="password" id='password' name='password' placeholder='Password' required />
        <input type="submit"></input>
        </form>







        {/* 

        <h2>Height</h2>

        <h2>Weight</h2>

        <h2>Password</h2> */}
      </div>
    </div>
  )
}
