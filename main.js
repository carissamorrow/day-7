let snibley = {
  name: "mr. snibley",
  pets: 0,
  moodIndex: 0,
  moods: ["happy", "grumpy", "bitey"],
  tolerance: 3,
  images: ["https://i.ytimg.com/vi/hrxR6sFiq04/maxresdefault.jpg", "https://static.boredpanda.com/blog/wp-content/uploads/2017/01/fb-image-sharing-dashboard_587514478bd22.jpg"]
}

function pet() {
  snibley.pets++
  if (snibley.pets % snibley.tolerance == 0) {
    if (snibley.moods.length - 1 > snibley.moodIndex)
      snibley.moodIndex++
  }
  draw()
}

function reset() {
  snibley.pets = 0
  snibley.moodIndex = 0
  draw()
}

function draw() {
  let template = `
  <img src="${snibley.images[snibley.moodIndex]}"/>
        <h2>Name: ${snibley.name}</h2>
        <h2>Pets: ${snibley.pets}</h2>
        <h2>Mood: ${snibley.moods[snibley.moodIndex]}</h2>
      `
  document.getElementById('cat-stats').innerHTML = template

}
draw()