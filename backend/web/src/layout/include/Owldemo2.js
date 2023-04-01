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
      items: 3,
    },
  },
};

export class Owldemo2 extends Component {
  render() {
    return (
      <>
       
        <div class="container-fluid">
          <OwlCarousel
            items={3}
            id="testimonials"
            className="owl-theme testimonials"
            {...options}
            loop
            nav={false}
            margin={10}
          >
            <div className="item">
              <div className="card">
                <img src="./images/comma_icons.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris dictum, magna non semper feugiat.
                </p>
              </div>
            </div>

            <div className="item">
              <div className="card">
                <img src="./images/comma_icons.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris dictum, magna non semper feugiat.Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>

            <div className="item">
              <div className="card">
                <img src="./images/comma_icons.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris dictum, magna non semper feugiat.Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Mauris dictum, magna non semper
                  feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.{" "}
                </p>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img src="./images/comma_icons.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris dictum, magna non semper feugiat.
                </p>
              </div>
            </div>

            <div className="item">
              <div className="card">
                <img src="./images/comma_icons.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris dictum, magna non semper feugiat.Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>

            <div className="item">
              <div className="card">
                <img src="./images/comma_icons.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris dictum, magna non semper feugiat.Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Mauris dictum, magna non semper
                  feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.{" "}
                </p>
              </div>
            </div>
            <div className="item">
              <div className="card">
                <img src="./images/comma_icons.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris dictum, magna non semper feugiat.
                </p>
              </div>
            </div>

            <div className="item">
              <div className="card">
                <img src="./images/comma_icons.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris dictum, magna non semper feugiat.Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>

            <div className="item">
              <div className="card">
                <img src="./images/comma_icons.png" alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris dictum, magna non semper feugiat.Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Mauris dictum, magna non semper
                  feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.{" "}
                </p>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </>
    );
  }
}

export default Owldemo2;
