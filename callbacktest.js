function greet(name) {
    console.log("Hello " + name );

}
function processuser( call) {
 console.log("processing user");
 call("dj");

}
processuser(greet);