import React from "react";
import Card from "../petCard/Card";
import { StyledCardGrid } from "./styles";

const CardGrid = ({petList, searchTerm}) => {
    return (
        <StyledCardGrid>
            {
                petList.filter((val) => {
                    if (val.title.toLowerCase().includes(searchTerm.toLowerCase()) || val.description.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                }).map((pet, index) => {
                    return (
                        <Card
                            key={index}
                            name={pet.title}
                            description={pet.description}
                            image={pet.url}
                            created={pet.created}
                        />
                    )
                })
            }
        </StyledCardGrid>
    )
}

export default CardGrid;