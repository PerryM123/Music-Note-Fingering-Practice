/*
* 音符のインタフェース
**/
export interface INote {
  // 音符の名（B♯、B♭など）
  name: string,
  // 設定ページにて選択可能、不可能
  isOn: boolean
}
