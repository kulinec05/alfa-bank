import {Dispatch} from "redux";

import {Actions, ImagesActionTypes} from "../reducers/imagesReducer";

const fetchImages = () => {
return (dispatch:Dispatch<Actions>)=>{
    fetch('https://www.googleapis.com/books/v1/volumes?q=js&maxResults=20')
        .then(res => res.json())
        .then(data => {
            dispatch({type: ImagesActionTypes.FETCH_IMAGES, payload: data.items})
        })

}

};

export default fetchImages;