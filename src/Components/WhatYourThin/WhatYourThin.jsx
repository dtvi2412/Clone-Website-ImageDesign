import React from 'react';
import './WhatYourThin.css';
function WhatYourThin() {
  return (
    <div className="whatYourThin">
      <h1>WHAT'S YOUR ENQUIRY?</h1>
      <div className="whatYourThin__content">
        <div className="whatYourThin__content__helmets">
          <img
            src="https://imagedesigncustom.co.uk/assets/uploads/images/_1200xAUTO_fit_center-center_75_none/Layer-960.jpg"
            alt="image1"
          />
          <h1>HELMETS</h1>
        </div>
        <div className="whatYourThin__content__motorcycle">
          <img
            src="https://imagedesigncustom.co.uk/assets/uploads/images/_1200xAUTO_fit_center-center_75_none/Layer-961.jpg"
            alt="image1"
          />
          <h1>MOTORCYCLE</h1>
        </div>
      </div>
    </div>
  );
}

export default WhatYourThin;
