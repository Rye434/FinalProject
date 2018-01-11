// actions.js
import axios from "axios/index"
import {SPINNER, LIST_SCREEN} from './screens';

export const FETCH = "FETCH";
export const GET_ID = "GET_ID";
export const SWITCH_PAGES = "SWITCH_PAGES";

export function getGeolocalizedList() {
    return (dispatch)=> {
        console.log("fetch");
        dispatch(switchPages(SPINNER));
        navigator.geolocation.getCurrentPosition(
            (position) => {
                dispatch(fetchList(position.coords.latitude, position.coords.longitude));
            },
            (error) => {
                console.log("Error", error);
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
    }
}

export function fetchList(lat, long) {
    return (dispatch) => {
        axios.get("https://api.yelp.com/v3/businesses/search?latitude="+lat+"&longitude=" + long +"&sort_by=distance",
            {headers: {"Authorization": "Bearer a8Dw8oOssAwKbGerAhMMeOlT6M-OE0MDnjGgWIE1RoPu-xwFk4rbXmFakazLYES_ce_l8SKsgtPHU3xUXDmHuR0QnlqmA5Vs2ToZQrj1YZF3zwVOU1vqFqlpWatWWnYx" }
            })
            .then(function (response) {
                let data = response.data.businesses;
                console.log(data);
                dispatch(saveData(data));
                dispatch(switchPages(LIST_SCREEN));
                console.log("List Screen")
                return data;
            })
            .catch(function (error){
            console.log(error)
        })
    }
}

export function saveData(data) {
    return{
        type: FETCH,
        info: data
    }
}

export function switchPages(page){
    return {
        type: SWITCH_PAGES,
        page: page
    }
}

export function getId(id){
    return {
        type: GET_ID,
        id: id
    }
}

export function goBack(){
    return(dispatch)=>{
        dispatch(switchPages(LIST_SCREEN));
    }
}

