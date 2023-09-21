import './checkout.css';

const Checkout = () =>{
        return(
           <div className="checkout section">
                <div className="row">
                    <div className="col-md-8">
                        <div className="checkout-process">
                            <div className="checkout-cart checkout-account">
                                <h4>account</h4>
                                <h5>To place your order now, log in to your existing account or sign up.</h5>
                                <div className="checkout-caption">
                                <button className="btn btn-sm btn-custom"> Have an account? <br/> Log in</button>
                                <button  className="btn btn-sm btn-custom"> New to Kingfood? <br/> SIGN UP</button>
                                </div>
                            </div>
                            <div className="checkout-cart checkout-Delivery">
                                <h4>Delivery Address</h4>
                                <h5>To place your order now, Enter your address.</h5>
                                <div className="checkout-caption">
                                <textarea name="address" className="form-control" rows="1"> </textarea>
                                </div>
                            </div>
                            <div className="checkout-cart checkout-payment">
                                <h4>Payment</h4>
                                <h5>Payment Detail Comes Here</h5>
                                <div className="checkout-caption">
                                    Payment Here....
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="checkout-food-item-detail">
                            item
                        </div>
                    </div>
                </div>
           </div> 
        )
}

export default Checkout;