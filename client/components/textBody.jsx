import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const Box = styled.div`
  margin: 4px 0;
  max-height: 10.5ex;
  max-width: 420px;
  overflow: hidden;
  box-sizing: inherit;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
const Spacer = styled.div`
  margin-bottom: 2px;
`

const Title = styled.h3`
  margin-bottom: 2px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 22px;
  margin: 0;
  color: #fff;
`
const Body = styled.div`
  color: #8c8c8e;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 4px 0;
  max-height: 10.5ex;
  max-width: 420px;
  overflow: hidden;
`

const TextBody = (props) => {
  let { body, title } = props
  return (
    <Box>
      <Title>
        <Spacer>{title}</Spacer>
      </Title>
      <Body>
        {body}
      </Body>
    </Box>
  )
}

export default TextBody
