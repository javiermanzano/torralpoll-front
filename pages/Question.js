import React, {Component} from 'react';
import Checkbox from '../componentes/checkbox';
import Layout from '../componentes/layout';
import Button from '../componentes/button';
import axios from 'axios';



const Question = ({options=[]}) => {
options= ['option1', 'option2', 'option3'];
    return (
        <Layout title="question" classnames="question-page">
        <div className="page-inner">
       
            <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend ligula commodo leo cursus laoreet. Quisque hendrerit consectetur tortor, in auctor libero tincidunt id. Donec malesuada fringilla leo, eget auctor eros varius ut. Phasellus maximus, odio quis volutpat pharetra, libero tortor porttitor justo, nec commodo justo nisl quis nisi. Praesent aliquet nulla quis dolor porta ullamcorper. Nullam imperdiet vitae lacus at accumsan. Vivamus eget est sed urna ultrices sagittis. Nunc tellus sapien, dapibus sit amet dui et, viverra suscipit nisl. Pellentesque quis vehicula nunc. Sed est ante, sagittis quis lorem vitae, condimentum efficitur neque. Integer vitae augue nec sapien posuere suscipit. Sed sit amet elementum arcu.
            </div>
             <div className="left">
            <ul className="lists">
                {options.map((option,i)=>
                    <Checkbox option={option} key={i}/>
                )}
            </ul>
            </div>
            <div className="submit-button">
                <Button name='close'/>
                <Button name='submit'/>
            </div>
        </div>
        <style jsx>{`
       
        ul{
            padding:0;
            margin:0;
            padding-left: 20px;
            margin-top:30px;
        }
        .submit-button{
            text-align: right;
            margin-top:50px;
        }
        .left{
            width:60%;
        }
        .page-inner{
            max-width:800px;
            margin:0 auto;
        }
      `}
      </style>
        </Layout>
    )
}

export default Question;