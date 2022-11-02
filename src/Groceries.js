import React, { useState } from "react";
import Card from 'react-bootstrap/Card';

const Groceries = () => {
    let groceries = [
       
        {
            "id": 3,
            "title": "Daal Masoor 500 grams",
            "description": "Fine quality Branded Product Keep in a cool and dry place",
            "price": 9,
            "thumbnail": "https://dummyjson.com/image/i/products/21/thumbnail.png",
        },
        {
            "id": 4,
            "title": "Orange Essence Food Flavour",
            "description": "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
            "price": 5,
            "thumbnail": "https://dummyjson.com/image/i/products/23/thumbnail.jpg",
        },
    ];
    return (
        <div className="row" style={{ margin: '20px' }}>
            <h3>2. Groceries</h3>
            {groceries.map(grocery => {
                return (
                    <div className="col-3" key={grocery.id}>
                        <Card style={{ width: '18rem', marginLeft: '20px', marginTop: '20px' }}>
                            <Card.Img variant="top" src={grocery.thumbnail} />
                            <Card.Body>
                                <Card.Title>{grocery.title}</Card.Title>
                                <Card.Text>
                                    <label>Description: {grocery.description}</label><br/>
                                    <label>Price: {grocery.price}</label><br/>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
        </div>
    )
};

export default Groceries;
