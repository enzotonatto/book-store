import styled from "styled-components"

export const Titulo = styled.h2`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${props => props.cor || '#000'};
    font-size: ${props => props.tamanhoFonte || '18px'};
    text-align: ${props => props.alinhamento || 'center'};
    margin: 0;
`