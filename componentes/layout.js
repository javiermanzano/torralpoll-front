import React from 'react';
import Nav from './navbar';

const Layout = ({title,children, classnames}) =>(
    <main className={classnames}>
        <Nav/>
        <h1>{title}</h1>
        {children}
        <style jsx global>{`
            :root{
                --main-color: #17AD8D;
                --inActive-color:#979797;
                --dark-color: #263C47;
            }
            body{
                font-family:Helvetica, sans-serif;
                padding: 0 30px;
                margin:0;
            }
        `}
    </style>
    </main>
)

export default Layout;