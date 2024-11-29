import React from 'react'
import { useState } from 'react'
import './Contacts.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contacts = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        // putting our api key over here
        formData.append("access_key", "304e9da5-f3f4-4f5b-8f5f-d58e721311e7");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            // this is here for resetting the data in the form 
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message. <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, question, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li><img src={mail_icon} alt="" />Contact@divyanshgarg515@gmail.com</li>
                    <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
                    <li><img src={location_icon} alt="" />Gorakhpur , MMMUT engineering college <br /> INDIA</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name='name' placeholder='Enter Your Name' required />
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required />
                    <label>Write Your Message Here</label>
                    <textarea name="message" rows="6" placeholder='Enter Your Text' required></textarea>
                    <button type='submit' className='btn dark_btn'>Submit Now <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contacts