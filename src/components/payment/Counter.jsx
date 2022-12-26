import React, { useState } from 'react'
import styled from 'styled-components';

const CounterWrapper = styled.div`
    display: flex;
    border: 1px solid grey;
    height: 20px;
`;
const Button = styled.button`
    width: 20px;
    height: 20px;
    border: none;
    
`
const CountingNumber =styled.div`
    margin: 0px 10px 0px 10px;
`
const Price = styled.div`
`

function Counter() {
    const [count, setCount] = useState(1);

    function increment(){
        setCount(Number(count) +1);
    }
    function decrement(){
        setCount(Number(count) -1);
      }

  return (
    <CounterWrapper>
        <Button onClick={increment}>+</Button>
        <CountingNumber>{count}</CountingNumber>
        <Button onClick={decrement}>-</Button>
        <Price>{2* count}pieces</Price>
    </CounterWrapper>
  )
}

export default Counter;