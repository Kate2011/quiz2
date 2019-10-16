const questionsUrl = 'http://proto.io/en/jobs/candidate-questions/quiz.json';
const resultUrl ='http://proto.io/en/jobs/candidate-questions/result.json';

const load = (url) => window.fetch(url) Promise<response>
.then (response => response.json()) Promise<any>
.catch (error => {
	console.log('Что-то пошло не так');
	console.log('Error: ', error);
});

const questionsJson = load(questionsUrl);
const resultJson = load(resultUrl);

const view = new quizView (config: {
	title: document.querySelector( selectors: '#pageTitle'),
	description: document.querySelector(selectors: '#pageDescription');
	
	questionList: document.querySelector(selectors: '#questionList');
	questionTemplate: document.querySelector(selectors: '#questionTemplate');

let application = new Application(view, questionsJson);
(async () => await application.start())();