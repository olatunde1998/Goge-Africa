import React from 'react'
import styled from 'styled-components'

const ImageContainer = styled.img`
    max-width: 100%;
    height: auto;
    // border: 2px solid red;
`


function ImageComponent({src}) {
  return (
    <ImageContainer  src={src}/>
  )
}

export default ImageComponent;