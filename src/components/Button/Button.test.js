import React from 'react'
import { create } from 'react-test-renderer'

import Button from './Button'

const state = { isComponentClicked: false }
const _toogleState = () =>
  state.isComponentClicked = !state.isComponentClicked

test('Button to be clickable', () => {
  const component = create(
    <Button
      label="Awesome button"
      onClick={_toogleState}
    />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  tree.props.onClick()
  expect(state.isComponentClicked).toBeTruthy()
})
