const React = require("react");
const { useState, useEffect } = require("react");
const ImageGallery = require("./ImageGallery.jsx");
const ProductInformation = require("./ProductInformation.jsx");
const StyleSelector = require("./StyleSelector.jsx");
const ProductDescription = require("./ProductDescription.jsx");
const { Grid } = require("@material-ui/core");
const ImageGalleryList = require("./ImageGalleryList.jsx");
const QuantitySizeSelect = require("./QuantitySizeSelect.jsx");
const AddToCart = require("./AddToCart.jsx");
const ShowCart = require("./ShowCart.jsx");
const ViewButton = require("./ViewButton.jsx");
const axios = require("../../../../helpers/axiosApi.js");

const App = ({ initialProduct }) => {
  const [state, setState] = useState({});
  const [styles, setStyles] = useState({});
  const [productImages, setProductImages] = useState([]);
  const [productInfo, setProductInfo] = useState([]);
  const [pictureIndex, setPictureIndex] = useState(0);
  const [expandedView, setExpandedView] = useState(false);
  const [soldOut, setSoldOut] = useState(false);

  const handleSelect = selectedIndex => {
    setPictureIndex(selectedIndex);
  };

  const changeStyle = index => {
    setStyles(initialProduct.productStyles[index]);
  };

  const updateDefaultStyle = style => {
    setState({ ...state, selectedStyle: style[0] });
  };

  const resetStyle = () => {
    setStyles({});
  };

  const handleExpand = () => {
    setExpandedView(true);
  };

  const handleBack = () => {
    setExpandedView(false);
  };

  const handleQuantity = info => {
    if (info === "soldOut") {
      setSoldOut(true);
    }
    if (info === "inStock") {
      setSoldOut(false);
    }
  };

  const getCart = () => {
    axios
      .get(`/cart/${document.cookie.split("=")[1]}`)
      .then(response => {
        let images = Promise.all(
          response.data.map(product => {
            return axios.get(
              `/products/${product.product_id.toString()}/styles`
            );
          })
        );

        let productId = Promise.all(
          response.data.map(product => {
            return axios.get(`/products/${product.product_id.toString()}`);
          })
        );

        return Promise.all([images, productId]);
      })
      .then(response => {
        setProductImages(
          response[0].map(product => {
            return product.data.results[0].photos[0].url;
          })
        );
        setProductInfo(
          response[1].map(product => {
            return product.data;
          })
        );
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    resetStyle();
    handleSelect(0);
  }, [initialProduct]);

  return (
    <div>
      {initialProduct.productStyles[0] && !state.selectedStyle
        ? updateDefaultStyle(
            initialProduct.productStyles.filter(style => {
              return style["default?"] === 1;
            })
          )
        : null}

      <Grid container spacing={4} justify="center">
        <Grid item xs={1} style={{ marginBottom: "16px", overflowY: "auto" }}>
          <ImageGalleryList
            initialProduct={initialProduct}
            styles={styles}
            handleSelect={handleSelect}
          />
        </Grid>
        {!expandedView ? (
          <Grid item xs={8}>
            <ImageGallery
              initialProduct={initialProduct}
              styles={styles}
              pictureIndex={pictureIndex}
              handleSelect={handleSelect}
              handleExpand={handleExpand}
            />
          </Grid>
        ) : (
          <Grid item xs={10}>
            <Grid container spacing={2} justify="center">
              <Grid item xs={11}>
                <ImageGallery
                  initialProduct={initialProduct}
                  styles={styles}
                  pictureIndex={pictureIndex}
                  handleSelect={handleSelect}
                  handleExpand={handleExpand}
                  expandedView={expandedView}
                />
              </Grid>
              <Grid item xs={1}>
                <ViewButton handleBack={handleBack} />
              </Grid>
            </Grid>
          </Grid>
        )}

        {!expandedView ? (
          <Grid item xs={3}>
            <Grid item xs={12}>
              {state.selectedStyle ? (
                <ProductInformation
                  initialProduct={initialProduct}
                  styles={styles}
                  selectedStyle={state.selectedStyle}
                />
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <StyleSelector
                initialProduct={initialProduct}
                changeStyle={changeStyle}
                handleSelect={handleSelect}
                styles={styles}
                selectedStyle={state.selectedStyle}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={1} justify="center" alignItems="center">
                {state.selectedStyle ? (
                  <QuantitySizeSelect
                    selectedStyle={state.selectedStyle}
                    handleQuantity={handleQuantity}
                    styles={styles}
                    initialProduct={initialProduct}
                  />
                ) : null}
                <AddToCart
                  soldOut={soldOut}
                  productId={initialProduct.currentProduct.id}
                  getCart={getCart}
                />
                <ShowCart
                  productImages={productImages}
                  productInfo={productInfo}
                />
              </Grid>
            </Grid>
          </Grid>
        ) : null}
      </Grid>

      <Grid container spacing={1} justify="center">
        <Grid item xs={6}>
          <ProductDescription initialProduct={initialProduct} />
        </Grid>
      </Grid>
    </div>
  );
};

module.exports = App;
