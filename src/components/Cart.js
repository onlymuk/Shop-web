import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increase } from "./../store/userSlice";
import { changeCount } from "./../store";

const Cart = () => {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <>
      <h4>{state.user.name}의 장바구니</h4>
      <h4>{state.user.age}세</h4>
      <button
        onClick={() => {
          dispatch(increase());
        }}
      >
        버튼
      </button>
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
            {state.cart.map((_, index) => (
              <tr key={index}>
                <td>{state.cart[index].id}</td>
                <td>{state.cart[index].name}</td>
                <td>{state.cart[index].count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(changeCount(state.cart[index].id));
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
