import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPets, selectAllPets, deSelectAllPets } from '../../actions/petListActions';
import CardGrid from './components/cardGrid/CardGrid';
import LoadingSpinner from '../../components/loadingSpinner/LoadingSpinner';
import { ButtonContainer, PetsContent, PetsHeader, PetsSearch, SelectAllButton, RemoveAllButton, DownloadButton } from './styles';

function Pets() {
  const [ searchTerm, setSearchTerm] = useState('');
  const { petList, selectedPetList, isLoading, error } = useSelector(state => state.petData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPets()) // fetches pet data
  }, [dispatch])

  const selectAllHandler = () => {
    dispatch(selectAllPets(selectedPetList))
  }

  const deSelectAllHandler = () => {
    dispatch(deSelectAllPets(selectedPetList))
  }

  const downloadSelectedPets = () => {
    let imageArray = selectedPetList.filter((pet) => pet.isSelected).map((pet) => pet.url)
    for (let i = 0; i < imageArray.length; i++) {
      // axios({
      //   url: `${imageArray[i]}`,
      //   method: 'GET',
      //   responseType: 'blob'
      // }).then((response) => {
      //   const url = window.URL.createObjectURL(new Blob([response.data]));
      //   const link = document.createElement('a');
      //   link.href = url;
      //   link.setAttribute('download', `image${i}.jpg`);
      //   document.body.appendChild(link);
      //   link.click();
      //   document.body.removeChild(link)
      // })
    }
    console.log('selected pet image URLs', imageArray)
  }

  return (
      <PetsContent>
        <PetsHeader>Meet Our Pets</PetsHeader>
        <PetsSearch type='text' placeholder='Enter Pet Name or Description' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <ButtonContainer>
          <SelectAllButton onClick={() => selectAllHandler()}>Select All</SelectAllButton>
          <RemoveAllButton onClick={() => deSelectAllHandler()}>Deselect All</RemoveAllButton>
          <DownloadButton onClick={() => downloadSelectedPets()}>Download Selected</DownloadButton>
        </ButtonContainer>
        { isLoading && <LoadingSpinner /> }
        { error && <h2 className='error__header'>UNABLE TO FETCH DATA!</h2> }
        { petList.length > 1 && <CardGrid petList={petList} searchTerm={searchTerm}/> }
      </PetsContent>
  )
}

export default Pets