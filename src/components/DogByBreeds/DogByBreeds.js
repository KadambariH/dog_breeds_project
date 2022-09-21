import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDogBreeds } from '../../redux/actions/byBreedsActions';


const DogByBreeds = () => {

    const dispatch = useDispatch();
    const { isLoading, dogBreeds, error } = useSelector(state => state.dogsByBreed);
    const {message} = dogBreeds;
    const [count, setCount ] = useState(12)

    useEffect(() => {
        dispatch(getAllDogBreeds())
    }, [])

    function showDogBreeds(msg, count)
{
    // return msg.filter((item, i) => i <= 11 ).map((item, i) => <img src={item} key={i} />)
    return msg.slice(0 , count).map((item, i) => <img src={item} key={i} />)
}
 
return (
        <div>
        {message?.length > 0 && showDogBreeds(message, count)}
        <button onClick={() => setCount(count + 12)} >Load More</button>
        </div>

    )
}  

export default DogByBreeds


// let breeds = msg.slice(0,12);
//     console.log(breeds)
//     let values = msg.map((item, i) => {item}

// let breeds = msg.map((item, index) => {
    //     if (index < 12) {
    //       return item;

    //     }
    // }
    // )

// const numbers = [1, 2, 3, 4];
    // const filteredNumbers = numbers.map((num, index) => {
    //   if (index < 3) {
    //     return num;
    //   }
    // });
    
 // for (let i = 0; i < message.length; i++) {
    //     console.log(message[i])
    // }

            // console.log(message)


    // function showDogBreeds(){
    //     let i;
    //     let arr = [];
    //     for(i=0; i<12; i++){
    //        arr.push(message);
    //        console.log(arr)
    //     }
    // }

    // function showDogBreeds(arr){
    //        return arr.map((item, i) => item )
    //         // console.log(item);

    // }  