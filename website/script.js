// ===== Leads by Status donut =====
const donutCtx = document.getElementById('statusDonut');
if (donutCtx) {
  new Chart(donutCtx, {
    type: 'doughnut',
    data: {
      labels: ['Hot', 'Warm', 'Cold'],
      datasets: [{
        data: [12, 38, 78],
        backgroundColor: ['#EF4444', '#F59E0B', '#3B82F6'],
        borderWidth: 0,
        hoverOffset: 4
      }]
    },
    options: {
      cutout: '72%',
      plugins: { legend: { display: false }, tooltip: { enabled: true } },
      responsive: false
    }
  });
}

// ===== Revenue line chart =====
const lineCtx = document.getElementById('revenueLine');
if (lineCtx) {
  new Chart(lineCtx, {
    type: 'line',
    data: {
      labels: ['May 1', 'May 7', 'May 13', 'May 19', 'May 25', 'May 31'],
      datasets: [{
        data: [4, 6, 5, 8, 7, 10],
        borderColor: '#6C5CE7',
        backgroundColor: 'rgba(108,92,231,0.08)',
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2.5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false }, ticks: { font: { size: 10 }, color: '#8A8CA5' } },
        y: { display: false }
      }
    }
  });
}
