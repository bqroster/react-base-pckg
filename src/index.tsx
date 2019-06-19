import * as React from 'react';

// ~/components => set an alias on webpack.resolve
import BasicText from '~/components/BasicText';

// confirm that typescript is working HERE
const basicText: string = 'This is the content';

class TextPackage extends React.Component {
  render() {
    return (
      <BasicText text={basicText} />
    );
  }
}

export default TextPackage;