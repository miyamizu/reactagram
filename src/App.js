import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import unsplash from './api/unsplash';

function App() {
  const onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
            params: { query: term }
      });
       console.log(response);
    };
 return (
   <div className="App">
     <Header>
       <Search onSearchSubmit={onSearchSubmit}/>
     </Header>
   </div>
 );
}

export default App;