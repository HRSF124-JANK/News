import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from './components';
import styled from 'styled-components'
import GlobalStyle from './globalStyle';

const Title = styled.div`
  color: #fff;
  font-size: 26px;
  font-weight: 500;
  letter-spacing: -0.14px;
  line-height: 30px;
  border-bottom: 1px solid #0e0d0d;
  padding-bottom: 16px;
`;

const Body = styled.div`
  display: flex;
`
const Inner = styled.div`
  width: 750px;
  margin: 0 auto;
`

class App extends React.Component {
  constructor() {
    super()
  }

  // componentDidMount() {
  //   fetch('/getData')
  //     .then((repsonse) => {
  //       debugger
  //     })
  //
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }

  render() {
    return (
      <Body>
        <GlobalStyle />
        <Inner>
        <Title>News</Title>
        <Container />
        </Inner>
      </Body>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
