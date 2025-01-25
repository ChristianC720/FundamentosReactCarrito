import { useState } from "react"

function Button(){
    const [nameStudent, setNameStudent] =useState('Glass')
    const showNameStudent =()=>{
        setNameStudent('Florian')
    }
    return(
        <>
        {nameStudent}
        <button className="btn btn-primary" onClick={showNameStudent}>Click Here!</button>
        </>
    )
}
export default Button