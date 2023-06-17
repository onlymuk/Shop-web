import axios from "axios";
import bg from "../images/bg.png";
import Card from "./Card";
import { useState } from "react";

function MainPage(props) {
  const [count, setCount] = useState(0);
  const [cardList, setCardList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleMoreClick = () => {
    if (count < 3) {
      setIsLoading(true); // 로딩 중 상태로 설정

      if (count === 0) {
        setIsLoading(true); // 로딩 중 상태로 설정

        axios
          .get("https://codingapple1.github.io/shop/data2.json")
          .then((response) => {
            setCardList(response.data);
            setCount(count + 1);
          })
          .catch(() => {
            console.log("실패함");
          })
          .finally(() => {
            setIsLoading(false); // 데이터 로드 완료 후 로딩 중 상태 해제
          });
      } else if (count === 1) {
        setIsLoading(true); // 로딩 중 상태로 설정

        axios
          .get("https://codingapple1.github.io/shop/data3.json")
          .then((response) => {
            setCardList((prevList) => [...prevList, ...response.data]);
            setCount(count + 1);
          })
          .catch(() => {
            console.log("실패함");
          })
          .finally(() => {
            setIsLoading(false); // 데이터 로드 완료 후 로딩 중 상태 해제
          });
      }
    } else {
      setMessage("상품이 없습니다.");
    }
  };

  return (
    <div>
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>
      <div className="container">
        <div className="row">
          {props.shoes.map((_, i) => {
            return <Card shoes={props.shoes[i]} key={i}></Card>;
          })}
        </div>
      </div>

      {count < 3 && (
        <button onClick={handleMoreClick} disabled={isLoading}>
          {isLoading ? console.log("로딩") : console.log("더보기")}
          더보기
        </button>
      )}

      {cardList.length > 0 && (
        <div className="container">
          <div className="row">
            {cardList.map((card, id) => (
              <Card key={id} shoes={card} />
            ))}
          </div>
        </div>
      )}

      {message && <div>{message}</div>}
    </div>
  );
}

export default MainPage;
