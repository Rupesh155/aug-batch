// // import React from 'react'

// // import { useRef } from 'react'


// // const App = () => {
// //   // let [state,SetState]=useState('')
// //    let data=   useRef()
  
// //    console.log(data.current,"data");
   
// //   //  console.log(data,"dataaaa");
   
// //   // let [data,SetData]=useState(0)

// // // useEffect(()=>{
// // //   // SetData(data+1)
// // //   // data.current=data.current+1

// // // }
// // // )
// //   return (
// //     <div>
// //       {/* <h3> appp</h3>
// // //       <Home/> */}
// // //       <h1   ref={data}> mujhe select kroo</h1>
// // //       {/* <input type='text' placeholder='Enter your data'  onChange={(e)=>SetState(e.target.value)}/> */}
// // //      {/* <p>{data.current}</p> */}
// // //     </div>
// // //   )
// // // }

// // // export default App


// // // // import React from 'react'
// // // // import { useEffect } from 'react'
// // // // import { useRef } from 'react'
// // // // import { useState } from 'react'

// // // // const App = () => {
// // // //   let [input,SetInput]=useState('')
// // // //  let data=   useRef(1)
// // // //  console.log(data,"heh");
// // // //  useEffect(()=>{
// // // //   data.current=data.current+1
// // // //  })
 
// // // //   return (
// // // //     <div>
// // // //       <input  type='text' placeholder='Enter your name' onChange={(e)=>SetInput(e.target.value)}/>
// // // //       <h2>{data.current}</h2>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default App

// // import React from 'react'
// // import Home from './Home'

// // // propsss
// // const App = () => {

// // let user='rahul'
// //   return (

// //     <div>
// //       {/* jsx */}
// //       {/* <h1> hell0  {user}</h1> */}
// //       <Home a={user}  />
// //     </div>
// //   )
// // }


// // export default App


// // import React from 'react'
// // import { useState } from 'react'

// // const App = () => {
// //   let [color,SetColor]=useState('green')
// //     // let [data,SetData]=   useState(0)
// //   // let count=0
// //   // function done(){
// //     // console.log('hello');
// //     // count=count+1
// //     // console.log(count,'heheh');
// //     // SetData(data+1)
// //   // }
// //   // function a(){
// //   //   SetData(data-1)
// //   // }
// //   // function b(){
// //   //   SetData(0)
// //   // }
// //   function change(){
// //     SetColor('red')
  
// // //   return (
// // //     <div   style={{backgroundColor:color,height:'400px'}} >
  
// // //            {/* <button onClick={done} >  click</button> */}
// // //            <button onClick={change}> red</button>
// // //            {/* <button onClick={a} >  -</button>
// // //            <button onClick={b} >  Reset</button> */}


// // //     </div>
// // //   )
// // // }

// // // export default App


// // import React from 'react'
// // import { useState } from 'react'
// // const App = () => {
// //   let [color,SetColor]=useState(false)
// //   function done(){
// //     if(color===true){
// //       SetColor(false)

// //     }else{
// //       SetColor(true)
// //     }
// //   }
// //   return (
// //     <div style={color?{backgroundColor:'green',height:"300px"}:{backgroundColor:"red"}}>
// //  hello
// //  <button onClick={done}>click</button>
// //     </div>
// //   )
// // }

// // export default App


// // import React from 'react'
// // import { useState } from 'react';
// // const App = () => {  
// //   let [time,SetTime]=useState()
// //   setInterval(()=>{
// //     let date=   new Date().toLocaleTimeString()
// //     console.log(date,"datatat");
// //     SetTime(date)
// //   })
  
// //   return (
// //     <div>
// //       {time} mai samay hu 
// //     </div>
// //   )
// // }

// // export default App


// // import React from 'react'
// // import { useState } from 'react';
// // const App = () => {
// //    let [data,SetData]=    useState('')
// //   function done(e){
// //     console.log(e.target.value);
// //     SetData(e.target.value)
    
// //   }
// //   return (
// //     <div>
// //       <h1>{data}</h1>
// //           <input  onChange={done} type='text' placeholder='Enter your nameee'/>
// //     </div>
// //   )
// // }

// // export default App
// import React from 'react'
// import { useState } from 'react'
// const App = () => {
//   let [input,SetInput]=useState({
//     name:"",
//     pass:""

//   })
//   function done(e){
//        let {name,value}=    e.target
//     SetInput({...input,[name]:value})
//     console.log(input,"kya mil rha");
    
//   }
//   return (
//     <div>
//   <fieldset>   
//       <form> 
//         <input  type='text' name='name'  value= {input.name} onChange={done}  placeholder='Enter your name'/>
//         <br></br>
//         <br></br>
//         <input  type='password'  name='pass' value={input.pass} onChange={done} placeholder='Enter your pass'/>
//         <br></br>
//         <br></br>
//        <button> save</button>
//       </form>
//       </fieldset>
//     </div>
//   )
// }

// export default App


