class Model {
  constructor () {
    this.currentInput = [];
    this.currentOutput = '';
  }

  updateCurrentInput(keyValue) {
    if (!/^[0-9]/.test(keyValue) && !/^[0-9]/.test(this.currentInput[this.currentInput.length - 1])) {
      console.log('Previous input wasn\'t number');
      return;
    }
    this.currentInput.push(keyValue);
    this.sendInputUpdate(this.currentInput);
  }

  registerClickEvent(keyValue) {
    if (keyValue.charCodeAt(0) === 61) {
      this.calculateCurrentInput();
      return;
    }

    this.updateCurrentInput(keyValue);
  }

  calculateCurrentInput() {
    let temporaryNumber = '';
    const numberHolder = [];

    this.currentInput.forEach((el, i) => {
      if (/^[0-9]/.test(el)) {
        if (i === this.currentInput.length - 1) {
          temporaryNumber += el;
          numberHolder.push(Number(temporaryNumber));
          temporaryNumber = '';
          return;
        }

        temporaryNumber += el;
        return;
      }

      numberHolder.push(Number(temporaryNumber));
      numberHolder.push(el);
      temporaryNumber = '';
      return;
    });

    this.currentInput = [];
    this.currentOutput = eval(numberHolder.join('').toString());
    this.sendInputUpdate(this.currentOutput);
  }

  bindFunction(callback) {
    this.sendInputUpdate = callback;
  }
}

export default Model;
