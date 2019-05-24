import React from 'react';
import Icons from './icons';

const Navbar = ({title,children, classnames}) =>(
    <nav>
        <Icons name='logo' style={{width:'35px'}}/>
        <style jsx>{`
        nav{
          background:var(--dark-color);
          height:48px;
          padding:5px;
          display:flex;
          align-items:center;
          margin-bottom:50px;
          position:absolute;
          width:100%;
          left:0;
          top:0;
          box-sizing:border-box;
        }
      `}
      </style>
    </nav>
)

export default Navbar;