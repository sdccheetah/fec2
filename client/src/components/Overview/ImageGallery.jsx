const React = require("react");
const Carousel = require("react-bootstrap/Carousel");
const { GlassMagnifier } = require("react-image-magnifiers");

const ImageGallery = ({
  initialProduct,
  styles,
  pictureIndex,
  handleSelect,
  handleExpand,
  expandedView
}) => {
  const cropImage = {
    width: "100%",
    height: "600px",
    objectFit: "cover",
    cursor: "zoom-in"
  };

  const magnifyCrop = {
    height: "50%",
    width: "100%",
    justifyContent: "center",
    display: "flex",
    alignItems: "center"
  };

  const handleClick = () => {
    handleExpand();
  };

  return (
    <div>
      <Carousel
        wrap={true}
        activeIndex={pictureIndex}
        onSelect={handleSelect}
        style={{ marginTop: "20px" }}
      >
        {initialProduct.productStyles[0] && !styles.photos
          ? initialProduct.productStyles[0].photos.map((photo, i) => {
              let photoUrl, smallerPhoto, largerPhoto;
              if (photo.url) {
                photoUrl = photo.url.split("w=");
                smallerPhoto = photoUrl[0] + "w=1000&q=80";
                largerPhoto = photoUrl[0] + "w=2000&q=80";
              } else {
                smallerPhoto = "";
                largerPhoto = "https://via.placeholder.com/800";
              }
              return (
                <Carousel.Item key={i}>
                  {!expandedView ? (
                    <img
                      style={cropImage}
                      src={largerPhoto}
                      onClick={handleClick}
                      className="expandImage"
                      alt="carousel image"
                    />
                  ) : (
                    <GlassMagnifier
                      imageSrc={smallerPhoto}
                      largeImageSrc={largerPhoto}
                      style={magnifyCrop}
                      imageAlt="magnified image"
                    />
                  )}
                </Carousel.Item>
              );
            })
          : null}

        {styles.photos
          ? styles.photos.map((photo, i) => {
              let photoUrl, smallerPhoto, largerPhoto;
              if (photo.url) {
                photoUrl = photo.url.split("w=");
                smallerPhoto = photoUrl[0] + "w=1000&q=80";
                largerPhoto = photoUrl[0] + "w=2000&q=80";
              } else {
                smallerPhoto = "";
                largerPhoto = "https://via.placeholder.com/800";
              }
              return (
                <Carousel.Item key={i}>
                  {!expandedView ? (
                    <img
                      style={cropImage}
                      src={largerPhoto}
                      onClick={handleClick}
                      alt="carousel image"
                    />
                  ) : (
                    <GlassMagnifier
                      imageSrc={smallerPhoto}
                      largeImageSrc={largerPhoto}
                      style={magnifyCrop}
                      imageAlt="magnified image"
                    />
                  )}
                </Carousel.Item>
              );
            })
          : null}
      </Carousel>
    </div>
  );
};

module.exports = ImageGallery;
