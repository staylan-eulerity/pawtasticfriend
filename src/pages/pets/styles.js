import styled from 'styled-components';
import { Button } from '../../components/buttons/buttonStyles';

export const PetsContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .error__header {
        margin-top: 20px;
        color: white;
    }
`

export const PetsHeader = styled.h1`
    color: white;
    font-size: 3.5rem;
    margin-top: 50px;
    margin-bottom: 30px;
`

export const PetsSearch = styled.input`
    padding: 0.7rem;
    font-size: 1rem;
    width: 450px;
    height: 30px;
    border: 2px solid black;
    border-radius: 4px;
    margin-bottom: 20px;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 600px;
    justify-content: space-evenly;
    margin-bottom: 10px;
`

export const SelectAllButton = styled(Button)`
    background-color: orange;
    color: white;
    font-size: 1rem;
    font-weight: 600;
`
export const RemoveAllButton = styled(Button)`
    background-color: red;
    color: white;
    font-size: 1rem;
    font-weight: 600;
`
export const DownloadButton = styled(Button)`
    background-color: green;
    color: white;
    font-size: 1rem;
    font-weight: 600;
`