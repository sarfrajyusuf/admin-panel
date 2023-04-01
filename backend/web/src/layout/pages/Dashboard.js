import React, { useState, useEffect } from "react"; 
const axios = require('axios').default;



const Dashboard = (props) => {

  
  return (
    <>

    
<section className="inner_benner">
            <h2>My Dashboard</h2>
            <p>Home / My Dashboard</p>

        </section>

        <section className="pera">
        <div className="container">
            <div id="wrap">

                <div id='calendar'></div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h2>Football Match 2022 Tournament</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum, magna non semper feugiat,
                        dolor eros dictum nisi.</p>
                </div>
                <div className="col-12">
                    <table className="tournament_detail">
                        <tbody>
                            <tr>
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
                                    <a href="#" className="active">Completed</a>
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
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#deno">Complete</a>
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
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#deno">Complete</a>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>

    <div className="modal fade login_model done_modal" id="deno" data-bs-backdrop="static" data-bs-keyboard="false"
        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog d-flex align-items-center h-100 modal-sm" role="document">
            <div className="modal-content bg-transparent mx-auto border-0">
                <div className="modal-body p-0">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fa fa-close"></i></span>
                    </button>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="cards text-center pt-4  px-3 pb-1 bg-white rounded">
                                <img src="./images/done.png" className="done_img" alt="" />
                                <h3 className="mt-3">Thank You</h3>
                                <p className="text-muted">Your Task has been successfully
                                    completed. You eared 500 points.</p>
                                <button className="btn text-decoration-none text-white mx-auto mb-4" data-bs-dismiss="modal">
                                    View Total Points
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>


    </>
  );
}
export default Dashboard;

