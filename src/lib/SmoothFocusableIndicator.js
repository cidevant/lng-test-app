import { Lightning } from '@lightningjs/sdk'

export default class SmoothFocusableIndicator extends Lightning.Component {
  _unfocus() {
    this.tag('FocusIndicator').setSmooth('alpha', 0)
  }

  _focus() {
    this.tag('FocusIndicator').setSmooth('alpha', 1)
  }
}
