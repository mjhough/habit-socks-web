import React from 'react';
import postal from 'postal';

class MiniCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      quantity: localStorage.getItem('cart') || 0
    }
  }

  componentDidMount() {
    let subscription = postal.subscribe({
      channel: 'carts',
      topic: 'item.add',
      callback: this.handleStorageChange.bind(this)
    });
    console.log('Subscribing as, ', subscription);
  }

  handleStorageChange(data, env) {
    console.log('Data', data);
    console.log('Env', env);
    this.setState({
      quantity: data.quantity
    });
  }

  handleClick() {
    // TODO: Implement dropdown cart
    window.location.href = 
  }

  render () {
    return (
      <div className='cart--nav' onClick={this.handleClick.bind(this)}>
        <i className='fa fa-shopping-bag cart--nav--icon'></i>
        <span className='cart--number'>{this.state.quantity}</span>
      </div>
    );
  }
}


export default MiniCart;
