import React from 'react';
import Checkout from './Checkout';

export default class DonationFlow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { amount: 5 }
  }

  handleChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value });
  }
  
  render() {
    return (
      <section className='switchable'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6 col-md-5'>
              <div className='switchable__text'>
                <h2>You are an awesome person!</h2>
                <p className='lead'>By donating you are helping provide children around Australia with the tools they need to become future world changers. Thank you!</p>
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='bg--secondary boxed boxed--border boxed--lg'>
                <form>
                  <input className='validate-required dollar-input' type='number' name='amount' placeholder='Donation Amount' onChange={this.handleChange.bind(this)} />
                  <textarea className='top-margin-10' name='comment' placeholder='Write a small comment here if you would like to' />
                  <Checkout name='Donation' description='Donate to Habit Socks' amount={this.state.amount} label='Donate to Habit Socks' buttonClassName='btn btn--primary type--uppercase top-margin-10' />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
