// answered-script.js
window.addEventListener('load', function() {
    var backgroundAudio = document.getElementById('backgroundAudio');
    var endCallAudio = document.getElementById('endCallAudio');
    var secondAudio = document.getElementById('secondAudio');
    var isBackgroundPlaying = false;

    // تشغيل الموسيقى الخلفية عند النقر في أي مكان على الصفحة
    document.body.addEventListener('click', function() {
        if (!isBackgroundPlaying) {
            backgroundAudio.play().catch(function(error) {
                console.log('لا يمكن تشغيل الموسيقى: ' + error);
            });
            isBackgroundPlaying = true;
        }
    });

 
});

window.addEventListener('load', function() {
    var endCallButton = document.getElementById('endCallButton');

    endCallButton.addEventListener('click', function() {
        var randomX = Math.random() * (window.innerWidth - endCallButton.offsetWidth);
        var randomY = Math.random() * (window.innerHeight - endCallButton.offsetHeight);

        endCallButton.style.left = randomX + 'px';
        endCallButton.style.top = randomY + 'px';
    });
});

