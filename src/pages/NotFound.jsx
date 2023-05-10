import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const NotFoundBox = styled.div`
  margin-top: 90px;
`;

const NotFound = () => {
  return (
    <NotFoundBox >
        <p>404</p>
        <p>Page not Found</p>
        <p>Go to back<Link to='/'>Home</Link>.</p>

    </NotFoundBox>
  )
}

export default NotFound