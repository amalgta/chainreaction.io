import React from 'react';
import Cell from './Cell';
import Ball from '../Ball/Ball';
import BallState from '../../game_logic/ball_state';

import withGameLogic from './withGameLogic';

const CornerCell = ({
  cellState,
  currentPlayer,
  possedPlayer,
  handleCellStateChange,
}) => {
  const ballStyle1 = {
    top: '-5px',
    left: '3px',
  };

  return (
    <Cell cellClickHandler={handleCellStateChange} color={currentPlayer?.color}>
      <Ball
        color={possedPlayer?.color}
        alignment={ballStyle1}
        state={
          cellState?.activeBalls >= 1 ? BallState.ACTIVE : BallState.DISABLED
        }
      />
    </Cell>
  );
};

export default withGameLogic(CornerCell);
