import React from 'react'
import reactDom from'react-dom'
import Appmarket from './Appmarket'

const mount = (el)=>{
reactDom.render(
    // <h1>aya yoyo</h1>,
    <Appmarket></Appmarket>,
    el
)
}
if(process.env.NODE_ENV ==='development'){
    const devRoot = document.querySelector('#marketing-dev-root')
    if(devRoot){
        mount(devRoot)
    }
}
export {mount}