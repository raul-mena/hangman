import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import WordComponent from './word';

const mockStore = configureMockStore();
const store = mockStore({});
configure({adapter: new Adapter()});

describe("WordComponent Component", () => {
    it("should render without throwing an error", () => {
      const wrapper = shallow(
          <Provider store={store}>
              <WordComponent />
          </Provider>
      );
        expect(wrapper.exists()).toBe(true);
    });
});
