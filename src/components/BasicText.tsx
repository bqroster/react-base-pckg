import * as React from 'react';

type BasicTextProps = {
    text: string
};

const BasicText: React.SFC<BasicTextProps> = ({text}) => (
    <div>{text}</div>
);

export default BasicText;