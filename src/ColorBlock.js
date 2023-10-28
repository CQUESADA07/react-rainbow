import React from 'react'

function ColorBlock({color}){
    return <div className='ColorBlock'
    style={
        {backgroundColor: color}
    }
    >
        <p>{color}</p>
    </div>
       
    
}

// Do not forget to export your component once you have built it!
export default ColorBlock