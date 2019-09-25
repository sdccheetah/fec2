const React = require("react");
const CardItem = require("./Card.jsx");
const { GridList } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core");
const { GridListTile } = require("@material-ui/core");
const AddToOutfitCard = require("./AddToOutfitCard");

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  },
  gridList: {
    flexWrap: "nowrap"
    // transform: "translateZ(0)"
    // // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
  },
  gridListItem: {
    width: "100px",
    margin: "0px"
  }
});

module.exports = function OutfitList(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList}>
        <AddToOutfitCard />
        <CardItem product={props.data.product} styles={props.data.styles} />
        <CardItem product={props.data.product} styles={props.data.styles} />
        <CardItem product={props.data.product} styles={props.data.styles} />
        <CardItem product={props.data.product} styles={props.data.styles} />
        <CardItem product={props.data.product} styles={props.data.styles} />
        <CardItem product={props.data.product} styles={props.data.styles} />
        <CardItem product={props.data.product} styles={props.data.styles} />
        <CardItem product={props.data.product} styles={props.data.styles} />
      </GridList>
    </div>
  );
};
