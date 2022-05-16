import React from "react";
import { Image, Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import cryptologo from "../../assets/img/bnb.png";
import ethereum from "../../assets/img/ethereum.png";
import near from "../../assets/img/near.png";
import thether from "../../assets/img/thether.png";
import usd from "../../assets/img/usd.png";

const CryptoDropdown = () => {
  const DropdownItem = [
    {
      Img: near,
      Title: "near",
    },
    {
      Img: cryptologo,
      Title: "BNB",
    },
    {
      Img: thether,
      Title: "Tether",
    },
    {
      Img: usd,
      Title: "usd",
    },
  ];
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          variant="outline-secondary"
          id="dropdown-basic"
          className="swapbtn"
        >
          <Image src={cryptologo.src} alt="" className="img-fluid" /> Button
        </Dropdown.Toggle>
        <Dropdown.Menu className="p-0">
          {DropdownItem.map((Item) => (
            <Dropdown.Item className="p-0" key={Item.id}>
              <div className="walconect-btn text-start m-0 rounded-0">
                <div className="btnbox d-flex align-items-center py-2">
                  <Image src={Item.Img.src} alt="" className="img-fluid" />
                  <span className="ms-3">{Item.Title}</span>
                </div>
              </div>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default CryptoDropdown;
