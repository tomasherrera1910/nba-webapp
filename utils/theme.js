function changeTheme(bgColor, bgColorDark, bgColorLight, textColor) {
  const body = document.querySelector("body")
  body.style.setProperty("--bg-color", bgColor)
  body.style.setProperty("--bg-color-dark", bgColorDark)
  body.style.setProperty("--bg-color-light", bgColorLight)
  body.style.setProperty("--text-color", textColor)
}
export function darkTheme() {
  changeTheme("#111", "#000", "#222", "#fff")
}
export function lightTheme() {
  changeTheme("#ddd", "#bbb", "#fff", "#000")
}
