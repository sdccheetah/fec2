const React = require("react");
const { makeStyles } = require("@material-ui/core/styles");
const { useState, useEffect } = require("react");
const {
  InputLabel,
  FormControl,
  Select,
  MenuItem
} = require("@material-ui/core");

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

const QuantitySizeSelect = ({
  selectedStyle,
  handleQuantity,
  styles,
  initialProduct
}) => {
  const [state, setState] = useState({
    size: "",
    quantity: 1
  });

  useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
    addSkus(selectedStyle.skus);
  }, []);

  useEffect(() => {
    addSkus(initialProduct.productStyles[0].skus);
  }, [initialProduct]);

  useEffect(() => {
    handleQuantityChange(state.size);
  }, [state.size]);

  useEffect(() => {
    if (Object.entries(styles).length !== 0) {
      addSkus(styles.skus);
    }
  }, [styles]);

  const addSkus = skus => {
    setState({ ...state, skus: skus });
  };

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  const quantityChanger = number => {
    let quantityArray = [];
    if (number === 0) {
      return quantityArray;
    }

    if (number > 15) {
      for (let i = 2; i < 16; i++) {
        quantityArray.push(i);
      }
    } else {
      for (let i = 2; i < number + 1; i++) {
        quantityArray.push(i);
      }
    }

    return quantityArray;
  };

  const handleQuantityChange = size => {
    if (size) {
      if (state.skus[size] === 0 || size === "null") {
        handleQuantity("soldOut");
      } else {
        handleQuantity("inStock");
      }
    }
  };

  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel ref={inputLabel}>Select Size</InputLabel>
        <Select
          value={state.size}
          labelwidth={labelWidth}
          onChange={handleChange("size")}
        >
          {state.skus
            ? Object.keys(state.skus).map((size, i) => {
                return (
                  <MenuItem value={size} key={i}>
                    {size}
                  </MenuItem>
                );
              })
            : null}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel ref={inputLabel}>Quantity</InputLabel>
        <Select
          value={state.quantity}
          labelwidth={labelWidth}
          onChange={handleChange("quantity")}
        >
          <MenuItem value="1">1</MenuItem>
          {state.skus
            ? quantityChanger(state.skus[state.size]).map((number, i) => {
                return (
                  <MenuItem key={i} value={number}>
                    {number}
                  </MenuItem>
                );
              })
            : null}
        </Select>
      </FormControl>
    </div>
  );
};

module.exports = QuantitySizeSelect;
