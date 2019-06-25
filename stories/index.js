import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

/**
 * START
 * REMOVE BELOW LINES ONCE 
 * STARTED YOUR OWN PACKAGE
 */
import { Button } from '@storybook/react/demo';
import BasicText from '~/components/BasicText';
const basicText = 'This is a text for BasicText Component';
/**
 * END
 */

storiesOf('Button', module)
    .addDecorator(withKnobs)

    /**
     * START
     * REMOVE BELOW LINES ONCE 
     * STARTED YOUR OWN PACKAGE
     * https://storybook.js.org/docs/guides/guide-react/#step-4-write-your-stories
     */    
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
    )
    /**
     * END
     */
    ;