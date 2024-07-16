// script.js
document.getElementById('answerButton').addEventListener('click', function() {
    document.getElementById('answerAudio').play();
    document.getElementById('declineAudio').pause();
    document.getElementById('declineAudio').currentTime = 0;

    // تحميل واجهة الرد
    setTimeout(function() {
        window.location.href = 'scall.html';
    }, 1500); // تأخير بسيط لتشغيل الصوت قبل الانتقال
});

document.getElementById('declineButton').addEventListener('click', function() {
    document.getElementById('declineAudio').play();
    document.getElementById('answerAudio').pause();
    document.getElementById('answerAudio').currentTime = 0;

    // يمكنك إضافة أي إجراء آخر تريده عند الرفض هنا
});
