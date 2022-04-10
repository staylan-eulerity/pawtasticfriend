import styled from 'styled-components';

export const AboutContent = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1000px;
    padding: 8px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: rgba(0,0,0, 0.45);
    border-radius: 4px;
    color: white;
`

export const AboutHeader = styled.h1`
    margin-top: 30px;
    font-size: 3.5rem;
`

export const AboutMainContent = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    p {
        font-size: 1.2rem;
    }

    h2 {
        margin-top: 5px;
        text-align: center;
        font-size: 1.75rem;
        margin-bottom: 10px;
    }

    small {
        text-align: center;
    }
`