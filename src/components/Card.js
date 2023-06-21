import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  let navigate = useNavigate();
  return (
    <>
      <Nav.Link
        onClick={() => {
          navigate(`/detail/${props.shoes.id}`);
        }}
      >
        <div className="col-md-4">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              props.shoes.id + 1
            }.jpg`}
            width="80%"
            alt={props.shoes.title}
          />
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.price}</p>
        </div>
      </Nav.Link>
    </>
  );
};

export default Card;
