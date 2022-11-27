import React from 'react'
import styled from 'styled-components';
import { Typography } from 'components/Typography';

const DescriptionWrapper = styled.div`
  border: 2px solid yellow;
`


function Description() {
  return (
    <DescriptionWrapper>
      <Typography>Voluptate id deserunt mollit incididunt sint labore eiusmod. 
        Elit officia ex velit velit est mollit.</Typography>
    </DescriptionWrapper>
  )
}

export default Description;