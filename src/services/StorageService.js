class Storage {
  static get(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  static set(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  static isNull(key) {
    if (this.get(key) === null) {
      return true;
    }

    return false;
  }
}

export default Storage;
