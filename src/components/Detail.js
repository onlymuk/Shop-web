import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
const Detail = (props) => {
  let [alert, setAlert] = useState(true);
  let [tab, setTab] = useState(0);
  let [num, setNum] = useState("");
  let [fade2, setFade2] = useState("");

  useEffect(() => {
    setFade2("end");
    return () => {
      setFade2("");
    };
  }, []);
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
    return x.id === parseInt(id);
  });
  return (
    <div className={"container start " + fade2}>
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
  // if (props.tab === 0) {
  //   return <div>내용0</div>;
  // }
  // if (props.tab === 1) {
  //   return <div>내용1</div>;
  // }
  // if (props.tab === 2) {
  //   return <div>내용2</div>;
  // }

  let [fade, setFade] = useState("");
  useEffect(() => {
    let a = setTimeout(() => {
      setFade("end");
    }, 200);
    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, [tab]);
  return (
    <div className={`start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
}

export default Detail;
