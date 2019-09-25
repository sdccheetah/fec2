const React = require("react");
const { GridList, GridListTile } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");

const ImageGalleryList = ({ initialProduct, styles, handleSelect }) => {
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      width: "90px",
      height: "100px",
      marginTop: "20px"
    }
  }));
  const classes = useStyles();
  const initialProductHolder = initialProduct;
  const handleClick = index => {
    handleSelect(index);
  };

  return (
    <div className={classes.root}>
      <GridList cellHeight={100} cols={1} spacing={6}>
        {initialProductHolder.productStyles[0] && !styles.photos
          ? initialProductHolder.productStyles[0].photos.map((photo, i) => {
              let photoUrl;
              if (photo.url) {
                photoUrl = photo.url.split("w=");
                thumbnailPhoto = photoUrl[0] + "w=300&q=80";
              }
              return (
                <GridListTile key={i} onClick={() => handleClick(i)}>
                  {photo.url ? (
                    <img src={thumbnailPhoto} alt="image thumbnails" />
                  ) : (
                    <img
                      src="https://via.placeholder.com/200"
                      alt="image thumbnails"
                    />
                  )}
                </GridListTile>
              );
            })
          : null}

        {styles.photos
          ? styles.photos.map((photo, i) => {
              let photoUrl;
              if (photo.url) {
                photoUrl = photo.url.split("w=");
                thumbnailPhoto = photoUrl[0] + "w=300&q=80";
              }
              return (
                <GridListTile key={i} onClick={() => handleClick(i)}>
                  {photo.url ? (
                    <img src={thumbnailPhoto} alt="image thumbnails" />
                  ) : (
                    <img
                      src="https://via.placeholder.com/200"
                      alt="image thumbnails"
                    />
                  )}
                </GridListTile>
              );
            })
          : null}
      </GridList>
    </div>
  );
};

module.exports = ImageGalleryList;
