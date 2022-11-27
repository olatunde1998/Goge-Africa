import React from 'react'
import styled from 'styled-components';

const Image = styled.img`
    // border: 2px solid red;
    max-width: 100%;
    height: auto;
`

function ImageComponent({src}) {
  return (
        <Image src={src}/>

  )
}

export default ImageComponent;