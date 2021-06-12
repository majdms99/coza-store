import React from 'react'
import {BodyInfo} from '../Data/BodyInfo'
import './BodyImg.css'
import Roll from 'react-reveal/Roll';
import Zoom from 'react-reveal/Zoom';
const BodyImg = () => {
    return (
        <div className='body-img'>
            <div className='container'>
                <div className='row'>
                    {BodyInfo.map(item => {
                        return(
                            <div className='col-md-4 col-xs-12 cart-img' key={item.id}>
                               
                               <Roll top cascade> <img className='img' src={item.img} alt={item.title}/></Roll>
                                <div className='overlay'></div>
                                <Zoom top cascade>
                                <div className='box-text-'>
                                    <h4>{item.title}</h4>
                                    <span>{item.des}</span>
                                </div>
                                </Zoom>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default BodyImg
