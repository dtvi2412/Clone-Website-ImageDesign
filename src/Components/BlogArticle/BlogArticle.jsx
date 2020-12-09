import React from 'react';
import './BlogArticle.css';
function BlogArticle() {
  return (
    <div className="blogArticle">
      <div className="blogArticle__text">
        <div className="blogArticle__text__name">
          <h4>BLOG ARTICLE</h4>
          <h1>CLASSIC BMW DTM INSPIRED CUSTOM HELMET</h1>
        </div>

        <button>FIND OUT HERE</button>
      </div>
      <div className="blogArticle__img">
        <img
          src="https://imagedesigncustom.co.uk/assets/uploads/images/_1200xAUTO_fit_center-center_75_none/551A0202.jpg"
          alt="helmet"
        />
      </div>
    </div>
  );
}

export default BlogArticle;
