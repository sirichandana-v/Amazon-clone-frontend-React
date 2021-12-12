export const initialState={
    basket:[],
    user:null
};

export const getBasketTotal=(basket)=>
basket?.reduce((amount,item) => parseInt(item.price)+amount,0);

function reducer(state,action){
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':{
            return {
                ...state,
                basket:[...state.basket, action.item]
            }
            break;
        }
        case 'REMOVE_FROM_BASKET':{
            console.log("hello")
            let newBasket=[...state.basket];
            const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id)
            if(index>=0)
            {
                newBasket.splice(index,1);
            }
            
            return {
                ...state,
                basket: newBasket
            }
            break;
        }
        default:
            return state;
    }
}

export default reducer;