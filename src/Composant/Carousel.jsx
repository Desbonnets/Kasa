import React, { Component } from 'react';
import Image from '../Composant/Image';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  prevSlide = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex - 1 + this.props.images.length) % this.props.images.length,
    }));
  };

  nextSlide = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.props.images.length,
    }));
  };

  render() {
    const { currentIndex } = this.state;

    return (
      <div className="carousel">
        <div className="slides">
          {this.props.images.map((image, index) => (
            // <Image id={index} src={image} alt={`Image ${index + 1}`} className={`${ index === currentIndex ? 'block' : 'none' }`} />
            <img key={index} src={image} alt={`Image ${index + 1}`} style={{ display: index === currentIndex ? 'block' : 'none' }} />
          ))}
        </div>
        <div className="controls">
          <span className={`counter${this.props.images.length === 1 ? ' none' : ''}`}>{currentIndex + 1} / {this.props.images.length}</span>
        </div>
        <button className={`carousel_button button_left${this.props.images.length === 1 ? ' none' : ''}`} onClick={this.prevSlide}><span className='arrow left'></span></button>
        <button className={`carousel_button button_rigth${this.props.images.length === 1 ? ' none' : ''}`} onClick={this.nextSlide}><span className='arrow rigth'></span></button>
      </div>
    );
  }
}

export default Carousel;