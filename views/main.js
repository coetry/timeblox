var html = require('choo/html')

var TITLE = `${new Date()}`

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy">
      <main class="pa3 cf center">
        <div class="tc">${TITLE}</div>
        <div class="center flex flex-wrap justify-center w-two-thirds">
          <div class="ba b--near-black w3-ns h3-ns debug-grid ma3-ns">1</div>
          <div class="ba b--near-black w3-ns h3-ns debug-grid ma3-ns">2</div>
          <div class="ba b--near-black w3-ns h3-ns debug-grid ma3-ns">3</div>
          <div class="ba b--near-black w3-ns h3-ns debug-grid ma3-ns">4</div>
          <div class="ba b--near-black w3-ns h3-ns debug-grid ma3-ns">5</div>
          <div class="ba b--near-black w3-ns h3-ns debug-grid ma3-ns">6</div>
          <div class="ba b--near-black w3-ns h3-ns debug-grid ma3-ns">7</div>
          <div class="ba b--near-black w3-ns h3-ns debug-grid ma3-ns">8</div>
          <div class="ba b--near-black w3-ns h3-ns debug-grid ma3-ns">9</div>
          <div class="ba b--near-black w3-ns h3-ns debug-grid ma3-ns">10</div>
          <div class="ba b--near-black w3-ns h3-ns debug-grid ma3-ns">11</div>
          <div class="ba b--near-black w3-ns h3-ns debug-grid ma3-ns">12</div>
          <div class="ba b--near-black w3-ns h3-ns debug-grid ma3-ns">13</div>
          <div class="ba b--near-black w3-ns h3-ns debug-grid ma3-ns">14</div>
          <div class="ba b--near-black w3-ns h3-ns debug-grid ma3-ns">15</div>
          <div class="ba b--near-black w3-ns h3-ns debug-grid ma3-ns">16</div>
          <div class="ba b--near-black w3-ns h3-ns debug-grid ma3-ns">17</div>
          <div class="ba b--near-black w3-ns h3-ns debug-grid ma3-ns">18</div>
          <div class="ba b--near-black w3-ns h3-ns debug-grid ma3-ns">19</div>
          <div class="ba b--near-black w3-ns h3-ns debug-grid ma3-ns">20</div>
          <div class="ba b--near-black w3-ns h3-ns debug-grid ma3-ns">21</div>
          <div class="ba b--near-black w3-ns h3-ns debug-grid ma3-ns">22</div>
          <div class="ba b--near-black w3-ns h3-ns debug-grid ma3-ns">23</div>
          <div class="ba b--near-black w3-ns h3-ns debug-grid ma3-ns">24</div>
        </div>
      </main>
    </body>
  `
}
