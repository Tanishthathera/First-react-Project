import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
const Home = () => {
  return (
    <>
      <div className=" m ">
        <div className="ro ">
          <div className="cola ">
            <h1 className="headinga  ">
              Award-Winning Digital Engineering Company.
            </h1>
            <p className="leada">
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
            <div className="dada gap-2 dmdg justify-content-md-start mb-4 mb-lg-3">
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
          <div className="  overflowhidden ">
            <img className="roundedlg3" src="/image/Asset1.png" alt="Image" />
          </div>
        </div>
      </div>
      <Carousel />
      <Card />
    </>
  );
};

export default Home;
