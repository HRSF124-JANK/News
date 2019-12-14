import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import moment from 'moment';

const Head = styled.div`
  margin-top: -4px;
  display: block;
  box-sizing: inherit;
`

const Source = styled.span`
color: ${props => {
  const now = moment();
  const totalMinutes = (now.hours() * 60) + now.minutes();
  let background = '';
  if (totalMinutes < 360 || totalMinutes >= 900) {
    return '#fff;'
  } else {
    return 'rgb(23, 23, 24);'
  }
  }
};
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
  let { source, date } = props;
  return (
    <Head>
      <span className="bold">
        <Source>{source}</Source>
      </span>
      <Date>{moment(date).format('MMM D')}</Date>
    </Head>
  )
}

export default Header
