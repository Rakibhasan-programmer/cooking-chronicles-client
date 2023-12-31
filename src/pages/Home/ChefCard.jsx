import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaThumbsUp } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const ChefCard = ({ chefData }) => {
  const {
    id,
    chef_img,
    chef_name,
    years_of_experience,
    numbers_of_recipe,
    likes,
  } = chefData;
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <Card className="border-0 shadow-lg">
          <LazyLoad height={320} threshold={0.99} offset={300}>
            <Card.Img
              style={{ height: "20rem", objectFit: "cover" }}
              className="img-fluid"
              variant="top"
              src={chef_img}
            />
          </LazyLoad>
          <Card.Body>
            <Card.Title className="fw-semibold">{chef_name}</Card.Title>

            <div className="fw-light d-flex justify-content-between align-items-center py-2">
              <p>Experience: {years_of_experience}</p>
              <p>Total Recipe: {numbers_of_recipe}</p>
              <p className="d-flex">
                <FaThumbsUp className="me-1" style={{ fontSize: "1.3rem" }} />
                <span className="d-block">{likes}</span>
              </p>
            </div>
            <Link to={`/recipe/${id}`}>
              <Button variant="primary">View Recipe</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ChefCard;
