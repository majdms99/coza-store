import {GET_ITEMS, 
    ADD_ITEM, DECRIASE_ITEM, TOGGLE_NAVBAR, 
    TOTAL_ITEM, CLOSE_NAVBAR, BANNER_CLOSE, 
    INCRIASE_ITEM, DELET_ITEM} from '../actions/types'


const initilState = {
    items:[
        {
            id:1,
            title:"Esprit Ruffle Shirt",
            img: "./image/p1.jpg",
            price: 16.64,
            details:'Nike air max 2020 is the newest trend and design from the company with best materials.It provides the best feeling for your foots and and your health',
            count:1,
            isInCart:false
        },
        {
            id:2,
            title:"Herschel supply",
            img: "./image/p2.jpg",
            price: 35.31,
            details:'Nike air max 2020 is the newest trend and design from the company with best materials.It provides the best feeling for your foots and and your health',
            count:1,
            isInCart:false
        },
        {
            id:3,
            title:"Only Check Trouser",
            img: "./image/p3.jpg",
            price: 25.50,
            details:'Nike air max 2020 is the newest trend and design from the company with best materials.It provides the best feeling for your foots and and your health',
            count:1,
            isInCart:false
        },
        {
            id:4,
            title:"Classic Trench Coat",
            img: "./image/p4.jpg",
            price: 75.00,
            details:'Nike air max 2020 is the newest trend and design from the company with best materials.It provides the best feeling for your foots and and your health',
            count:1,
            isInCart:false
        },
        {
            id:5,
            title:"Front Pocket Jumper",
            img: "./image/p5.jpg",
            price: 34.75,
            details:'Nike air max 2020 is the newest trend and design from the company with best materials.It provides the best feeling for your foots and and your health',
            count:1,
            isInCart:false
        },
        {
            id:6,
            title:"Vintage Inspired Classic",
            img: "./image/p6.jpg",
            price: 93.20,
            details:'Nike air max 2020 is the newest trend and design from the company with best materials.It provides the best feeling for your foots and and your health',
            count:1,
            isInCart:false
        },
        {
            id:7,
            title:"Shirt in Stretch Cotton",
            img: "./image/p7.jpg",
            price: 52.64,
            details:'Nike air max 2020 is the newest trend and design from the company with best materials.It provides the best feeling for your foots and and your health',
            count:1,
            isInCart:false
        },
        {
            id:8,
            title:"Pieces Metallic Printed",
            img: "./image/p1.jpg",
            price: 18.96,
            details:'Nike air max 2020 is the newest trend and design from the company with best materials.It provides the best feeling for your foots and and your health',
            count:1,
            isInCart:false
        },
        {
            id:9,
            title:"Converse All Star Hi Plimsolls",
            img: "./image/p9.jpg",
            price: 75.00,
            details:'Nike air max 2020 is the newest trend and design from the company with best materials.It provides the best feeling for your foots and and your health',
            count:1,
            isInCart:false
        },
        {
            id:10,
            title:"Femme T-Shirt In Stripe",
            img: "./image/p10.jpg",
            price: 25.85,
            details:'Nike air max 2020 is the newest trend and design from the company with best materials.It provides the best feeling for your foots and and your health',
            count:1,
            isInCart:false
        },
        {
            id:11,
            title:"Herschel supply",
            img: "./image/p11.jpg",
            price: 63.16,
            details:'Nike air max 2020 is the newest trend and design from the company with best materials.It provides the best feeling for your foots and and your health',
            count:1,
            isInCart:false
        },
        {
            id:12,
            title:"Herschel supply",
            img: "./image/p12.jpg",
            price: 22.96,
            details:'Nike air max 2020 is the newest trend and design from the company with best materials.It provides the best feeling for your foots and and your health',
            count:1,
            isInCart:false
        },
        {
            id:13,
            title:"T-Shirt with Sleeve",
            img: "./image/p13.jpg",
            price: 225.00,
            details:'Nike air max 2020 is the newest trend and design from the company with best materials.It provides the best feeling for your foots and and your health',
            count:1,
            isInCart:false
        },
        {
            id:14,
            title:"Pretty Little Thing",
            img: "./image/p14.jpg",
            price: 54.79,
            details:'Nike air max 2020 is the newest trend and design from the company with best materials.It provides the best feeling for your foots and and your health',
            count:1,
            isInCart:false
        },
        {
            id:15,
            title:"Mini Silver Mesh Watch",
            img: "./image/p15.jpg",
            price: 86.58,
            details:'Nike air max 2020 is the newest trend and design from the company with best materials.It provides the best feeling for your foots and and your health',
            count:1,
            isInCart:false
        },
        {
            id:16,
            title:"Square Neck Back",
            img: "./image/p16.jpg",
            price: 29.96,
            details:'Nike air max 2020 is the newest trend and design from the company with best materials.It provides the best feeling for your foots and and your health',
            count:1,
            isInCart:false
        },
    ],
    cart: [],
    isOpen: false,
    total: 0,
    shoping: 10
}

const Todos = (state= initilState, action) => {

    switch(action.type){
///grt initial state
        case GET_ITEMS:
            return{
                ...state
            }

// toggle navigation == open
        case TOGGLE_NAVBAR:
            return{
                ...state,
                isOpen: !state.isOpen
            }
// toggle navigation == close
        case CLOSE_NAVBAR:
           if(state.isOpen === true){
               return{
                   ...state,
                   isOpen: false
               }
           }
           break;
//adding item to cart
case ADD_ITEM:

    let check =state.cart.find(item=>item.id===action.payload);
   
    if(!check){
        // bringing only the ites that match the id
        let items = state.items.filter(item=>item.id===action.payload);
        let itemsCart = [...state.cart, ...items]

        return{
            ...state,
            cart:itemsCart
        }
    }

    else{
        let items = state.items.filter(item=>item.id===action.payload);

        items.forEach(item=>{
            item.isInCart=true
            // alert(`already in cart`)
        })

        return{
            ...state
        }
    }
        //for closing banner 
        
        case BANNER_CLOSE:
            state.items.forEach(item => {
                item.isInCart=false
            })
            return{
                ...state
            }
        ////delet item

        case DELET_ITEM:
            const filterCart = state.cart.filter(item=> item.id!==action.payload);
            return{
                ...state,
                cart: filterCart

            }

            //inc

        case INCRIASE_ITEM:
            let incResults = state.cart.map(item=>{
                if(item.id===action.payload){
                    item={
                        ...item,
                        count: item.count +1
                    }
                }
                return item
            })
            return {
                ...state,
                cart: incResults
            }
        
        case DECRIASE_ITEM:
            let deccResults = state.cart.map(item=>{
                if(item.id===action.payload){
                    item={
                        ...item,
                        count: item.count ===1? item.count=1: item.count-1
                    }
                }
                return item
            })
            return {
                ...state,
                cart: deccResults
            }
            
        case TOTAL_ITEM:
            const totals = state.cart.reduce((prev,  item)=>{
                return prev + (item.price * item.count)
            }, 0)

            return{
                ...state,
                total:totals
            }


        default:
             return state
    }
}

export default Todos;