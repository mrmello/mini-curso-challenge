import React, { Component } from 'react';

export default class SubjectList extends Component {
  render() {
    return (
      <div className="list-wrapper">
        <ul className="subj-list">
          <li key='ducks' className="subj-list-item">
            <a
              onClick={() => this.props.changeSelected('ducks')}
              className="subj-list-text"
            >
              ducks
            </a>
          </li>
          <li key='watchmen' className="subj-list-item">
            <a
              onClick={() => this.props.changeSelected('watchmen')}
              className="subj-list-text"
            >
              watchmen
            </a>
          </li>
          <li key='spiderman' className="subj-list-item">
            <a
              onClick={() => this.props.changeSelected('spiderman')}
              className="subj-list-text"
            >
              spiderman
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
