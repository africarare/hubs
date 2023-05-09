class ftrPresAnimationClass {
  name;
  ftr;
  inside;
  listElt;

  constructor() {
    this.name = "portal";
    this.ftr = {};
    this.listElt = [];
    this.inside = false;
  }

  init(_ftr) {
    this.ftr = _ftr;
	  this.listElt = this.ftr.schema.filter(p => p.room === window.room);
  }

  tick() {
    const scene = document.querySelector("a-scene");
    if (!scene.is("entered")) return;

  }
}

export { ftrPresAnimationClass };
