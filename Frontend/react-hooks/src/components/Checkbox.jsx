import React,{useState} from 'react'

const Checkbox = () => {
    const [checked,setChecked]=useState(false)
  return (
    <div>
        <input type="checkbox" value={checked} onChange={()=>setChecked(!checked)}/>
        <p>{checked? "checked":"not checked"}</p>
    </div>
  )
}

export default Checkbox