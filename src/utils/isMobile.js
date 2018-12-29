export default () =>
  /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || document.documentElement.clientWidth < 500
