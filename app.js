
  // global constants
  const colorWhite = { color: 0xffffff };
  const colorBlack = { color: 0x333333 };
  const tileWidth = 15;   // width of one square (tile) on chess field

  // generic function to move the figures 
  const moveTo = function(i,j) {
    this.object.position.x = (-3.5 + i) * tileWidth;
    this.object.position.z = (-3.5 + j) * tileWidth;
  }



  const scene = createScene();

  // create chessfield as combination (group) of
  // - chessPlane (black) 
  // - and the white tiles

  var chessFieldGroup = new THREE.Group();
  var containerGroup = new THREE.Group(); // contains chessfield and chess figures 

  // create chessplane
  const chessPlaneMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(tileWidth * 8, tileWidth * 8),
    new THREE.MeshPhongMaterial(colorBlack)
  );

  // center of the chessPlane is at (0,0)
  chessPlaneMesh.position.x = 0;
  chessPlaneMesh.position.y = 0;
  
  chessFieldGroup.add(chessPlaneMesh);

  // add white tiles
  for (var i = 0; i < 8; i++) { 
    for (var j = 0; j < 8; j++) {

      if ((i+j) % 2 != 0) {

        const tile = new THREE.Mesh(
          new THREE.PlaneGeometry(tileWidth, tileWidth),
          new THREE.MeshPhongMaterial(colorWhite)
        );
      
        tile.position.x = tileWidth * i - 3.5 * tileWidth;
        tile.position.y = tileWidth * j - 3.5 * tileWidth;
        tile.position.z = 0.1;

        chessFieldGroup.add(tile);
      }
    }
  }

  // PlaneGeometry is always contained in (x,y)-plane
  // rotate it so to lie on the floor
  chessFieldGroup.rotation.x = Math.PI * -0.5;

  for (var i = 0; i < 8; i++) {
    pawn = new Pawn(colorWhite);
    pawn.moveTo(6, i);
    
    containerGroup.add(pawn.object);
  }

  for (var i = 0; i < 8; i++) {
    pawn = new Pawn(colorBlack);
    pawn.moveTo(1, i);
    containerGroup.add(pawn.object);
  }
  

  containerGroup.add(chessFieldGroup);
  scene.add(containerGroup);
  
  // start rendering
  requestAnimationFrame(render);

