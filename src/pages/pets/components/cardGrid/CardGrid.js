import React from "react";
import Card from "../petCard/Card";
import { StyledCardGrid } from "./styles";

const CardGrid = ({ petList, searchTerm }) => {
    return (
        <StyledCardGrid>
            {
                petList.filter((val) =>
                    val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    val.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    val === '').map((pet, index) => {
                    return (
                        <Card
                            key={index}
                            name={pet.title}
                            description={pet.description}
                            image={pet.url}
                            created={pet.created}
                            id={index}
                        />
                    )
                })
            }
        </StyledCardGrid>
    )
}

export default CardGrid;