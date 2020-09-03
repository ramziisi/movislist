import React , {useState} from 'react';
import Search from './compente/Search';
import AddModal from './compente/AddMovis';
import Movis from './compente/Movis';
import Rating from './compente/Rating';

import './App.css';

function App() {
  const [film,setFilm]=useState([
    {year:'2016',Titre:'Power', image:'https://nature-expression.com/wp-content/uploads/2017/10/slide_the.jpg',rating:'6'}
   , {year:'2020',Titre:'alldyn', image:'https://s2.dmcdn.net/v/Krsen1PLMGsN8TsKv/x1080',rating:'6'}
   , {year:'2018',Titre:'aaa', image:'https://s2.dmcdn.net/v/Krsen1PLMGsN8TsKv/x1080',rating:'6'}
   , {year:'2019',Titre:'bbbb', image:'https://s2.dmcdn.net/v/Krsen1PLMGsN8TsKv/x1080',rating:'8'}
    ,{year:'2000',Titre:'ccc', image:'https://s2.dmcdn.net/v/Krsen1PLMGsN8TsKv/x1080',rating:'4'}
    ,{year:'2013',Titre:'zzz', image:'https://s2.dmcdn.net/v/Krsen1PLMGsN8TsKv/x1080',rating:'6'}
    ,{year:'2015',Titre:'eeee', image:'https://s2.dmcdn.net/v/Krsen1PLMGsN8TsKv/x1080',rating:'2'}
  ])
  const [search,setSearch]=useState('');
  const [rating,setRating]=useState('');
  // const add
  return (
    <div className="App">
      <Rating  rating={rating} setRating={setRating}/>
    <Search  setSearch={setSearch} search={search}/>
      
    <Movis  film={film.filter(el=> el.Titre.toLowerCase().includes(search.toLowerCase().trim()) && el.rating >= rating)
     }/>
    <AddModal setFilm={setFilm} film={film}/>                   
    {/* <button onClick={addfilm}>AddMovis</button> */}
    
    </div>
  );
}

export default App;
