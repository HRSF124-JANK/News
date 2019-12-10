import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Thumbnail } from './index.js'

const ConstructedModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1051;
  opacity: 0;
  transition: opacity linear 0.25s;
  width: ${props => {
    switch (props.size) {
      case "lg":
        return "800";
      default:
        return "480";
    }
  }}px;
  margin: 40px auto;
  border-radius: 5px;
  &.fade-in {
    opacity: 1;
    transition: opacity linear .25s;
  }
  &.fade-out {
    opacity: 0;
    transition: opacity linear .25s;
  }
`

const ModalContent = styled.div`
  z-index: 1050;
  width: 100%;
  background-color: #fefefe;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  padding: 15px;
`

const Header = styled.div`
  width: 100%;
  text-align: center;
  padding: 15px;
`

const Background = styled.div`
  background: rgba(0,0,0,0.5);
  position: fixed;
  z-index: 1040;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  outline: 0;
`

const Body = styled.div`
`

const Source = styled.div``
const modalRoot = document.getElementById("modal-root");
class Modal extends React.Component {
  constructor(props){
    super()
    let { source, body, title, thumbnail, views, date } = props.article
    this.state = {
      source: source,
      body: body,
      title: title,
      thumbnail: thumbnail,
      views: views,
      date: date,
      fadeType: null
    }
    this.background = React.createRef();
    this.handleClick = this.handleClick.bind(this)
    this.transitionEnd = this.transitionEnd.bind(this)
  }
  componentDidMount() {
    setTimeout(() => this.setState({ fadeType: "in" }), 0);
    let data = {idx: this.props.idx}
    fetch(`/news/addViews${window.location.search}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.text()
      }).then( (response) => {
        console.log(response)
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.isOpen && prevProps.isOpen) {
      this.setState({ fadeType: "out" });
    }
  }

  transitionEnd(e) {
    if (e.propertyName !== "opacity" || this.state.fadeType === "in") return;
    if (this.state.fadeType === "out") {
      this.props.onClose();
    }
  };

  handleClick(e){
    e.preventDefault();
    this.setState({ fadeType: "out" });
  }

  render() {
    let { source, body, title, thumbnail, views, date, fadeType } = this.state
    return ReactDOM.createPortal(
      <ConstructedModal
        id={this.props.id}
        className={`wrapper size-md fade-${fadeType}`}
        modalSize={""}
        onTransitionEnd={this.transitionEnd}
        >
        <ModalContent>
          <Header>
            {title}
          </Header>

          <Body>
            {body}
          </Body>
          <br></br>
          <Source>
            {source}
          </Source>
          <Thumbnail image={thumbnail} />
        </ModalContent>
        <Background
          onClick={this.handleClick}
          ref={this.background}
        />
        </ConstructedModal>,
      modalRoot
    );
    }
}
export default Modal
