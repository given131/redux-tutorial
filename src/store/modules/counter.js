//building reducer for counter


// 카운터 관련 상태 로직
import { createAction, handleActions } from 'redux-actions'


const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

//not action itself, but action creator, equivalent to ones below
export const increment = () => ( { type : INCREMENT });
export const decrement = () => ( { type : DECREMENT });
// export const increment = createAction(INCREMENT);
// export const decrement = createAction(DECREMENT);


const initialState = {
    number : 0
};

//equivalent to ones below - used handleActions
export default function reducer(state=initialState, action){
    switch (action.type) {
        case INCREMENT :
            return { number : state.number+1 };
        case DECREMENT :
            return { number : state.number-1} ;
        default :
            return state;
    }
}

// 1st para =
// export default handleActions({
//     [INCREMENT] : (state, action) => {
//         return { number: state.number+1};
//     },
//     [DECREMENT]: ({number}) => ({number:number - 1}) // using destructuring assignment
// }, initialState)