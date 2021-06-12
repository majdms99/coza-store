import React from 'react';
import ContactHeader from './ContactHeader';
import Slide from 'react-reveal/Slide';
import './Contact.css'
const Contact = () => {
    return (
        <>
        <ContactHeader/>
            <div className='contact'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 br'>
                        <Slide right cascade>
                            <div className='msg-box'>
                                <h4>Send Us A Message</h4>
                                <form>
                                    <input className='input' type='email' placeholder='Your Emai Address'/>
                                    <textarea className='input' placeholder='How Can We Help?'/>
                                    <button className='sub'>SUBMIT</button>
                                </form>
                            </div>
                            </Slide>
                        </div>
                        <div className='col-md-6 br'>
                        <Slide left cascade>
                            <div className='cot-box'>
                                <h5 className='con-he'><i class="fas fa-map-marker-alt"></i>Address</h5>
                                <p>Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
                                <h5 className='con-he'><i class="fas fa-phone-alt"></i>Lets Talk</h5>
                                <p className='hov'>+18001236879</p>
                                <h5 className='con-he'><i class="fas fa-envelope"></i>Sale Support</h5>
                                <p className='hov'>contact@example.com</p>
                            </div>
                            </Slide>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
