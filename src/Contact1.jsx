import React from 'react';
import './Contact1.css';

const Contact1 = () => {
    const handleSubmit = () => {
        alert('Message sent!');
    };

    return (
        <div className="contact1-section">
          <div className="contactf-content">
                    <h2>Contact <span class="spacers">Me</span></h2>
                    </div>
            <div className="contact1-container">
                <form className="contact1-form" onSubmit={handleSubmit}>
                    <label htmlFor="namet">Name:</label>
                    <input type="text" id="name" placeholder="Enter your name.." name="name" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="enter your Email@gmail.com" required />
                    <label htmlFor="message">Message:</label>
                    <textarea id="message"  name="message..." required></textarea>
                    <button type="submit" className="btns btn-primary">Send Message</button>
                </form>

            </div>

      <div class="finalf">  
        <div className="final"> Get in touch </div>
        <div className="finalicons">  
            <a href="https://github.com/harshiya4599" target="_blank" rel="noopener noreferrer">   
          <img className="iconf" src="/github (1).png" alt="GitHub" />
          </a>
           <a href="https://www.linkedin.com/in/gagguturu-harshiya-4612b72b7" target="_blank" rel="noopener noreferrer">
          <img className="iconf" src="/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
        
 </div>
 </div>
    );
}
export default Contact1;
