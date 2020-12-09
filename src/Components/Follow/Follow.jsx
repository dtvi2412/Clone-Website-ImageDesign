import React from 'react';
import './Follow.css';
function Follow() {
  const linkImage = [
    {
      id: 0,
      link:
        'https://imagedesigncustom.co.uk/assets/uploads/insta-images/_400xAUTO_fit_center-center_75_none/129443823_386719182389307_4430170784348816385_n-_nc_cat103ccb2_nc_sid8ae9d6_nc_ohcz5An_Mv07O4AX-toHFY_nc_htscontent-cph2-1.cdninstagram.comoh404d86bd5752bc77817af4286cb5883coe5FF3A18C.jpg',
    },
    {
      id: 1,
      link:
        'https://imagedesigncustom.co.uk/assets/uploads/insta-images/_400xAUTO_fit_center-center_75_none/129349431_100967438510824_9018883443982601955_n-_nc_cat103ccb2_nc_sid8ae9d6_nc_ohcCend3LlD2BEAX-zC3E-_nc_htscontent-cph2-1.cdninstagram.comohcd32097b8e8527b9ff5c5d8697291a20oe5FF20C7D.jpg',
    },
    {
      id: 2,
      link:
        'https://imagedesigncustom.co.uk/assets/uploads/insta-images/_400xAUTO_fit_center-center_75_none/129345657_230185558451265_8852437295021647511_n-_nc_cat107ccb2_nc_sid8ae9d6_nc_ohcbeMnp1I_lFMAX8DmlFA_nc_htscontent-cph2-1.cdninstagram.comoha58e6c68a9076ceb12425d5afedd9903oe5FF3150D.jpg',
    },
    {
      id: 3,
      link:
        'https://imagedesigncustom.co.uk/assets/uploads/insta-images/_400xAUTO_fit_center-center_75_none/129041591_3268587453384968_1987672648536088698_n-_nc_cat110ccb2_nc_sid8ae9d6_nc_ohcP7VRRxTAJtAAX-uNUP-_nc_htscontent-cph2-1.cdninstagram.comoha5b463a00702c802872a7a58e051137coe5FF2599C.jpg',
    },
    ,
    {
      id: 4,
      link:
        'https://imagedesigncustom.co.uk/assets/uploads/insta-images/_400xAUTO_fit_center-center_75_none/129206644_832222397565912_2669530609846670272_n-_nc_cat106ccb2_nc_sid8ae9d6_nc_ohc3RmH6JTvjb0AX9KAZs3_nc_htscontent-cph2-1.cdninstagram.comoh3930f68fd7ffd0fb138188fd4306b006oe5FF4E5C9.jpg',
    },
  ];

  //Render ListImage
  const renderListImage = () => {
    return linkImage.map((item) => {
      return (
        <div key={item.id} className="follow__listImage__image">
          <img src={item.link} alt={item.id} />
        </div>
      );
    });
  };
  return (
    <div className="follow">
      <div className="follow__name">
        <p>@IMAGEDESIGNCUSTOM</p>
        <h1>FOLLOW US ON INSTAGRAM!</h1>
      </div>
      <div className="follow__listImage">{renderListImage()}</div>
    </div>
  );
}

export default Follow;
