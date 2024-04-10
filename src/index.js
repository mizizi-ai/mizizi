

// Event listeners for interactive buttons
// Example:
document.getElementById('learnMoreBtn').addEventListener('click', function() {
  // Code to execute when button is clicked 
});
async function fetchAINews() {
  const apiKey = "YOUR_NEWSAPI_KEY"; // Replace with your actual key
  const url = `https://newsapi.org/v2/everything?q=artificial intelligence&apiKey=${ee9ef50566ff4c7fa3754ef2713e8f1a}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    displayNews(data.articles); // We'll create this function next
  } catch (error) {
    console.error("Error fetching news:", error);
  }  
}

function displayNews(articles) {
  const newsItemsContainer = document.querySelector(".news-items"); 
  articles.forEach(article => {
    const newsItem = document.createElement("div"); 
    newsItem.classList.add("news-item");
    newsItem.innerHTML = `
       <img src="${article.urlToImage}" alt="${article.title}">
       <h3>${article.title}</h3>
       <p class="excerpt">${article.description}</p>
       <a href="${article.url}" class="read-more" target="_blank">Read More</a>
    `;
    newsItemsContainer.appendChild(newsItem);
  });
}

fetchAINews(); // Call the function to fetch news on page load. 
// Install dotenv (using npm)

// Update your script.js
require('dotenv').config(); // Load environment variables

async function fetchAINews() {
  const apiKey = process.env.NEWS_API_KEY;  
  // ... rest of your code remains the same 
}
async function fetchTeamData() {
  const response = await fetch('db.json');
  const teamData = await response.json();
  displayTeamMembers(teamData); 
}

function displayTeamMembers(teamData) {
    const teamMembersContainer = document.querySelector('.team-members'); 
    teamData.forEach(member => {
      const teamMember = document.createElement('div');
      teamMember.classList.add('team-member'); 
      teamMember.innerHTML = ` 
        <img src="${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.title}</p>
        <ul class="social-links">
            <li><a href="${member.linkedin}" target="_blank"><i class="fa fa-linkedin"></i></a></li>
        </ul>
      `;
      teamMembersContainer.appendChild(teamMember); 
   });
}

fetchTeamData(); // Call the function on page load