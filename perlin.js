/**
 * Created by jamiecho on 9/23/16.
 */
function randomGradient2D(){
    var angle = Math.random()*2*Math.PI;
    return [Math.cos(angle),Math.sin(angle)];
}

function gradGrid(n, wrap){
    var i,j;
    var grid = ndarray([n+1,n+1]);

    for(i=0;i<=n;++i){
        for(j=0;j<=n;++j){

            grid[i][j] = randomGradient2D();

            if(wrap == true){
                if(i == n){
                    grid[n][j] = grid[0][j];
                }
                if(j == n){
                    grid[i][n] = grid[i][0];
                }
            }

        }
    }
    grid.w = n;
    grid.h = n;

    return grid;
}
function v2dot(v1,v2){return v1[0]*v2[0]+v1[1]*v2[1];}
function lerp(a,b,t){return (1.0-t)*a + t*b;}

function pNoise(grid,x,y){
    var x_bot = Math.floor(x * 0.999);

    var y_bot = Math.floor(y * 0.999);

    var xref = x - x_bot;
    var yref = y - y_bot;

    var v1 = v2dot(grid[x_bot][y_bot], [xref,yref]); // LD
    var v2 = v2dot(grid[x_bot+1][y_bot], [xref-1,yref]); //RD
    var v3 = v2dot(grid[x_bot][y_bot+1],[xref,yref-1]); //LU
    var v4 = v2dot(grid[x_bot+1][y_bot+1],[xref-1,yref-1]); //RU
    var tx = x-x_bot;
    var ty = y-y_bot;
    return lerp(lerp(v1,v2,tx),lerp(v3,v4,tx),ty);
}