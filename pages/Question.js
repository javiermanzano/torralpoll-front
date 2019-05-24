import React from 'react';
import Checkbox from '../componentes/checkbox';
import Layout from '../componentes/layout';

const Question = ({autor='author',options=[]}) => {
options= ['option1', 'option2', 'option3'];
    return (
        <Layout title="question">
        <div className="question-page">
            <span>@{autor}</span>
            <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eleifend ligula commodo leo cursus laoreet. Quisque hendrerit consectetur tortor, in auctor libero tincidunt id. Donec malesuada fringilla leo, eget auctor eros varius ut. Phasellus maximus, odio quis volutpat pharetra, libero tortor porttitor justo, nec commodo justo nisl quis nisi. Praesent aliquet nulla quis dolor porta ullamcorper. Nullam imperdiet vitae lacus at accumsan. Vivamus eget est sed urna ultrices sagittis. Nunc tellus sapien, dapibus sit amet dui et, viverra suscipit nisl. Pellentesque quis vehicula nunc. Sed est ante, sagittis quis lorem vitae, condimentum efficitur neque. Integer vitae augue nec sapien posuere suscipit. Sed sit amet elementum arcu.
            </div>
            <ul className="lists">
                {options.map((option,i)=>
                    <Checkbox option={option} key={i}/>
                )}
            </ul>
        </div>
        </Layout>
    )
}

export default Question;