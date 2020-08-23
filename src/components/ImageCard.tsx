import React from 'react';
import ImageModal from './ImageModal';

export interface ImageCardProps {
  id: number;
  description: string;
  urls: { regular: string };
};

type Props = {
  key: number;
  image: ImageCardProps;
};

const ImageCard: React.FC<Props> = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [spans, setSpans] = React.useState<number>(0);
  const imageRef = React.useRef<HTMLImageElement>(null);

  const calculateSpans = () => {
    if (null !== imageRef.current) {
      const height = imageRef.current.clientHeight;
      setSpans(Math.ceil(height / 10));
    }
  };

  React.useLayoutEffect(() => {
    if (null !== imageRef.current) {
      imageRef.current.addEventListener('load', calculateSpans);
    }
  });

  const { description, urls } = props.image;

  return (
    <>
      <div style={{ gridRowEnd: `span ${spans}` }}>
        <img onClick={() => setModalShow(true)} ref={imageRef} alt={description} src={urls.regular} />
      </div>
      <ImageModal
        image={props.image}
        show={modalShow}
        onHide={() => setModalShow(false)}
        size={"lg"}
      />
    </>
  );
};

export default ImageCard;