import { CategoryType } from "../types/type"
import { popularProducts } from "../data/db"

export type typeReducer = 
    {type: 'add-to-bag', payload: {item: CategoryType}}


export type productReducer = {
    data: CategoryType[]
}    

export const stateProductReducer : productReducer = {
    data: popularProducts
}

export const initialBag = (
    state: productReducer = stateProductReducer,
    action: typeReducer
) => {

    if(action.type === 'add-to-bag') {
        console.log('Add-to-bag works')
        return {...state}
    }

    return state




}

