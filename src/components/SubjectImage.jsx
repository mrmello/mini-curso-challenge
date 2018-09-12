import React from 'react';

let sourceDuck =
  'https://1.bp.blogspot.com/-_xpAypfZXPE/VSdYLgX8i1I/AAAAAAAAOQk/7KSJYGrYNnY/s1600/Pato%2B1.jpg';
let sourceWatchmen =
  'https://www.torredevigilancia.com/wp-content/uploads/2018/01/6e513949-6cda-47f7-95dc-c4a007342774-810x405.jpg';
let sourceSpider =
  'https://s4.thcdn.com/productimg/600/600/11499994-7894524776402829.jpg';

const SubjectImage = props => {
  let source;
  switch (props.selectedSubject) {
  case 'ducks':
    source = sourceDuck;
    break;
  case 'watchmen':
    source = sourceWatchmen;
    break;
  case 'spiderman':
    source = sourceSpider;
    break;
  }
  return (
    <div>
      <img src={source} />
    </div>
  );
};

export default SubjectImage;
