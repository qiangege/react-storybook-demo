import React from 'react';
import Input from '../input';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('Input', module)
  .add('default input', () => {
    return (
        <Input />
    );
  });
