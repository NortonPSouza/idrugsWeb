import './index.css';
import React, { Component } from 'react';
import Logo from '../../assets/lolgo.png';
import { Request } from './storage';
import { Link } from 'react-router-dom';

export default class Login extends Component {

    constructor(props) {
        super(props);
    }

    onSubmit() {
        Request.get()
            .then(res => res.ok ? res.json() : '')
            .then(res => console.log(res))
    }

    render() {
        return (
            <>
                <div className="card">
                    <div className="card__logo">
                        <img src={Logo} alt="Logo do aplicativo" className="image__logo" />
                    </div>
                    <form className="card__form">
                        <div className="group__input">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person-circle icon__user" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                                <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                <path fillRule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                            </svg>
                            <input type="text" placeholder="e-mail" className="input" />
                        </div>
                        <div className="group__input end__icon">
                            <input type="password" placeholder="senha" className="input" />
                            <svg width="1em" height="1em" viewBox="0 0 18 18" className="bi bi-unlock icon__unlock" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M9.655 8H2.333c-.264 0-.398.068-.471.121a.73.73 0 0 0-.224.296 1.626 1.626 0 0 0-.138.59V14c0 .342.076.531.14.635.064.106.151.18.256.237a1.122 1.122 0 0 0 .436.127l.013.001h7.322c.264 0 .398-.068.471-.121a.73.73 0 0 0 .224-.296 1.627 1.627 0 0 0 .138-.59V9c0-.342-.076-.531-.14-.635a.658.658 0 0 0-.255-.237A1.122 1.122 0 0 0 9.655 8zm.012-1H2.333C.5 7 .5 9 .5 9v5c0 2 1.833 2 1.833 2h7.334c1.833 0 1.833-2 1.833-2V9c0-2-1.833-2-1.833-2zM8.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z" />
                            </svg>
                        </div>
                        <button type="button" className="button" onClick={this.onSubmit.bind(this)}>Entrar</button>
                    </form>
                    <Link to="/register"><h2 className="link">Não tem conta?Basta criar uma aqui</h2></Link>
                </div>
            </>
        );
    }
}
