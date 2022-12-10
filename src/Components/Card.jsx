import React from "react";
import { ContextGlobal } from "./utils/global.context";
import { useContext } from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {
  const {theme, fav, setFav} = useContext(ContextGlobal);

  
    const addFav = (e)=>{
    e.preventDefault();
    

    if (!fav.find(fav => fav.id === id)) {
      setFav([...fav, {name, username, id}])
      localStorage.setItem("favs", JSON.stringify(fav));
      console.table(fav);
      alert(`${name} se agregó a favoritos`);
    } else {
      setFav(fav.filter(fav => fav.id !== id));
      console.table(fav);
      localStorage.setItem("favs", JSON.stringify(fav));
      alert(`${name} se elimino a favoritos`);
    }
  }
  

  return (
    <div className="card">
       <Link to={`/${id}`} >
      <img src="/images/doctor.jpg" alt="doctor-img" />
      <h2 className="dentist-name">
        {name}
      </h2>
      <h3 className="dentist-username">{username}</h3>
        <button onClick={addFav} className="favButton">Add fav</button>
        </Link>
    </div>
  );
};

export default Card;
