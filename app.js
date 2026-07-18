const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

let currentDosha = null;
let quizStep = 0;
let quizAnswers = new Array(QUIZ_QUESTIONS.length).fill(null);
let advanceTimer = null;

function scrollToElement(selector) {
  $(selector).scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function hideAppViews() {
  $$('#experience .app-view').forEach((view) => view.classList.add('hidden'));
}

function showAppView(id) {
  hideAppViews();
  $(`#${id}`).classList.remove('hidden');
}

function returnToDoshas() {
  window.clearTimeout(advanceTimer);
  hideAppViews();
  scrollToElement('#dosha-select');
}

function startQuiz() {
  window.clearTimeout(advanceTimer);
  currentDosha = null;
  quizStep = 0;
  quizAnswers = new Array(QUIZ_QUESTIONS.length).fill(null);
  renderQuiz();
  showAppView('quiz');
  scrollToElement('#experience');
}

$$('.dosha-node').forEach((node) => {
  node.addEventListener('click', () => {
    currentDosha = node.dataset.dosha;
    showResults();
  });
});

$('#take-quiz-btn').addEventListener('click', startQuiz);
$('#result-quiz-btn').addEventListener('click', startQuiz);
$('#close-quiz').addEventListener('click', returnToDoshas);
$('#back-btn').addEventListener('click', returnToDoshas);

function renderQuiz() {
  const question = QUIZ_QUESTIONS[quizStep];
  const progress = ((quizStep + 1) / QUIZ_QUESTIONS.length) * 100;

  $('#quiz-container').innerHTML = `
    <div class="quiz-meta">
      <span>Question ${String(quizStep + 1).padStart(2, '0')}</span>
      <span>${quizStep + 1} of ${QUIZ_QUESTIONS.length}</span>
    </div>
    <div class="quiz-progress-bar" role="progressbar" aria-label="Dosha test progress"
         aria-valuemin="1" aria-valuemax="${QUIZ_QUESTIONS.length}" aria-valuenow="${quizStep + 1}">
      <div class="quiz-progress-fill" style="width: ${progress}%"></div>
    </div>
    <h2 class="quiz-question">${question.question}</h2>
    <p class="quiz-support">Choose what best reflects your usual pattern.</p>
    <div class="quiz-image-cards">
      ${question.options.map((option, index) => `
        <button class="quiz-card ${quizAnswers[quizStep] === index ? 'selected' : ''}"
                type="button" data-index="${index}"
                aria-label="${option.text}: ${option.subtitle}"
                aria-pressed="${quizAnswers[quizStep] === index}">
          <span class="quiz-card-img">
            <img src="${option.image}" alt="" loading="lazy">
          </span>
          <span class="quiz-card-copy">
            <span class="quiz-card-title">${option.text}</span>
            <span class="quiz-card-sub">${option.subtitle}</span>
          </span>
          <span class="choice-mark" aria-hidden="true">→</span>
        </button>
      `).join('')}
    </div>
  `;

  $('#quiz-prev').hidden = quizStep === 0;

  $$('.quiz-card').forEach((card) => {
    card.addEventListener('click', () => selectAnswer(Number(card.dataset.index)));
  });
}

function selectAnswer(answerIndex) {
  window.clearTimeout(advanceTimer);
  quizAnswers[quizStep] = answerIndex;

  $$('.quiz-card').forEach((card) => {
    const selected = Number(card.dataset.index) === answerIndex;
    card.classList.toggle('selected', selected);
    card.setAttribute('aria-pressed', String(selected));
  });

  advanceTimer = window.setTimeout(() => {
    if (quizStep < QUIZ_QUESTIONS.length - 1) {
      quizStep += 1;
      renderQuiz();
    } else {
      currentDosha = calculateDosha();
      showResults();
    }
  }, 240);
}

$('#quiz-prev').addEventListener('click', () => {
  window.clearTimeout(advanceTimer);
  if (quizStep > 0) {
    quizStep -= 1;
    renderQuiz();
  }
});

function calculateDosha() {
  const scores = { vata: 0, pitta: 0, kapha: 0 };

  quizAnswers.forEach((answerIndex, questionIndex) => {
    if (answerIndex !== null) {
      const dosha = QUIZ_QUESTIONS[questionIndex].options[answerIndex].dosha;
      scores[dosha] += 1;
    }
  });

  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}

function showResults() {
  const info = DOSHA_INFO[currentDosha];

  $('#dosha-result').innerHTML = `
    <div class="result-intro">
      <div class="result-image">
        <img src="${info.image}" alt="Food inspiration for ${info.name} dosha" loading="lazy">
      </div>
      <div class="result-copy">
        <p class="eyebrow">${info.elements}</p>
        <h1>${info.name}</h1>
        <p class="dosha-desc">${info.description}</p>
      </div>
    </div>
    <div class="favor-avoid">
      <div>
        <p class="list-label">Favor more often</p>
        <ul>${info.favor.map((food) => `<li>${food}</li>`).join('')}</ul>
      </div>
      <div>
        <p class="list-label">Enjoy less often</p>
        <ul>${info.avoid.map((food) => `<li>${food}</li>`).join('')}</ul>
      </div>
    </div>
  `;

  $('#dietary-tips').innerHTML = `
    <div>
      <p class="eyebrow">Everyday rhythm</p>
      <h2>Practical habits for ${info.name}</h2>
    </div>
    <ul>${info.tips.map((tip) => `<li>${tip}</li>`).join('')}</ul>
  `;

  $('#meal-type').value = 'all';
  renderMeals('all');
  showAppView('results');
  scrollToElement('#experience');
}

function renderMeals(filter) {
  const meals = MEALS[currentDosha];
  const filteredMeals = filter === 'all'
    ? meals
    : meals.filter((meal) => meal.type === filter);

  $('#meals-grid').innerHTML = filteredMeals.map((meal) => `
    <article class="meal-card">
      <div class="meal-card-img">
        <img src="${meal.image}" alt="${meal.name}" loading="lazy">
      </div>
      <div class="meal-card-body">
        <span class="meal-tag">${meal.type}</span>
        <h3>${meal.name}</h3>
        <p>${meal.desc}</p>
        <p class="ingredients"><span>Made with</span> ${meal.ingredients}</p>
      </div>
    </article>
  `).join('');
}

$('#meal-type').addEventListener('change', (event) => renderMeals(event.target.value));
