import React from 'react';

export const Client = () => {
    return(
        <>
            <form className="form">
                <input className="input" type="text" placeholder="Nome Completo" />
                <input className="input" type="number" placeholder="CPF (apenas números)" />
                <input className="input" type="email" placeholder="Digite seu e-mail" />
                <input className="input" type="text" placeholder="Digite nome de usuário" />
                <input className="input" type="password" placeholder="Digite uma senha" />
                <input className="input" type="password" placeholder="Confirmar senha" />
                <button className="button" type="button">Cadastar</button>
            </form>

        </>
    )
}