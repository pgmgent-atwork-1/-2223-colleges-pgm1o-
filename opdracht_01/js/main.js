(() => {
  const app = {
    init () {
      console.log('1. Initialize Application.');
      this.cacheElements();
      this.registerListeners();
    },
    cacheElements () {
      console.log('2. Cache Elements.');
      this.$referencesList = document.querySelector('.references-list');
      this.$referencesList.innerHTML = this.getHTMLForReferences(references);
      this.$fromContact = document.querySelector('#fromContact');
    },
    registerListeners () {
      console.log('2. Register Listeners.');
      this.$fromContact.addEventListener('submit', (ev) => {
        ev.preventDefault();

        const $elements = ev.currentTarget.elements;

        const data = {
          type: $elements.type.value,
          gender: $elements.gender.value,
          name: $elements.txtName.value,
        }

        const dataAsJSONStr = JSON.stringify(data);
        console.log(dataAsJSONStr);

        return false;
      });
    },
    getHTMLForReferences (references) {
      return references.map((ref) => {
        return `
          <div class="reference">
            <h3 class="reference__title">${ref.title}</h3>
            <picture class="reference__picture">
              <img src="${ref.pictureURL}">
            </picture>
          </div>
        `;
      }).join('');
    }
  };
  app.init();
})();