/**
 * Created by jamiecho on 9/23/16.
 */
function randomGradient2D(){
    var angle = Math.random()*2*Math.PI;
    return [Math.cos(angle),Math.sin(angle)];
}
function Arr2D(arr,w,h,elemsize){
    elemsize||(elemsize=1);
    var f = function(x,y){
        var beg = elemsize * (x*h+y);
        return arr.slice(beg,beg+elemsize);
        /*var ret = [];
         var i=0;
         for(i;i<elemsize;++i){
         ret.push(arr[beg+i]);
         }
         return ret;*/
    };
    f.w=w;
    f.h=h;
    return f;
}
function gradGrid(n){
    var i,j;
    var grid_raw = [];
    for(i=0;i<=n;++i){
        for(j=0;j<=n;++j){
            grid_raw = grid_raw.concat(randomGradient2D());
        }
    }
    return new Arr2D(grid_raw,n+1,n+1,2);

    //GRID is Complete/
}
function v2dot(v1,v2){return v1[0]*v2[0]+v1[1]*v2[1];}
function lerp(a,b,t){return (1.0-t)*a + t*b;}

function pNoise(grid,x,y){
    var x_bot = Math.floor(x);
    var y_bot = Math.floor(y);
    var xref = x - x_bot;
    var yref = y - y_bot;

    var v1 = v2dot(grid(x_bot,y_bot), [xref,yref]); // LD
    var v2 = v2dot(grid(x_bot+1,y_bot), [xref-1,yref]); //RD
    var v3 = v2dot(grid(x_bot,y_bot+1),[xref,yref-1]); //LU
    var v4 = v2dot(grid(x_bot+1,y_bot+1),[xref-1,yref-1]); //RU
    var tx = x-x_bot;
    var ty = y-y_bot;
    return lerp(lerp(v1,v2,tx),lerp(v3,v4,tx),ty);
}