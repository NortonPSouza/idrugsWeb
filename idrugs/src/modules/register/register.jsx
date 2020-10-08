import './index.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/lolgo.png';
import {Client, Seller} from './index.js';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state={
            typeRegister: ''
        }
    }
    
    selectType(){
        if(this.state.typeRegister == "cliente")
            return <Client/>
        
        else{ 
           return <Seller/>
        }
    }

    render() {
        return (
            <>
                <section className="box">
                   <div className="box__left">
                       <div className="logo__message">
                            <Link to="/"><img src={Logo}/></Link>
                            <h2>Junte-se a nós</h2>
                       </div>
                       <div>
                            <h4>Selecione o tipo de conta que deseja criar</h4>
                            <div className="options" onChange={(e) => this.setState({typeRegister: e.target.value })}>                                
                                <label>
                                <label>
                                    <input 
                                        type="radio" 
                                        name="typeUser" 
                                        value="cliente"
                                    />
                                    Cliente
                                </label>
                                    <input 
                                        type="radio" 
                                        name="typeUser" 
                                        value="comercial"   
                                    />
                                    Comercial
                                </label>                                
                            </div>
                       </div>
                   </div>

                   <div className="box__right">
                       {this.selectType()}
                   </div>
                </section>
            </>

        )
    }
}