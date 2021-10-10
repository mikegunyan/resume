import React from 'react';

const Tree = ({ sortedArray }) => {
  return (
    <div className="graphics">
        {sortedArray.map((list) => <div key={list} className="treeRow">{list.map((num) => <div key={list + Math.random() * (9) + 1} className="treeNode">{num}</div>)}</div>)}
    </div>
  )
}

export default Tree;
