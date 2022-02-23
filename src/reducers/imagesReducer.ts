import {TypedUseSelectorHook, useSelector} from "react-redux";

export enum ImagesActionTypes {
    FETCH_IMAGES = "FETCH_IMAGES",
    DELETE_IMAGES = "DELETE_IMAGES",
    LIKE_IMAGES = "LIKE_IMAGES",
}

interface FetchImagesAction {
    type: ImagesActionTypes.FETCH_IMAGES;
    payload: any[]
}

interface DeleteImagesAction {
    type: ImagesActionTypes.DELETE_IMAGES
    payload: {
        id: string
    }

}

interface LikeImagesAction {
    type: ImagesActionTypes.LIKE_IMAGES
    payload: any
}


export interface ImagesState {
    imagesArray: any[any]|null|undefined
}

const defaultState = {
    imagesArray: []
}

export interface valueState {
    id: string,
    done:boolean|null,
    volumeInfo:any
}

export type Actions = FetchImagesAction | LikeImagesAction | DeleteImagesAction

export const imagesReducer = (state: ImagesState|null = defaultState, action: Actions): ImagesState => {
    switch (action.type) {


        case ImagesActionTypes.LIKE_IMAGES: {
            const itemIndex = state?.imagesArray?.findIndex(
                ({id}:any) => id === action.payload.id,
            );
            // @ts-ignore
            const item = state?.imagesArray[itemIndex];
            console.log(state?.imagesArray)

            return {
                ...state,
                imagesArray: [
                    ...state?.imagesArray?.slice(0, itemIndex),
                    {...item, done: !item.done},
                    ...state?.imagesArray?.slice(itemIndex + 1),
                ],
            };

        }
        case ImagesActionTypes.FETCH_IMAGES: {
            return {imagesArray: action.payload}
        }
        case ImagesActionTypes.DELETE_IMAGES: {
            // @ts-ignore
            return {...state,
                imagesArray: state?.imagesArray.filter(
                    ({id}: valueState) => id !== action.payload.id
                    ,
                ),
            }
        }
    }
}

export type ImageState = ReturnType<typeof imagesReducer>

export const useTypedSelector: TypedUseSelectorHook<ImageState> = useSelector