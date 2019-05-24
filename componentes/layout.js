import React from 'react';
import Nav from './navbar';

const Layout = ({title,children, classnames, author='author'}) =>(
    <main className={classnames}>
        <Nav/>
        <div className="title">
            <h1>{title}</h1>
            <span className="author">@Guidesmiths</span>
        </div>
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
            main{
                max-width:800px;
                margin:0 auto;
                margin-top:120px;
                box-sizing:border-box;
                
            }
            .title{
                display:flex;
                margin:20px 0;
            }

            h1{
                text-transform:uppercase;
                font-size:60px;
                margin:0;
               
            }
            .author{
                align-self:flex-end;
                margin-bottom:10px;
                margin-left:20px;
            }
        `}
    </style>
    </main>
)

export default Layout;