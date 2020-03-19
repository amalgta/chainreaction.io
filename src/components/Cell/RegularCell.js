import React from "react";
import Cell from "./Cell";
import Ball from "../Ball/Ball";
import BallState from "../../game_logic/ball_state";

const RegularCell = ({ cellState, cellClickHandler }) => {
  const ballStyle1 = {
    top: "-5px",
    left: "3px"
  };
  const ballStyle2 = {
    top: "10px",
    left: "12px"
  };
  const ballStyle3 = {
    top: "10px",
    left: "-6px"
  };
  return (
    <Cell cellClickHandler={cellClickHandler}>
      <Ball
        color="red"
        alignment={ballStyle1}
        state={
          cellState?.activeBalls >= 1 ? BallState.ACTIVE : BallState.DISABLED
        }
      ></Ball>
      <Ball
        color="red"
        alignment={ballStyle2}
        state={
          cellState?.activeBalls >= 2 ? BallState.ACTIVE : BallState.DISABLED
        }
      ></Ball>
      <Ball
        color="red"
        alignment={ballStyle3}
        state={
          cellState?.activeBalls >= 3 ? BallState.ACTIVE : BallState.DISABLED
        }
      ></Ball>
    </Cell>
  );
};

export default RegularCell;
