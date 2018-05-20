//initialize a question bank
//as object
// let questionBank = {
//   "Not True": "False",
//   "Not False": "True",
//   "False or False": "False",
//   "False or True": "True",
//   "True or False": "True",
//   "True or True": "True",
//   "Not (False or False)": "True",
//   "Not (False or True)": "False",
//   "Not (True or True)": "False",
//   "Not (True or False)": "False",
//   "False and False": "False",
//   "False and True": "False",
//   "True and True": "True",
//   "True and False": "False",
//   "0 != 1": "True",
//   "1 != 1": "False",
//   "1 != 0": "True",
//   "0 == 0": "True",
//   "0 == 1": "False",
//   "1 == 1": "True",
//   "1 == 0": "False"
// };


//as map
// let questions = new Map();
// questions.set('Not True', 'False');
// questions.set('Not False', 'True');
// questions.set('False or False', 'False');
// questions.set('False or True', 'True');
// questions.set('True or False', 'True');
// questions.set('True or True', 'True');
// questions.set('Not (False or False)', 'True');
// questions.set('Not (False or True)', 'False');
// questions.set('Not (True or True)', 'False');
// questions.set('Not (True or False)', 'False');
// questions.set('False and False', 'False');
// questions.set('True and True', 'True');
// questions.set('True and False', 'False');
// questions.set('0 != 1', 'True');
// questions.set('1 != 1', 'False');
// questions.set('1 != 0', 'True');
// questions.set('0 == 0', 'True');
// questions.set('0 == 1', 'False');
// questions.set('1 == 1', 'True');
// questions.set('1 == 0', 'False');


let questions = ['Not True', 'Not False', 'False or False', 'False or True', 'True or False', 'True or True', 'Not (False or False)', 'Not (False or True)', 'Not (True or True)', 'Not (True or False', 'False and False', 'False and True', 'True and True', 'True and False', '0 != 1', '1 != 1', '1 != 0', '0 == 0', '0 == 1', '1 == 1', '1 == 0'];
let answers = ['False', 'True', 'False', 'True', 'True', 'True', 'True', 'False', 'False', 'False', 'False', 'False', 'True', 'False', 'True', 'False', 'True', 'True', 'False', 'True', 'False'];

const question = document.getElementById('question');
const next = document.getElementById('next');


next.addEventListener('click', function() {
  for (i = 0; i < questions.length; i++) {
    question.innerHTML = questions[i];
  }
});





  
