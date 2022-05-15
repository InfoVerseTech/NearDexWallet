import React from "react";
import { Image, Col } from "react-bootstrap";
import cryptologo from "../../assets/img/bnb.png";
import near from "../../assets/img/near.png";

const CryptoBtn = () => {
  const WallBtn = [
    {
      Img: near,
      Title: "near",
    },
    {
      Img: cryptologo,
      Title: "BNB",
    },
  ];
  return (
    <>
      {WallBtn.map((item) => (
        <Col md={6} className="mb-3" key={item.ID}>
          <div className="walconect-btn text-start mx-1">
            <div className="btnbox d-flex align-items-center">
              <Image src={item.Img.src} alt="" className="img-fluid" />
              <span className="ms-3">{item.Title}</span>
            </div>
          </div>
        </Col>
      ))}
    </>
  );
};

export default CryptoBtn;
