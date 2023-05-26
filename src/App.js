import './App.css';
import { useState } from 'react';

function App() {
  
  const [value1, setValue1] = useState(null);
  const [value2, setValue2] = useState(0);
  const [minSupport, setMinSupport] = useState(0);
  const [minConfiance, setMinConfiance] = useState(0);
 const [items, setItems] = useState([]);


  const handleAddItem = () => {
    if (value1 && value2) {
       const newItem = {
        id:  value2,
        value: value1
      };
      setItems(prevItems => [...prevItems, newItem]);
      setValue1("");
      setValue2("");
    }
  };

  console.log('items >>', items.map(i => i));

  const returnItems = items.length > 0 ? items.map(i => {
    return (
      <tr key={i.id}>
      <td>
        {i.id}
      </td>
      <td>{i.value}</td>
      </tr>
    )
  }): [];
  return (
    <div className="App">
        <input id="item1" required value={value2} onChange={(e) => setValue2(e.target.value)} placeholder="ID" type="number"/>
        <input id="input2" required value={value1} onChange={(e) => setValue1(e.target.value)} placeholder="Items" type="text" />

      <input id="input3" value={minSupport} onChange={(e) => setMinSupport(e.target.value)} placeholder="Min support" type="number" />

      <input id="input4" value={minConfiance} onChange={(e) => setMinConfiance(e.target.value)} placeholder="Min confiance" type="number" />

      <div styles={{marginTop: '10px'}}>
          <button onClick={handleAddItem} id="btn">Ajouter</button>
          <button>Executer algorithme</button>
      </div>  
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Items</th>
            </tr>
          </thead>
          <tbody>
             {returnItems}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
