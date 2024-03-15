let array = [];

function renderArray() {
  const arrayContainer = document.getElementById('arrayContainer');
  arrayContainer.innerHTML = '';

  array.forEach((element, index) => {
    const arrayElement = document.createElement('div');
    arrayElement.classList.add('array-element');
    arrayElement.textContent = element;
    arrayElement.onclick = () => alert(`Element at index ${index}: ${element}`);
    arrayContainer.appendChild(arrayElement);
  });
}

function addElement() {
  const newValue = prompt('Enter a value to add to the array:');
  if (newValue !== null) {
    array.push(newValue);
    renderArray();
  }
}

function removeElement() {
  const indexToRemove = prompt('Enter the index to remove:');
  if (indexToRemove !== null) {
    array.splice(indexToRemove, 1);
    renderArray();
  }
}

function findMax() {
  const max = Math.max(...array);
  alert(`Maximum value in the array: ${max}`);
}

function findMin() {
  const min = Math.min(...array);
  alert(`Minimum value in the array: ${min}`);
}

// Initial rendering
renderArray();
