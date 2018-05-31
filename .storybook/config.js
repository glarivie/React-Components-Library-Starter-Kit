import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import 'styles/fonts.css'
import 'styles/colors.css'

const reqs = [
  require.context('components', true, /\.stories\.js$/),
  // require.context('../src/pages', true, /\.stories\.js$/),
  // require.context('../src/modals', true, /\.stories\.js$/)
]

const loadStories = () => reqs.forEach(req => req.keys().forEach(filename => req(filename)))

addDecorator((story, context) => withInfo('common info')(story)(context))

configure(loadStories, module)
