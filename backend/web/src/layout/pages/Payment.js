import React, { useState, useEffect } from "react"; 
const axios = require('axios').default;



const Payment = (props) => {

  
  return (
    <>

<section className="inner_benner">
            <h2>Payment</h2>
            <p>Home / Payment</p>

        </section>
        <section id="payment">
        <div className="container">
            <div className="row gy-3">
                <div className="col-md-6">
                    <div className="cards h-100 rounded d-flex justify-content-center align-items-center">
                        <div className="text-center pay_card_img">
                            <img src="./images/pay_card.png" alt="" />
                            <h6 className="mt-4">
                                There is no saved card.
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="cards rounded px-md-5 px-2 py-md-5 py-2">
                        <div className="add_cart">
                            <h3>
                                Add Card
                            </h3>
                            <form action="">
                                <div className="form-group">
                                    <label for="">
                                        Name On Card
                                    </label>
                                    <input type="text" placeholder="Enter Name" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="">
                                        Your Name*
                                    </label>
                                    <input type="text" placeholder="Your Name*" className="form-control" />
                                </div>

                                <div className="row mt-3 gy-2">
                                    <div className="col-9 ">
                                        <label for="text" className="m-0 w-100"> Expiry </label>
                                        <div className="row input-group">
                                            <div className="col-6"> <input type="text" className="form-control" placeholder="MM" /></div>
                                            <div className="col-6"> <input type="text" className="form-control" placeholder="YYYY" /></div>
                                        </div>



                                    </div>
                                    <div className="col-3">
                                        <label for="text" className="m-0 m"> CVV </label>
                                        <input type="text" placeholder="XXX" className="form-control" />
                                    </div>
                                </div>

                                <a href="./payment02.html" className="submit text-decoration-none text-white mb-5 mt-3">
                                    Add Card
                                </a>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
<section className="faq faq_bg py-5">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-9 faq_header text-center">
                    <h3>FAQ's</h3>
                    <p>Lorem ipsum dolor sit amet. consectetur adipiscing elit, Mauris dictum, magna non semper
                        feugiat, dolor eros dictum nisi, vestibulum .</p>
                </div>
            </div>


            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="row">
                    <div className="col-md-6">

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-heading01">
                                <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse01" aria-expanded="false" aria-controls="flush-collapse01">
                                    What days of the week will you be doing storage
                                    pickups during move out week?
                                    <span className="accordion_icon">
                                        <i className="fa-solid fa-plus"></i>
                                        <i className="fa-solid fa-minus"></i>
                                    </span>
                                </button>
                            </h2>
                            <div id="flush-collapse01" className="accordion-collapse collapse show" aria-labelledby="flush-heading01" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">We will be picking up 7 days a week during peak move out
                                    times, which are generally the week of finals and one week after that. </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-heading02">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse02" aria-expanded="false" aria-controls="flush-collapse02">
                                    What days of the week will you be doing storage
                                    pickups during move out week?
                                    <span className="accordion_icon">
                                        <i className="fa-solid fa-plus"></i>
                                        <i className="fa-solid fa-minus"></i>
                                    </span>
                                </button>
                            </h2>
                            <div id="flush-collapse02" className="accordion-collapse collapse" aria-labelledby="flush-heading02" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">We will be picking up 7 days a week during peak move out
                                    times, which are generally the week of finals and one week after that. </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-heading03">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse03" aria-expanded="false" aria-controls="flush-collapse03">
                                    What days of the week will you be doing storage
                                    pickups during move out week?
                                    <span className="accordion_icon">
                                        <i className="fa-solid fa-plus"></i>
                                        <i className="fa-solid fa-minus"></i>
                                    </span>
                                </button>
                            </h2>
                            <div id="flush-collapse03" className="accordion-collapse collapse" aria-labelledby="flush-heading03" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">We will be picking up 7 days a week during peak move out
                                    times, which are generally the week of finals and one week after that. </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-heading04">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse04" aria-expanded="false" aria-controls="flush-collapse04">
                                    What days of the week will you be doing storage
                                    pickups during move out week?
                                    <span className="accordion_icon">
                                        <i className="fa-solid fa-plus"></i>
                                        <i className="fa-solid fa-minus"></i>
                                    </span>
                                </button>
                            </h2>
                            <div id="flush-collapse04" className="accordion-collapse collapse" aria-labelledby="flush-heading04" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">We will be picking up 7 days a week during peak move out
                                    times, which are generally the week of finals and one week after that. </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-heading05">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse05" aria-expanded="false" aria-controls="flush-collapse05">
                                    What days of the week will you be doing storage
                                    pickups during move out week?
                                    <span className="accordion_icon">
                                        <i className="fa-solid fa-plus"></i>
                                        <i className="fa-solid fa-minus"></i>
                                    </span>
                                </button>
                            </h2>
                            <div id="flush-collapse05" className="accordion-collapse collapse" aria-labelledby="flush-heading05" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">We will be picking up 7 days a week during peak move out
                                    times, which are generally the week of finals and one week after that. </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-heading06">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse06" aria-expanded="false" aria-controls="flush-collapse06">
                                    What days of the week will you be doing storage
                                    pickups during move out week?
                                    <span className="accordion_icon">
                                        <i className="fa-solid fa-plus"></i>
                                        <i className="fa-solid fa-minus"></i>
                                    </span>
                                </button>
                            </h2>
                            <div id="flush-collapse06" className="accordion-collapse collapse" aria-labelledby="flush-heading06" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">We will be picking up 7 days a week during peak move out
                                    times, which are generally the week of finals and one week after that. </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-heading07">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse07" aria-expanded="false" aria-controls="flush-collapse07">
                                    What days of the week will you be doing storage
                                    pickups during move out week?
                                    <span className="accordion_icon">
                                        <i className="fa-solid fa-plus"></i>
                                        <i className="fa-solid fa-minus"></i>
                                    </span>
                                </button>
                            </h2>
                            <div id="flush-collapse07" className="accordion-collapse collapse" aria-labelledby="flush-heading07" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">We will be picking up 7 days a week during peak move out
                                    times, which are generally the week of finals and one week after that. </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-heading08">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse08" aria-expanded="false" aria-controls="flush-collapse08">
                                    What days of the week will you be doing storage
                                    pickups during move out week?
                                    <span className="accordion_icon">
                                        <i className="fa-solid fa-plus"></i>
                                        <i className="fa-solid fa-minus"></i>
                                    </span>
                                </button>
                            </h2>
                            <div id="flush-collapse08" className="accordion-collapse collapse" aria-labelledby="flush-heading08" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">We will be picking up 7 days a week during peak move out
                                    times, which are generally the week of finals and one week after that. </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-heading09">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse09" aria-expanded="false" aria-controls="flush-collapse09">
                                    What days of the week will you be doing storage
                                    pickups during move out week?
                                    <span className="accordion_icon">
                                        <i className="fa-solid fa-plus"></i>
                                        <i className="fa-solid fa-minus"></i>
                                    </span>
                                </button>
                            </h2>
                            <div id="flush-collapse09" className="accordion-collapse collapse" aria-labelledby="flush-heading09" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">We will be picking up 7 days a week during peak move out
                                    times, which are generally the week of finals and one week after that. </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-heading10">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse10" aria-expanded="false" aria-controls="flush-collapse10">
                                    What days of the week will you be doing storage
                                    pickups during move out week?
                                    <span className="accordion_icon">
                                        <i className="fa-solid fa-plus"></i>
                                        <i className="fa-solid fa-minus"></i>
                                    </span>
                                </button>
                            </h2>
                            <div id="flush-collapse10" className="accordion-collapse collapse" aria-labelledby="flush-heading10" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">We will be picking up 7 days a week during peak move out
                                    times, which are generally the week of finals and one week after that. </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-heading11">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse11" aria-expanded="false" aria-controls="flush-collapse11">
                                    What days of the week will you be doing storage
                                    pickups during move out week?
                                    <span className="accordion_icon">
                                        <i className="fa-solid fa-plus"></i>
                                        <i className="fa-solid fa-minus"></i>
                                    </span>
                                </button>
                            </h2>
                            <div id="flush-collapse11" className="accordion-collapse collapse" aria-labelledby="flush-heading11" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">We will be picking up 7 days a week during peak move out
                                    times, which are generally the week of finals and one week after that. </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}
export default Payment;

