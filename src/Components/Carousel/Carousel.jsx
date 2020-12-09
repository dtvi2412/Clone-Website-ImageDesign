import React, { useEffect } from 'react';
import './Carousel.css';
function Carousel() {
  //NEXT IMAGE
  let index = 0;
  const next = () => {
    let img = document.querySelectorAll('.carousel__background');
    const width = 100;

    if (index < img.length - 1) {
      index++;
    } else {
      index = 0;
    }
    img.forEach((listImage) => {
      listImage.style.transform = `translateY(-${width * index}%)`;
    });
  };
  useEffect(() => {
    setInterval(() => {
      next();
    }, 5000);
  }, []);

  // useEffect(() => {
  //   let container = document.getElementById('slider');
  //   let index = 0;
  //   let width = 100;
  //   function next() {
  //     index++;

  //     container.style.transform = `translateY(-${width * index})%`;
  //   }
  //   next();
  //   setInterval(() => {
  //     next();
  //   }, 3000);
  // });

  return (
    <div className="carousel">
      <div className="carousel__backgrounds">
        <div className="carousel__background" id="slider">
          <div className="carousel__background__text">
            <p>THE LATEST FROM IDC</p>
            <h1>CHECK OUT OUR BLOG</h1>
            <button>FIND OUT MORE</button>
          </div>
          <img
            className="carousel__background__img"
            src="https://imagedesigncustom.co.uk/assets/uploads/images/_1920x800_fit_center-center_75_none/image3_2020-08-19-084757.jpeg"
            alt="carousel"
          />
        </div>
        <div className="carousel__background">
          <div className="carousel__background__text">
            <p>IT ALL STARTS WITH AN IDEA...</p>
            <h1>HELMET PAINT</h1>
            <button>FIND OUT MORE</button>
          </div>
          <img
            className="carousel__background__img"
            src="https://imagedesigncustom.co.uk/assets/uploads/images/_1920x800_fit_center-center_75_none/Layer-986-1.jpg"
            alt="carousel"
          />
        </div>
        <div className="carousel__background">
          <div className="carousel__background__text">
            <p>BAD TO THE BONE</p>
            <h1>MOTORCYCLE GALLERY</h1>
            <button>FIND OUT MORE</button>
          </div>
          <img
            className="carousel__background__img"
            src="https://imagedesigncustom.co.uk/assets/uploads/images/_1920x800_fit_center-center_75_none/DSC01942-copy.jpg"
            alt="carousel"
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
