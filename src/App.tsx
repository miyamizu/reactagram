import React from 'react';
import Header from './components/Header';
import unsplash from './api/unsplash';
import ImageList from './components/ImageList';
import './components/Search.css';
import { ImageCardProps } from './components/ImageCard';

const App:React.FC = () => {
  const [images, setImages] = React.useState<ImageCardProps[]>([]);
  const [term, setTerm] = React.useState<string>('');
  const [page, setPage] = React.useState<number>(1);

  const onFormSubmit = (event: any) => {
    event.preventDefault();
    setPage(1);
    onSearchSubmit(term, 1);
  };

  const onSearchSubmit = async (term: string, page: number) => {
    const response = await unsplash.get('/search/photos', {
            params: { query: term, per_page: 21, page: page }
      });
      setImages(response.data.results);
      setImages(page === 1 ? response.data.results : images.concat(response.data.results));
    };

 return (
   <div className="App">
     <Header>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          className="Search"
          value={term}
          placeholder="検索"
          onChange={e => setTerm(e.target.value)}
        />
       </form>
     </Header>
     <div>
       <ImageList images={images} onSearchSubmit={onSearchSubmit} term={term} page={page} setPage={setPage}/>
     </div>
   </div>
 );
}

export default App;