import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchPets } from '../../actions/petListActions';
import CardGrid from './components/cardGrid/CardGrid';
import LoadingSpinner from '../../components/loadingSpinner/LoadingSpinner';
import { ButtonContainer, PetsContent, PetsHeader, PetsSearch, SelectAllButton, RemoveAllButton, DownloadButton } from './styles';

function Pets() {
  const [ searchTerm, setSearchTerm] = useState('');
  const [ selectedPets, setSeletedPets] = useState([]);
  const { petList, isLoading} = useSelector(state => state.petData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPets())
  }, [dispatch])

  const selectAllPets = () => {
    setSeletedPets([petList.map(pet => pet.url)])
  }

  const deSelectAllPets = () => {
    setSeletedPets([]);
  }

  const downloadSelectedPets = () => {

  }

  return (
      <PetsContent>
        <PetsHeader>Meet Our Pets</PetsHeader>
        <PetsSearch type='text' placeholder='Enter Pet Name or Description' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <ButtonContainer>
          <SelectAllButton onClick={() => selectAllPets()}>Select All</SelectAllButton>
          <RemoveAllButton onClick={() => deSelectAllPets()}>Deselect All</RemoveAllButton>
          <DownloadButton onClick={() => downloadSelectedPets()}>Download Selected</DownloadButton>
        </ButtonContainer>
        { isLoading && <LoadingSpinner /> }
        { petList.length > 1 && <CardGrid petList={petList} searchTerm={searchTerm}/> }
      </PetsContent>
  )
}

export default Pets