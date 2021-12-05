function Tile (color){

    const geometry = new THREE.PlaneGeometry(tileWidth, tileWidth);
    const material = new THREE.MeshPhongMaterial(color);

    tiles.push(this);
    gameObjects.push(this);

    this.color = color;
    this.object = new THREE.Mesh(geometry, material);
    this.moveTo = moveTo;
    this.name = 'Tile ('+i+','+j+')';
    this.UUID = this.object.UUID;
}
