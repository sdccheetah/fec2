const React = require("react");
const { GridList } = require("@material-ui/core");
const { GridListTile } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");

const ImageGalleryList = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      width: "90px",
      height: "100px",
      //   position: "absolute",
      //   padding: "20px",
      marginTop: "20px"
      //   "z-index": "1"
    }
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={100} cols={1} spacing={6}>
        <GridListTile>
          <img src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"></img>
        </GridListTile>
        <GridListTile>
          <img src="https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"></img>
        </GridListTile>
        <GridListTile>
          <img src="https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"></img>
        </GridListTile>
      </GridList>
    </div>
  );
};

module.exports = ImageGalleryList;
