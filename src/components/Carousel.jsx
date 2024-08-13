import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + 3) % 3); // 3 is the number of carousel items
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % 3); // 3 is the number of carousel items
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 3000); // switch to next image every 3 seconds
    setIntervalId(intervalId);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      style={{
        position: "relative",
        width: "50%",
        height: "50vh",
        overflow: "hidden",
        margin: "300px",
      }}
    >
      <div
        className="carousel-inner"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // Add this
        }}
      >
        <div
          className={`carousel-item ${currentIndex === 0 ? "active" : ""}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: currentIndex === 0 ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center", // Add this
          }}
        >
          <img
            src="./image/3.jpg"
            className=""
            alt="Image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div
          className={`carousel-item ${currentIndex === 1 ? "active" : ""}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: currentIndex === 1 ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center", // Add this
          }}
        >
          <img
            src="./image/4.jpg"
            className="d-block"
            alt="Image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
        <div
          className={`carousel-item ${currentIndex === 2 ? "active" : ""}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: currentIndex === 2 ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center", // Add this
          }}
        >
          <img
            src="./image/5.jpg"
            className="d-block"
            alt="Image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
        onClick={handlePrevClick}
        style={{
          position: "absolute",
          top: "50%",
          left: 100,
          transform: "translateY(-50%)",
        }}
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
          style={{
            fontSize: "2rem",
          }}
        />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
        onClick={handleNextClick}
        style={{
          position: "absolute",
          top: "50%",
          right: 100,
          transform: "translateY(-50%)",
        }}
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
          style={{
            fontSize: "2rem",
          }}
        />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
