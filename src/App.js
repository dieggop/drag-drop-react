import React from 'react';
import Board from './components/Board';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
       <main className="boards">
         <Board id="board-1" className="board">
           <Card id="card-1" className="card" draggable="true">Card 1</Card>
           <Card id="card-2" className="card" draggable="true">Card 2</Card>
           <Card id="card-3" className="card" draggable="false">Card 3</Card>
         </Board>
         <Board id="board-2" className="board">

         </Board>
         <Board id="board-3" className="board">

         </Board>
       </main>
    </div>
  );
}

export default App;
