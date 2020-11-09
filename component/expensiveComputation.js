import React, { useState, useEffect } from 'react';

const expensiveComputation = items =>
  items.reduce((a, { qty, price, tax, taxPer }) => {
    const total = qty * price;
    return a + (tax ? total + total * taxPer : total);
  }, 0);

const Expensive = ({ shopping }) => {
  const [total, setTotal] = useState(() => {
    const initalState = expensiveComputation(shopping);
    return initalState;
  });
  useEffect(() => {
    setTotal(expensiveComputation(items));
  });
  const [items, setItems] = useState(shopping);
  const handleChange = ({ target }, index) => {
    const value = target.value;
    const name = target.name;
    setItems(prevItems =>
      prevItems.map((obj, i) =>
        i === index ? { ...obj, [name]: value } : { ...obj }
      )
    );
  };
  return (
    <div>
      <h1>Total Price is: ${total}</h1>
      {items.map(({ itemName, qty, price, tax }, index) => {
        return (
          <div>
            <p>Item Name: {itemName}</p>
            <p>Item Cost: ${price}</p>
            <input
              type="number"
              value={qty}
              onChange={event => handleChange(event, index)}
              name="qty"
              style={{ padding: 5, width: 50, fontSize: 15 }}
              min={0}
            ></input>
            <p>Item Tax: {tax ? 'Yes' : 'No'}</p>
            <p style={{ color: 'red' }}>{qty <= 0 ? 'Already at 0' : ''}</p>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};

export { Expensive };
