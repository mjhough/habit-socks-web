class ChargesController < ApplicationController
  def new
    @quantity = params[:quantity].to_i
    @price = 1600 * @quantity # cents
    byebug
  end

  def create
    customer = Stripe::Customer.create(
      email: params[:stripeEmail],
      source: params[:stripeToken]
    )

    Stripe::Charge.create(
      customer: customer.id,
      amount: @amount,
      description: 'Habit Socks customer',
      currency: 'aud'
    )

  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to root_path
  end
end
