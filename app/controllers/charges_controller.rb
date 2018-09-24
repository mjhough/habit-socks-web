class ChargesController < ApplicationController
  PRICE = 1600 # cents

  def new
    @quantity = params[:quantity].to_i
  end

  def create
    @quantity = params[:quantity].to_i
    @total = PRICE * @quantity

    @user, customer = find_or_create_customer
    order = @user.orders.create(quantity: @quantity, total: @total)

    Stripe::Charge.create(
      customer: @user.stripe_id,
      amount: @total,
      currency: 'aud',
      description: 'Habit Socks',
      source: customer.default_source,
      statement_descriptor: "HABIT SOCKS - #{@quantity} socks",
      metadata: {order_id: order.id},
      receipt_email: @user.email
    )

  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to root_path
  end

  private

  def find_or_create_customer
    if user_params[:stripeEmail] && (user = User.find_by(email: user_params[:stripeEmail])) && user.stripe_id
      user.update(user_params)
      user.save
      customer = Stripe::Customer.retrieve(user.stripe_id)
      customer.source = params[:stripeToken]
      customer.save
    else
      user = User.create(user_params)
      user.email = params[:stripeEmail]
      customer = Stripe::Customer.create(
        email: user.email,
        source: params[:stripeToken]
      )
      user.stripe_id = customer.id
      user.save
    end
    return [user, customer]
  end

  def user_params
    params.require(:user).permit(:name, :address, :state, :country, :zip, :phone_number)
  end
end
