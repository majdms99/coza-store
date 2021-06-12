import React from 'react';
import './Footer.css'
import Roll from 'react-reveal/Roll';
const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-xs-12'>
                    <Roll right cascade>
                        <h5 className='f-h'>Categories</h5>
                        <ul>
                            <li>Women</li>
                            <li>Men</li>
                            <li>Shoes</li>
                            <li>Watches</li>
                        </ul>
                        </Roll>
                    </div>
                    <div className='col-lg-3 col-md-6 col-xs-12'>
                    <Roll right cascade>
                    <h5 className='f-h'>Help</h5>
                        <ul>
                            <li>Tarck Order</li>
                            <li>Returns</li>
                            <li>Shipping</li>
                            <li>FAQs</li>
                        </ul>
                        </Roll>
                    </div>
                    <div className='col-lg-3 col-md-6 col-xs-12'>
                    <Roll right cascade>
                         <h5 className='f-h'>Help</h5>
                        <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                        <div className='icons'>
                        <i class="fab fa-facebook-f"></i>                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-pinterest-p"></i>
                        </div>
                        </Roll>
                    </div>
                    <div className='col-lg-3 col-md-6 col-xs-12'>
                    <Roll right cascade>
                    <h5 className='f-h'>Newsletter</h5>
                    <form>
                        <input type='email' className='input' placeholder='email@example.com'/>
                        <button className='subsc'>SUBSCRIBE</button>
                    </form>
                    </Roll>
                    </div>
                </div>
                <br/>
                <hr/>
                <div className='copyright'>
                    <h5>Copyright ©2021 All rights reserved | This template is made with  by: Majd Mohammed Salameh</h5>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
