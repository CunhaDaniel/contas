import React from 'react'

// Todo: é possível melhorar esse cara ?
// [x] Remoção de variavel não utilizada 
// [ ] Salvar o método this.state em uma variavel
// [ ] Criar testes

export default () => {
  return(
    <div> 
      <input id="name" type="text" placeholder="Nome" value={this.state.name} onChange={this.handleChangeName}/>
      <input id="value "type="number" placeholder="00.0" value={this.state.value} onChange={this.handleChangeValue}/>
      <button type="button" onClick={this.handleAdd}>+</button>
    </div>
  )
}
