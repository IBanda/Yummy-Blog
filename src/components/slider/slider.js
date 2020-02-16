import React from "react";
import Slider from "react-slick";
import Slide from "./slide";
import settings from "./settings";
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
          <Slide image={"images/slide-1.jpg"} />
          <Slide image={"images/slide-2.jpg"} />
          <Slide image={"images/slide-3.jpg"} />
          <Slide image={"images/slide-4.jpg"} />
          <Slide image={"images/slide-1.jpg"} />
          <Slide image={"images/slide-2.jpg"} />
          <Slide image={"images/slide-3.jpg"} />
          <Slide image={"images/slide-4.jpg"} />
        </Slider>
        <button onClick={this.nextSlide} className="next"></button>
      </div>
    );
  }
}
