import React, { useState, useEffect } from 'react';

const bands = [
  {
    id: 1,
    name: 'Nightwish',
    albums: 9,
    members: 6,
    formed_in: 1996,
  },
  {
    id: 2,
    name: 'Metallica',
    albums: 10,
    members: 4,
    formed_in: 1981,
  },
  {
    id: 3,
    name: 'Nirvana',
    albums: 3,
    members: 3,
    formed_in: 1987,
  },
];

function Tester() {
  const [data, setData] = useState([]);


  useEffect(() => {
    const sorted = [...bands].sort((a, b) => b['formed_in'] - a['formed_in']);
    setData(sorted);
  }, []);

  return (
    <div className="App">

      {data.map(band => (
        <div key={band.id} style={{ margin: '30px' }}>
          <div>{`Band: ${band.name}`}</div>
          <div>{`Albums: ${band.albums}`}</div>
          <div>{`Members: ${band.members}`}</div>
          <div>{`Year of founding: ${band.formed_in}`}</div>
        </div>
      ))}
    </div>
  );
}

export default Tester