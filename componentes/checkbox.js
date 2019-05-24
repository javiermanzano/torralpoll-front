import React from 'react';

const Checkbox = ({option}) => (

<div className="option">
    <input type="checkbox" id={option}/>
    <label htmlFor={option}>{option}</label>
     <style jsx>{`
       label,input,.option{
            cursor:pointer;
        }
        label{
            display:block;
        }
      `}
      </style>
</div>

)

export default Checkbox;