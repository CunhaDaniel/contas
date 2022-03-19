import React from 'react';
import renderer from 'react-test-renderer';
import Form from '../src/components/Forms.jsx';

test('Form submit the bills values when clicked on add button', () => {
  const component = renderer.create(
    <Form/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});