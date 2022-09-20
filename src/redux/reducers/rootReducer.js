import { combineReducers } from 'redux';
import { allDogBreedsReducer } from './allDogBreedsReducer';
import { breedsListReducer } from './breedsListReducere';
import { ByBreedReducer } from './byBreedReducer';
import { displayImageReducer } from './displayImageReducer';


export const reducer = combineReducers({
    dogImage: displayImageReducer,
    dogsList: breedsListReducer,
    dogsByBreed: ByBreedReducer,
    dogBreeds:allDogBreedsReducer

})
