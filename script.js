document.addEventListener('DOMContentLoaded', function () {
    const numSnowflakes = 50;
  
    for (let i = 0; i < numSnowflakes; i++) {
      createSnowflake();
    }
  
    function createSnowflake() {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.style.left = Math.random() * 100 + 'vw';
      snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
      document.querySelector('.snowflakes').appendChild(snowflake);
    }
  });