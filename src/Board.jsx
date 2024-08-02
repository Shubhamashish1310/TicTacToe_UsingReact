import React, { useState } from 'react';

function Board() {
  const [isXTurn, setIsXTurn] = useState(true);
  const [values, setValues] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false); // State for detecting draw

  // Winning combinations
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // Check for a winner
  function checkForWinner(values) {
    for (let combination of win) {
      const [a, b, c] = combination;
      if (values[a] && values[a] === values[b] && values[a] === values[c]) {
        return values[a];
      }
    }
    return null;
  }

  // Handle button click
  const handleClick = (index) => {
    if (values[index] !== null || winner || isDraw) return;

    const newValues = [...values]; // Create a copy of values array
    newValues[index] = isXTurn ? 'X' : 'O';

    setValues(newValues);

    // Check if the move resulted in a win
    const currentWinner = checkForWinner(newValues);
    if (currentWinner) {
      setWinner(currentWinner);
    } else if (!newValues.includes(null)) {
      // Check for a draw
      setIsDraw(true);
    } else {
      setIsXTurn(!isXTurn); // Toggle turn if no winner or draw yet
    }
  };

  // Reset the game
  const resetGame = () => {
    setValues(Array(9).fill(null));
    setWinner(null);
    setIsDraw(false);
    setIsXTurn(true);
  };

  return (
    <div className="bg-slate-800 w-screen h-screen flex flex-col items-center my-5 m-0 p-0">
      <div className="bg-slate-400 gap-2 grid grid-cols-3">
        {values.map((value, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="bg-black h-28 w-28 text-red-400 text-6xl"
          >
            {value}
          </button>
        ))}
      </div>

     
      {winner && <h1 className="text-8xl tex text-cyan-300 mt-4 font-bold -rotate-6">`🎉{winner} Wins!🎉`</h1>}
      {isDraw && <h1 className=" text-yellow-400 mt-2 text-9xl -rotate-6 tra">Draw!</h1>}


<div className="flex gap-12">
      <button
        onClick={resetGame}
        className="bg-slate-500 hover:bg-gray-900 hover:text-slate-100 font-semibold text-lg text-white mt-4 py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out hover:shadow-lg hover:scale-105"
        
      >
        New Game
      </button>
      <button
        onClick={resetGame}
         className="bg-slate-500 hover:bg-gray-900 hover:text-slate-100 font-semibold text-lg text-white mt-4 py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out hover:shadow-lg hover:scale-105"
       
      >
        Reset
      </button>
      </div>
      <footer className="fixed bottom-0 left-0 right-0 p-4 text-gray-500 text-center">
        Made with ❤️ by Shubham Ashsih
      </footer>
    </div>
  );
}

export default Board;
