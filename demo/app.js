require('./index.scss')

// 获取屏幕宽度(viewport)
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth || document.innerWidth

// 获取 html 的 dom
let htlmDom = document.getElementsByTagName('html')[0]

// 设置 html 的 fontSize
htlmDom.style.fontSize = htmlWidth / 10 + 'px'
