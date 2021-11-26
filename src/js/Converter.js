export class ArrayBufferConverter {
  load(buffer) {
    this.loadedBuffer = buffer;
  }

  toString() {
    const view = new Uint16Array(this.loadedBuffer);
    let stringArray = view.slice();
    stringArray = Array.from(stringArray);
    const string = stringArray.map((item) => { item = String.fromCharCode(item); return item; }).join('');
    return string;
  }
}
