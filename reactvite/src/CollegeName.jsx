import { useState } from 'react'

function NameCollege()
{
    const[name ,setName]=useState("Gupta Sachin");
    const[college , setCollege]=useState("");

    function ModifyName()
    {
        setName("Sachin Gupta");
    }

    function ModifyCollege()
    {
        setCollege("ABES Engineering College");
    }

    return (
        <>
            <div>
                <h2>Name : {name}</h2>
                <h2>College Name : {college}</h2>

                <button onClick={ModifyName}>Modify Name</button>
                <br>
                </br>
                <button onClick={ModifyCollege}>Modify College</button>
            </div>
        </>
    )
}
export default NameCollege