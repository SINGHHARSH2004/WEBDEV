import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
     <Card user='HARSH SINGH' age={45}/>
          <Card user='AMAN' age={15}/>

    </div>
  )
}

export default App
