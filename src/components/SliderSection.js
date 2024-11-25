import React from 'react'

export const SliderSection = () => {
  return (
    <div>
         {/* Slider section */}
      <section className="slider_section">
        <div id="customCarousel1" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
              </div>
            ))}
          </div>
          <div className="container">
            <ol className="carousel-indicators">
              {Array.from({ length: 3 }).map((_, index) => (
                <li
                  key={index}
                  data-target="#customCarousel1"
                  data-slide-to={index}
                  className={index === 0 ? "active" : ""}
                ></li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  )
}
