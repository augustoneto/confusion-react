import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
  
      renderComments(comments) {
          const listComments = comments.map((commentIt) =>
            <li key={commentIt.id}>{commentIt.comment}
            <ul>
              <li>{commentIt.author}, {commentIt.date}</li>
            </ul>
            </li>
          );
        return (
          <div>
            <h4>Comments</h4>
            <ul class="list-unstyled">
              {listComments}
            </ul>
          </div>
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