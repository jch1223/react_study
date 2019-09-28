import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  const handleClick = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      console.log(res.data);
      setData(res.data);
    });
  };

  return (
    <div>
      <button onClick={handleClick}>데이터 불러오기</button>
      {/* {JSON.stringify(data)} */}
      {data &&
        data.map(item => {
          return <li key={item.id}>{item.title}</li>;
        })}
    </div>
  );
}

export default App;
