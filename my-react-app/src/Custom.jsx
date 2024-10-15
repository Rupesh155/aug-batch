import { useState } from "react"
function Custom(){

let [count,SetCount]=useState(0)
let incremnt=()=>{
    SetCount(count+1)
}
let decr=()=>{
    SetCount(count-1)
}

    return {incremnt,decr,count}
}

export default Custom