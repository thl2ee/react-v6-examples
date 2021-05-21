import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0
  };

  static defaultProps = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg']
  }

  render() {
    const {
      active } = this.state; // mutable changable but we have modify within Carousel itself
    const { images } = this.props; // coming from parent, read-only (parent can only modify the state)
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, idx) => (
            <img
              key={photo}
              src={photo}
              className={idx === active ? "active" : ""}
              alt="animal thumbnail" />
          ))}
        </div>
      </div>
    );
  }
}

Carousel.defaultProps;

export default Carousel;