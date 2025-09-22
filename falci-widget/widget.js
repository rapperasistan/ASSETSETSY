// Hazır fal cevapları
const fortuneResponses = [
    "🌟 Yakın gelecekte büyük bir fırsat seni bekliyor!",
    "💫 Bu hafta içinde beklemediğin bir sürpriz yaşayacaksın.",
    "🔮 Sabır göster, istediğin şey zaman alacak ama gelecek.",
    "✨ Çok yakında hayatında pozitif bir değişiklik olacak!",
    "🌙 İçindeki ses seni doğru yöne götürüyor, ona güven.",
    "💎 Değerini bilenler yakında hayatına girecek.",
    "🌈 Zorlu günlerin sonu geldi, güzel günler başlıyor!",
    "⭐ Bu soru için çok erken, biraz daha bekle.",
    "🎭 Görünen o değil, asıl gerçek daha güzel!",
    "🎯 Hedefine odaklan, başarı kapıda bekliyor!",
    "🌸 Aşk konusunda güzel haberler alacaksın.",
    "💰 Mali durumunda iyileşme başlayacak.",
    "🎪 Eğlenceli günler seni bekliyor!",
    "🔥 İçindeki ateş sönmeyecek, devam et!",
    "🦋 Değişim zamanı geldi, korkma!"
];

// Widget elementi
const fortuneTeller = document.getElementById('fortuneTeller');
const usernameEl = document.querySelector('.username');
const questionEl = document.querySelector('.question');
const answerEl = document.querySelector('.answer');

// Rastgele cevap seç
function getRandomFortune() {
    return fortuneResponses[Math.floor(Math.random() * fortuneResponses.length)];
}

// Fal göster
function showFortune(username, question) {
    // Kullanıcı adı ve soruyu göster
    usernameEl.textContent = `@${username} soruyor:`;
    questionEl.textContent = question;
    answerEl.textContent = getRandomFortune();

    // Widget'ı göster
    fortuneTeller.classList.remove('hidden');

    // 8 saniye sonra gizle
    setTimeout(() => {
        fortuneTeller.classList.add('hidden');
    }, 8000);
}

// StreamElements event listener
window.addEventListener('onEventReceived', function (obj) {
    const event = obj.detail.event;

    // Chat mesajlarını dinle
    if (event.type === 'message') {
        const username = event.data.displayName || event.data.nick;
        const message = event.data.text;

        // !ask komutu kontrolü
        if (message.toLowerCase().startsWith('!ask ')) {
            const question = message.substring(5).trim(); // "!ask " kısmını çıkar

            if (question.length > 0) {
                showFortune(username, question);
            }
        }
    }
});

// Test için (geliştirme sırasında)
// showFortune('TestUser', 'Ne zaman zengin olacağım?');