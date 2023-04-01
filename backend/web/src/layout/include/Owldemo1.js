import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";

const options = {
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
};

export class Owldemo1 extends Component {
  render() {
    return (
      <>
            
        <div class="container-fluid">
          <OwlCarousel
            items={5}
            id="app_cloud"
            className="owl-theme app_cloud"
            {...options}
            loop
            nav
            margin={10}
            dots={false}
          >
            <div className="item">
              <img src="./images/dugger01.png" alt="" />
              <h4 className="active">Fundraising</h4>
            </div>

            <div className="item">
              <img src="./images/dugger02.png" alt="" />
              <h4>School Activity</h4>
            </div>

            <div className="item">
              <img src="./images/dugger03.png" alt="" />
              <h4>Social Activity</h4>
            </div>
            <div className="item">
              <img src="./images/dugger04.png" alt="" />
              <h4>Office Event</h4>
            </div>
            <div className="item">
              <img src="./images/dugger05.png" alt="" />
              <h4>Home Event</h4>
            </div>
            <div className="item">
              <img src="./images/dugger01.png" alt="" />
              <h4>Fundraising</h4>
            </div>
            <div className="item">
              <img src="./images/dugger02.png" alt="" />
              <h4>School Activity</h4>
            </div>
            <div className="item">
              <img src="./images/dugger03.png" alt="" />
              <h4>Social Activity</h4>
            </div>
            <div className="item">
              <img src="./images/dugger04.png" alt="" />
              <h4>Office Event</h4>
            </div>
            <div className="item">
              <img src="./images/dugger05.png" alt="" />
              <h4>Home Event</h4>
            </div>
            <div className="item">
              <img src="./images/dugger01.png" alt="" />
              <h4>Fundraising</h4>
            </div>
            <div className="item">
              <img src="./images/dugger02.png" alt="" />
              <h4>School Activity</h4>
            </div>
            <div className="item">
              <img src="./images/dugger03.png" alt="" />
              <h4>Social Activity</h4>
            </div>
            <div className="item">
              <img src="./images/dugger04.png" alt="" />
              <h4>Office Event</h4>
            </div>
            <div className="item">
              <img src="./images/dugger05.png" alt="" />
              <h4>Home Event</h4>
            </div>
          </OwlCarousel>
        </div>
      </>
    );
  }
}

export default Owldemo1;
