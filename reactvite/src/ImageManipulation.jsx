import { useState } from 'react';
import cat from './cat.jpg';

function ImageManipulation() {
  const [catHeight, setCatHeight] = useState(200);
  const [catWidth, setCatWidth] = useState(200);

  const increaseHeight = () => setCatHeight((prev) => prev + 20);
  const decreaseWidth = () => setCatWidth((prev) => Math.max(50, prev - 20));

  return (
    <div>
      <h2>Image Manipulation Component</h2>
      <div
        style={{
          height: `${catHeight}px`,
          width: `${catWidth}px`,
          border: '1px solid black',
          overflow: 'hidden',
          marginBottom: '12px',
        }}
      >
        <img src={cat} alt="Cat" height={catHeight} width={catWidth} />
      </div>
      <div>
        <button onClick={increaseHeight}>increaseHeight</button>
        <button onClick={decreaseWidth}>decreaseWidth</button>
      </div>
    </div>
  );
}

export default ImageManipulation;
