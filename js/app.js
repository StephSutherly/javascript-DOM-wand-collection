document.addEventListener('DOMContentLoaded', () => {
  console.log('Steph, you got this!');

  const handleDeleteAllClick = function (evt) {
    const wandCollection = document.querySelector('#wand-collection');
    wandCollection.innerHTML = '';}

  const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);

  const handleFormSubmit = function (evt) {
    evt.preventDefault();

    const newRecordOwner = document.createElement('h2');
    newRecordOwner.textContent = `${evt.target.owner.value}`;

    const newRecordWood = document.createElement('h3');
    newRecordWood.textContent = `${evt.target.wood.value}`;

    const newRecordCore = document.createElement('h3');
    newRecordCore.textContent = `${evt.target.core.value}`;

    const newRecordLength = document.createElement('h3');
    newRecordLength.textContent = `${evt.target.length.value}`;

    const newUL = document.createElement('ul');

    const display = document.querySelector('#wand-collection')
    display.appendChild(newUL);
    newUL.appendChild(newRecordOwner);
    newUL.appendChild(newRecordWood);
    newUL.appendChild(newRecordCore);
    newUL.appendChild(newRecordLength);

    document.querySelector('#new-wand-form').reset();

  }

  const form = document.querySelector('#new-wand-form');
  form.addEventListener('submit', handleFormSubmit);

})
