import styled from 'styled-components';

export const StyledTeamContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    margin: auto
`

export const TeamCard = styled.div`
    width: 280px;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    color: black;
    border-radius: 5px;
    border: 1px solid orange;

    .img__cont {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        overflow: hidden;
        margin-top: 20px;
        border: 2px solid black;

        img {
            width: 100%;
            height: auto;
        }
    }

    .card__main {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h4 {
            font-size: 1.2rem;
        }

        h5 {
            margin-top: 5px;
            font-size: 1rem;
        }
    }
`