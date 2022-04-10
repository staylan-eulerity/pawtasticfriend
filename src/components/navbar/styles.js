import styled from "styled-components";

export const StyledNavBar = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: black;
`

export const Logo = styled.div`
    padding: 1rem 0;


    a {
        color: white;
        text-decoration: none;
        font-weight: 800;
        font-size: 1.7rem;

        svg {
            margin-right: 5px;
        }

        span {
            color: orange;
        }
    }
`

export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    a {
        cursor: pointer;
        color: white;
        padding: 1rem 2rem;
        font-size: 1.2rem;
        text-decoration: none;
        text-align: center;
        transition: all 0.3s ease-in;

        &:hover {
            color: orange;
        }
    }

    @media (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({isOpen}) => (isOpen ? '300px' : '0px')};
        transition: max-height 0.3s ease-in;
    }
`

export const HamburgerIcon = styled.div`
    cursor: pointer;
    display: none;
    flex-direction: column;

    span {
        height: 2px;
        width: 25px;
        background-color: orange;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
        display: flex;
    }
`