import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Header, TextBody, Icon } from './index.js'

const Box = styled.div`
  border-radius: 4px;
  position: relative;
  transition: bacgkround 150ms;
  display: flex;
  min-height: 134px;
`

const Text = styled.div`
  padding-right: 0;
  flex-direction: column;
  flex-grow: 1;
  display: flex;
`
const ViewsBox = styled.div`
  margin-top: auto;
  line-height: 19px;
  color: #8c8c8e;
  fill: #8c8c8e;
`

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

const NewsArticle = (props) => {
  return(
    <Box>
      <Text>
        <Header />
        <TextBody />
        <ViewsBox>
          <Icon />{"916"}
        </ViewsBox>
      </Text>

      <ImageBox>
        <Image src="https://images.robinhood.com/Bwdg3qM4Y9AT6a2X9-2d1DJ0rec/aHR0cHM6Ly9pbWFnZXMucm9iaW5ob29kLmNvbS9EdkJMZUNvLWN2UnlxLVAySGpsYUZ4N0lMMkEvYUhSMGNITTZMeTlqWkc0eUxtSmxibnBwYm1kaExtTnZiUzltYVd4bGN5OXBiV0ZuWldOaFkyaGxMMko2TWw5dmNHVnVaM0poY0doZmJXVjBZVjlwYldGblpWODBNREI0TXpBd0wybHRZV2RsY3k5emRHOXllUzh5TURFeUwzTndjbWx1ZEY5eVpYUmhhV3hmYzNSdmNtVmZabkp2Ym5SaFoyVmZibVYzWDIxbGVHbGpiMTh6WHpRdWFuQm4" />
      </ImageBox>

    </Box>
  )
}

export default NewsArticle
