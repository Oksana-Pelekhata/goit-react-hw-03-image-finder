import { Component } from "react"
import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.styled";
import {Modal} from '../Modal/Modal'


export class ImageGalleryItem extends Component {
      state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
    
    render() {
        const { webformatURL, tags, largeImageURL } = this.props;
        const { showModal } = this.state;
        const { toggleModal } = this;

      return (
        <GalleryItem >
              <GalleryItemImage src={webformatURL} onClick={toggleModal} alt={tags} />
              {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={toggleModal} />
        )}
        </GalleryItem>
        )
    
  }
    }
