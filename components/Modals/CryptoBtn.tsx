import React from "react";
import { Image, Col } from "react-bootstrap";
import cryptologo from "../../assets/img/bnb.png";

const CryptoBtn = () => {
  const WallBtn = [
    {
      Img: cryptologo,
      Title: "BNB",
    },
    {
      Img: cryptologo,
      Title: "BNB",
    },
    {
      Img: cryptologo,
      Title: "BNB",
    },
    {
      Img: cryptologo,
      Title: "BNB",
    },
    {
      Img: cryptologo,
      Title: "BNB",
    },
    {
      Img: cryptologo,
      Title: "BNB",
    },
    {
      Img: cryptologo,
      Title: "BNB",
    },
    {
      Img: cryptologo,
      Title: "BNB",
    },
    {
      Img: cryptologo,
      Title: "BNB",
    },
    {
      Img: cryptologo,
      Title: "BNB",
    },
    {
      Img: cryptologo,
      Title: "BNB",
    },
    {
      Img: cryptologo,
      Title: "BNB",
    },
    {
      Img: cryptologo,
      Title: "BNB",
    },
    {
      Img: cryptologo,
      Title: "BNB",
    },
    {
      Img: cryptologo,
      Title: "BNB",
    },
    {
      Img: cryptologo,
      Title: "BNB",
    },
  ];
  return (
    <>
      {WallBtn.map((item) => (
        <Col md={6} className="mb-3">
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