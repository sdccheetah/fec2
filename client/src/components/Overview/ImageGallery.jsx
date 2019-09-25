const React = require("react");
const Carousel = require("react-bootstrap/Carousel");

const ImageGallery = props => {
  const cropImage = {
    width: "775px",
    height: "550px",
    objectFit: "cover"
  };
  return (
    <div style={{ overflow: "hidden", marginTop: "20px", width: "775px" }}>
      <Carousel wrap={true}>
        <Carousel.Item>
          <img
            style={cropImage}
            src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={cropImage}
            src="https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={cropImage}
            src="https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

module.exports = ImageGallery;
