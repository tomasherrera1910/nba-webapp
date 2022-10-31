function changeTheme(
  bgColor,
  bgColorDark,
  bgColorLight,
  textColor,
  textColorOpacity
) {
  const body = document.querySelector("body")
  body.style.setProperty("--bg-color", bgColor)
  body.style.setProperty("--bg-color-dark", bgColorDark)
  body.style.setProperty("--bg-color-light", bgColorLight)
  body.style.setProperty("--text-color", textColor)
  body.style.setProperty("--text-color-opacity", textColorOpacity)
}
export function darkTheme() {
  changeTheme("#111", "#000", "#222", "#fff", "rgba(255,255,255, .3)")
}
export function lightTheme() {
  changeTheme("#ddd", "#bbb", "#fff", "#000", "rgba(0, 0, 0, .3)")
}
