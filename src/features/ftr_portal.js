class ftrPortalClass {
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

    const selfPos = AFRAME.scenes[0].querySelector("#avatar-rig").object3D.position;

    for (const p of this.listElt) {
      if (selfPos.distanceTo(new THREE.Vector3(p.position.x, p.position.y, p.position.z)) < p.radius) {
        if (!this.inside) {
          this.inside = true;

					// 1) delete all
					window.deleteFeatures();
					
					// 2) Change name of room
					switch(p.destHubId) {
					case "N4RRqKT": window.room = "lobby"; break;
					case "uw8dUzx": window.room = "abstract"; break;
					}

					// 3) Change scene
          changeHub(p.destHubId, true, ""); // move to new room without page load or entry flow

					// 4) Load new features once the scene is loaded
					const timerID_reload = setInterval(() => {
						const scene = document.querySelector("a-scene");
						scene.object3D.traverse( (e) => {
							switch(p.destHubId) {
							case "N4RRqKT":
								if(e.name === "ico_1") {
									window.reloadFeatures();
									clearInterval(timerID_reload);
								}
								break;
							case "uw8dUzx":
								if(e.name === "abstract") {
									window.reloadFeatures();
									clearInterval(timerID_reload);
								}
								break;
							}
						})

					}, 100);
        }
      }
    }
  }

  reload() {
    this.listElt = [];
    this.inside = false;

	  this.listElt = this.ftr.schema.filter(p => p.room === window.room);
  }
}

export { ftrPortalClass };
