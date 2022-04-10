import styled from "styled-components";

export const StyledCard = styled.div`
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    min-height: 300px;
    width: 275px;
    transition: 0.2s transform;
    &:hover {
        transform: scale(1.05);
    }

    .img__container {
        width: 100%;

        img {
            display: block;
            height: 200px;
            width: 100%;
        }
    }

    .card__content {
        display: flex;
        flex-direction: column;
        padding: 10px;
        height: 100%;

        .pet__name {
            font-size: 1rem;
            margin-bottom: 5px;
        }

        .pet__description {
            font-size: .85rem;
            height: 60px;
            margin-bottom: 10px;
            text-overflow: ellipsis;
        }

        .card__break {
            border: 1px solid #999999
        }

        .pet__date {
            margin-top: 5px;
            font-size: 0.6rem;
        }
    }
`