import { Lightning, Router } from '@lightningjs/sdk'
import MenuItem from './MenuItem'
import SmoothFocusableIndicator from '../lib/SmoothFocusableIndicator'

export default class Menu extends SmoothFocusableIndicator {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 200,
      color: 0xff3900a6,
      Items: {
        x: 100,
        y: 100,
      },
      FocusIndicator: {
        alpha: 0,
        y: 100,
        mountY: 0.5,
        x: 50,
        text: { text: '>' },
      },
    }
  }

  set items(v) {
    this.tag('Items').children = v.map((el, idx) => {
      return {
        ...el,
        type: MenuItem,
        x: idx * 300,
        mountY: 0.5,
      }
    })
  }

  _init() {
    this._index = 0
  }

  _moveIndex(idx) {
    this._index += idx
    this.tag('FocusIndicator').setSmooth('x', this._index * 300 + 50)
  }

  _handleLeft() {
    if (this._index > 0) {
      this._moveIndex(-1)
    }
  }

  _handleRight() {
    if (this._index < this.tag('Items').children.length - 1) {
      this._moveIndex(1)
    }
  }

  _handleDown() {
    Router.focusPage()
  }

  _handleEnter() {
    Router.navigate(this.activeItem.pageId)
  }

  get activeItem() {
    return this.tag('Items').children[this._index]
  }

  _getFocused() {
    return this.activeItem
  }
}
