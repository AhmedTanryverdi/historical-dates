import React from 'react';

export const Canvas: React.FC = (): React.JSX.Element => {
  return (
    <canvas id="canvas">
      Ваш браузер не поддерживает Canvas.
      <br />
      Попробуйте обновить браузер или включить поддержку JavaScript.
    </canvas>
  );
};
