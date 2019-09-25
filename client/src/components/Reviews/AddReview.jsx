const React = require("react");
const { useState, useEffect } = require("react");
const {
  Grid,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Divider
} = require("@material-ui/core");
const { makeStyles } = require("@material-ui/core/styles");

const AddReviewModal = require("../shared/Modal.jsx");
const QualityRadioSelect = require("./QualityRadioSelect.jsx");
const OverallRatingSelect = require("./OverallRatingSelect.jsx");
const UploadThumbnails = require("./UploadThumbnails.jsx");
const RecommRadioSelect = require("./RecommRadioSelect.jsx");
const characteristics = require("./constants/characteristics.js");
const fileUpload = require("../shared/fileUpload.js");

module.exports = ({
  currentProduct,
  reviewsMeta,
  submitNewReview,
  eligibleChars
}) => {
  let charsObj = {};
  Object.keys(characteristics).forEach(char => {
    charsObj[char] = 0;
  });
  let [thumbnails, setThumbnails] = useState([]);
  let [charVals, setCharVals] = useState(charsObj);
  let [overallRating, setOverallRating] = useState(0);
  let [recommended, setRecommended] = useState(true);
  const charValsToIdVals = charVals => {
    let ret = {};
    Object.entries(charVals).forEach(([char, rating], ci) => {
      if (reviewsMeta.characteristics && reviewsMeta.characteristics[char]) {
        ret[reviewsMeta.characteristics[char].id] = rating;
      }
    });
    return ret;
  };
  return (
    <Grid item xs={12}>
      <AddReviewModal
        qarfield={"review"}
        modalTitle={"Write Your Review"}
        bodyTextPlaceholder={"Review Body"}
        buttonText={`ADD A REVIEW +`}
        subtitle={`About the ${currentProduct.name}`}
        endpointId={currentProduct.id}
        addlFieldValues={{
          rating: overallRating || 1,
          photos: thumbnails,
          characteristics: charValsToIdVals(charVals),
          recommend: recommended
        }}
        handleSubmit={submitNewReview}
      >
        <Divider />
        <br />
        <h6>Do you recommend this product?</h6>
        <RecommRadioSelect
          recommended={recommended}
          setRecommended={setRecommended}
        />
        <Divider />

        <OverallRatingSelect onChange={val => setOverallRating(val)} />
        <Divider />
        {Object.entries(characteristics).map(([char, ratings]) =>
          reviewsMeta.characteristics &&
          reviewsMeta.characteristics[char] === undefined ? null : (
            <div key={"add-review-radio" + char}>
              {char}:{" "}
              {characteristics[char][charVals[char] - 1] || "none selected"}
              <QualityRadioSelect
                characteristic={{ name: char, levels: ratings }}
                handleChange={val => {
                  setCharVals({ ...charVals, [char]: val });
                }}
                value={charVals[char]}
              />
            </div>
          )
        )}
        <Divider />
        <Grid container>
          <UploadThumbnails thumbnails={thumbnails} />
          <Button
            onClick={() => {
              fileUpload(setThumbnails, 5 - thumbnails.length);
            }}
          >
            Upload
          </Button>
        </Grid>
      </AddReviewModal>
    </Grid>
  );
};
