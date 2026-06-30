import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// function MyApp(){
//   return(
//     <div>
//       <h1>Custom App !</h1>
//     </div>
//   )
// }
// const anotherUser = "PravinBendke";

// const reactElement = React.createElement(
//   "a",
//   {href : 'https://google.com',target : "_blank"},

//   'click me for Google visit  ',
//   anotherUser
// )

createRoot(document.getElementById('root')).render(

  <React.StrictMode>
      <App/>
  </React.StrictMode>  
  
)
