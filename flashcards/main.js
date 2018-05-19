//initialize a question bank
let questionBank = {
  "Not True": "False",
  "Not False": "True",
  "False or False": "False",
  "False or True": "True",
  "True or False": "True",
  "True or True": "True",
  "Not (False or False)": "True",
  "Not (False or True)": "False",
  "Not (True or True)": "False",
  "Not (True or False)": "False",
  "False and False": "False",
  "False and True": "False",
  "True and True": "True",
  "True and False": "False",
  "0 != 1": "True",
  "1 != 1": "False",
  "1 != 0": "True",
  "0 == 0": "True",
  "0 == 1": "False",
  "1 == 1": "True",
  "1 == 0": "False"
};

const question = document.getElementById('question');
question.textContent = '';
for (key in questionBank) {
  question.textContent += `${key} `;
}