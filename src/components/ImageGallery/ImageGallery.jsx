import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryList } from "./ImageGallery.styled";


export const ImageGallery = ({ pictures }) => {
  return (
    <ImageGalleryList>
      {pictures.map(({ webformatURL, tags, largeImageURL, id }) => (
        <ImageGalleryItem
          webformatURL={webformatURL}
          tags={tags}
          largeImageURL={largeImageURL}
          key={id}
        />
      ))}
    </ImageGalleryList>
  );
};

