import React from 'react';

// ~components => set an alias on webpack.resolve
import BasicText from '~components/BasicText';

class TextPackage extends React.Component {
  render() {
    return (
        <BasicText />
    );
  }
}

export default TextPackage;