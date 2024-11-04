import './style.css'
import { setupTimer } from './timer'
import { setupQuotes } from './quotes'
import { setupStats } from './stats'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <h1>Nature Timer</h1>
    <div class="timer-container">
      <div class="timer" id="timer">25:00</div>
      <div class="controls">
        <button id="start">Start Break</button>
        <button id="reset">Reset</button>
      </div>
    </div>
    <div class="quote" id="quote"></div>
    <div class="stats">
      <div class="stat-item">
        <h3>Today's Progress</h3>
        <p id="daily-progress">0 minutes outdoors</p>
      </div>
      <div class="stat-item">
        <h3>Total Time</h3>
        <p id="total-progress">0 hours of digital detox</p>
      </div>
    </div>
  </div>
`

setupTimer()
setupQuotes()
setupStats()