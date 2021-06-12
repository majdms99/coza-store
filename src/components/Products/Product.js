import React from 'react'
import {Link} from 'react-router-dom'
import './Product.css'
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
const Product = (props) => {
  
        const {product, addToCart} = props;
    return (
       
        <div className='col-lg-3 col-md-4 col-sm-6'>
            <Bounce left cascade>
                <div className='img-box'>
                    <Link to={`/detail/${product.id}`}>
                    <Slide left cascade> <div className='box-img'>
                            <img src={product.img} alt={product.title}/>
                            </div>
                            </Slide>
                            </Link>
                            <div className='text-box'>
                                <h5>{product.title}</h5>
                                <span>${product.price}</span>
                                <button className='pay' onClick={addToCart}>Add To Cart<i class="fas fa-shopping-cart"></i></button>
                            </div>
                </div>
             </Bounce>
        </div>
    )
}

export default Product
