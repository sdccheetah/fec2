const React = require("react");
const { Card } = require("@material-ui/core");
const { CardActionArea } = require("@material-ui/core");
const { CardContent } = require("@material-ui/core");
const { Typography } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");
const { CardMedia } = require("@material-ui/core");
const { StarBorder } = require("@material-ui/icons");
const { IconButton } = require("@material-ui/core");
const axios = require("../../../../helpers/axiosApi");
const calcAverageRatings = require("../../../../helpers/calcAverageRatings");
const { useState, useEffect } = require("react");
const StarFill = require("../shared/StarFill.jsx");

useStyles = makeStyles({
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
    padding: "2px"
  },
  category: {
    fontSize: 10,
    textTransform: "uppercase"
  },
  productName: {
    marginBottom: 0,
    fontSize: 12,
    fontWeight: "bold",
    color: "black",
    lineHeight: "10pt"
  },
  media: {
    height: "200px"
  },
  price: {
    fontSize: 10,
    lineHeight: "8pt"
  },
  star: {
    margin: "10px 0 0 170px"
  }
});

const getItemInfo = (id, styleNumber) => {
  const requests = [
    axios.get(`/products/${id}`),
    axios.get(`/products/${id}/styles`),
    axios.get(`/reviews/${id}/meta`)
  ];
  return Promise.all(requests)
    .then(data => {
      const cardInfo = {
        productCategory: data[0].data.category,
        productName: data[0].data.name,
        original_price: data[1].data.results[styleNumber].original_price,
        sale_price: data[1].data.results[styleNumber].sale_price,
        previewImage:
          data[1].data.results[styleNumber].photos[0].thumbnail_url ||
          "https://via.placeholder.com/300x450",
        starRating: calcAverageRatings(data[2].data.ratings)
      };
      return cardInfo;
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = function CardItem(props) {
  const classes = useStyles();
  const [itemInfo, setItemInfo] = useState({
    productCategory: null,
    productName: null,
    original_price: null,
    sale_price: null,
    previewImage: null,
    starRating: null
  });

  useEffect(() => {
    getItemInfo(props.id || 1, 0).then(data => {
      setItemInfo(data);
    });
  }, [1]);

  return (
    <div>
      <Card className={classes.card}>
        <CardActionArea
          component="div"
          onClick={() => {
            console.log("click click");
          }}
        >
          <CardMedia
            className={classes.media}
            image={itemInfo.previewImage}
            title={itemInfo.productName}
          >
            <StarBorder
              className={classes.star}
              onClick={() => {
                console.log("button");
              }}
            />
          </CardMedia>
          <CardContent className={classes.cardContent}>
            <Typography
              className={classes.category}
              color="textSecondary"
              gutterBottom
            >
              {itemInfo.productCategory}
            </Typography>
            <Typography className={classes.productName}>
              {itemInfo.productName}
            </Typography>
            <Typography className={classes.price} color="textSecondary">
              {itemInfo.price}
            </Typography>
            <Typography component={"span"} className={classes.productName}>
              <StarFill stars={itemInfo.starRating} />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
