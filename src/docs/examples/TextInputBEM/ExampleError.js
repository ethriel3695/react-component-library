import React from 'react';
import TextInputBEM from 'react-component-library/TextInputBEM';

/** Optional TextBox */
export default class ExampleOptional extends React.Component {
  render() {
    return (
      <TextInputBEM
        htmlId='example-optional'
        label='First Name'
        name='firstname'
        onChange={() => {}}
        required
        error='First name is required.'
      />
    )
  }
}
