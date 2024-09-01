document.addEventListener('DOMContentLoaded', function() {
  const findCollegesBtn = document.querySelector('.cutoff-prediction button');
  findCollegesBtn.addEventListener('click', function() {
      const percentileInput = document.querySelector('.cutoff-prediction input').value;
      const probabilityDisplay = document.querySelector('.probability-chart p');

      // Simple example of probability calculation
      if (percentileInput) {
          const probability = Math.min(100, percentileInput * 1.2).toFixed(2);
          probabilityDisplay.textContent = `Probability: ${probability}%`;
      } else {
          probabilityDisplay.textContent = "Please enter your percentile.";
      }
  });
});
