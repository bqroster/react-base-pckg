import * as React from 'react';

type BasicTextProps = {
    text: string // This property set the text for the component
};

const BasicText: React.SFC<BasicTextProps> = ({text = 'Default Text here'}) => (
    <div>{text}</div>
);

export default BasicText;