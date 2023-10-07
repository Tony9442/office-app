import React from "react";

function Carousel() {
  return (
    <div className="">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-127685,resizemode-1,msid-48489056/wealth/personal-finance-news/new-horizons-in-office-realty-space-3-new-commercial-buildings-are-setting-new-benchmarks.jpg"
              class="d-block w-100"
              alt="..."
              style={{ height: "80vh" }}
            />
          </div>
          <div class="carousel-item active">
            <img
              src="https://businessfirstfamily.com/wp-content/uploads/2015/09/corporate-office-interior-design.jpg"
              class="d-block w-100"
              alt="..."
              style={{ height: "80vh" }}
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://th.bing.com/th/id/R.e5129f8f6e060c9986bd22c1dc368e4f?rik=NrwPhQ1b7sLimw&riu=http%3a%2f%2fpbges.com%2fwp-content%2fuploads%2f2014%2f01%2fOFFICE2.jpg&ehk=JvukGsfoSDM44fpzktYydiRBnw0QS51P0AaYJPuhoak%3d&risl=&pid=ImgRaw&r=0"
              class="d-block w-100"
              alt="..."
              style={{ height: "80vh" }}
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel