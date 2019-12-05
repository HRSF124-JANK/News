import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ImageBox = styled.div`
  border-radius: 4px;
  flex-shrink: 0;
  height: 134px;
  width: 196px;
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const Thumbnail = (props) => {
  let { thumbnail } = props
  return (
    <ImageBox>
      <Image src={thumbnail} />
    </ImageBox>

  )
}

export default Thumbnail
