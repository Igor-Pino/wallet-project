import styled from "styled-components"

const Background = styled.div`
    position: absolute;
    width: 100%;
    heigth: 0px;
    border: 4px solid #E5F1EF;
    border-radius: 4px;
`

const StyledLine = styled.div`
    position: absolute;
    width: 50%;
    heigth: 0px;
    border: 4px solid #24CCA7;
    box-shadow: 0px 1px 8px rgba(36, 204, 167, 0.5);
    border-radius: 4px;
`

export const FormStatusbar = ({w}) => {
    return (
        <>
            <Background></Background>
            <StyledLine w={w}></StyledLine>
        </>
    )
}

// ${({w}) => ( w ? `${w}%` : "0%")}