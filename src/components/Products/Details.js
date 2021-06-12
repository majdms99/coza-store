import {useEffect} from 'react'
import './Details.css';
import {useParams, Link} from 'react-router-dom'
// import {ProductInfo} from '../Data/ProductInfo'
import{connect} from 'react-redux'
import { getItems } from '../redux/actions/itemAction'

const Details = (props) => {

    useEffect(() => {
        const getItems = props.getItems;
        getItems();
         
      }, [props.getItems])

    const {id} = useParams();

    let detailsProduct = props.item.items.find(item => item.id===parseInt(id));
    console.log(id)
    return (
        <div className='details'>
            <div className='container'>
                <div className='row body'>
                    <h3 className='det-title'>Product Details</h3>
                    <div className='col-lg-4 col-md-12 '>
                        <div className='det-img'>
                         <img src={`/${detailsProduct.img}`} alt={detailsProduct.title}/>
                        </div>
                    </div>
                    <div className='col-lg-8 col-md-12'>
                        <div className='det-text'>
                            <h4>{`${detailsProduct.title}`}</h4>
                            <p>{`${detailsProduct.details}`}</p>
                            <hr/>
                            <span>Price: ${`${detailsProduct.price}`}</span>
                            <Link to='/shop'><button>Back to Products</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
const mapStateToProps= (state) => ({
    item:state.item
})

export default connect(mapStateToProps, {getItems})(Details)
