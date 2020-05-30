class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindFunction(this.sendClickEvent);
    this.model.bindFunction(this.sendInputUpdate, this.sendOutputUpdate);
  }

  sendClickEvent = (keyValue) => {
    this.model.registerClickEvent(keyValue);
  }

  sendInputUpdate = (currentData) => {
    this.view.updateOutput(currentData);
  }

  sendOutputUpdate = (output) => {
    this.view.updateOutput(output);
  }
}

export default Controller;