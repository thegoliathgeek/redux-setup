import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
} from "./slices/counter";
// import styles from "./Counter.module.css";

function Counter() {
  const dispatch = useDispatch();

  const count = useSelector(
    (state: {
      counter: {
        value: number;
        secondValue: number;
      };
    }) => state.counter.value
  );

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <br />

        <div>
          <p>Increment By 5</p>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(incrementByAmount(5))}
          >
            Increment
          </button>
        </div>

        <br />

        <div>
          <p>Decrement By 5</p>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(decrementByAmount(5))}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
