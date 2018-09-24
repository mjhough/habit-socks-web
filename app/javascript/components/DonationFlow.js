import React from 'react';
import postal from 'postal';
import Checkout from './Checkout';
import DonationSuccess from './DonationSuccess';

export default class DonationFlow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: null,
      success: false
    }
  }

  notice() {
    alert('Unfortunately, while Habit Socks waits for the result of our registered charity application, we cannot accept donations');
  }

  componentDidMount() {
    postal.subscribe({
      channel: 'checkout',
      topic: 'checkout.success',
      callback: this.checkoutSuccess.bind(this)
    });
  }

  checkoutSuccess(data, env) {
    const checkoutData = JSON.parse(data.data).success;
    if (checkoutData.status === 'paid') this.setState({
      success: true,
      checkoutData: checkoutData
    });
  }

  handleChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }
  
  render() {
    if (this.state.success) {
      const customerName = this.state.checkoutData.shipping.name.split(' ')[0];
      return (
        <DonationSuccess customerName={customerName} />
      )
    }
    return (
      <section className='switchable'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6 col-md-5'>
              <div className='switchable__text'>
                <h2>You are an awesome person!</h2>
                <p className='lead'>By donating you are helping provide children around Australia the tools they need to become future world changers. Thank you!</p>
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='bg--secondary boxed boxed--border boxed--lg'>
                <form>
                  <input className='validate-required dollar-input' type='number' name='amount' placeholder='Donation Amount' onChange={this.handleChange.bind(this)} />
                  <textarea className='top-margin-10' name='comment' placeholder='Write a small comment here if you would like to' />
                  <a onClick={this.notice} className='btn btn--primary type--uppercase top-margin-10'><span className='btn__text'>Donate to Habit Socks</span></a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}


  /* <Checkout name='Donation' description='Donate to Habit Socks' amount={this.state.amount} label='Donate to Habit Socks' buttonClassName='btn btn--primary type--uppercase top-margin-10' /> */
