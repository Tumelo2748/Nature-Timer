interface TimerState {
  minutes: number;
  seconds: number;
  isRunning: boolean;
  interval: number | null;
}

const state: TimerState = {
  minutes: 1,
  seconds: 0,
  isRunning: false,
  interval: null
};

export function setupTimer() {
  const timerElement = document.querySelector<HTMLDivElement>('#timer')!;
  const startButton = document.querySelector<HTMLButtonElement>('#start')!;
  const resetButton = document.querySelector<HTMLButtonElement>('#reset')!;

  const updateDisplay = () => {
    timerElement.textContent = `${String(state.minutes).padStart(2, '0')}:${String(state.seconds).padStart(2, '0')}`;
  };

  const tick = () => {
    if (state.seconds === 0) {
      if (state.minutes === 0) {
        stopTimer();
        notifyUser();
        const event = new CustomEvent('timerComplete', { detail: { duration: 25 } });
        document.dispatchEvent(event);
        return;
      }
      state.minutes--;
      state.seconds = 59;
    } else {
      state.seconds--;
    }
    updateDisplay();
  };

  const startTimer = () => {
    if (!state.isRunning) {
      state.isRunning = true;
      state.interval = setInterval(tick, 1000);
      startButton.textContent = 'Pause';
    } else {
      stopTimer();
    }
  };

  const stopTimer = () => {
    if (state.interval) {
      clearInterval(state.interval);
      state.interval = null;
    }
    state.isRunning = false;
    startButton.textContent = 'Start Break';
  };

  const resetTimer = () => {
    stopTimer();
    state.minutes = 25;
    state.seconds = 0;
    updateDisplay();
  };

  const notifyUser = () => {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification('Time to take a nature break!', {
            body: 'Step outside and take a moment to breathe fresh air.',
            icon: '/vite.svg'
          });
        }
      });
    }
  };

  startButton.addEventListener('click', startTimer);
  resetButton.addEventListener('click', resetTimer);
  updateDisplay();
}