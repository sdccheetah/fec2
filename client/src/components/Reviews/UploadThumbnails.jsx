const React = require("react");
const { makeStyles } = require("@material-ui/core/styles");
const { GridList } = require("@material-ui/core");
const { GridListTile } = require("@material-ui/core");

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 200
  }
}));

module.exports = ({ thumbnails }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={100} className={classes.gridList} cols={3}>
        {thumbnails.map(thumbnail => (
          <GridListTile key={thumbnail} cols={1}>
            <img src={thumbnail} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
