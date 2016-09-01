/**
 * Created by jamiecho on 8/24/16.
 */

function similar(a, b, threshold) {
    if (threshold == undefined || threshold == null) {
        threshold = 0.01;
    }
    return Math.abs(a - b) < threshold;
}

function mod_pos(a, b) {
    return ((a % b) + b) % b;
}
function contain(x, a, b) {

    if (a > b) {
        c = a;
        a = b;
        b = c;
    }

    if (x < a) {
        return a;
    } else if (b < x) {
        return b;
    }

    return x;
}
function d2r(d){
    return d*Math.PI/180;

}
function r2d(r){
    return r*180/Math.PI;
}

function ndarray(dims){
    var arr = [];
    if(dims.length > 0){
        var len = dims[0];
        for(var i=0; i<len; ++i){
            arr.push(ndarray(dims.slice(1)));
        }
        return arr;
    }else{
        return null;
    }
}

function argmax(){
    var idx=0,val=arguments[0];
    for(var i in arguments){
        if (val < arguments[i]){
            idx = i;
            val = arguments[i];
        }
    }
    return {
        idx : idx,
        val : val
    };
}

function quantize(a,d){
    return Math.round(a/d) * d;
}