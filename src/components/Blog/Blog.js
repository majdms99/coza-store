import React from 'react'
import './Blog.css'
import {BlogInfo} from '../Data/BlogInfo'
import BlogHeader from './BlogHeader'
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';
const Blog = () => {
    return (
        <>
        <BlogHeader/>
        <div className='blog'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-9'>
                        {BlogInfo.map(item=>{
                            return(
                             <Zoom left >   <div className='card-blog' key={item.id}>
                                   <div className='img'><img src={item.img} alt={item.title} /></div>
                                    <h4 className='card-blog-t'>{item.title}</h4>
                                    <p className='des-blog'>{item.des}</p>
                                    <span>{item.admin}</span>
                                </div>
                                </Zoom> 
                            )
                        })}
                    </div>
                    <div className='col-md-3 '>
                    <Rotate top left>
                        <div className='categories'>
                            <h4 className='blog-he'>Categories</h4>
                            <ul>
                                <li>Fashion</li>
                                <li>Beauty</li>
                                <li>Street Style</li>
                                <li>Life Style</li>
                                <li>DIY & Crafts</li>
                            </ul>
                        </div>
                        <br/>
                       <hr/>
                        <div className='archive'>
                        <h4 className='blog-he'>Archive</h4>
                            <ul>
                                <li>July 2018 <span>(09)</span></li>
                                <li>June 2018 <span>(39)</span></li>
                                <li>May 2018 <span>(29)</span></li>
                                <li>April 2018 <span>(35)</span></li>
                                <li>March 2018 <span>(22)</span></li>
                                <li>February 2018 <span>(21)</span></li>
                                <li>January 2018 <span>(06)</span></li>
                                <li>Dwcember 2017 <span>(32)</span></li>
                            </ul>
                        </div>
                        <hr/>
                        <div className='tags'>
                            <h4 className='blog-he'>Archive</h4>
                            <div className='btns'>
                                <button>Fashion</button>
                                <button>LifeStyle</button>
                                <button>Denim</button>
                                <button>Streetstyle</button>
                                <button>Crafts</button>
                            </div>
                        </div>
                        </Rotate>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Blog
