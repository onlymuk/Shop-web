import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addItem } from "../store";

const Detail = (props) => {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState(true);
  const [tab, setTab] = useState(0);
  const [num, setNum] = useState("");
  const [fade2, setFade2] = useState("");

  useEffect(() => {
    setFade2("end");
    return () => {
      setFade2("");
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setAlert(false), 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (isNaN(num) === true) {
      window.alert("숫자 아님");
    }
  }, [num]);

  const { id } = useParams();
  const findItem = props.shoes.find((x) => x.id === parseInt(id));

  const handleAddToCart = () => {
    dispatch(addItem({ id: findItem.id, name: findItem.title, count: 1 }));
  };

  console.log({ id: findItem.id, title: findItem.title, count: 1 });
  return (
    <div className={"container start " + fade2}>
      <input onChange={(e) => setNum(e.target.value)} />
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
          <button className="btn btn-danger" onClick={handleAddToCart}>
            주문하기
          </button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
};

function TabContent({ tab }) {
  const [fade, setFade] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFade("end");
    }, 200);
    return () => {
      clearTimeout(timeout);
      setFade("");
    };
  }, [tab]);

  const content = ["내용0", "내용1", "내용2"];

  return <div className={`start ${fade}`}>{content[tab]}</div>;
}

export default Detail;
