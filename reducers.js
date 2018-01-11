import { FETCH } from "./actions";
import { SWITCH_PAGES } from "./actions";
import { GET_ID } from "./actions";
import { DETAIL_SCREEN} from "./screens";

export default function restaurants(state, action) {

    let newState = Object.assign({}, state);

    switch(action.type) {

        case FETCH:
            let info = action.info;
            newState = Object.assign({}, state, {info: info});
            break;

        case SWITCH_PAGES:
            newState = Object.assign({},newState, {page: action.page});
            console.log(state);
            break;

        case GET_ID:
            newState = Object.assign({}, getId(newState, action.id));
            break;

        default:
            return state;
    }
    return Object.assign({}, state, newState);
}

function getId(newState, id){
    newState.page = DETAIL_SCREEN;
    newState.selectedItem = newState.info.find(item => item.id === id);
    return newState;
}