class View {
  constructor () {
    this.inputKeys = [...document.querySelectorAll('[js-calculator="key"]')];
    this.outputArea = document.querySelector('[data-output]');
    this._initListeners();
  }

  _initListeners() {
    this.inputKeys.forEach((key) => {
      key.addEventListener('click', () => {
        this.sendClickEvent(key.dataset.button);
      })
    })
  }

  updateOutput(currentData) {
    this.outputArea.textContent = currentData;
  }

  bindFunction(callback) {
    this.sendClickEvent = callback;
  }
}

export default View;
