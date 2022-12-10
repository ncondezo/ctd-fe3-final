import React, { useContext } from 'react'
import Card from '../Components/Card'
import { useState, useEffect } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {


  const [dentistas, setDentistas] = useState([])
  const url = 'https://jsonplaceholder.typicode.com/users'
  const {Theme} = useContext(ContextGlobal)

  useEffect(()=>{
    const fetchData = async ()=>{
      let res = await fetch(url)
      let data = await res.json()
      setDentistas(res.data)
    }
    fetchData()

  },[])


  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentistas.map(i => {return <Card key = {i.id} id = {i.id} name = {i.name} username = {i.username} />})}
      </div>
    </main>
  )
}

export default Home