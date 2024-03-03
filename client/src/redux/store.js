import { legacy_createStore as createStore } from "redux";
import reducer from "./Reducer";

const Store = createStore(reducer);

// Store.subscribe(() => {
//     console.log(Store.getState());
// });

export default Store;
