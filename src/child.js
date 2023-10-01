import React, { useState } from 'react';
export default function Child(pros) {
  let [inputValue, setInputValue] = useState('');
  let takeValue = (e) => {
    let value = e.target.getAttribute('value');
    setInputValue(value);
  };

  return (
    <>
      <div>This is child</div>
      Child Input :<input type onChange={takeValue} value={inputValue} />
      <button
        onClick={() => {
          pros.fun(inputValue);
        }}
      >
        click
      </button>
    </>
  );
}
