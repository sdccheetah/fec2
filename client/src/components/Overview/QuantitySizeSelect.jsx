const React = require("react");
const { makeStyles } = require("@material-ui/core/styles");
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

const QuantitySizeSelect = () => {
  const [state, setState] = React.useState({
    size: "",
    quantity: "1"
  });

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel ref={inputLabel}>Select Size</InputLabel>
        <Select
          value={state.size}
          labelwidth={labelWidth}
          onChange={handleChange("size")}
        >
          <MenuItem value="S">S</MenuItem>
          <MenuItem value="M">M</MenuItem>
          <MenuItem value="L">L</MenuItem>
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
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

module.exports = QuantitySizeSelect;
