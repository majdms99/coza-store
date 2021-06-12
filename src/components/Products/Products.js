import { useEffect} from 'react'
import Product from './Product'
import Bounce from 'react-reveal/Bounce';
import './Product.css'
import {connect} from 'react-redux'
import { getItems, addCart } from '../redux/actions/itemAction'

const Products = (props) => {

    // const [state, setState] = useState(ProductInfo);
  useEffect(() => {
      const getItems = props.getItems;
    getItems();
     
  },[props.getItems])

  const addToCart=(id)=>{
      props.addCart(id);
      
  }


  const {items} = props.item
//   console.log(items);
  
    return (
        <div className='products'>
            <div className='container'>
                <div className='product row'>
                <Bounce top cascade><h3 className='title'>PRODUCT OVERVIEW</h3></Bounce>
                    {items.map(product => <Product key={product.id} product={product} addToCart={()=>addToCart(product.id)} isInCart={product.isInCart}/>)}
                </div>
            </div>
        </div>
    )
}

const mspStateToProps = (state) => ({
    item:state.item
})

export default connect (mspStateToProps, {getItems, addCart}) (Products)
