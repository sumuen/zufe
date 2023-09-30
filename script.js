const confettiTriggers = document.querySelectorAll('.qr-code');
const audioElement = document.getElementById('audio-element');
confettiTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      // 在点击时触发自定义彩纸效果
      customConfetti();
  
      // 在点击时播放音频
      audioElement.currentTime = 0; // 从音频开始处播放
      audioElement.play();
  
      // 停止播放音频（例如：播放 3 秒钟）
      setTimeout(() => {
        audioElement.pause();
      }, 3000); // 3000 毫秒 = 3 秒
    });
  });
var end = Date.now() + (3 * 1000);
//将你的新效果代码封装在一个函数中，例如 customConfetti()：
function customConfetti() {
    var end = Date.now() + (3 * 1000);
    var colors = ['#67a1f4', '#ffffff'];
  
    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });
  
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }
  document.getElementById("avatar-input").addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("avatar-img").src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
  