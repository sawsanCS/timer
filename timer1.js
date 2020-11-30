var myArgs = process.argv.slice(2);
let t = 0;
if (myArgs.length === 0) { console.log("no intervals were entered"); }
for (const arg of myArgs) {
setTimeout( function() {
  if (arg < 0) { 
    console.log("negative intervals are not allowed"); 
    return ;
  }
  if (isNaN(arg)) {
    console.log("the value you entered is Not a Number"); 
    return ;
  }
  process.stdout.write('\x07');
}, t +=arg*100);
}
