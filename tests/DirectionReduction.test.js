
a = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
test("should reduce the directions", () => {
    expect(dirReduc(a)).toStrictEqual(["WEST"])
});
b=["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH"]
test("should reduce the directions", () => {
    expect(dirReduc(b)).toStrictEqual([])
});
c = ["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","NORTH"]
test("should reduce the directions", () => {
    expect(dirReduc(c)).toStrictEqual(["NORTH"])
});
d = ["EAST", "EAST", "WEST", "NORTH", "WEST", "EAST", "EAST", "SOUTH", "NORTH", "WEST"]
test("should reduce the directions", () => {
    expect(dirReduc(d)).toStrictEqual(["EAST", "NORTH"])
});
v = ["NORTH", "EAST", "NORTH", "EAST", "WEST", "WEST", "EAST", "EAST", "WEST", "SOUTH"]
test("should reduce the directions", () => {
    expect(dirReduc(v)).toStrictEqual(["NORTH", "EAST"])
});
u=["NORTH", "WEST", "SOUTH", "EAST"]
test("should reduce the directions", () => {
    expect(dirReduc(u)).toStrictEqual(["NORTH", "WEST", "SOUTH", "EAST"])
});

describe( "More tests : . . . ", function(){
  var rr = [["NORTH","EAST"],["EAST","SOUTH"],["SOUTH","WEST"],["WEST","NORTH"],["NORTH","NORTH","NORTH"]]
  
  rr.forEach(function(res){
      var aa = ["NORTH","SOUTH"], bb = ["EAST","WEST"];
      var rnd = function(){ return ~~(Math.random()*2)};
      var u = res.slice(0)
      
      for( var x=0, z=2+rnd(); x<z; x++ ){
        var a = rnd(), b = rnd();
        if( x%2 ){
          u.push(aa[a]);u.push(aa[(a+1)%2]);
          u.unshift(bb[b]);u.unshift(bb[(b+1)%2]);
        }else{
          u.push(bb[b]);u.push(bb[(b+1)%2]);
          u.unshift(aa[a]);u.unshift(aa[(a+1)%2]);
        }
      }
      
      test("should reduce the directions", () => {
        expect(dirReduc(u)).toStrictEqual(res)
      });
    });
    
})
