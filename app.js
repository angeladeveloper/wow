//The Owen Wilson Wow API was created in 2022 by Avi Mamenko.

//Grab Elements
const wowBtn = document.querySelector('#wowBtn');
const revealBtn = document.querySelector('#revealBtn');
const vidDiv = document.querySelector('#vidDiv');
const options = { method: 'GET', headers: { Accept: 'application/json' } };


// get the content. 
wowBtn.addEventListener('click', e => {

  console.log(`I clicked`);

  fetch('https://owen-wilson-wow-api.herokuapp.com/wows/random', options)

    .then(response => response.json())

    .then(data => {
      const posterUrl = data[0].poster;
      let videoUrl = data[0].video
      const wowUrl = data[0].audio;
      const answer = data[0].movie;
      videoUrl = videoUrl['720p'];
      renderWow(wowUrl, answer, videoUrl)
    })
    .catch(err => console.error(err));
})
// display and handle the content
function renderWow(audioUrl, movieTitle, moviePoster) {
  console.log(`${audioUrl},
   ${movieTitle}`);
  document.querySelector('audio').src = audioUrl;
  revealBtn.addEventListener('click', e => {
    console.log(movieTitle);
    const video = document.querySelector('video');
    const audio = document.querySelector('audio');
    // document.querySelector('img').src = moviePoster;
    video.classList.remove('hidden');
    // audio.classList.add('hidden');
    document.querySelector('video').src = moviePoster;
  })
}