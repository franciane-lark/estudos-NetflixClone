import React, { useEffect } from 'react';
import Omdb from './Omdb';
export default () => {

    useEffect(() => {
      const loadAll = async () =>{
      //Pegando a lista TOTAL
      let list = await Omdb.getHomeList();
      console.log(list);
      }
    }, []);

    return (
      <div>
        Olá mundo!
      </div>
    );
  }
