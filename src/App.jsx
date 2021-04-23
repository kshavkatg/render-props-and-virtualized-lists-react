import React from 'react'
//import List from './List'
import faker from 'faker'
import {FixedSizeList} from 'react-window'

const bigList = [...Array(6000)].map(() => ({
  name: faker.name.findName(),
  email: faker.internet.email(),
  avatar: faker.internet.avatar()
}))

const tahoe_peaks = [
  {name: "Freel Peak", elevation: 10891},
  {name: "Monument Peak", elevation: 10067},
  {name: "Pyramid Peak", elevation: 9983},
  {name: "Mt. Tallac", elevation: 9735}
]

function App() {
  const renderRow = ({index, style}) => (
    <div style={{...style, display: "flex"}}>
      <img src={bigList[index].avatar} alt={bigList[index].name} />
      <p>{bigList[index].name} - {bigList[index].email}</p>
    </div>
  )

  return (
    <FixedSizeList 
      height={window.innerHeight}
      width={window.innerHeight}
      itemCount={bigList.length}
      itemSize={100}
    >{renderRow}</FixedSizeList>

    // <List 
    //   data={bigList} 
    //   renderEmpty={ <p>This list is empty</p> } 
    //   renderItem={item => (
    //     <div style={{ display: "flex" }}>
    //       <img src={item.avatar} alt="item.name"/>
    //       <p>{item.name} - {item.email}</p>
    //     </div>
    //   )}
    // />
  )
}

export default App;
