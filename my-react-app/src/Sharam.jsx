import React from 'react'
import './sharam.css'
import { Link } from 'react-router-dom'
const Sharam = () => {
  return (
    <div>
        <nav>
            <Link  to='/'>  
            <li>Home</li>
            </Link>
<Link to='/cart'>   
            <li > Cart</li>
            </Link>
        </nav>
    </div>
  )
}

export default Sharam