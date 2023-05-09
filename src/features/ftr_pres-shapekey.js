class ftrPresShapekeyClass {
  name;
  ftr;
  inside;
  listElt;
  listMorph;

  constructor() {
    this.name = "pres-shapekey";
    this.ftr = {};
    this.listElt = [];
    this.listMorph = [];
  }

  // cue:
  // - objName
  // - morphName
  // - distMin, distMax
  // - valMin, valMax

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
    //this.spokeMap = AFRAME.scenes[0].sceneEl.object3D.children[12].children[0].children[0].children[0];
    //this.spokeMap = AFRAME.scenes[0].sceneEl.object3D.children[13].children[0].children[0].children[0];
    this.spokeMap = AFRAME.scenes[0].sceneEl.object3D;

      // Init Morph
    this.listElt.forEach( _cue => {
      let morph = {}; // name, point of proximity, radius, rule of update, morphDictIndex

      // 1) Checking if object exist
      //let refObj = this.spokeMap.filter( x => x.name == _cue.objName)[0]
      let refObj = undefined; 
      this.spokeMap.traverseVisible( (_obj) => {
        if(_obj.name == _cue.objName) {
          refObj = _obj;
        }
      })


        // Should be a traverse, in order to get the name of object inside object by their name in blender
      if(typeof refObj === "undefined") {
        console.error("couldn't find an object in spoke with obj of name; " + _cue.objName);
        return; 
      }

      // 2) Get position (for checking distance)
      morph.position = new THREE.Vector3();
      refObj.getWorldPosition(morph.position)
      
      // 3) Check if have something to apply morph to
      let hasMorph = false;
      refObj.traverseVisible( (_obj) => {
        // 3.1) does it have morphtargets?
        if(typeof _obj.morphTargetDictionary === "undefined")
          return;

        // 3.2) does it have the right morphtarget?
        let indexMorph = _obj.morphTargetDictionary[_cue.morphName];
        if(typeof indexMorph === "undefined") {
        console.error("couldn't find a morphTarget of name: "+ _cue.morphName  +", with obj of name; " + _cue.objName);
        console.log(_obj);
      
          return;
        }
        
        hasMorph = true;
        morph.obj = _obj;
        morph.index = indexMorph;
      });

      // 4) Keep needed info from cue
      morph.valMin = _cue.valMin;
      morph.valMax = _cue.valMax;
      morph.distMin = _cue.distMin;
      morph.distMax = _cue.distMax;
      morph.type = _cue.type;

      if(hasMorph)
        this.listMorph.push(morph);

    });
  }

  tick() {
    const scene = document.querySelector("a-scene");
    if (!scene.is("entered")) return;

    let myPos = AFRAME.scenes[0].querySelector("#avatar-rig").object3D.position;

		let rightCursor = new THREE.Vector3();
		AFRAME.scenes[0].children["avatar-rig"].children["player-right-controller"].object3D.getWorldPosition(rightCursor);
			
		let leftCursor = new THREE.Vector3();
		AFRAME.scenes[0].children["avatar-rig"].children["player-left-controller"].object3D.getWorldPosition(leftCursor);


    this.listMorph.forEach( _morph => {
      // 1) Caluclate value from distance
      let distBody  = myPos.distanceTo(_morph.position);
      let distRight = rightCursor.distanceTo(_morph.position);
      let distLeft  = leftCursor.distanceTo(_morph.position);
	
			let dist = distBody;
			if(_morph.type === "right") dist = distRight;
			if(_morph.type === "left") dist = distLeft;

      let val = THREE.MathUtils.clamp( THREE.MathUtils.mapLinear ( dist, _morph.distMin, _morph.distMax, _morph.valMin, _morph.valMax ), 0, 1)
      // 2) Applying to correct target
      _morph.obj.morphTargetInfluences[_morph.index] = val;
    });

  }

  reload() {
    this.listElt = [];
    this.listMorph = [];

	  this.listElt = this.ftr.schema.filter(p => p.room === window.room);
    this.initEntered();
  }
}


export { ftrPresShapekeyClass };
