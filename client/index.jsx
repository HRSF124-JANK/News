import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Modal } from './components';
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

    this.state = {
      data: [],
      showModal: false,
      modalIdx: null
    }

    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal(idx) {
    this.setState({
      showModal: !this.state.showModal,
      modalIdx: idx
    })
  }

  componentDidMount() {
    fetch(`/news/getData${window.location.search}`)
      .then((response) => {
        return response.json()
      })
      .then((body) => {
        console.log(body)
        this.setState({
          data: body
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <Body>
        <GlobalStyle />
        <Inner>
        <Title>News</Title>
        <Container data={this.state.data} modalHandler={this.toggleModal} />
        </Inner>
        {this.state.showModal && (
          <Modal
            id="modal"
            isOpen={this.state.showModal}
            onClose={this.toggleModal}
            article={this.state.data[this.state.modalIdx]}
            idx={this.state.modalIdx}
          />
        )}
      </Body>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('News'))
