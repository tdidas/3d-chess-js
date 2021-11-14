function Pawn(color) {

    const points = [];

    points.push( new THREE.Vector2( 0, 0) );
    points.push( new THREE.Vector2( 6, 0) );
    points.push( new THREE.Vector2( 1, 5) );
    points.push( new THREE.Vector2( 3, 7) );
    points.push( new THREE.Vector2( 3, 8) );
    points.push( new THREE.Vector2( 0, 10) );

    const segmentsCount = 24;

	const geometry = new THREE.LatheGeometry(points, segmentsCount);
    const material = new THREE.MeshPhongMaterial(color);

    this.object = new THREE.Mesh(geometry, material);

    this.moveTo = moveTo;
}
