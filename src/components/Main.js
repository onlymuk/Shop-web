import bg from "../images/bg.png";
import Card from "./Card";

function MainPage(props) {
  return (
    <div>
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bg + ")" }}
      ></div>
      <div className="container">
        <div className="row">
          {props.shoes.map((_, i) => {
            return <Card shoes={props.shoes[i]}></Card>;
          })}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
