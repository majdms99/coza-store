import {useEffect} from 'react'
import './Cart.css'
import {connect} from 'react-redux'
import {deletItem, incriaseItem,decriaseItem,getTotals} from '../redux/actions/itemAction'
import Slide from 'react-reveal/Slide';
const Cart = (props) => {


    const {cart} = props.item;

    useEffect(() => {
        const getTotals = props.getTotals;
        getTotals();
    },[props.getTotals])

    return (
        <div className='cart'>
            <div className='container'>
               {cart.length ===0 ?
                <>
                    <h3 className='cart-not-found'>Cart is currently empty</h3>
                </>
                :
                <>
                     {cart.map(cart => {
                    return(
                        <Slide right cascade>
                        <div className='cart-all'>
                    <div className='cart-imag'>
                        <img src={cart.img} alt='product'/>
                    </div>
                    <div className='cart-title'>
                        <h4>{cart.title}</h4>
                    </div>
                    <div className='cart-conter'>
                        <button className='dec'onClick={()=>{
                            props.decriaseItem(cart.id);
                            props.getTotals();
                            }}>-</button>
                        <span className='number-'>{cart.count}</span>
                        <button className='inc' onClick={()=>{
                            props.incriaseItem(cart.id);
                            props.getTotals();}}>+</button>
                    </div>
                    <div className='cart-price'>
                        <span className='c-prics'>${Math.ceil(cart.price * cart.count)}</span>
                    </div>
                    <div className='cart-delet' onClick={()=>{
                        props.deletItem(cart.id);
                        props.getTotals();
                    }}>
                    <i class="far fa-trash-alt"></i>
                    </div>
                </div> 
                </Slide>
                    )
                })}
                </>
               }
               <hr/>
               <div className='total'>
                   <span className='am-total'>Total Price: ${Math.ceil(props.item.total)}</span>
               </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    item: state.item
})

export default connect(mapStateToProps, {deletItem, incriaseItem,decriaseItem,getTotals})(Cart);
