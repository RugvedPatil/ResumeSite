let angle = 0;
let w = 25;
let ma; 
let max_d;

function setup()
{
    const canvas = createCanvas(350,350, WEBGL);
    canvas.parent("wave_div");
    ma = atan(1/sqrt(2));
    max_d = dist(10,10,200,200);
}

function draw()
{
    background(255,255,255);
    ortho(-400,400,-600,600,10,1000);
    ambientLight(255,255,255);
    
    rotateX(-QUARTER_PI);
    rotateY(QUARTER_PI)

    for(let z=0; z < height; z += w)
    {
        for(let x=0; x < width; x += w)
        {
            ambientMaterial(125);
            push(); 
            let d = dist(x,z,width/2,height/2);
            let offset = map(d,10,max_d, -PI, PI);
            let a = angle + offset;
            let h = map(sin(a), -1, 1, 100, 300);
            translate(x-width/2, 0, z-height/2);
            box(w-2, h, w-2);
            noStroke();
            pop();
        }
    }
    angle -= 0.1;
    frameRate(30);
}