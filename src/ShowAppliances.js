import React from "react";
import Card from 'react-bootstrap/Card';

class ShowAppliances extends React.Component {
    render() {
        return (
            <div className="row" style={{ margin: '20px' }}>
                <h3>3. Appliances</h3>
                {this.props.appliances.map(appliance => {
                    return (
                        <div className="col-3" key={appliance.id}>
                            <Card style={{ width: '18rem', marginLeft: '20px', marginTop: '20px' }}>
                                <Card.Img variant="top" src={appliance.thumbnail} />
                                <Card.Body>
                                    <Card.Title>{appliance.title}</Card.Title>
                                    <Card.Text>
                                        <label>Description: {appliance.description}</label><br />
                                        <label>Price: {appliance.price}</label><br />
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ShowAppliances;
