import React, { Component } from 'react'
import Conta from '../templates/Conta'

export default class List extends Component {

  render(){
    const bills = this.props.list.map((conta, key) => {
      return (
          <Conta name={conta.name}
                 value={conta.value}
                 handleRemove={this.props.handleRemove} 
                 key = {key}/>
      )
    })

    return (
      <div className="list list-test">
        <ul className="list-group list-group-flush group">
          { bills }              
        </ul>
      </div>
    )
  }
    
}