const html = require('choo/html')

let currentTime = new Date()
let currentHour = currentTime.getHours() 
const TITLE = String(currentTime)

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  
  return html`
    <body class="code lh-copy">
      <main class="pa3 cf center">
        <div class="tc">${TITLE}</div>
        <div class="center flex flex-wrap justify-center w-two-thirds">
          ${Array(24).join(0).split(0).map((item, i) => {
            if (i < currentHour) { 
              return html`
                <div class="pa3 bg-red white w3 h3 ma3">${i}</div>
              `
            } else if (i === currentHour) {
                return html`
                  <div class="pa3 red ba b--red bw2 w3 h3 ma3">${i}</div>
                `
            } else {
              return html`
                <div class="pa3 bg-black-70 white w3 h3 ma3">${i}</div>
              `
            }
          })
          }
        </div>
      </main>
    </body>
  `
}
