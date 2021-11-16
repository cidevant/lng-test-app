import HomeBase from './Home'

export default class Page1 extends HomeBase {
  static _contentText() {
    return 'Page1 content'
  }

  static _contentBackground() {
    return 0xffff00cc
  }
}
