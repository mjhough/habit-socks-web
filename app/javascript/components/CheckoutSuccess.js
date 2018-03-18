import React from 'react';

class CheckoutSuccess extends React.Component {
  render() {
    return (
      <section className="imagebg feature-large-7 switchable">
          <div className="background-image-holder"> <img alt="background" src="img/recruitment-4.jpg"> </div>
          <div className="container">
              <div className="row">
                  <div className="col-sm-7 col-md-5">
                      <div className="boxed boxed--lg border--round bg--white">
                          <div className="col-md-10 col-md-offset-1 col-sm-12">
                              <h3>Thanks for your order. It will soon be on it's way!</h3>
                              <p className="lead">Order Details:<br><br></p>
                              <hr className="short">
                              <p>Check out the contact us page to find out how to contact us if you need any help.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}
