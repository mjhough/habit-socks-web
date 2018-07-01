class ChargesController < ApplicationController
  def new
    @quantity = params[:quantity].to_i
    @price = 1600 * @quantity # cents
  end

  def create
    byebug
    customer = Stripe::Customer.create(
      email: params[:email],
      source: params[:stripeToken]
    )

    Stripe::Charge.create(
      customer: customer.id,
      amount: @amount,
      description: 'Habit Socks customer',
      currency: 'aud',
      source: params[:stripeToken]
    )

  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to root_path
  end
end
