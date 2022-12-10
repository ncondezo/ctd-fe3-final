import React, { useContext, useEffect, useState } from 'react'
import {useContextGlobal} from '../Components/utils/global.context'
import { useParams } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  const params = useParams()
  const [dentista, setDentista] = useState({})
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`

  useEffect(()=>{
    const fetchData = async ()=>{
      let res = await fetch(url)
      let data = await res.json()
      setDentista(res.data)
    }
    fetchData()

  })

  const {Theme} = useContext(ContextGlobal)

  return (
    <div>
      <h1>Detail Dentist id </h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentista.name}</td>
            <td>{dentista.phone}</td>
            <td>{dentista.email}</td>
            <td>{dentista.website}</td>
          </tr>
        </tbody>
      </table>
      
    </div>
  )
}

export default Detail