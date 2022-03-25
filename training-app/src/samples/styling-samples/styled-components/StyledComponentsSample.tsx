import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    padding: 10px;
    border: 2px solid #5f9;
    border-radius: 5px;
    box-shadow: #8c6 5px 5px 5px 0;
    font-family: 'Courier New', Courier, monospace;
    margin-bottom: 10px;
`;

export const StyledComponentsSample = () => <StyledDiv>I am styled with Styled Components</StyledDiv>