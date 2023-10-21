import { useState, useEffect } from 'react';

function ItemCount({ initial, stock, onAdd }) {
  const [count, setCount] = useState(parseInt(initial));

  function sumar() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function restar() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div>
      <button onClick={restar}>-</button>
      <button>{count}</button>
      <button onClick={sumar}>+</button>
      <button
        disabled={stock <= 0 || count <= 0 || count > stock}
        onClick={() => onAdd(count)}
      >
        Add to cart
      </button>
    </div>
  );
}

export default ItemCount;
