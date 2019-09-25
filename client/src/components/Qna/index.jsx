const React = require("react");
const { Container, Typography } = require("@material-ui/core");
//import the modules used under the questions and answers widget

//QnaOneWrap is the questions and answers part
//SearchQna searches the answers, not the questions
//AddQuestion is add a question button
//Showmore expands the answers

const { QnaOneWrap } = require("./singleqna");
const { SearchQnaButton } = require("./searchqnabutton");
const { AddQuestion } = require("./modaladdquestion");
const { ShowMore } = require("./buttonshowmore");

module.exports = props => {
  return (
    <div className="qnaComponentWrapper">
      <div>
        <Typography>QUESTIONS & ANSWERS</Typography>
      </div>
      <Container maxWidth="lg">
        <SearchQnaButton />
        <div className="qnaListWrapper">
          <QnaOneWrap />
          <QnaOneWrap />
          <QnaOneWrap />
        </div>
        <div>
          <AddQuestion />
          <ShowMore />
        </div>
      </Container>
    </div>
  );
};
