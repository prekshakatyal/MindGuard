const calendar = [
    { time: "9:00 AM", task: "Team Standup" },
    { time: "11:00 AM", task: "Client Meeting" },
    { time: "1:00 PM", task: "Code Review" },
    { time: "3:00 PM", task: "Report Writing" },
    { time: "5:00 PM", task: "Performance Review" }
  ];
  
  window.onload = () => {
    const calendarContainer = document.getElementById("calendar");
    calendar.forEach(entry => {
      const item = document.createElement("div");
      item.className = "calendar-item";
      item.textContent = `${entry.time} - ${entry.task}`;
      calendarContainer.appendChild(item);
    });
  };
  
  function analyzeStress() {
    const input = document.getElementById("journal").value.toLowerCase();
    const result = document.getElementById("result");
  
    const stressWords = ["stressed", "tired", "overwhelmed", "burnout", "anxious", "pressure", "fatigued"];
    let score = 0;
  
    stressWords.forEach(word => {
      if (input.includes(word)) {
        score++;
      }
    });
  
    if (score === 0) {
      result.textContent = "You seem to be doing great today! Keep it up. ✅";
    } else if (score <= 2) {
      result.textContent = "We noticed signs of stress. Suggestion: Take a 10-min walk at 5:10 PM. 🌿";
    } else {
      result.textContent = "High stress detected. Notifying wellness team for support session. 🧑‍⚕️";
    }
  }
  