import { mount } from 'marketing/MarketingApp'
import React,{useRef,useEffect} from 'react'
export default ()=>{
    const reff = useRef(null)
    useEffect(()=>{
        mount(reff.current)
    })
    return <div ref={reff}></div>
   
}