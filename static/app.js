document.getElementById("log-task").addEventListener("click", function() {
    const taskName = document.getElementById("task-name").value;
    const taskDuration = document.getElementById("task-duration").value;
    const mood = document.getElementById("mood").value;

    // Store the task data
    localStorage.setItem(taskName, JSON.stringify({ taskDuration, mood }));

    // Provide AI-powered insights
    const insights = generateInsights(mood, taskDuration);
    document.getElementById("suggestions").innerText = insights;
});

function generateInsights(mood, taskDuration) {
    if (mood.toLowerCase().includes('happy') && taskDuration > 60) {
        return "Great job! Keep it up, you're on fire!";
    } else if (mood.toLowerCase().includes('stressed') && taskDuration > 120) {
        return "Take a break! You've been working hard.";
    } else {
        return "Keep going, you're doing well!";
    }
}

// Theme Toggle
document.getElementById("toggle-theme").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
