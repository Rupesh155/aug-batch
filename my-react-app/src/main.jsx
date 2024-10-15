import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import {BrowserRouter}  from 'react-router-dom'
import ContextP from './Context'



createRoot(document.getElementById('root')).render(
<BrowserRouter>


 <ContextP>
 <App/>
 </ContextP>



</BrowserRouter>
,
)
