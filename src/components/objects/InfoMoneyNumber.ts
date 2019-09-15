import Sprite from '@/components/elements/Sprite'
import WrapperContainer from '@/components/elements/WrapperContainer'
import imagePath from '@/config/imagePath'
import { toCurrency, todecimal, tounit } from '@/utils/tools'

export default class InfoMoneyNumber extends WrapperContainer {
  private _number: number
  private _target: number
  constructor(number: number) {
    super()
    this._number = number
    this._target = number
    this.updateNumber(number)
  }

  public updateNumber(number: number) {
    this._target = number
    this.animationNuber()
  }
  public animationNuber() {
    let interval = setInterval(() => {
      if (this._target === this._number) { clearInterval(interval) }
      if (this._target > this._number) {
        let _distance = this._target - this._number
        let _new_number = this._number += Math.ceil(_distance / 2)
        this.displayNumber(_new_number)
      } else {
        let _distance = this._number - this._target
        let _new_number = this._number -= Math.ceil(_distance / 2)
        this.displayNumber(_new_number)
      }
      if (Math.abs(this._target - this._number) < 1000) {
        this._number = this._target
        this.displayNumber(this._target)
        clearInterval(interval)
      }
      this.displayNumber(this._number)
    }, 100)
  }

  private displayNumber(number: number) {
    this.removeChildren()
    let numberList = tounit(number).toString().split('')
    let pos = 0
    numberList.map((num: string, i: number) => {
      let _sprite
      let w = 16
      switch (num) {
        case '.':
          _sprite = new Sprite(imagePath.interfacePath, `dot`)
          break
        case ',':
          _sprite = new Sprite(imagePath.interfacePath, `comma`)
          _sprite.y = 14
          break
        case '/':
          _sprite = new Sprite(imagePath.interfacePath, `slash`)
          break
        case 'e':
          _sprite = new Sprite(imagePath.interfacePath, `e`)
          _sprite.y = -2
          w = 30
          break
        case 'w':
          _sprite = new Sprite(imagePath.interfacePath, `w`)
          _sprite.y = -2
          w = 30
          break
        default:
          _sprite = new Sprite(imagePath.interfacePath, `money${num}`)
          break
      }
      let _wrc = new WrapperContainer()
      _wrc.addContainer(_sprite.getContainer())
      _wrc.setPosition({ animation: false }, pos, 0)
      pos += w
      this.addChild(_wrc)
    })
  }
}