
  const $screen = document.querySelector('#screen');
  const $result = document.querySelector('#result');
  const $reset = document.querySelector('#reset');
  const $record = document.querySelector('#result');
  const $build = document.querySelector('#build');
 
  let startTime;
  let endTime;
  const records = [];
  let timeoutId;
  $screen.addEventListener('click', function () {
    if ($screen.classList.contains('waiting')) { // 파랑
      $screen.classList.remove('waiting');
      $screen.classList.add('ready');
      $screen.textContent = '초록색이 되면 클릭하세요';
      timeoutId = setTimeout(function () {
        startTime = new Date();
        $screen.classList.remove('ready');
        $screen.classList.add('now');
        $screen.textContent = '클릭하세요!';
      }, Math.floor(Math.random() * 1000) + 2000); // 2초에서 3초 사이 2000~3000 사이 수
    } else if ($screen.classList.contains('ready')) { // 빨강
      clearTimeout(timeoutId);
      $screen.classList.remove('ready');
      $screen.classList.add('waiting');
      $screen.textContent = '너무 성급하시군요!';
    } else if ($screen.classList.contains('now')) { // 초록
      endTime = new Date();
      const current = endTime - startTime;
      records.push(current);
      const average = records.reduce((a, c) => a + c) / records.length;
      $result.textContent = `현재 ${current}ms, 평균: ${average}ms`;
      const topFive = records.sort((p, c) => p - c).slice(0, 5);
      topFive.forEach((top, index) => {
        $result.append(
          document.createElement('br'),
          `${index + 1}위: ${top}ms`,
        );
      });
      startTime = null;
      endTime = null;
      $screen.classList.remove('now');
      $screen.classList.add('waiting');
      $screen.textContent = '클릭해서 시작하세요';
    }
  });
  new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: [0,25,50,75,100,125,150,175,200,225,250,275,300,325,350,375,400,425,450],
      datasets: [{ 
          data: [0,0,0,0,5,15,100,130,50,10,10,10,6,2,0,0,0,0,0],
          label: "person",
          borderColor: "#black",
          fill: false
        }
      ]
    }
  });
// $record.addEventListener('click',function(){
//   const average = records.reduce((a, c) => a + c) / records.length;
//   if(average.length === 5){
// for(let i=0;i<5;i++){
//     average.sort();
//     console.log(average)
//   }
//   }

  
// })