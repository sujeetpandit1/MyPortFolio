import './ContactStyle.css'
import React from 'react'

const ContactDetail = () => {
  return (
    <div className='container'>
    <h3>Let's Have Chat !</h3>
	<form action="#" name="contact_form">
		<label for="first_name">First Name</label>
		<input name="first_name" type="text" required placeholder="John"/>
		<br/>
		<label for="last_name">Last Name</label>
		<input name="last_name" type="text" required placeholder="Doe"/>
		<br/>
		<label for="email">Email</label>
		<input name="email" type="email" required placeholder="you@domain.com"/>
		<br/>
		<label for="message">Message</label><br/>
		<textarea name="message" cols="30" rows="10" placeholder="Enter your message here ..." required> </textarea>
		<div class="center">
		<input type="submit" value="Submit" />
		</div>
	</form>	
    </div>
  )
}

export default ContactDetail
