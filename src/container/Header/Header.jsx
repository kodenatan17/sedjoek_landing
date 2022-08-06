import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="Cobalah produk kami" />
      <h1 className='app__header-h1'>Yakin Makin Dingin</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
      <button type='button' className='custom__button'>Get Started</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header"/>
    </div>
  </div>
);

export default Header;
