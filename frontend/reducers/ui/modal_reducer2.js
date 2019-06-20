import { OPEN_MODAL2, CLOSE_MODAL2 } from '../../actions/modal_actions';



const modalReducer2 = (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case OPEN_MODAL2:
            return action.modal;
        case CLOSE_MODAL2:
            return null;
        default: return state;
    }
};

export default modalReducer2;