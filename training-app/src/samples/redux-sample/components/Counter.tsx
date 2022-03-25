import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { increment, decrement, incrementByAmount } from '../redux/CounterActions';
import { selectCounterValue } from '../redux/CounterReducer';
import { AppDispatch, RootState } from '../redux/store';

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

interface StateProps {
    value: number;
}

interface DispatchProps {
    onIncrement: () => void;
    onDecrement: () => void;
    onIncrementByValue: (value: number) => void;
}

type CounterProps = StateProps & DispatchProps;

const DisconnectedCounter = ({
    value,
    onIncrement,
    onDecrement,
    onIncrementByValue
}: CounterProps) => (
    <div>
        <div>Current value: {value}</div>
        <div>
            <Button onClick={onIncrement}>+</Button>
            <Button onClick={onDecrement}>-</Button>
            <Button onClick={() => onIncrementByValue(5)}>+5</Button>
        </div>
    </div>
);

const mapStateToProps = (state: RootState): StateProps => {
    return {
        value: selectCounterValue(state)
    }
}

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => {
    return {
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement()),
        onIncrementByValue: (value) => dispatch(incrementByAmount(value))
    }
}

export const Counter = connect(mapStateToProps, mapDispatchToProps)(DisconnectedCounter);
