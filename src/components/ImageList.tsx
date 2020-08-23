import React from 'react';
import ImageCard, {ImageCardProps} from './ImageCard';

import './ImageList.css';

type Props = {
  images: ImageCardProps[];
  term: string;
  page: number;
  setPage: (page: number) => void;
  onSearchSubmit: (term: string, page: number) => void;
}

const ImageList: React.FC<Props> = (props) => {
  const images = props.images.map((image: ImageCardProps) => {
    return <ImageCard key={image.id} image={image} />;
   });

   const handleScroll = (e: any) => {
     const element = e.currentTarget;
     const { scrollHeight, scrollTop, clientHeight } = element;
        if (scrollHeight - scrollTop === clientHeight) {
            console.log('reach end');
            const newPage = props.page + 1;
            props.setPage(newPage);
          props.onSearchSubmit(props.term, newPage);
        }
     };
    

  return (
       <div
         onScroll={handleScroll}
         style={{ height: '1000px', overflow: 'scroll' }}
         className="image-list">{images}
       </div>
  );
 };

export default ImageList;