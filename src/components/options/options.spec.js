import React from "react";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import OptionsComponent from './options';

const mockStore = configureMockStore();
const store = mockStore({});
configure({adapter: new Adapter()});

describe("OptionsComponent Component", () => {
    it("should render without throwing an error", () => {
      const wrapper = shallow(
          <Provider store={store}>
              <OptionsComponent />
          </Provider>
      );
      expect(wrapper.exists()).toBe(true);
    });
});
