import { Component } from "react";
import {Overlay, ModalImage} from './Modal.styled'

export class Modal extends Component {
componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    const {largeImageURL, tags} = this.props
    return (
      <Overlay onClick={this.handleBackdropClick}>
        <ModalImage>
          <img src={largeImageURL} alt={tags} />
        </ModalImage>
      </Overlay>
    );
  }
}