import styled from 'styled-components';
import { Button } from '../../../components/buttons/buttonStyles';

export const StyledContactForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 10px;

    label {
        font-size: 1rem;
        font-weight: 600;
        margin: 10px 0px 10px 8px;
        text-align: left;
    }

    .form__input {
        width: 400px;
        height: 40px;
        padding: 10px;
        border: 2px solid orange;
        border-radius: 14px;
        outline: none;
        font-size: 1.2rem;
    }

    .form__textarea {
        height: 180px;
        padding-top: 10px;
        resize: none;
    }
`

export const ContactButton = styled(Button)`
    align-self: center;
    font-size: 1.3rem;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    color: white;
    background-color: orange;
`