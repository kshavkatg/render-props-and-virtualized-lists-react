import React from 'react'
import List from './List'

const tahoe_peaks = [
  {name: "Freel Peak", elevation: 10891},
  {name: "Monument Peak", elevation: 10067},
  {name: "Pyramid Peak", elevation: 9983},
  {name: "Mt. Tallac", elevation: 9735}
]

function App() {
  return (
    <List data={[1, 2, 3, 4]} renderEmpty={ <p>This list is empty</p> } />
  );
}

export default App;
