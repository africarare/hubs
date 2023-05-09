
class ftrLightClass {
  name;
  ftr;
  inside;
  listElt;

  constructor() {
    this.name = "spawn light";
    this.ftr = {};
    this.listElt = [];
    this.inside = false;
    this.pos = new THREE.Vector3(0, 0, 0);
  }

  init(_ftr) {
    this.ftr = _ftr;
	  this.listElt = this.ftr.schema.filter(p => p.room === window.room);
    

    const timerID_enterInit = setInterval(() => {
      const scene = document.querySelector("a-scene");
      if (!scene.is("entered")) return;

      this.initEntered();
      clearInterval(timerID_enterInit);
    }, 100);

  }

  initEntered() {

    for (const p of this.listElt) {
      let el = document.createElement("a-entity");
      AFRAME.scenes[0].appendChild(el);
      switch(p.color) {
      case "teal":   el.setAttribute("media-loader", { src: "https://vhive-assets.vhive.media/files/ffe5a53c-ae1b-4fa3-a8ce-cfabce8104ef.glb", resolve: true }); break;
      case "warm":   el.setAttribute("media-loader", { src: "https://vhive-assets.vhive.media/files/91255e55-dc7c-4155-8dd3-0802725c1a78.glb", resolve: true }); break;
      case "purple": el.setAttribute("media-loader", { src: "https://vhive-assets.vhive.media/files/8b2b7e01-cd51-47ef-a0f6-7dfe97ae4b51.glb", resolve: true }); break;
      }
      el.setAttribute("networked", { template: "#interactable-media" });
      el.setAttribute("floaty-object", { reduceAngularFloat: true, releaseGravity: -1 });
      el.object3D.position.set(p.position.x, p.position.y, p.position.z);
			el.object3D.name = "lightT";
			if(window.room === "lobby")
				el.object3D.scale.setScalar(2);
    }
  }

  tick() {
    const scene = document.querySelector("a-scene");
    if (!scene.is("entered")) return;

  }

  reload() {
    this.listElt = [];

	  this.listElt = this.ftr.schema.filter(p => p.room === window.room);
  }
}

export { ftrLightClass };
