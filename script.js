// ===========================
// Supernatural Episode Lookup
// ===========================

(function () {
  'use strict';

  var seasonSelect = document.getElementById('seasonSelect');
  var episodeSelect = document.getElementById('episodeSelect');
  var resultsDiv = document.getElementById('results');
  var placeholder = document.getElementById('placeholder');
  var resultBadge = document.getElementById('resultBadge');
  var resultTitle = document.getElementById('resultTitle');
  var resultMeta = document.getElementById('resultMeta');
  var resultFacts = document.getElementById('resultFacts');
  var randomBtn = document.getElementById('randomBtn');

  // Populate season dropdown
  for (var s = 1; s <= 15; s++) {
    var opt = document.createElement('option');
    opt.value = s;
    opt.textContent = 'Season ' + s;
    seasonSelect.appendChild(opt);
  }

  // When a season is selected, populate episodes
  seasonSelect.addEventListener('change', function () {
    var season = parseInt(this.value);
    episodeSelect.innerHTML = '<option value="">Choose an episode</option>';

    if (!season) {
      episodeSelect.disabled = true;
      showPlaceholder();
      return;
    }

    var count = SEASON_EPISODE_COUNTS[season] || 22;
    var episodesInSeason = EPISODES[season] || [];

    for (var e = 1; e <= count; e++) {
      var opt = document.createElement('option');
      opt.value = e;
      var epData = findEpisode(season, e);
      if (epData) {
        opt.textContent = 'Episode ' + e + ' — ' + epData.title;
      } else {
        opt.textContent = 'Episode ' + e;
      }
      episodeSelect.appendChild(opt);
    }

    episodeSelect.disabled = false;
    showPlaceholder();
  });

  // When an episode is selected, show results
  episodeSelect.addEventListener('change', function () {
    var season = parseInt(seasonSelect.value);
    var ep = parseInt(this.value);

    if (!season || !ep) {
      showPlaceholder();
      return;
    }

    var data = findEpisode(season, ep);
    if (data) {
      showResult(season, ep, data);
    } else {
      showNoData(season, ep);
    }
  });

  // Random episode button
  randomBtn.addEventListener('click', function () {
    var seasons = Object.keys(EPISODES);
    var randSeason = seasons[Math.floor(Math.random() * seasons.length)];
    var eps = EPISODES[randSeason];
    var randEp = eps[Math.floor(Math.random() * eps.length)];

    seasonSelect.value = randSeason;
    seasonSelect.dispatchEvent(new Event('change'));

    episodeSelect.value = randEp.ep;
    episodeSelect.dispatchEvent(new Event('change'));
  });

  function findEpisode(season, ep) {
    var eps = EPISODES[season];
    if (!eps) return null;
    for (var i = 0; i < eps.length; i++) {
      if (eps[i].ep === ep) return eps[i];
    }
    return null;
  }

  function showResult(season, ep, data) {
    resultBadge.textContent = 'S' + pad(season) + 'E' + pad(ep);
    resultTitle.textContent = data.title;

    var metaParts = [];
    if (data.aired) metaParts.push('Aired: ' + data.aired);
    if (data.director) metaParts.push('Directed by ' + data.director);
    resultMeta.textContent = metaParts.join(' \u00B7 ');

    resultFacts.innerHTML = '';
    data.facts.forEach(function (fact) {
      var li = document.createElement('li');
      li.textContent = fact;
      resultFacts.appendChild(li);
    });

    resultsDiv.classList.remove('hidden');
    placeholder.classList.add('hidden');

    // Re-trigger animation
    resultsDiv.style.animation = 'none';
    resultsDiv.offsetHeight; // force reflow
    resultsDiv.style.animation = '';
  }

  function showNoData(season, ep) {
    resultBadge.textContent = 'S' + pad(season) + 'E' + pad(ep);
    resultTitle.textContent = 'Episode ' + ep;
    resultMeta.textContent = 'Season ' + season;

    resultFacts.innerHTML = '';
    var li = document.createElement('li');
    li.textContent = 'Fun facts for this episode are not yet in our database. Try another episode or hit Random!';
    resultFacts.appendChild(li);

    resultsDiv.classList.remove('hidden');
    placeholder.classList.add('hidden');

    resultsDiv.style.animation = 'none';
    resultsDiv.offsetHeight;
    resultsDiv.style.animation = '';
  }

  function showPlaceholder() {
    resultsDiv.classList.add('hidden');
    placeholder.classList.remove('hidden');
  }

  function pad(n) {
    return n < 10 ? '0' + n : '' + n;
  }
})();
