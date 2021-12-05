function Rook(color) {

    // constructor function
    const points = [];

    points.push( new THREE.Vector2( 0, 0) );
    points.push( new THREE.Vector2( 5.5, 0) );
    points.push( new THREE.Vector2( 5.5, 1) );
    points.push( new THREE.Vector2( 4.5, 3) );
    points.push( new THREE.Vector2( 4, 5) );
    points.push( new THREE.Vector2( 3.8, 5.5) );
    points.push( new THREE.Vector2( 3.5, 6) );
    points.push( new THREE.Vector2( 3.5, 13) );
    points.push( new THREE.Vector2( 4.5, 14) );
    points.push( new THREE.Vector2( 5.1, 15) );
    points.push( new THREE.Vector2( 5.5, 16.5) );
    points.push( new THREE.Vector2( 0, 16.5) );
    const segmentsCount = 30;

	const geometry = new THREE.LatheGeometry(points, segmentsCount);
    const material = new THREE.MeshPhongMaterial(color);

    figures.push(this);
    gameObjects.push(this);

    // properties
    this.object = new THREE.Mesh(geometry, material);
    this.i = null;
    this.j = null;
    this.uuids = [ this.object.uuid ];
    this.color = color;
    this.moveTo = moveTo;
}
