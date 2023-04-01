import React, { useState, useEffect } from "react"; 
const axios = require('axios').default;



const Jobs = (props) => {

  
  return (
    <>

<section className="inner_benner">
            <h2>Details</h2>
            <p>Home / Football / Football Match 2022 Tournament</p>

        </section>

        <section className="details pt-0">
        <div className="container">

            <div className="row">
                <div className="col-12">
                    <h2>Football Match 2022 Tournament</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum, magna non semper feugiat,
                        dolor eros dictum nisi.</p>
                </div>
                <div className="col-12">
                    <div className=" overflow-auto">
                        <table className="tournament_detail">
                            <tbody><tr>
                                <th>Date &amp; Time</th>
                                <th>Location</th>
                                <th>Available Slots</th>
                                <th>Action</th>
                            </tr>

                            <tr>

                                <td>11 Jan 2022
                                    <small>
                                        Tue. 9:00am - 10:00am
                                    </small>
                                </td>
                                <td> Location: Lorem Ipsume California </td>
                                <td>Drink (2)</td>
                                <td>
                                    <a href="#" className="active">Joined</a>
                                </td>
                            </tr>
                            <tr>

                                <td>11 Jan 2022
                                    <small>
                                        Tue. 9:00am - 10:00am
                                    </small>
                                </td>
                                <td> Location: Lorem Ipsume California </td>
                                <td>Snacks (5)</td>
                                <td>
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#deno">Join Now</a>
                                </td>
                            </tr>
                            <tr>

                                <td>12 Jan 2022
                                    <small>
                                        Tue. 9:00am - 10:00am
                                    </small>
                                </td>
                                <td> Location: Lorem Ipsume California </td>
                                <td>Drink (3)</td>
                                <td>
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#deno">Join Now</a>
                                </td>
                            </tr>


                        </tbody></table>
                    </div>
                </div>
            </div>

            <div className="row detail_list mt-4">
                <div className="col-12">
                    <h3>
                        Responsibilities
                    </h3>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum, magna non semper
                            feugiat, dolor.</li>
                        <li>Eros dictum nisi, vestibulum ultricies ipsum libero vel sem. Integer rutrum risus lorem,
                            vitae ornare dui ullamcorper eu.</li>
                        <li>Maecenas nisi erat, ornare ac blandit et, scelerisque in urna. Nullam pretium faucibus
                            condimentum. Nam at ex metus. Phasellus egestas metus sed nibh tempus laoreet. Curabitur
                            posuere pharetra lectus, a lobortis leo.</li>
                        <li>Congue in. Quisque ullamcorper, lorem tincidunt molestie sollicitudin, nibh leo viverra
                            enim, quis commodo metus nulla vitae metus. Etiam elementum tellus sit amet dolor pharetra
                            consectetur. Etiam gravida lobortis dapibus. Nam sagittis orci eros, at eleifend ante
                            tincidunt vitae.</li>
                        <li>Praesent accumsan iaculis augue, at gravida sapien. Quisque pretium ex at urna luctus, non
                            vehicula nisi placerat. Aenean lobortis non turpis at rutrum. Mauris posuere aliquet tellus,
                            pharetra pharetra nunc. Pellentesque eu suscipit ante.</li>
                    </ul>

                </div>
                <div className="col-12">
                    <h3>
                        Lorem ipsum
                    </h3>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum, magna non semper
                            feugiat, dolor.</li>
                        <li>Eros dictum nisi, vestibulum ultricies ipsum libero vel sem. Integer rutrum risus lorem,
                            vitae ornare dui ullamcorper eu.</li>
                        <li>Maecenas nisi erat, ornare ac blandit et, scelerisque in urna. Nullam pretium faucibus
                            condimentum. Nam at ex metus. Phasellus egestas metus sed nibh tempus laoreet. Curabitur
                            posuere pharetra lectus, a lobortis leo.</li>
                        <li>Congue in. Quisque ullamcorper, lorem tincidunt molestie sollicitudin, nibh leo viverra
                            enim, quis commodo metus nulla vitae metus. Etiam elementum tellus sit amet dolor pharetra
                            consectetur. Etiam gravida lobortis dapibus. Nam sagittis orci eros, at eleifend ante
                            tincidunt vitae.</li>
                        <li>Praesent accumsan iaculis augue, at gravida sapien. Quisque pretium ex at urna luctus, non
                            vehicula nisi placerat. Aenean lobortis non turpis at rutrum. Mauris posuere aliquet tellus,
                            pharetra pharetra nunc. Pellentesque eu suscipit ante.</li>
                    </ul>

                </div>
            </div>

            <div className="row mt-5">
                <div className="col-12">
                    <h2>
                        The Dallas Cup Coordinates 3,000 Volunteers with SignUpGenius
                    </h2>
                </div>
                <div className="col-md-6">
                    <img src="./images/football.png" className="w-100" alt="" />
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
export default Jobs;

