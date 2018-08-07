var prompts = [
  'Write about a memorable childhood memory',
  'Write about your darkest fears',
  'Write about what makes you happy',
  'Make up a story about a dog named Rover',
  'What are your thoughts about artificial intelligence and do you think it is ethical',
  'Rewrite a fairy tale. Give it a new ending or make it modern or write as a poem.',
  'How do you think the world is going to end up in 20 years?',
  'If you were to be someone else for a day who would it be? Why?',
  'Write from the viewpoint of a cactus. What is it like to live in the dessert'
]

function Prompts(){
  var randomNumber = Math.floor(Math.random() * (prompts.length));
  document.getElementById('quoteDisplay').innerHTML = prompts[randomNumber];




}
