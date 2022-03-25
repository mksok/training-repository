import { Provider } from "react-redux";
import { Counter } from "./components/Counter";
import { store } from "./redux/store";

export const ReduxSample = () => (
    <Provider store={store}>
        <Counter />
    </Provider>
);