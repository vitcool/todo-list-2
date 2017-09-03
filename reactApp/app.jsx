import React from 'react';
import Tasks from './tasks.jsx';

class App extends React.Component {
   render() {
      return (
         <div>
            <Tasks tasks={this.props.tasks} />
         </div>
      );
   }
}

export default App;