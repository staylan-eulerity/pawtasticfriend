import styled from "styled-components";

export const StyledCardGrid = styled.div`
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    grid-gap: 20px;
    padding: 10px;
    background: rgba(0,0,0, 0.3);
    border-radius: 4px;
    margin-bottom: 30px;
`