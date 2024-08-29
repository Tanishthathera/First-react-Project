const Card = () => {
  return (
    <div className="row-1">
      <div className="col">
        <div className="services">
          <p className="para">
            Software and <br></br> Hi-Tech
          </p>
          <picture className="service-img">
            {/* <source
              type="image/webp"
              srcset="images/services/services-1.webp"
              alt="Software and Hi-Tech Application Development | Systango"
            /> */}
            <img
              src="https://systango-website.s3.ap-south-1.amazonaws.com/assets/images/services/services-1.png"
              alt="Software and Hi-Tech Application Development | Systango"
            />
          </picture>
        </div>
      </div>
      <div className="col ">
        <div className="services">
          <p className="para">
            Financial Services <br></br> and Banking
          </p>
          <picture className="service-img">
            {/* <source
              type="image/webp"
              srcset="images/services/services-2.webp"
              alt="Financial Services and Banking App Development | Systango"
            /> */}
            <img
              src="https://systango-website.s3.ap-south-1.amazonaws.com/assets/images/services/services-2.png"
              alt="Financial Services and Banking App Development | Systango"
            />
          </picture>
        </div>
      </div>
      <div className="col ">
        <div className="services">
          <p className="para ">
            Consumer and <br></br> Commerce
          </p>
          <picture className="service-img">
            {/* <source
              type="image/webp"
              srcset="images/services/services-3.webp"
              alt="Consumer and Commerce App Development | Systango"
            /> */}
            <img
              src="https://systango-website.s3.ap-south-1.amazonaws.com/assets/images/services/services-3.png"
              alt="Consumer and Commerce App Development | Systango"
            />
          </picture>
        </div>
      </div>
      <div className="col ">
        <div className="services">
          <p className="para ">
            Legal <br></br> Tech
          </p>
          <picture className="service-img">
            {/* <source
              type="image/webp"
              srcset="images/services/services-4.webp"
              alt="Legal Tech Application Development | Systango"
            /> */}
            <img
              src="https://systango-website.s3.ap-south-1.amazonaws.com/assets/images/services/services-4.png"
              alt="Legal Tech Application Development | Systango"
            />
          </picture>
        </div>
      </div>
      <div className="col ">
        <div className="services">
          <p className="para">
            Fantasy <br></br> Sports
          </p>
          <picture className="service-img">
            {/* <source
              type="image/webp"
              srcset="images/services/services-5.webp"
              alt="Fantasy Sports App Development | Systango"
            /> */}
            <img
              src="https://systango-website.s3.ap-south-1.amazonaws.com/assets/images/services/services-5.png"
              alt="Fantasy Sports App Development | Systango"
            />
          </picture>
        </div>
      </div>
      <div className="col ">
        <div className="services">
          <p className="para">
            Property <br></br> Tech
          </p>
          <picture className="service-img">
            {/* <source
              type="image/webp"
              srcset="images/services/services-6.webp"
              alt="Property Tech App Development | Systango"
            /> */}
            <img
              src="https://systango-website.s3.ap-south-1.amazonaws.com/assets/images/services/services-6.png"
              alt="Property Tech App Development | Systango"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Card;
