import React from "react";
import Card from "../Components/Card";
import { useContext } from "react";
import {ContextGlobal} from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { Theme, fav, setFav } = useContext(ContextGlobal)

  return (
    <div>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {fav?.map((dentista)=>{
          return(
            <Card key = {dentista.id} id = {dentista.id} name = {dentista.name} username = {dentista.username} />
          )
        })}
      </div>    
    </div>
  );
};

export default Favs;
