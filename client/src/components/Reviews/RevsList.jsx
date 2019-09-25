const React = require("react");
const { useState, useEffect } = require("react");
const { Grid, Typography } = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");

const RevsListItem = require("./RevsListItem.jsx");
const AddReview = require("./AddReview.jsx");
const SortReviewSelect = require("./SortReviewSelect.jsx");
const ShowMoreReviews = require("../shared/ShowMoreButton.jsx");
const ThumbnailModal = require("./ThumbnailModal.jsx");

module.exports = ({
  reviews,
  reviewsMeta,
  changeSortBy,
  sortingBy,
  increaseDisplayCount,
  showShowMore,
  currentProduct,
  submitNewReview
}) => {
  const [currThumbnail, setCurrThumbnail] = useState("");
  const [openModal, setOpenModal] = useState(false);
  return (
    <Grid item xs={9}>
      <SortReviewSelect changeSortBy={changeSortBy} sortingBy={sortingBy} />
      <Grid container>
        {reviews.map(review => (
          <RevsListItem
            setCurrThumbnail={url => {
              setCurrThumbnail(url);
              setOpenModal(true);
            }}
            key={review.review_id}
            review={review}
          />
        ))}
      </Grid>
      <Grid container>
        <Grid item xs={6}>
          <AddReview
            currentProduct={currentProduct}
            reviewsMeta={reviewsMeta}
            submitNewReview={submitNewReview}
          />{" "}
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right" }}>
          {showShowMore ? (
            <ShowMoreReviews onClick={increaseDisplayCount} />
          ) : null}
        </Grid>
      </Grid>
      <ThumbnailModal
        thumbnail={currThumbnail}
        isOpen={openModal}
        closeModal={() => {
          setOpenModal(false);
        }}
      />
    </Grid>
  );
};
