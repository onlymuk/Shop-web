import { useParams } from "react-router-dom";

const Detail = (props) => {
  let { id } = useParams();
  let findItem = props.shoes.find((x) => {
    return x.id == id;
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              findItem.id + 1
            }.jpg`}
            width="100%"
            alt="pg"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findItem.title}</h4>
          <p>{findItem.content}</p>
          <p>1{findItem.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
