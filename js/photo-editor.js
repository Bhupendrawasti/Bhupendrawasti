document.getElementById("uploadImage").addEventListener("change", function(event) {
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.onload = function(e) {
        let img = new Image();
        img.onload = function() {
            let canvas = document.getElementById("photoCanvas");
            let ctx = canvas.getContext("2d");
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
        img.src = e.target.result;
    };

    reader.readAsDataURL(file);
});

function applyGrayscale() {
    let canvas = document.getElementById("photoCanvas");
    let ctx = canvas.getContext("2d");
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let pixels = imgData.data;

    for (let i = 0; i < pixels.length; i += 4) {
        let avg = (pixels[i] + pixels[i+1] + pixels[i+2]) / 3;
        pixels[i] = pixels[i+1] = pixels[i+2] = avg;
    }

    ctx.putImageData(imgData, 0, 0);
}

function applySepia() {
    let canvas = document.getElementById("photoCanvas");
    let ctx = canvas.getContext("2d");
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let pixels = imgData.data;

    for (let i = 0; i < pixels.length; i += 4) {
        let red = pixels[i], green = pixels[i+1], blue = pixels[i+2];
        pixels[i] = red * 0.393 + green * 0.769 + blue * 0.189;
        pixels[i+1] = red * 0.349 + green * 0.686 + blue * 0.168;
        pixels[i+2] = red * 0.272 + green * 0.534 + blue * 0.131;
    }

    ctx.putImageData(imgData, 0, 0);
      }
      
