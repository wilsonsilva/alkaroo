const FORBIDDEN_TEMPLATE   = '<span class="gerd gerd-forbidden" tooltip="Triggers GERD symptoms.">$&</span>';
const ALLOWED_TEMPLATE     = '<span class="gerd gerd-allowed" tooltip="Alleviates GERD symptoms.">$&</span>';
const DESCRIPTION_SELECTOR = 'p.menu-index-page__item-desc';

function highlight() {
  const itemDescriptions = document.querySelectorAll(DESCRIPTION_SELECTOR)
  itemDescriptions.forEach(analyseDescription);
}

function analyseDescription(description) {
  const forbiddenFoods = highlightForbiddenFoods(description.innerText);
  const allowedFoods = highlightAllowedFoods(forbiddenFoods);

  description.innerHTML = allowedFoods;
}

function highlightForbiddenFoods(itemDescription) {
  const regEx = new RegExp(FORBIDDEN_FOODS.join('|'), 'gi');
  return itemDescription.replace(regEx, FORBIDDEN_TEMPLATE);
}

function highlightAllowedFoods(itemDescription) {
  const regEx = new RegExp(ALLOWED_FOODS.join('|'), 'gi');
  return itemDescription.replace(regEx, ALLOWED_TEMPLATE);
}

highlight();