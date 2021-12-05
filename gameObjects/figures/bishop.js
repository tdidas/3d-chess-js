function Bishop(color) {

    // constructor function
    const points = [];

    points.push( new THREE.Vector2( 0, 0) );
    points.push( new THREE.Vector2( 5.5, 0) );
    points.push( new THREE.Vector2( 5.5, 1) );
    points.push( new THREE.Vector2( 4.5, 3) );
    points.push( new THREE.Vector2( 4, 5.5) );
    points.push( new THREE.Vector2( 3, 6) );
    points.push( new THREE.Vector2( 2.5, 8) );
    points.push( new THREE.Vector2( 2.5, 11) );
    points.push( new THREE.Vector2( 4.5, 11.2) );
    points.push( new THREE.Vector2( 4, 12.5) );
    points.push( new THREE.Vector2( 3, 13) );
    points.push( new THREE.Vector2( 4, 15) );
    points.push( new THREE.Vector2( 4, 17) );
    points.push( new THREE.Vector2( 3, 19) );
    points.push( new THREE.Vector2( 2.5, 20) );
    points.push( new THREE.Vector2( 2, 21) );
    points.push( new THREE.Vector2( 1, 21.3) );
    points.push( new THREE.Vector2( 0, 22.5) );

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
