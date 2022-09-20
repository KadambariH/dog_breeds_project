import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getListDetails } from '../../redux/actions/breedsListAction';

const DogsList = () => {

  const dispatch = useDispatch();

  const { isLoading, list, error } = useSelector(state => state.dogsList)
  const [value, setValue] = useState();

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <input type={"text"} onChange={handleChange} value={value} />
      <button onClick={() => dispatch(getListDetails(value))}>Fetch</button>
      <img src={list.message} alt='dog' />
    </div>
  )

}

export default DogsList;

