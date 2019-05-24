import React from 'react';
import Input from '../componentes/input';
import Button from '../componentes/button';
import Checkbox from '../componentes/checkbox';

const CreatePolling = () => (
    <div className="create-polling-page">
        <div className="page-inner">
            <Input title='question' />
            <Input title='description' />
            <div>
            <Input title='choices' num={4} />
            </div>
            <div className="add-button button-container">
                <Button name='add more choice' />
            </div>
            <div className="options">
                <h3>OPTIONS</h3>
                <div className="option-section">
                    <div className="divider" />
                    <Checkbox option='Single Choice'/>
                    <Checkbox option='Mutiple Choice'/>
                </div>
                <div className="option-section">
                    <div className="divider" />
                    <Checkbox option='secret ballot'/>
                    <Checkbox option='open ballot'/>
                </div>
                <div className="option-section">
                    <div className="divider" />
                    <Checkbox option='set active time'/>
                </div>
            </div>
            <div className="create-preview-button button-container">
                <Button name='preview'/>
                <Button name='create'/>
            </div>
        </div>
        
      <style jsx >{`
            .create-polling-page{
                margin:0 auto;
            }
            .page-inner{
                width:80%;
                box-sizing:border-box;
                margin:0 auto;
                max-width:800px;
            }
            .add-button{
                text-align:center;
            }
            .create-preview-button{
                text-align:right;
            }
            .button-container{
                margin-right:-10px;
            }
            .button-container:last-child{
                margin-top:30px;
            }
            .divider{
                height:1px;
                background:var(--inActive-color);
            }
        `}
    </style>
    </div>
)

export default CreatePolling