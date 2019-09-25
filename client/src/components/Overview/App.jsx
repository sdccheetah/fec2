const React = require("react");
const ImageGallery = require("./ImageGallery.jsx");
const ProductInformation = require("./ProductInformation.jsx");
const StyleSelector = require("./StyleSelector.jsx");
const ProductDescription = require("./ProductDescription.jsx");
const { Grid } = require("@material-ui/core");
const ImageGalleryList = require("./ImageGalleryList.jsx");
const QuantitySizeSelect = require("./QuantitySizeSelect.jsx");

const App = props => {
  return (
    <div>
      <Grid container spacing={1} justify="center">
        <Grid item xs={1}>
          <ImageGalleryList />
        </Grid>
        <Grid item xs={8}>
          <ImageGallery />
        </Grid>

        <Grid item xs={3}>
          <Grid item xs={12}>
            <ProductInformation />
          </Grid>
          <Grid item xs={9}>
            <StyleSelector />
          </Grid>
          <Grid item xs={12}>
            <QuantitySizeSelect />
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={1} justify="center">
        <Grid item xs={6}>
          <ProductDescription />
        </Grid>
      </Grid>
    </div>
  );
};

module.exports = App;
