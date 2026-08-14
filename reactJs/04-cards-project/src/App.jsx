import React from 'react'
import {Bookmark} from 'lucide-react'
const App = () => {
  return (
    <div className='parent'>
     <div className="card">
      <div className="top">
        <img src="https://imgs.search.brave.com/_E1HH8tG9czj5Ch2yCcnj5NwBhWq3t5YyuVeaRMUWvI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzMv/OTUzLzAwMC9zbWFs/bC9hbWF6b24tcGF5/LWxvZ28tZnJlZS1w/bmcucG5n" alt="" />
        <button>Save <Bookmark/></button>
      </div>
      <div className="center">
        <h3>Amazon <span>5 days ago</span></h3>
        <h2>Senior UI/UX Designer</h2>
<div>
       <h4>Part Time</h4>
      <h4>Senior level </h4>
     </div>
      </div>
    
     
      <div className='bottom'>
        <div>
         
            <h3>$120/hr</h3>
            <p>Mumbai, India</p>
         
          
        </div>
        <button>Apply Now</button>
      </div>
     </div>
    </div>
  )
}

export default App
