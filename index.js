// DOM
class DOMNode {
  constructor() {
    this.display = 'block';
    this.margin = 0;
    this.padding = 0;
    this.border = {
      width: 0,
      char: {
        tl: '',
        tr: '',
        br: '',
        bl: '',
      }
    }
    this.children = [];
    this.innerText = '';
    this.contentsArray = [];
  }
}

class DOMContent {
  constructor(rawContents) {
    this.width = 0;
    this.height = 0;
    this.innerText = JSON.stringify(rawContents);
    this.contentsArray = [];
  }
}


class DOMProcessor {
  constructor() {
    
  }
}

module.exports = () => {
	return new DOMProcessor();
};