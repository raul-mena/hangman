import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import KeywordComponent from './keyword';

const mockStore = configureMockStore();
const store = mockStore({});
configure({adapter: new Adapter()});

describe("KeywordComponent Component", () => {
    it("should render without throwing an error", () => {
        expect(
            shallow(
                <Provider store={store}>
                    <KeywordComponent />
                </Provider>
            ).dive().length
        ).toBe(1);
    });
});
