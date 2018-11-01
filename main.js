let snibley = {
  name: "mr. snibley",
  pets: 0,
  moodIndex: 0,
  moods: ["happy", "grumpy", "bitey"],
  tolerance: 3,
  images: ["https://i.ytimg.com/vi/hrxR6sFiq04/maxresdefault.jpg", "https://i.ytimg.com/vi/yVN-0k3zK8s/maxresdefault.jpg"]
}

function pet() {
  snibley.pets++
  if (snibley.pets % snibley.tolerance == 0) {
    if (snibley.moods.length > snibley.moodIndex)
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
  let template = ''
  if (snibley.pets < snibley.tolerance) {
    template = `
  <img src="${snibley.images[snibley.moodIndex]}"/>
        <h2>Name: ${snibley.name}</h2>
        <h2>Pets: ${snibley.pets}</h2>
        <h2>Mood: ${snibley.moods[snibley.moodIndex]}</h2>
      `
  }
  else {
    template = `
      < img src = "${snibley.images[snibley.moodIndex]}"/>
        <h2>Name: ${snibley.name}</h2>
        <h2>Pets: ${snibley.pets}</h2>
        <h2>Mood: ${snibley.moods[snibley.moodIndex]}</h2>
        `
  }
  document.getElementById('cat-stats').innerHTML = template

}
draw()