import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
    background-color: #cfc;
    display: flex;
`

const StyledLink = styled(Link)`
    padding: 5px 15px;
    color: #252;
    &:hover {
        background-color: #9e9;
    }
`

export const Navigation = () => (
    <Nav>
        <StyledLink to='/components'>Component sample</StyledLink>
        <StyledLink to='/css-samples'>CSS samples</StyledLink>
        <StyledLink to='/redux'>Redux sample</StyledLink>
    </Nav>
);