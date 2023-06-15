import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  let [alert, setAlert] = useState(true);
  let [num, setNum] = useState("");
  useEffect(() => {
    let a = setTimeout(() => setAlert(false), 2000);
    return () => {
      clearTimeout(a);
    };
  }, []);

  useEffect(() => {
    if (isNaN(num) === true) {
      window.alert("숫자 아님");
    }
  }, [num]);

  let { id } = useParams();
  let findItem = props.shoes.find((x) => {
    return x.id == id;
  });
  return (
    <div className="container">
      <input
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      {alert && (
        <div className="alert alert-warning">2초 이내 구매 시 할인</div>
      )}
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
