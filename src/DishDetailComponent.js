import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
  
      renderComments(comments) {
          const listComments = comments.map((commentIt) =>
            <li key={commentIt.id}>{commentIt.comment}
            <ul>
              <li>{commentIt.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(commentIt.date)))}</li>
            </ul>
            </li>
          );
        return (
          <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">
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
      var showDish = this.props.dish;
      
      if (showDish != null) 
        return (
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-5 m-1">
                {this.renderDish(showDish)}
              </div>
              <div className="col-12 col-md-5 m-1">
                {this.renderComments(showDish.comments)}
              </div>
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