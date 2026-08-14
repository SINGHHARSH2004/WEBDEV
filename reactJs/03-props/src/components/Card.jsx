import React from 'react'

const Card = (props) => {
  return (
    
      <div className="card">
      <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
      <h1>{props.user }, {props.age}</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut consectetur error fuga!</p>
      <button>view profile</button>
     </div>
    
  )
}

export default Card
