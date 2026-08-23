import axios from 'axios'

const App = () => {
  const getData=async () =>{
   const response=  await axios.get('https://jsonplaceholder.typicode.com/todos/1')
   console.log(response);
   
  }
//  async function getData(){

//   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   console.log(response);
  
//   //  fetch('https://jsonplaceholder.typicode.com/todos/1')
//   //     .then(response => response.json())
//   //     .then(json => console.log(json))
//   }
  // localStorage.clear()
  // localStorage.setItem('user','harsh')
  // const user = localStorage.getItem('user')
  // localStorage.setItem('age','18')
  // console.log(user);
  // localStorage.removeItem('user')

  // const user={
  //   username:'sarthak',
  //   age:69
  // }
  // localStorage.setItem('user',JSON.stringify(user))
  // localStorage.getItem('user')
  // console.log(user);
  
  return (
    <div>
     <button onClick={getData}>get data</button>
    </div>
  )
}

export default App
