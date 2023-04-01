import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";

const options = {
  responsive: {
      0: {
        items: 1
    },
    600: {
        items: 3
    },
    1000: {
        items: 4
    }
  },
};

export class Owldemo3 extends Component {
  render() {
    return (
      <>
        <div class="container-fluid">
          <OwlCarousel
            items={3}
            id="trusted"
            className="owl-carousel owl-theme"
            {...options}
            loop={false}
            nav={true}
            dots={false}
            margin={10}
          >
            <div className="item">
              <h4>
                <img src="./images/img_01.png" alt="" />
              </h4>
            </div>
            <div className="item">
              <h4>
                <img src="./images/img_02.png" alt="" />
              </h4>
            </div>
            <div className="item">
              <h4>
                <img src="./images/img_03.png" alt="" />
              </h4>
            </div>
            <div className="item">
              <h4>
                <img src="./images/img_04.png" alt="" />
              </h4>
            </div>
            <div className="item">
              <h4>
                <img src="./images/img_05.png" alt="" />
              </h4>
            </div>
            <div className="item">
              <h4>
                <img src="./images/img_01.png" alt="" />
              </h4>
            </div>
            <div className="item">
              <h4>
                <img src="./images/img_02.png" alt="" />
              </h4>
            </div>
            <div className="item">
              <h4>
                <img src="./images/img_03.png" alt="" />
              </h4>
            </div>
            <div className="item">
              <h4>
                <img src="./images/img_04.png" alt="" />
              </h4>
            </div>
            <div className="item">
              <h4>
                <img src="./images/img_05.png" alt="" />
              </h4>
            </div>
            <div className="item">
              <h4>
                <img src="./images/img_01.png" alt="" />
              </h4>
            </div>
            <div className="item">
              <h4>
                <img src="./images/img_02.png" alt="" />
              </h4>
            </div>
          </OwlCarousel>
        </div>
      </>
    );
  }
}

export default Owldemo3;
