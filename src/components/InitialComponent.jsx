import React, { Component } from 'react';
import SubjectList from './SubjectList';
import SubjectInfo from './SubjectInfo';

export default class InitialComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSubject: 'ducks'
    };
    this.changeSelected = this.changeSelected.bind(this);
  }

  changeSelected(sub) {
    console.log('user selected >>> ', sub);
    this.setState({ selectedSubject: sub });
  }
  render() {
    return (
      <div>
        <SubjectInfo selectedSubject={this.state.selectedSubject} />
        <SubjectList changeSelected={this.changeSelected} />
      </div>
    );
  }
}
