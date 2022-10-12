const { createStore } = require("redux");
const { default: signReducer } = require("./reducers/signReducer");

const store = createStore(signReducer);
export default store
