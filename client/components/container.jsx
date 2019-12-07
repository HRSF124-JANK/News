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

const A = styled.a`
  cursor: pointer;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  color: inherit;
  text-decoration: inherit;
  background-color: transparent;
  display:block;
  transition: 150ms;
  :hover {
    background-color: #3d3d3f;
    opacity: .2;
  }
`

const Container = (props) => {
  let news = !!props.data ? props.data : [];
  return(
    <React.Fragment>
      {
        news.map((data, idx) => {
          return (
            <Box key={idx}>
              <NewsArticle
                source={data.source}
                body={data.body}
                title={data.title}
                thumbnail={data.thumbnail}
                views={data.views}
                date={data.date} />
                <A onClick={() => props.modalHandler(idx)} target="_blank" rel="nofollow noopener" />
            </Box>
          )
        })
      }
    </React.Fragment>
  )
}

export default Container
