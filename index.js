const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const setCanvasSize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
setCanvasSize();

const centerX = canvas.width / 2 ;
const centerY = canvas.height / 2;

const drawCircle = () =>{
    setCanvasSize();
    ctx.translate(centerX,centerY);
    ctx.arc(centerX, centerY, 10, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'blue';
    ctx.fill();
}

document.body.style.background = 'url(' + drawCircle.toDataURL() + ')';