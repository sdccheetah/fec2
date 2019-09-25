const React = require("react");
const { Card } = require("@material-ui/core");
const { CardActionArea } = require("@material-ui/core");
const { CardContent } = require("@material-ui/core");
const { Typography } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");
const { CardMedia } = require("@material-ui/core");
const {
  StarTwoTone,
  RemoveCircleOutlineTwoTone
} = require("@material-ui/icons");
const axios = require("../../../../helpers/axiosApi");
const calcAverageRatings = require("../../../../helpers/calcAverageRatings");
const { useState, useEffect } = require("react");
const StarFill = require("../shared/StarFill.jsx");
const Price = require("../shared/Price");
const sharedStyles = require("../../styles");

const useStyles = makeStyles({
  card: {
    width: 200,
    height: 300,
    maxHeight: 350,
    borderRadius: 0,
    border: "1px solid black",
    boxShadow: "none",
    display: "inline - block"
  },
  cardContent: {
    padding: "2px",
    margin: "10px"
  },
  category: sharedStyles.smallGreyFont,
  productName: {
    fontSize: "10pt",
    lineHeight: "12px",
    fontWeight: "bold"
  },
  media: {
    height: "200px"
  },
  price: {
    fontSize: "10pt",
    lineHeight: "8pt",
    color: "green"
  },
  star: {
    margin: "10px 0 0 170px"
  },
  removeCircle: {
    margin: "10px 0 0 170px"
  },
  uppercase: {
    textTransform: "uppercase"
  }
});

const findDefaultStyle = results => {
  for (let i = 0; i < results.length; i++) {
    if (results[i]["default?"] === 1) {
      return i;
    }
  }
  return 0;
};

const getItemInfo = id => {
  const requests = [
    axios.get(`/products/${id}`),
    axios.get(`/reviews/${id}/meta`)
  ];
  return axios
    .get(`/products/${id}/styles`)
    .then(styleData => {
      const styleNumber = findDefaultStyle(styleData.data.results) || 0;
      return Promise.all(requests)
        .then(data => {
          const cardInfo = {
            productCategory: data[0].data.category,
            productName: data[0].data.name,
            productId: id,
            features: data[0].data.features,
            original_price: styleData.data.results[styleNumber].original_price,
            sale_price: styleData.data.results[styleNumber].sale_price,
            previewImage:
              styleData.data.results[styleNumber].photos[0].thumbnail_url ||
              "https://via.placeholder.com/300x450",
            starRating: calcAverageRatings(data[1].data.ratings),
            ratingData: data[1].data.ratings
          };
          return cardInfo;
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => console.log(err));
};

module.exports = function CardItem(props) {
  const classes = useStyles();
  const [itemInfo, setItemInfo] = useState({
    productCategory: null,
    productName: null,
    productId: null,
    features: null,
    original_price: null,
    sale_price: null,
    previewImage: null,
    starRating: null,
    ratingData: null
  });

  useEffect(() => {
    let isSubscribed = true;
    getItemInfo(props.id || 1, 0).then(data => {
      if (isSubscribed) setItemInfo(data);
      // console.log("getting item info...");
    });
    return () => (isSubscribed = false);
  }, [props.id]);

  const starIconType = props.showStarIcon;
  let insideStar = false;
  let insideRemove = false;
  const handleClick = (inside, iconType) => {
    if (inside === true) {
      if (iconType === "star") {
        insideStar = true;
        props.onStarClick(itemInfo);
      }
      if (iconType === "remove") {
        insideRemove = true;
        props.onRemoveClick();
      }
    } else if (!insideStar && !insideRemove) {
      props.history.push(`/products/${itemInfo.productId}`);
      props.changeCurrentProduct(itemInfo.productId);
    }
  };

  return (
    <div style={{ padding: "4px" }}>
      <Card className={classes.card}>
        <CardActionArea component="div" onClick={() => handleClick(false)}>
          <CardMedia
            className={classes.media}
            image={itemInfo.previewImage}
            title={itemInfo.productName}
          >
            {starIconType ? (
              <StarTwoTone
                htmlColor="white"
                className={classes.star}
                onClick={() => handleClick(true, "star")}
              />
            ) : (
              <RemoveCircleOutlineTwoTone
                htmlColor="white"
                className={classes.removeCircle}
                onClick={() => handleClick(true, "remove")}
              />
            )}
          </CardMedia>
          <CardContent className={classes.cardContent}>
            <Typography
              className={[classes.category, classes.uppercase].join(" ")}
              color="textSecondary"
              gutterBottom
            >
              {itemInfo.productCategory}
            </Typography>
            <Typography className={classes.productName}>
              {itemInfo.productName}
            </Typography>
            <Price
              salePrice={itemInfo.sale_price}
              originalPrice={itemInfo.original_price}
            />
            <span>
              {itemInfo.ratingData !== null &&
              Object.keys(itemInfo.ratingData).length > 0 ? (
                <StarFill stars={itemInfo.starRating} />
              ) : (
                <div></div>
              )}
            </span>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
