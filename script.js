  // Fonction pour afficher un nombre
  function appendNumber(number) {
    document.getElementById('display').value += number;
  }

  // Fonction pour afficher un opérateur
  function appendOperator(operator) {
    document.getElementById('display').value += ' ' + operator + ' ';
  }

  // Fonction pour effacer l'affichage
  function clearDisplay() {
    document.getElementById('display').value = '';
  }

  // Fonction pour calculer le résultat
  function calculate() {
    try {
      let expression = document.getElementById('display').value.replace(/x/g, '*');
      document.getElementById('display').value = eval(expression);
    } catch {
      document.getElementById('display').value = 'Erreur';
    }
  }

  // Fonction pour effacer le dernier caractère
  function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }