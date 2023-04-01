import React, { useState, useEffect } from "react"; 
const axios = require('axios').default;



const JobDetails = (props) => {

  
  return (
    <>
  <section className="inner_benner detail_banner">
            <h2>Details</h2>
            <p>Home /Football Details</p>

        </section>

        <section className="details det_top pt-0">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <img src="./images/detail_banner02.png" className="w-100" alt="" />
                </div>
                <div className="col-21">
                    <h2>
                        Football Match
                    </h2>
                    <h4>
                        We Give You A Challenging And Enjoyable Work Culture.
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum, magna non semper
                        feugiat, dolor eros dictum nisi, vestibulum ultricies ipsum libero vel sem. Integer rutrum risus
                        lorem, vitae ornare dui ullamcorper eu.
                    </p>
                    <p>
                        Maecenas nisi erat, ornare ac blandit et, scelerisque in urna. Nullam pretium faucibus
                        condimentum. Nam at ex metus. Phasellus egestas metus sed nibh tempus laoreet. Curabitur posuere
                        pharetra lectus, a lobortis leo congue in. Quisque ullamcorper, lorem tincidunt molestie
                        sollicitudin, nibh leo viverra enim, quis commodo metus nulla vitae metus.
                    </p>
                    <p>Etiam elementum tellus sit amet dolor pharetra consectetur. Etiam gravida lobortis dapibus. Nam
                        sagittis orci eros, at eleifend ante tincidunt vitae. Praesent accumsan iaculis augue, at
                        gravida sapien. Quisque pretium ex at urna luctus, non vehicula nisi placerat. Aenean lobortis
                        non turpis at rutrum. Mauris posuere aliquet tellus, pharetra pharetra nunc. Pellentesque eu
                        suscipit ante.</p>
                </div>
            </div>

            <div className="row event_tasks g-1">
                <div className="col-12">
                    <h2>
                        Football Event Tasks
                    </h2>
                </div>
                <div className="col-lg-4 col-md-6">
                    <a href="./job_details.html" className="text-decoration-none">
                        <div className="card active">
                            <div className="card_text">
                                <h3>
                                    Football Match 2022 Tournament
                                </h3>
                                <span>
                                    Location: Lorem Ipsume California
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-md-6">
                    <a href="./job_details.html" className="text-decoration-none">
                        <div className="card">
                            <div className="card_text">
                                <h3>
                                    Food truck and sell food / cakes
                                </h3>
                                <span>
                                    Location: Lorem Ipsume California
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-md-6">
                    <a href="./job_details.html" className="text-decoration-none">
                        <div className="card">
                            <div className="card_text">
                                <h3>
                                    Event Coordinator
                                </h3>
                                <span>
                                    Location: Lorem Ipsume California
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-md-6">
                    <a href="./job_details.html" className="text-decoration-none">
                        <div className="card">
                            <div className="card_text">
                                <h3>
                                    Event Coordinator in California
                                </h3>
                                <span>
                                    Location: Lorem Ipsume California
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-md-6">
                    <a href="./job_details.html" className="text-decoration-none">
                        <div className="card">
                            <div className="card_text">
                                <h3>
                                    Executive Administration
                                </h3>
                                <span>
                                    Location: Lorem Ipsume California
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-md-6">
                    <a href="./job_details.html" className="text-decoration-none">
                        <div className="card">
                            <div className="card_text">
                                <h3>Sales Executive in Event Company
                                </h3>
                                <span>
                                    Location: Lorem Ipsume California
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <h2>
                        The Dallas Cup Coordinates 3,000 Volunteers with SignUpGenius
                    </h2>
                </div>
                <div className="col-md-6">
                    <img src="./images/football.png" alt="" />
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <p>Mauris dictum, magna non semper feugiat, dolor eros dictum nisi, vestibulum ultricies ipsum
                            libero vel sem. </p>
                        <p> Integer rutrum risus lorem, vitae ornare dui ullamcorper eu.</p>
                        <p> Maecenas nisi erat, ornare ac blandit et, scelerisque in urna. Nullam pretium faucibus
                            condimentum. </p>
                        <p> Nam at ex metus. Phasellus egestas metus sed nibh tempus </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    

    </>
  );
}
export default JobDetails;

