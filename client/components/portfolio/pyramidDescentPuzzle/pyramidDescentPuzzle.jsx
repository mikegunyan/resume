import React, { useState } from 'react';
import Tree from './tree';
import Solution from './solution';
import utils from './utils';

const PyramidDescentPuzzle = ({ toggleMonitor }) => {
  const [inputArray, setInputArray] = useState([1,2,3]);
  const [sortedArray, setSortedArray] = useState([[1], [2, 3]]);
  const [targets, setTargets] = useState([2, 3]);
  const [target, setTarget] = useState(2);
  const [digit, setDigit] = useState(1);
  const [length, setLength] = useState(2);
  const [build, setBuild] = useState('1,2,3');
  const [solution, setSolution] = useState([]);

  const handleChange = (event) => {
    const { id, value} = event.target;
    if (id === 'target') {
      setTarget(value);
    } else if (id === 'digit') {
      setDigit(value);
    } else if (id === 'length') {
      setLength(value);
    } else {
      setBuild(value);
    }
  };

  const addElement = () => {
    const newArray = inputArray;
    newArray.push(digit);
    const listData = utils.pyramid(newArray);
    setInputArray(newArray);
    setSortedArray(listData.list);
    setTargets(listData.targets);
    setTarget(listData.targets[0]);
  };

  const buildArray = () => {
    if (build === '7,2,1,4,9,5,7,4,6,8') {
      toggleMonitor();
    }
    const newArray = JSON.parse(`[${build}]`);
    const listData = utils.pyramid(newArray);
    setInputArray(newArray);
    setSortedArray(listData.list);
    setTargets(listData.targets);
    setTarget(listData.targets[0]);
  };

  const randomArray = () => {
    const newArray = [];
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < i + 1; j++) {
        newArray.push(Math.floor(Math.random() * (9) + 1))
      }
    }
    const listData = utils.pyramid(newArray);
    setInputArray(newArray);
    setSortedArray(listData.list);
    setTargets(listData.targets);
    setTarget(listData.targets[0]);
  };

  const solve = () => {
    let string = utils.solvePyramid(sortedArray, Number(target));
    let array = string.split('');
    let newArray = [array];
    setSolution(newArray);
  };

  const solveAll = () => {
    let newArray = utils.solvePyramidAll(sortedArray, Number(target));
    setSolution(newArray);
  };

  return (
    <div className="skillColumnTwo">
      <h1 className="skillTitle">Pyramid Descent Puzzle</h1>
      <div className="pyramidWidgets">
        <div className="column">
          <h3>Puzzle Builder</h3>
          <div className="pyramidHeader">
            <div>
              <input className="inputArray" onChange={handleChange} id="build" placeholder="1,2,3,5,3" value={build}></input>
              <button className="button" onClick={buildArray}>Build Puzzle</button>
            </div>
            <div>
              <select className="input" onChange={handleChange} id="digit">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
              <button className="button" onClick={addElement}>Add Element</button>
              <select className="input" onChange={handleChange} id="length">
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
              <button className="button" onClick={randomArray}>Random Puzzle</button>
            </div>
          </div>
          <p>Use the puzzle builder above to build a puzzle. Build a puzzle manually with the input. Put a comma in between each element. Add an element by using the drop down on the left and clicking "Add Element." Build a random puzzle by selecting the number of rows from the drop down menu on the right and clicking "Random Puzzle."</p>
          <Tree sortedArray={sortedArray} />
        </div>
        <div className="column">
          <h3>Solve</h3>
          <div className="pyramidHeader">
            <div>
              <select value={target} className="altInput" onChange={handleChange} id="target">
                {targets.map((target, index) => <option key={target}>{target}</option>)}
              </select>
              <button className="button" onClick={solve}>Solve</button>
            </div>
            <div>
              <button className="altButton" onClick={solveAll}>All Solutions</button>
            </div>
          </div>
          <p>Select a target in the drop down menu above. Click "Solve" to see the first solution or "All Solutions" to see all solutions for the selected target.</p>
          <div>
            <Solution solution={solution} />
          </div>
        </div>
      </div>
      <h3>Description</h3>
      <p>
        A Pyramid Descent Puzzle is solved by starting at the top and moving down to the next row. As you move down you move   either left or right multiplying the previous total.
      </p>
      <p>
        The solution or many solutions will be displayed in the directions it takes to get to the bottom. Left will be displayed as "L" and right as "R." For example, "LRLLR." This means it went left, right, left, left, right.
      </p>
    </div>
  );
};

export default PyramidDescentPuzzle;
