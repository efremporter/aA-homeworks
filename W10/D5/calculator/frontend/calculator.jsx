import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {result: 0, num1: "", num2: ""};

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
  }

  setNum1(e) {
    e.preventDefault();
    this.setState({num1: e.target.value});
  }

  setNum2(e) {
    e.preventDefault();
    this.setState({num2: e.target.value});
  }

  add(e) {
    e.preventDefault();
    if (!this.state.num1 || !this.state.num2) return;
    const result = parseInt(this.state.num1) + parseInt(this.state.num2);
    this.setState({result});
  }
  
  subtract(e) {
    e.preventDefault();
    if (!this.state.num1 || !this.state.num2) return;
    const result = parseInt(this.state.num1) - parseInt(this.state.num2);
    this.setState({result});
  }

  multiply(e) {
    e.preventDefault();
    if (!this.state.num1 || !this.state.num2) return;
    const result = parseInt(this.state.num1) * parseInt(this.state.num2);
    this.setState({result});
  }

  divide(e) {
    e.preventDefault();
    if (!this.state.num1 || !this.state.num2) return;
    const result = parseInt(this.state.num1) / parseInt(this.state.num2);
    this.setState({result});
  }

  clear(e) {
    e.preventDefault();
    this.setState({result: 0, num1: "", num2: ""})
  }

  render() {
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input type="text" onChange={this.setNum1} value={this.state.num1}/>
        <input type="text" onChange={this.setNum2} value={this.state.num2}/>
        <button onClick={this.clear.bind(this)}>Clear</button>
        <br />
        <button onClick={this.add.bind(this)}>+</button>
        <button onClick={this.subtract.bind(this)}>-</button>
        <button onClick={this.multiply.bind(this)}>*</button>
        <button onClick={this.divide.bind(this)}>/</button>
      </div>
    );
  }
}

export default Calculator;