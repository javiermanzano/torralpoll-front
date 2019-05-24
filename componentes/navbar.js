import React from 'react';
import Icons from './icons';

const Navbar = ({title,children, classnames}) =>(
    <nav>
        <Icons name='polygon' />
        <style jsx>{`
        nav{
          background:var(--dark-color);
          margin-left: -30px;
          margin-right: -30px;
          height:48px;
        }
      `}
      </style>
    </nav>
)

export default Navbar;