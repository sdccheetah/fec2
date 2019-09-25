const actionCreators = require("../store/action-creators");

test("create thunks that will asynchronously dispatch actions", done => {
  function dispatch(obj) {
    expect(Object.keys(obj)).toEqual(
      expect.arrayContaining(["type", "payload"])
    );
    done();
  }

  Object.values(actionCreators).forEach(ac => ac(1)(dispatch));
});
