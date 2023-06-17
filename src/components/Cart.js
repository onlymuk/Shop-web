import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeAge, changeName } from "../store";

const Cart = () => {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  console.log(state.cart.name);
  return (
    <>
      <h4>{state.user.name}의 장바구니</h4>
      <h4>{state.user.age}세</h4>
      <button onClick={dispatch(changeAge())}>버튼</button>
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>상품명</th>
              <th>수량</th>
              <th>변경하기</th>
            </tr>
          </thead>
          <tbody>
            {state.cart.map((val, index) => (
              <tr key={index}>
                <td>1</td>
                <td>{state.cart[index].name}</td>
                <td>{state.cart[index].count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(changeName());
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Cart;
