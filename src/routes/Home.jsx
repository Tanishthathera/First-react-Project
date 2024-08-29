import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
const Home = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="heading display-4 fw-bold lh-1 ">
              Award-Winning Digital Engineering Company.
            </h1>
            <p className="lead">
              We design and deliver digital experiences, and software products
              and reinvent your applications, infrastructure and processes for
              greater agility by taking full advantage of Blockchain, Generative
              AI, Automation and Cloud.
            </p>

            <p className="l2">
              {" "}
              With a boutique mindset, we love working with start-ups as well as
              enterprises alike.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <Link className="acttion_button" to="/contact-us">
                <button
                  type="button"
                  className="btn btn-outline-info"
                  onClick={() => console.log("clicked")}
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img className="rounded-lg-3" src="/image/Asset1.png" alt="Image" />
          </div>
        </div>
      </div>
      <Carousel />
      <Card />
    </>
  );
};

export default Home;
