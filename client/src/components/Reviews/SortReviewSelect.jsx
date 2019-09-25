const React = require("react");
const { makeStyles } = require("@material-ui/core/styles");
const {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid
} = require("@material-ui/core");

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

module.exports = ({ changeSortBy, sortingBy }) => {
  let classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="rev-sort-select">Sort By</InputLabel>
          <Select
            value={sortingBy}
            onChange={e => changeSortBy(e.target.value)}
            inputProps={{
              name: "rev-sort",
              id: "rev-sort-select"
            }}
          >
            <MenuItem value={"relevance"}>Relevant</MenuItem>
            <MenuItem value={"helpfulness"}>Helpful</MenuItem>
            <MenuItem value={"newest"}>Newest</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
