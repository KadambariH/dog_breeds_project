import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDogBreedsList } from '../../redux/actions/dogAllBreedsActions';


const DogAllBreeds = () => {

    const dispatch = useDispatch();
    const { isLoading, dogsBreedsList, error } = useSelector(state => state.dogBreeds);
    const { message } = dogsBreedsList;



    useEffect(() => {
        dispatch(getAllDogBreedsList())
    }, [])


    function showDogBreeds(details) {
        let arr = [];
        for (let key in details) {
            if (details[key].length > 0)
                arr.push((details[key]))
        }
        return arr


    }
let test = showDogBreeds(message)
console.log(test)

    return (
        <div>
            {/* {showDogBreeds(message)} */}
            { test.map((item, i) => {
                return <li>{item}</li>
            })}
        </div>

    )
}

export default DogAllBreeds



