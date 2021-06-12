import {useState, useEffect } from 'react'
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import Cart from './components/Carts/Cart'
import Blog from './components/Blog/Blog'
import Products from './components/Products/Products'
import Details from './components/Products/Details'
import About from './components/About/About'
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import HashLoader from 'react-spinners/HashLoader'

function App() {

  const [loading, setLoading] =useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },3500)
  }, [])

  return (
   <div>
     {
       loading? 
       <div className='spinners'>
       <HashLoader
       size={100}
       color={'#717fe0'}
       loading={loading}
       />
     </div>
       :
       <div className="App">
       <BrowserRouter basename='coza-store'>
         <Navbar/>
         <Switch>
           <Route exact path='/'component={Home}/>
           <Route path='/shop' component={Products} />
           <Route path ='/cart' component={Cart}/>
           <Route path ='/detail/:id' component={Details}/>
           <Route path ='/blog' component={Blog}/>
           <Route path ='/about' component={About}/>
           <Route path ='/contact' component={Contact}/>
         </Switch>
         <Footer/>
       </BrowserRouter>
     </div>
     }
   </div>
  );
}

export default App;
