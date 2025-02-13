import React, {  useState } from 'react'
import "./Loader.scss"
import img from "../../Assets/logo.png"

const Loader = () => {

    const[loadingin,setLoadingin] =useState(true)
    setTimeout(() => {
        setLoadingin(false)
    }, 3000);

  return (
<>
    {
    loadingin &&
    <div class="container-boxx">
    <div class="box">
       <img src={img} alt="" />
    </div>
</div>

    }
    </>
  )
}

export default Loader