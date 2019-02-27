import React from 'react';
//import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/app';
import Modal from '../client/modal';
import ShortAmenity from '../client/shortAmenity'

configure({ adapter: new Adapter() });


describe('Main page app', () => {
    it('should render the App component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);
    });
    it('should display the number of amenities in the listing' , () => {
      const wrapper = shallow(<App />);
      wrapper.setState({ 
        listingAmenities: [
          {1: 'floor', included: 1},
          {2: 'walls', included: 1},
          {3: 'roof', included: 1}
        ]
      });
      expect(wrapper.find('a').text()).toBe('Show all 3 amenities')
    });
});

describe('Modal View', () => {
  it('should render the Modal', () => {
    let state = {
      listingAmenities: [
        {1: 'floor', included: 1},
        {2: 'walls', included: 1},
        {3: 'roof', included: 1}
      ]
    }
    const wrapper = shallow(<Modal state={state}/>);
    expect(wrapper.exists()).toBe(true);
  })
})

describe('Short Amenity Listing View', () => {
  it('should render a short list of amenities ', () => {
    let amenities = {
      listingAmenities: [
        {1: 'floor', included: 1},
        {2: 'walls', included: 1},
        {3: 'roof', included: 1}
      ]
    }
    const wrapper = shallow(<ShortAmenity amenities={amenities}/>);
    expect(wrapper.exists()).toBe(true);
  })
})