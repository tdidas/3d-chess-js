
  // global constants
  const colorWhite = { color: 0xffffff };
  const colorBlack = { color: 0x333333 };
  const tileWidth = 15;   // width of one square (tile) on chess field
  const figures = [];     // will contain all figures
  const tiles = [];       // will contain all tiles
  const gameObjects = [];  // will contain all figures and tiles
  
  // generic function to move the figures 
  const moveTo = function(i,j) {
    this.i = i;
    this.j = j;
    this.object.position.x = (-3.5 + i) * tileWidth;
    this.object.position.z = (-3.5 + j) * tileWidth;
  }

  const getFigureByUuid = function(uuid) {
    for (var i = 0; i < figures.length; i++){
      if (figures[i].uuids.indexOf(uuid) != -1){
        return figures[i];
      }
    }
  }

  const getTileByUuid = function(uuid) {
    for (var i = 0; i < tiles.length; i++){
      if (tiles[i].object.uuid.indexOf(uuid) != -1){
        return tiles[i];
      }
    }
  }

  const getFigureAtPosition = function(i, j) {
    for (var n = 0; n < figures.length; n++) {
      const f = figures[n];
      if (f.i === i && f.j === j) {
        return f;
      }
    }
  }

  const scene = createScene();

  // create chessfield as combination (group) of
  // - chessPlane (black) 
  // - and the white tiles

  const containerGroup = new THREE.Group(); // contains chessfield and chess figures 

  const chessFieldGroup = new THREE.Group();

  function _old() {
    // add tiles
    for (var i = 0; i < 8; i++) { 
      for (var j = 0; j < 8; j++) {

        // set tile color (black or white)
        var color = colorBlack;

        if ((i+j) % 2 != 0) {
          color = colorWhite;
        }

        // create tile
        const tile = new THREE.Mesh(
          new THREE.PlaneGeometry(tileWidth, tileWidth),
          new THREE.MeshPhongMaterial(color)
        );
      
        tile.position.x = tileWidth * i - 3.5 * tileWidth;
        tile.position.y = tileWidth * j - 3.5 * tileWidth;
        tile.position.z = 0;
        tile.name = 'Tile ('+i+','+j+')';

        chessFieldGroup.add(tile);
      }
    }
  }

  // add tiles
  for (var i = 0; i < 8; i++) { 
    for (var j = 0; j < 8; j++) {

      color = colorBlack;

      if ((i+j) % 2 != 0) {
        color = colorWhite;
      }
      
      tile = new Tile(color);
      tile.moveTo(i,j);
      tile.object.rotation.x = Math.PI * -0.5;
      containerGroup.add(tile.object);
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
    pawn.object.name = 'Pawn black '+i;
    containerGroup.add(pawn.object);
  }

  for (var i = 0; i < 2; i++) {
    bishop = new Bishop(colorWhite);
    bishop.moveTo(7, i*3 + 2);
    containerGroup.add(bishop.object);
  }

  for (var i = 0; i < 2; i++) {
    bishop = new Bishop(colorBlack);
    bishop.moveTo(0, i*3 + 2);
    containerGroup.add(bishop.object);
  }

  for (var i = 0; i < 2; i++) {
    rook = new Rook(colorWhite);
    rook.moveTo(7, i*7);
    containerGroup.add(rook.object);
  }

  for (var i = 0; i < 2; i++) {
    rook = new Rook(colorBlack);
    rook.moveTo(0, i*7);
    containerGroup.add(rook.object);
  }

  containerGroup.add(chessFieldGroup);
  scene.add(containerGroup);
  
  // start rendering
  requestAnimationFrame(render);

  document.addEventListener('click', function(e){
    const uuid = pickHelper.pickedObject.uuid;
    console.log(uuid);
    const tile = getTileByUuid(uuid);
    const figure = getFigureByUuid(uuid);

    if (figure != null){
      console.log(figure);
      if(figure.color === colorBlack){
        figure.moveTo(figure.i + 1, figure.j);
      }
      if(figure.color === colorWhite){
        figure.moveTo(figure.i - 1, figure.j);
      }
    }

    if (tile != null) {
      console.log(tile.color);
    }
  })