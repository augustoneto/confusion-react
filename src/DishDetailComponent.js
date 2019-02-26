import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
  
      renderComments(comments) {
        return (
          <h1>Comments</h1>
        );
      }    
  
      renderDish(dish) {
        return (
          <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>  
         );
      }
  
    render() {
      var selectedDish = this.props.selectedDish;
      if (selectedDish != null) 
        return (
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              {this.renderDish(selectedDish)}
            </div>
            <div className="col-12 col-md-5 m-1">
              {this.renderComments(selectedDish.comments)}
            </div>
          </div>
        );
      else 
        return(
          <div></div>
        );
    }
}

export default DishDetail;