// let obj={
//   id:1,
//   name:"raul"
// }
// let {id,name}=obj
// console.log(id);






// import React,{useState} from 'react'
// import NavBar from './NavBar'
// import {Routes,Route}   from 'react-router-dom'
// import Home from './Home'
// import Cart from './Cart'
// const App = () => {
 
//   // console.log(cartData,"mainnnn");
  
//    return (
//     <div>
  
//       <NavBar/>
//       <Routes>
// <Route   path='/'  element={<Home    />}/>
// <Route   path='/cart'  element={<Cart  />}/>

//       </Routes>
//     </div>
//   )
// }

// export default App

// import React, { useMemo, useState } from 'react'

// const App = () => {
//   let [count,SetCount]=useState(0)
//   // let randomValue=Math.random()
 

//   let cash=   useMemo(()=>{
//     function cal(){
//       let result=0
//       for(let i =0;i<10000000;i++){
//         result+=i
//       }
//       return result
      
//     }
//       return cal()
//   },[])

//   return (
//     <div>
//        <h4>{cash}</h4>
//       <button onClick={()=>SetCount(count+1)}>  {count}click</button>
//     </div>
//   )
// }

// export default App 


// import React from 'react'
// import Custom from './Custom'
// const App = () => {
//      let {incremnt,decr,count}=      Custom()
//   return (
//     <div>
//       <h2> {count}</h2>
//       <button  onClick={incremnt}>++</button>
//       <button onClick={decr}>--</button>

//     </div>
//   )
// }

// export default App


// import React, { useMemo, useState } from 'react'
// const App = () => {
//   let [count,SetCount]=useState(0)
//   // let random=Math.random()
//   // let result=0
//   // for(let i=0;i<100000000;i++){
//   //   result+=i
//   // }
//    let result=  useMemo(()=>{
//     function call(){
//       let a=0
// for(let i=0;i<1000000000;i++){
//   a+=i
// }
// return a
//     }

//     return call()
//   },[])

//   return (
//     <div>
//       <h1>{result}</h1>
//       <h2>  {count}</h2>
//          <button onClick={()=>SetCount(count+1)}>click</button>
//     </div>
//   )
// }

// export default App



// import React,{useState} from 'react'
// import Sharam from './Sharam'
// import Home from './Home'

// import { Route, Routes } from 'react-router-dom'
// import Cart from './Cart'

// const App = () => {

//   return (
//     <div>
//       <Sharam/>
//       <Routes>
//         <Route  path='/' element={<Home  />}/>
//         <Route  path='/cart' element={<Cart   />}/>

//       </Routes>
//     </div>
//   )
// }

// export default App



// import React, { useMemo, useState } from 'react'
// const App = () => {
//   let [count,SetCount]=useState(0)
//   // console.log('heheheh');
//   let rs=   useMemo(()=>{
//     function call(){
//       let a=0
    
//       for(let i=0;i<10000000000;i++){
//         a+=i
//       }
//       return a
//     }
//     return call()

//  },[])
  
//   return (
//     <div>
//           <h1>{rs}</h1>
//       <button onClick={()=>SetCount(count+1)}>  {count}add</button>
//     </div>
//   )
// }

// export default App



// import React, { useReducer } from 'react'
// const App = () => {
//   function reduser(color,action){
//     if(action.type==='red'){
//       return color='red'
//     }
//     else if(action.type==='green'){
//       return color='green'
//     }
//     else if(action.type==='blue'){
//       return color='blue'
//     }
//     else if(action.type==='yellow'){
//       return color='yellow'
//     }
//     else if(action.type==='black'){
//       return color='black'
//     }
//     else{
//       return color
//     }

//   }
//   let [color,distach]=     useReducer(reduser,'white')
//   return (
//     <div   style={{backgroundColor:color,height:"400px"}}>
//     <button  onClick={()=>distach({type:"red"})}>red</button>
//     <button  onClick={()=>distach({type:"green"})}>green</button>
//     <button  onClick={()=>distach({type:"blue"})}>blue</button>
//     <button  onClick={()=>distach({type:"yellow"})}>yellow</button>
//     <button  onClick={()=>distach({type:"black"})}>black</button>

//     </div>
//   )
// }

// export default App


// import React from 'react'
// import New from './New'

// const App = () => {
//   let user='hello'
//   return (
//     <div>
//       <New  user={user}/>
//     </div>
//   )
// }

// export default App

 


import React, { useContext, useState } from 'react'
import { Context } from './Context'
const App = () => {


  let {input,arrData,distach}=     useContext(Context)
function fun1(e){
  distach({
    type:"addIn",
    payload:e.target.value
  })

}
function done(){
  distach({
    type:'addTodo',
    payload:input

  })


}
  return (
    <div>
      <input  onChange={fun1}   value={input}/>
      <button onClick={done}>add</button>
      {
        arrData.map((val)=>{
          return(<>
          <li>{val}</li>
          </>)

        })
      }
    </div>
  )
}

export default App