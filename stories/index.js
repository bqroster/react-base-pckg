import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { Button } from '@storybook/react/demo';

import BasicText from '~/components/BasicText';

const basicText = 'This is a text for BasicText Component';

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('with text', () => (
        <Button>Hello Button</Button>
    ))
    .add('with emoji', () => (
        <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
    ))
    .add('Basic Text with TSX', () => (
            <BasicText 
                text={text('Basic Text', basicText)} 
            />
        ),
        {
            info: {
                text: 'This is the description information `info property`, testing purposes'
            },
        }
    );