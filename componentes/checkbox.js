import React from 'react';
import Icons from '../componentes/icons';

const Checkbox = ({option}) => (

<div className="option">
    {/* <Icons name='polygon'/> */}
    <input type="checkbox" id={option}/>
    <label htmlFor={option}>{option}</label>
     <style jsx>{`
       label,input,.option{
            cursor:pointer;
        }
        label{
            display:block;
            padding: 15px 20px;
            font-size:18px;
        }
        .option{
            position:relative;
        }
        input{
            position:absolute;
            left:0;
            top:50%;
            transform : translate(-100%, -50%);
        }
      `}
      </style>
</div>

)

export default Checkbox;