import * as React from 'react';
import { Modal } from 'react-bootstrap';
import './ImageModal.css';
import { ImageCardProps } from './ImageCard';

type Props = {
  image: ImageCardProps;
  size?: "sm" | "lg" | "xl" | undefined;
  show: boolean;
  onHide: () => void;
}

const ImageModal: React.FC<Props> = (props) => {
 return (
  <Modal
     {...props}
      centered
      >
      <Modal.Body>
        <img className="ImageSize" alt={props.image.description} src={props.image.urls.regular} />
      </Modal.Body>
    </Modal>
  );
 };

export default ImageModal;