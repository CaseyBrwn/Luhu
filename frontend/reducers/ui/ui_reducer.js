import { combineReducers } from 'redux';
import modalReducer from "./modal_reducer";
import modalReducer2 from './modal_reducer2';


const uiReducer = combineReducers({
    modal: modalReducer,
    modal2: modalReducer2
});

export default uiReducer;