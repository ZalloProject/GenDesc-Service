import React from 'react';
import {expect} from 'chai';
import {shallow, mount, render, configure} from 'enzyme';
import {spy} from 'sinon';
import GenDesc from './app.jsx';
import Adapter from 'enzyme-adapter-react-16';
import house from './testhouse';

configure({adapter: new Adapter()});

spy(GenDesc.prototype, 'render');

describe('<GenDesc />', () => {
  it('calls render', () => {
    const wrapper = mount(<GenDesc house={house} />);
    expect(GenDesc.prototype.render.callCount).to.be.greaterThan(0);
  });
  it('renders a main container', () => { 
    const wrapper = mount(<GenDesc house={house} />);
    expect(wrapper.exists('.container-main')).to.be.true;
  });
  describe('Top level dynamic rendering', () => {
    const wrapper = mount(<GenDesc house={house} />);
    it('should render address line 1 dynamically', () => {
        expect(wrapper.find('.line1').render().text()).to.equal(house.address.split('\n')[0]);
    });
    it('should render address line 2 dynamically', () => {
        expect(wrapper.find('.line2').render().text()).to.equal(house.address.split('\n')[1]);
    });
    it('should render house description dynamically', () => {
        expect(wrapper.find('.description-body > p').text()).to.equal(house.description);
    });
    it('should render price dynamically', () => {
        expect(wrapper.find('.container-price-description > h1').text()).to.equal(`$${Intl.NumberFormat().format(house.price)}`);
    });
  });
  describe('Show more button', () => {
    it('should show more info when clicked', () => {
        const wrapper = mount(<GenDesc house={house} />);
        wrapper.find('#see-more').simulate('click');
        expect(wrapper.find('greyed-out').findWhere(node => node.text() === 'Unit Count: ')).to.exist;
    });
    it('it should hide extra info when clicked again', () => {
        const wrapper = mount(<GenDesc house={house} />);
        wrapper.find('#see-more').simulate('click');
        expect(wrapper.find('greyed-out').findWhere(node => node.text() === 'Unit Count: ')).to.exist;
        wrapper.find('#see-more').simulate('click');
        expect(wrapper.find('greyed-out').findWhere(node => node.text() === 'Unit Count: ')).to.be.empty;
    });
  });
});