export function generateRandomTime(difficulty, format) {
    const hourFormat = format === '12' ? 12 : 24;
    let hour = Math.floor(Math.random() * hourFormat);
    let minute = Math.floor(Math.random() * 60);
    minute = minute - (minute % 5); // Round to the nearest 5 minutes
    
    // Convert 0 to 12 for twelve hour format
    if (format === '12' && hour === 0) {
        hour = 12;
    }
    
    if (difficulty === 'beginner') {
        // Round to the nearest 15 minutes for beginner difficulty
        minute = Math.round(minute / 15) * 15;
    } else if (difficulty === 'normal') {
        // Round to the nearest 5 minutes for normal difficulty
        minute = Math.round(minute / 5) * 5;
    } else if (difficulty === 'expert') {
        // Random minute for expert difficulty
        minute = Math.floor(Math.random() * 60);
    }

    return { hour, minute };
}