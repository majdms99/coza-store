import {GET_ITEMS, 
    ADD_ITEM, DECRIASE_ITEM, TOGGLE_NAVBAR, 
    TOTAL_ITEM, CLOSE_NAVBAR, BANNER_CLOSE, 
    INCRIASE_ITEM, DELET_ITEM} from './types'

    ///for getting initial state 
export const getItems = () => {
    return {
        type: GET_ITEMS,
    }
}
    /// for open toggle navbar
export const toggleNavbar =()=>  dispatch=>{

    dispatch({
        type: TOGGLE_NAVBAR
    })
}
/// for close toggle navbar
export const closeNavbar =()=> dispatch => {

    dispatch({
        type: CLOSE_NAVBAR
    })
}
/// for adding item to cart
export const addCart =(id)=> dispatch=> {

    dispatch({
        type: ADD_ITEM,
        payload: id
    })    
}

export const bannerClose =()=> dispatch=> {

    dispatch({
        type: BANNER_CLOSE,
    })    
}

export const deletItem =(id)=> dispatch=> {

    dispatch({
        type: DELET_ITEM,
        payload: id
    })    
}
//inc
export const incriaseItem =(id)=> dispatch=> {

    console.log(`inc: ${id}` );
    dispatch({
        type: INCRIASE_ITEM,
        payload: id
    })    
}

export const decriaseItem =(id)=> dispatch=> {

    console.log(`inc: ${id}` );
    dispatch({
        type: DECRIASE_ITEM,
        payload: id
    })    
}

export const getTotals = ()=> dispatch=>{

    dispatch({
        type:TOTAL_ITEM,
    })

}

