import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Head = styled.div`
  margin-top: -4px;
  display: block;
  box-sizing: inherit;
`

const Source = styled.span`
  color: #fff;
`

const Date = styled.span`
  color: #8c8c8e;
  margin-left: 6px;
  font-size: 13px;
  font-weight: 400px;
  letter-spacing: 0.25px;
  line-height: 19px;
`
const Header = (props) => {
  return (
    <Head>
      <span className="bold">
        <Source>Benzinga</Source>
      </span>
      <Date>Dec 2</Date>
    </Head>
  )
}

export default Header
