const Slider = (props) => {
  return (
    <>
      {/*------------Page Footer Start ------------------*/}

      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="./images/banner01.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption banner_caption d-md-block">
              <div className="row justify-content-center">
                <div className="col-xxl-8 col-md-10 col-11">
                  <h1 className="title">
                    <span>Group</span> Organizing
                  </h1>
                  <h1 className="title">Made Easy</h1>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>

                  <a href="http://localhost:3000/register" className="btn">
                    Create Account
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="./images/banner01.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption banner_caption d-md-block">
              <div className="row justify-content-center">
                <div className="col-xxl-8 col-md-10 col-11">
                  <h1 className="title">
                    <span>Group</span> Organizing
                  </h1>
                  <h1 className="title">Made Easy</h1>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>

                  <a href="http://localhost:3000/register" className="btn">
                    Create Account
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./images/banner01.png"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption banner_caption d-md-block">
              <div className="row justify-content-center">
                <div className="col-xxl-8 col-md-10 col-11">
                  <h1 className="title">
                    <span>Group</span> Organizing
                  </h1>
                  <h1 className="title">Made Easy</h1>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>

                  <a href="http://localhost:3000/register" className="btn">
                    Create Account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
export default Slider;
