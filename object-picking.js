    class PickHelper {
      
      constructor(canvas) {
        this.canvas = canvas;
        
        this.raycaster = new THREE.Raycaster();
        this.pickedObject = null;
        this.pickPosition = { x: -100000, y: -100000 };

        const self = this;

        window.addEventListener('mousemove', function(e) { self.setPickPosition(e) });
        window.addEventListener('mouseout', function(e) { self.clear() });
        window.addEventListener('mouseleave', function(e) { self.clear() });
      }

      pick(scene, camera, time) {
        // restore the color if there is a picked object
        if (this.pickedObject) {
          //
        }
  
        // cast a ray through the frustum
        this.raycaster.setFromCamera(this.pickPosition, camera);
        // get the list of objects the ray intersected
        const intersectedObjects = this.raycaster.intersectObjects(scene.children);
        if (intersectedObjects.length) {
          // pick the first object. It's the closest one
          this.pickedObject = intersectedObjects[0].object;
          document.getElementById('text-output').innerHTML = this.pickedObject.uuid + this.pickedObject.name;
        }
        else {
          this.pickedObject = null;
          document.getElementById('text-output').innerHTML = 'no object';
        }
      }

      clear() {
          this.pickPosition = { x: -100000, y: -100000 }
      }

      getCanvasRelativePosition(event) {
        const rect = this.canvas.getBoundingClientRect();
        return {
          x: (event.clientX - rect.left) * this.canvas.width  / rect.width,
          y: (event.clientY - rect.top ) * this.canvas.height / rect.height,
        };
      }

      setPickPosition(event) {
        
        const pos = this.getCanvasRelativePosition(event);
        
        this.pickPosition.x = (pos.x / this.canvas.width ) *  2 - 1;
        this.pickPosition.y = (pos.y / this.canvas.height) * (-2) + 1;
      }
    }