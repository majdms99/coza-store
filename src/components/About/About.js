import React from 'react';
import AboutHeader from './AboutHeader';
import Img_1 from './ab1.jpg'
import Img_2 from './ab2.jpg'
import './About.css'
import Zoom from 'react-reveal/Zoom';
const About = () => {
    return (
        <>
            <AboutHeader/>
            <div className='about'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8 about-text'>
                        <Zoom right cascade>
                            <h4 className='about-h'>Our Story</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.</p>
                            <br/>
                            <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                        </Zoom>
                        </div>
                        <div className=' col-md-4'>
                        <Zoom right cascade>
                            <div className='about-img'>
                            <img src={Img_1} alt='about-img'/>
                            </div>
                            </Zoom>
                        </div>
                        <br/>
                        <br/>
                        <div className=' col-md-4'>
                        <Zoom right cascade>
                            <div className='about-img'>
                            <img src={Img_2} alt='about-img'/>
                            </div>
                            </Zoom>
                        </div>
                        <div className='col-md-8 about-text'>
                        <Zoom right cascade>
                            <h4 className='about-h'>Our Mission</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.</p>
                            <br/>
                            <p>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.- Steve Job’s</p>
                        </Zoom>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
