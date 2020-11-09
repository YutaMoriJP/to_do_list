import React from 'react';
import ReactDOM from 'react-dom';
import DisplayNote from '../component/displayNote';
import { DisplayNotes } from '../component/noteFunc';
import { EffectPractice } from '../component/effect';
import { Profile } from '../component/customHooks';

class App extends React.Component {
  render() {
    return (
      <div>
        <Profile />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
