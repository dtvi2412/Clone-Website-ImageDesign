import React from 'react';
import CustomPain from '../CustomPain/CustomPain';
import Logo from '../Logo/Logo';
import WhatYourThin from '../WhatYourThin/WhatYourThin';
import Gallery from '../Gallery/Gallery';
import './Content.css';
import BlogArticle from '../BlogArticle/BlogArticle';
function Content() {
  return (
    <div>
      <CustomPain />
      <WhatYourThin />
      <Logo />
      <Gallery />
      <BlogArticle />
    </div>
  );
}

export default Content;
