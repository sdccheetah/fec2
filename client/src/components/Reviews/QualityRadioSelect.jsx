const React = require("react");
const { useState, useEffect } = require("react");
const { RadioGroup, FormControlLabel, Radio } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");
const styles = require("../../styles.js");

const useStyles = makeStyles(theme => styles);

module.exports = ({ characteristic, handleChange, value }) => {
  const classes = useStyles();
  return (
    <RadioGroup
      className={classes.radioGroup}
      aria-label={characteristic.name}
      name={characteristic.name}
      value={value}
      row
    >
      {characteristic.levels.map((rating, i) => {
        return (
          <FormControlLabel
            className={"quality-radio"}
            key={"quality-radio-label-" + rating + "-" + characteristic.name}
            value={i + 1}
            onClick={() => handleChange(i + 1)}
            control={<Radio />}
            label={i === 0 || i === 4 ? rating : ""}
            labelPlacement="bottom"
          />
        );
      })}
    </RadioGroup>
  );
};
