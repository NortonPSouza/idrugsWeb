import React from 'react';

export const Seller = () => {
    return(
        <>
            <form className="form">
                <input className="input" type="text" placeholder="Razão Social" />
                <input className="input" type="number" placeholder="CPJN (apenas números)" />
                <input className="input" type="text" placeholder="Digite nome de usuário" />
                <input className="input" type="password" placeholder="Digite uma senha" />
                <input className="input" type="password" placeholder="Confirmar senha" />
                <button className="button" type="button">Cadastar</button>
            </form>

        </>
    )
}