import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [Input, setInput] = useState(6);
  let iniarr = [];
  for (let i = 1; i <= Input; i++) {
    iniarr.push(i);
  }

  const [count, setCount] = useState([]);
  const insert = (index) => {
    if (!count.find((val) => val == index)) {
      setCount((val) => [...val, index]);
    }
  };

  let ar = [...count];
  let x = 0;
  if (x == 0) {
    ar.reverse();
    x++;
  }
  const outfn = () => {
    if (ar.length !== 0) {
      ar.shift();
      setCount([...ar]);
      console.log('ar :', ar);
      console.log('count :', count);
    }
  };
  useEffect(() => {
    if (iniarr.length == ar.length) {
      setInterval(outfn, 1000);
    }
    return () => {
      clearInterval(outfn);
    };
  }, [count]);

  return (
    <>
      <div className="">
        <input
          style={{
            padding: '10px',
            margin: '10px',
            width: '70%',
            outline: 'none',
          }}
          type="number"
          placeholder="enter the number of Boxes Do you Want .."
          onChange={(e) => setInput(parseInt(e.target.value))}
        />
      </div>
      <div
        style={{
          minHeight: '300px',
          width: '400px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '5px',
          background: 'white',
          padding: '10px',
        }}
      >
        {iniarr.map((val) => (
          <div
            key={val}
            className="small"
            style={
              count.find((inn) => inn == val)
                ? { background: 'red' }
                : { background: 'black' }
            }
            onClick={() => insert(val)}
          >
            {val}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
