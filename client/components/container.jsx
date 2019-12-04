import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import { NewsArticle } from './index.js'

const Box = styled.div`
  border-radius: 4px;
  margin: 0 -30px;
  padding: 30px;
  position: relative;
  transition: background 150ms;
`

const Container = (props) => {
  return(
    <Box>
      <NewsArticle />
    </Box>
  )
}

export default Container
