import React from 'react';
import { HashRouter, Switch, Route  } from 'react-router-dom';
import Home from './Views/home';
import CadastroProduto from './Views/produtos/cadastro';
import ConsultaProduto from './Views/produtos/consulta';

function Rotas () {
    return (
        <Switch>
            <Route exact path="/consulta" component={ConsultaProduto} />
            <Route exact path="/cadastro" component={CadastroProduto} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Home} />
        </Switch>
    )
}

export default Rotas;