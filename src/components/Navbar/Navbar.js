import {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Navbar.css'
import {connect} from 'react-redux'
import {toggleNavbar, closeNavbar} from '../redux/actions/itemAction'

const Navbar = (props) => {

    // const [click, setClick] = useState(false);
    const [fixed, setFixed] = useState(false);

    // const changeClick =  () => {
    //     setClick(!click)
    // }

    const changeBackGround = () => {
        if(window.scrollY >= 30){
            setFixed(true)
        }
        else {
            setFixed(false)
        }
    }
    window.addEventListener('scroll', changeBackGround);

    return (
        <div className={fixed? 'nav-bar fixed' : 'nav-bar'}>
            <div className='container'>
                <div className='lef'>
                     <div className='logo'>
                        <h3><span>COZA STORE</span>.</h3>
                      </div>
                      <div className='links'>
                    <ul className={props.item.isOpen? 'nav-ul active' : 'nav-ul'} onClick={props.closeNavbar}>
                        <li className='nav-link'><NavLink exact to = "/">Home</NavLink></li>
                        <li className='nav-link'><NavLink to = "/shop">Shope</NavLink></li>
                        <li className='nav-link'><NavLink to = "/blog">Blog</NavLink></li>
                        <li className='nav-link'><NavLink to = "/about">About</NavLink></li>
                        <li className='nav-link'><NavLink to = "/contact">Contact</NavLink></li>
                    </ul>
                </div>
                </div>
             
               
                <div className='icon-shop'>
                <div className='nav-icon' onClick={props.toggleNavbar}>
                    {props.item.isOpen?<i class="fas fa-times"></i> : <i class="fas fa-bars"></i>}
                </div>
                    <div className='shope'>
               <Link to='/cart'> <i class="fas fa-shopping-cart"></i></Link>
                <span className='red'>{props.item.cart.length}</span>
                </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => ({
    item: state.item,
})

export default connect(mapStateToProps,{toggleNavbar, closeNavbar})(Navbar)
