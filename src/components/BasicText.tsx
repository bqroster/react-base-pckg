import * as React from 'react';

type BasicTextProps = {
    /**
     * innerText content for the BasicText component
     * 
     * @default Default Text Here
     */
    text: string
};

const BasicText: React.SFC<BasicTextProps> = ({text = 'Default Text here'}) => (
    <div>{text}</div>
);

export default BasicText;