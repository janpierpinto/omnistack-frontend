import React, { Component } from 'react';
import api from '../../services/Api';

import './styles.css';
import logo from '../../assets/logo.svg';
// import { Container } from './styles';

export default class main extends Component {
  
  state = {
    newBox: "",
  };
  
  handleSubmit = async event => {
    event.preventDefault();    
    const response =  await api.post('boxes', {
      title: this.state.newBox,
    });

    console.log(response.data.data._id);
    this.props.history.push(`/box/${response.data.data._id}`);
  };

  handleInputChange = (event) => {
    this.setState( {newBox: event.target.value} );
  };
  
  render() {
    return (
      <div id="main-container">
        <form onSubmit={this.handleSubmit}>
          <img src={logo} alt=""/>
          <input 
            placeholder="Criar um novo box."
            value={this.state.newBox}
            onChange={this.handleInputChange}
            />
          <button type="submit">Criar</button>
        </form>
      </div> 
    );
  }
}
