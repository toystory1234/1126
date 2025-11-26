const nose = document.getElementById('nose');
const cat = document.getElementById('cat');
const message = document.getElementById('message');

let tapCount = 0;

const messages = [
    'にゃー！',
    'くすぐったいにゃ～',
    'もう一回！',
    'にゃんにゃん！',
    '気持ちいいにゃ～ ',
    'やめてにゃ～ ',
    'もっとなでて！ ',
    'ゴロゴロ... '
];

nose.addEventListener('click', function() {
    tapCount++;
    
    // 鼻のアニメーション
    nose.classList.add('pop');
    setTimeout(() => {
        nose.classList.remove('pop');
    }, 500);
    
    // 猫全体を揺らす
    cat.classList.add('shake');
    setTimeout(() => {
        cat.classList.remove('shake');
    }, 500);
    
    // ランダムなメッセージを表示
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    message.textContent = randomMessage;
    message.classList.add('show');
    
    setTimeout(() => {
        message.classList.remove('show');
    }, 2000);
    
    console.log(`タップ回数: ${tapCount}`);
});
