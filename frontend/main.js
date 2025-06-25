const API_URL = 'http://localhost:3001/feedback';

const feedbackForm = document.getElementById('feedbackForm');
const feedbackInput = document.getElementById('feedbackInput');
const feedbackList = document.getElementById('feedbackList');

// Fetch and display feedbacks
async function loadFeedbacks() {
  feedbackList.innerHTML = '<li>Loading...</li>';
  try {
    const res = await fetch(API_URL);
    const feedbacks = await res.json();
    feedbackList.innerHTML = '';
    if (feedbacks.length === 0) {
      feedbackList.innerHTML = '<li>No feedback yet.</li>';
    } else {
      feedbacks.slice().reverse().forEach(fb => {
        const li = document.createElement('li');
        li.textContent = fb.feedback;
        feedbackList.appendChild(li);
      });
    }
  } catch (err) {
    feedbackList.innerHTML = '<li>Error loading feedback.</li>';
  }
}

// Handle form submit
feedbackForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const feedback = feedbackInput.value.trim();
  if (!feedback) return;
  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ feedback })
    });
    feedbackInput.value = '';
    loadFeedbacks();
  } catch (err) {
    alert('Failed to submit feedback.');
  }
});

// Initial load
loadFeedbacks(); 