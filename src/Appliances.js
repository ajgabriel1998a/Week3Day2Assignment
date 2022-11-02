import React from "react";
import ShowAppliances from "./ShowAppliances";

class Appliances extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appliances: [
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 649,
            "thumbnail": "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
        },
      ]
    };
  }

  render() {
    return <ShowAppliances appliances={this.state.appliances} />;
  }
}

export default Appliances;
