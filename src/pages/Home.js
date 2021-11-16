import SmoothFocusableIndicator from '../lib/SmoothFocusableIndicator'

export default class Home extends SmoothFocusableIndicator {
  static _contentText() {
    return 'Home Page content'
  }

  static _contentBackground() {
    return 0xffffa029
  }

  static _template() {
    return {
      rect: true,
      color: this._contentBackground(),
      w: 1920,
      h: 880,
      y: 200,
      Header: {
        x: 150,
        text: {
          text: this._contentText(),
          fontSize: 128,
        },
      },
      FocusIndicator: {
        alpha: 0,
        x: 40,
        text: { text: '>', fontSize: 128 },
      },
    }
  }
}
