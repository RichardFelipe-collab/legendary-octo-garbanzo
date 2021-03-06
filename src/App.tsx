import { useEffect, useState } from 'react';

import { Button } from './components/Button';
import { Content } from './components/Content';
import { MovieCard } from './components/MovieCard';

import { SideBar } from './components/SideBar';
// import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';

//import './styles/sidebar.scss';sidebar
//import './styles/content.scss';content

 interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}  

/* interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
} */

export function App() {
 const [selectedGenreId, setSelectedGenreId] = useState(1);//content, sidebar

  //const [genres, setGenres] = useState<GenreResponseProps[]>([]); //sidebar

 //const [movies, setMovies] = useState<MovieProps[]>([]);//content
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps); //sidebar */

  /* useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);//sidebar  */

   useEffect(() => {
  
    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data); //sidebar
    })
  }, [selectedGenreId]); 

   function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }   

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar handleClickButton={handleClickButton} selectedGenreId={selectedGenreId}/>
     {/*  <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav> */}

       

        <Content selectedGenre={selectedGenre} selectedGenreId={selectedGenreId}/>
        {/*
         <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>
        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
        */}
      </div> 
  )
}