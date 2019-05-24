import React, {Component} from 'react';
import Checkbox from '../componentes/checkbox';
import Layout from '../componentes/layout';
import Button from '../componentes/button';
import axios from 'axios';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            poll: { options: [] },
        };
    }
    componentDidMount() {
        const { url: { query: { id } } } = this.props;
        console.log('componentDidMount');
        axios
            .get(`https://torralbot-api.herokuapp.com/${id}/details`)
            .then(response => {
                const poll = response.data;
                this.setState({ poll })
            })
            .catch(err => console.log('error', err));
    }
    render() {
        const { url: { query: { id } } } = this.props;
        console.log('this.props', id);
        const options= this.state.poll.options;
        return (
            <Layout title="question" classnames="question-page">
            <div className="page-inner">
           
                <div className="description">
                    {this.state.poll.name}
                </div>
                 <div className="left">
                <ul className="lists">
                    {options.map((option,i)=>
                        <Checkbox option={option.name} key={i}/>
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
}

export default Question;