interface Stats {
  dailyMinutes: number;
  totalHours: number;
}

const stats: Stats = {
  dailyMinutes: 0,
  totalHours: 0
};

export function setupStats() {
  const dailyProgress = document.querySelector<HTMLParagraphElement>('#daily-progress')!;
  const totalProgress = document.querySelector<HTMLParagraphElement>('#total-progress')!;

  function updateStats(minutes: number) {
    stats.dailyMinutes += minutes;
    stats.totalHours += minutes / 60;
    
    dailyProgress.textContent = `${stats.dailyMinutes} minutes outdoors`;
    totalProgress.textContent = `${stats.totalHours.toFixed(1)} hours of digital detox`;
    
    saveStats();
  }

  function saveStats() {
    localStorage.setItem('natureTimer_stats', JSON.stringify(stats));
  }

  function loadStats() {
    const saved = localStorage.getItem('natureTimer_stats');
    if (saved) {
      const parsed = JSON.parse(saved);
      stats.dailyMinutes = parsed.dailyMinutes;
      stats.totalHours = parsed.totalHours;
      dailyProgress.textContent = `${stats.dailyMinutes} minutes outdoors`;
      totalProgress.textContent = `${stats.totalHours.toFixed(1)} hours of digital detox`;
    }
  }

  // Listen for timer completion events
  document.addEventListener('timerComplete', ((event: CustomEvent) => {
    updateStats(event.detail.duration);
  }) as EventListener);

  loadStats();
}