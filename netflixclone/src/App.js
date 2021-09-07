import React, { useEffect,  useState } from  'react';
import Omdb from './Omdb';
export default () => {

    const [movielist, setMovieList] = useState([]);

    useEffect(() => {
      const loadAll = async () => {
      //Pegando a lista TOTAL
      let list = await Omdb.getHomeList();
      console.log(list);
      setMovieList(list);
      loadAll();
      }
    }, []);

    return (
      <div>
        Olá mundo!
      </div>
    );
  }
