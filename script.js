// Configuration - Customize these!
const CONFIG = {
    // Set your relationship start date (Year, Month-1, Day)
    relationshipStartDate: new Date(2018, 01, 11), // January 11, 2018
    
    // Customize your memories
    memories: [
        { icon: '☕', title: 'First Date', description: 'That coffee shop where it all began' },
        { icon: '🎬', title: 'Movie Night', description: 'When we watched our favorite film together' },
        { icon: '🌅', title: 'Beach Sunset', description: 'Watching the sunset by the ocean' },
        { icon: '🎂', title: 'Birthday 11-08', description: 'The cake that made you smile' },
        { icon: '✈️', title: 'Adventure Trip', description: 'Our unforgettable journey together' },
        { icon: '🎵', title: 'Concert', description: 'Dancing to our favorite songs' }
    ]
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    createFloatingHearts();
    generateMemoryCards();
    startCounter();
});

// Create floating hearts background
function createFloatingHearts() {
    const container = document.getElementById('heartsContainer');
    const heartSymbols = ['❤️', '💕', '💖', '💗', '💝', '💞'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 10000);
    }, 300);
}

// Generate memory cards
function generateMemoryCards() {
    const memoryCards = document.getElementById('memoryCards');
    
    CONFIG.memories.forEach((memory, index) => {
        
