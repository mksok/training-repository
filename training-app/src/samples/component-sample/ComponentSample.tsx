import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
    padding: 5px 15px;
    background: #ddf;
    margin-right: 10px;
    transition: all 0.13s ease-in;
    border-radius: 3px;

    &:hover {
        background: #88d;
    }
`;

export const ClickCounter = () => {
    const [clickCount, setClickCount] = useState(0);
    
    return (
        <div>
        <h5>Clicked {clickCount} times.</h5>
        <Button onClick={() => setClickCount(clickCount + 1)}>Button</Button>
    </div>
    );
}

interface HeaderProps {
    message: string;
}
export const Header = (props: HeaderProps) => <h1>{props.message}</h1>

export const ComponentSample = () => (
    <>
        <Header message='hello there!' />
        <ClickCounter />
    </>
);

