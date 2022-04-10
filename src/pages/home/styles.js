import styled from 'styled-components';
import pawfectBackground from '../../assets/images/pawfectBackground.jpeg'

export const HomeContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${pawfectBackground});
    background-size: cover;
    overflow: auto;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 80px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 12px;
    width: 650px;
    text-align: center;
`

export const HomeH1 = styled.h1`
    font-size:  5rem;
    color: white;
    font-weight: bold;
    transition: all 0.3;
    transform: skewX(0deg);

    span {
        color: orange;
    }
`

export const HomeDesc = styled.p`
    font-size: 2rem;
    width: 500px;
    color: white;
    margin: 10px;
`

export const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`

export const StartBtn = styled.button`
    cursor: pointer;
    background-color: transparent;
    color: white;
    font-size: 1.2rem;
    padding: 1.4rem;
    border: 2px solid white;
    border-radius: 4px;
    transition: all 0.3s ease-in;

    &:hover {
        background-color: rgba(0,0,0, 0.65);
        font-weight: bold;
        color: orange;
        border-color: orange;
    }
`