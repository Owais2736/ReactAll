import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import ContactForm from '../../ContactForm/ContactForm'

function Contact() {
  return (
    <div>
      <Navbar/>
      <div>
          <ContactForm/>

        </div>
      <div style={{display:"flex"}}>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115843.6762329282!2d66.99503732500119!3d24.859925611869958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33bf7bf84dfab%3A0xa5a2147d4a7fe5f2!2sVIP%20Restaurant%20BBQ%20%26fast%20food!5e0!3m2!1sen!2s!4v1714858104631!5m2!1sen!2s" width="100%" height="400"></iframe>

        
      </div>
      
      <Footer />
    </div>
  )
}

export default Contact
