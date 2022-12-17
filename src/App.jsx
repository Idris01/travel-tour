import React from 'react'
import Header from '../components/Header'
import Destination from '../components/Destination'
import data from '../data'



function App() {
  const destinations = data.map((item,id)=> <Destination key={id} {...item} />)
  return (
    <>
      <Header />
      <div className="main">
        {destinations}
      </div>
    </>
  )
}

export default App
