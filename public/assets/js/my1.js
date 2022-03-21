const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = "800"
  canvas.height = "500"
  let width = ctx.canvas.width
  let height = ctx.canvas.height
	var img = new Image;
	window.onload = ()=>{		
    
    let upimg = document.getElementById('upimg')
    upimg.addEventListener('change',(e)=>{
      var img2 = new Image();
      img2.onload = draw;
      img2.onerror = failed;
      console.log(e.target.files[0]);
      img2.src = URL.createObjectURL(e.target.files[0]);
      img.src = URL.createObjectURL(e.target.files[0]);

    });

    function draw() {
      console.log(this.width);
      console.log(this.src);
    
      var ctx = canvas.getContext('2d');
			ctx.drawImage(this, 0,0);
      }
      function failed() {
        console.error("The provided file couldn't be loaded as an Image media");
      }

      
        getZoom = function () {
          return this.viewportTransform[0];
        },
        zoomToPoint = function (point, value) {
          // TODO: just change the scale, preserve other transformations
          var before = point, vpt = this.viewportTransform.slice(0);
          point = transformPoint(point, invertTransform(this.viewportTransform));
          vpt[0] = value;
          vpt[3] = value;
          var after = transformPoint(point, vpt);
          vpt[4] += before.x - after.x;
          vpt[5] += before.y - after.y;
          return this.setViewportTransform(vpt);
        }
        getHeight = function () {
          return this.height;
        }
        getWidth = function () {
          return this.width;
      }

      canvas.addEventListener('wheel', function(opt) {
        var delta = opt.target.deltaY;
        var zoom = canvas.getClientRects();
        console.log(delta);
        zoom *= 0.999 ** delta;
        if (zoom > 20) zoom = 20;
        if (zoom < 0.01) zoom = 0.01;
        canvas.zoomToPoint({ x: opt.target.offsetX, y: opt.target.offsetY }, zoom);
        opt.target.preventDefault();
        opt.target.stopPropagation();
        var vpt = this.viewportTransform;
        if (zoom < 400 / 1000) {
          vpt[4] = 200 - 1000 * zoom / 2;
          vpt[5] = 200 - 1000 * zoom / 2;
        } else {
          if (vpt[4] >= 0) {
            vpt[4] = 0;
          } else if (vpt[4] < canvas.width - 1000 * zoom) {
            vpt[4] = canvas.width - 1000 * zoom;
          }
          if (vpt[5] >= 0) {
            vpt[5] = 0;
          } else if (vpt[5] < canvas.height - 1000 * zoom) {
            vpt[5] = canvas.height - 1000 * zoom;
          }
        }});
  }