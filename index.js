document.getElementById('btn').addEventListener('click', function(){
fetch("https://apis.scrimba.com/bored/api/activity")
  .then(response => response.json())
  .then(data => {
        document.getElementById("activity-name").innerHTML = `${data.activity}`
        document.getElementById("title").textContent = "🦾 HappyBot🦿"
        document.body.classList.add("fun")
        })
      })