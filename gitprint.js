
document.querySelector('#readme').setAttribute('style', 'position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 100; background-color: white; border: 0;')
document.querySelector('body').appendChild(document.querySelector('#readme'))
document.querySelector('.Box-header').setAttribute('style', 'display: none !important')
document.querySelector('.Box-body').setAttribute('style', 'padding-top: 0 !important;')
document.querySelectorAll('li').forEach(function(li) {li.setAttribute('style', 'line-height: 1.3; font-size: 13px;')})
document.querySelectorAll('p').forEach(function(p) {p.setAttribute('style', 'font-size: 13px; margin-bottom: 8px;')})
document.querySelectorAll('h1').forEach(function(h1) {h1.setAttribute('style', 'padding-bottom: 2px; margin-bottom: 8px; font-size: 24px;')})
document.querySelectorAll('h2').forEach(function(h2) {h2.setAttribute('style', 'margin-bottom: 4px; margin-top: 8px; font-size: 18px;')})
document.querySelectorAll('h3').forEach(function(h3) {h3.setAttribute('style', 'margin-bottom: 4px; margin-top: 8px; font-size: 16px;')})
document.querySelectorAll('blockquote').forEach(function(blockquote) {blockquote.setAttribute('style', 'margin-bottom: 4px; margin-top: 4px;')})
document.querySelectorAll('table').forEach(function(blockquote) {blockquote.setAttribute('style', 'margin-bottom: 8px; margin-top: 8px; font-size: 13px;')})


// from https://gist.github.com/beevelop/a0f2c76e79610dca01550c9a93f83876#gistcomment-3139879

const styleElement = document.createElement('style')
styleElement.innerHTML = /*css*/`
  * {
    font-family: Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  }
  ins {
    display: block;
    page-break-after: always;
  }
`
const insElements = Array.from(document.querySelectorAll('ins'))

for (const insElement of insElements) {
  const parent = insElement.parentNode
  parent.parentNode.insertBefore(insElement, parent.nextSibling);
  parent.parentNode.removeChild(parent)
}

document.head.appendChild(styleElement)
document.body.innerHTML = document.querySelector('#readme').innerHTML

window.print()
