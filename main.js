const $screen = document.querySelector('#screen')
const $resultAvg = document.querySelector('.resultAvg')

let startTime;
let endTime;
let timeoutId;
const records=[];

$screen.addEventListener('click',function(){
    if($screen.classList.contains('waiting')){
        $screen.classList.remove('waiting')
        $screen.classList.add('ready')
        $screen.textContent = '초록색이 되면 클릭하세요!!'
        timeoutId = setTimeout(function(){
            startTime=new Date();
            $screen.classList.remove('ready');
            $screen.classList.add('now');
            $screen.textContent= '클릭하세요!'
        },Math.floor(Math.random()*1000)+2000);
    }else if($screen.classList.contains('ready')){
        clearTimeout(timeoutId);
        $screen.classList.remove('ready');
        $screen.classList.add('waiting');
        alert("너무 성급하시네요!")
        $screen.textContent= '초록색이 되면 클릭하세요!!'
    }else if($screen.classList.contains('now')){
        endTime=new Date();
        const current = endTime - startTime;
        records.push(current);
        const average = records.reduce((a,c)=>a+c)/records.length;
        $resultAvg.textContent = `현재 ${current}ms 평균 :${average}ms`
        startTime = null;
        endTime = null;
        $screen.classList.remove('now');
        $screen.classList.add('waiting');
        $screen.textContent= '클릭해서 시작하세요!';
        if(current <=125){alert("평균 이상입니다!!!")}
        else if(current <=325){alert("평균 입니다!!!")}
        else {alert("평균 이하입니다!!!")}
        
    }
});

