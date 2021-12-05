function Pawn(color) {

    // constructor function
    const points = [];

    points.push( new THREE.Vector2( 0, 0) );
    points.push( new THREE.Vector2( 5.5, 0) );
    points.push( new THREE.Vector2( 5.5, 1) );
    points.push( new THREE.Vector2( 4.8, 2) );
    points.push( new THREE.Vector2( 4.5, 3) );
    points.push( new THREE.Vector2( 3.1, 3.5) );
    points.push( new THREE.Vector2( 3, 6) );
    points.push( new THREE.Vector2( 2.8, 8.7) );
    points.push( new THREE.Vector2( 3.5, 8.9) );
    points.push( new THREE.Vector2( 4, 9.3) );
    points.push( new THREE.Vector2( 3.7, 9.9) );
    points.push( new THREE.Vector2( 2.6, 10.2) );
    points.push( new THREE.Vector2( 3.8, 11) );
    points.push( new THREE.Vector2( 4, 12) );
    points.push( new THREE.Vector2( 3.8, 13) );
    points.push( new THREE.Vector2( 3.5, 14) );
    points.push( new THREE.Vector2( 2.5, 14.7) );
    points.push( new THREE.Vector2( 1.5, 15) );
    points.push( new THREE.Vector2( 0, 15) );

    const segmentsCount = 30;

	const geometry = new THREE.LatheGeometry(points, segmentsCount);
    const material = new THREE.MeshPhongMaterial(color);

    figures.push(this);
    gameObjects.push(this);

    // properties
    this.object = new THREE.Mesh(geometry, material);
    this.i = null;
    this.j = null;
    this.color = color;
    this.uuids = [ this.object.uuid ];
    this.type = 'figure';
    this.moveTo = moveTo;
    // TODO: set this in moveTo and call updatePosition in render loop
    this.requestedPosition = { x: null, y: null };

    this.updatePosition = function() {
        // TODO: make a small step towards the rquestedPosition
    }
}
