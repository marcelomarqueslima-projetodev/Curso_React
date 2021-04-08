import React from 'react';

class App extends React.Component{

  state = {
    nome : ' '
  }

  modificarNome = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  criaComboBox = () => {
    const opcoes = ["", "Fulano", "Deutrano"]

    const comboBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>)

    return(
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  componentDidMount(){
    console.log('Executou o componentDidMount')
  }

  render(){
    console.log('Executou o render')

    const MeuComboBox = () => this.criaComboBox()
    return (
      /*<React.Fragment>
        <h1>Hello World, {this.state.nome}</h1>
        <h1>Testando</h1>
        <!--{ this.criaComboBox() }-->
      </React.Fragment>*/
      <>
        <input type="text" value={this.state.nome} onChange={this.modificarNome} />
        <h1>Hello World, {this.state.nome}</h1>
        <MeuComboBox />
      </>
    )
  }
}

export default App;