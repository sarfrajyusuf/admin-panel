import React, { useState, useEffect } from "react"; 
const axios = require('axios').default;



const Faq = (props) => {

  
  return (
    <>

<section className="inner_benner">
            <h2>FAQ’s</h2>
            <p>Home / Resources &amp; Tips / FAQ’s</p>

        </section>

        <section className="faq">
        <div className="container">
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
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-heading12">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse12" aria-expanded="false" aria-controls="flush-collapse12">
                                    What days of the week will you be doing storage
                                    pickups during move out week?
                                    <span className="accordion_icon">
                                        <i className="fa-solid fa-plus"></i>
                                        <i className="fa-solid fa-minus"></i>
                                    </span>
                                </button>
                            </h2>
                            <div id="flush-collapse12" className="accordion-collapse collapse" aria-labelledby="flush-heading12" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">We will be picking up 7 days a week during peak move out
                                    times, which are generally the week of finals and one week after that. </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-heading13">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse13" aria-expanded="false" aria-controls="flush-collapse13">
                                    What days of the week will you be doing storage
                                    pickups during move out week?
                                    <span className="accordion_icon">
                                        <i className="fa-solid fa-plus"></i>
                                        <i className="fa-solid fa-minus"></i>
                                    </span>
                                </button>
                            </h2>
                            <div id="flush-collapse13" className="accordion-collapse collapse" aria-labelledby="flush-heading13" data-bs-parent="#accordionFlushExample">
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
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-heading14">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse14" aria-expanded="false" aria-controls="flush-collapse14">
                                    What days of the week will you be doing storage
                                    pickups during move out week?
                                    <span className="accordion_icon">
                                        <i className="fa-solid fa-plus"></i>
                                        <i className="fa-solid fa-minus"></i>
                                    </span>
                                </button>
                            </h2>
                            <div id="flush-collapse14" className="accordion-collapse collapse" aria-labelledby="flush-heading14" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">We will be picking up 7 days a week during peak move out
                                    times, which are generally the week of finals and one week after that. </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-heading15">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse15" aria-expanded="false" aria-controls="flush-collapse15">
                                    What days of the week will you be doing storage
                                    pickups during move out week?
                                    <span className="accordion_icon">
                                        <i className="fa-solid fa-plus"></i>
                                        <i className="fa-solid fa-minus"></i>
                                    </span>
                                </button>
                            </h2>
                            <div id="flush-collapse15" className="accordion-collapse collapse" aria-labelledby="flush-heading15" data-bs-parent="#accordionFlushExample">
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
export default Faq;

