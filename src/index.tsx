import * as React from 'react';

// ~components => set an alias on webpack.resolve
import BasicText from '~/components/BasicText';

const contador: number = 3;

class TextPackage extends React.Component {
  render() {

    if (contador === 3) return 'hola';

    return (
      <BasicText />
    );
  }
}

export default TextPackage;