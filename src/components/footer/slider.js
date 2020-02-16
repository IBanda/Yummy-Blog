import React from "react";
import Slider from "react-slick";
import Slide from "./slide";
import settings from "./settings";
const bgImages = [
  "images/footer-img1.jpg",
  "images/footer-img2.jpg",
  "images/footer-img3.jpg",
  "images/footer-img4.jpg",
  "images/footer-img5.jpg",
  "images/footer-img6.jpg",
  "images/footer-img1.jpg",
  "images/footer-img2.jpg",
  "images/footer-img3.jpg",
  "images/footer-img4.jpg",
  "images/footer-img5.jpg",
  "images/footer-img6.jpg"
];

export default class MainSLide extends React.Component {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }
  nextSlide() {
    this.slider.current.slickNext();
  }
  prevSlide() {
    this.slider.current.slickPrev();
  }
  render() {
    return (
      <div className="slider-wrapper">
        <button onClick={this.prevSlide} className="prev"></button>
        <Slider ref={this.slider} {...settings}>
          {bgImages.map((image, index) => (
            <Slide key={index} image={image} />
          ))}
        </Slider>
        <button onClick={this.nextSlide} className="next"></button>
      </div>
    );
  }
}
