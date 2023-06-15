import { Outlet } from "react-router-dom";

function Event() {
  return (
    <div>
      <h4>Event페이지임</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default Event;
