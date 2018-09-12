import React from 'react';
import SubjectImage from './SubjectImage';

let infoSpiderman = 'Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books.';
let infoDucks = 'Duck is the common name for a large number of species in the waterfowl family Anatidae, which also includes swans and geese. Ducks are divided among several subfamilies in the family Anatidae.';
let infoWatchmen = ' Watchmen originated from a story proposal Moore submitted to DC featuring superhero characters that the company had acquired from Charlton Comics.';

const SubjectInfo = props => {
  let info;
  switch (props.selectedSubject) {
  case 'ducks':
    info = infoDucks;
    break;
  case 'watchmen':
    info = infoWatchmen;
    break;
  case 'spiderman':
    info = infoSpiderman;
    break;
  }
  return (
    <div>
      <SubjectImage selectedSubject={props.selectedSubject} />
      {info}
    </div>
  );
};

export default SubjectInfo;

