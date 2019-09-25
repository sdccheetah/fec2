const React = require("react");
const { useState, useEffect } = require("react");
const { RadioGroup, FormControlLabel, Radio } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");
const styles = require("../../styles.js");

const useStyles = makeStyles(theme => styles);

module.exports = ({ recommended, setRecommended }) => {
  const classes = useStyles();
  return (
    <RadioGroup
      className={classes.radioGroup}
      aria-label={"Do you recommend this product?"}
      name={"recommended"}
      value={recommended}
      row
    >
      {[true, false].map((bool, i) => {
        return (
          <FormControlLabel
            className={"recommended-radio"}
            key={"recommended-radio-label-" + bool}
            value={bool}
            onClick={() => setRecommended(bool)}
            control={<Radio />}
            label={bool ? "Yes" : "No"}
            labelPlacement="bottom"
          />
        );
      })}
    </RadioGroup>
  );
};
