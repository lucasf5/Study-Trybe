function somatoria(...args) {
   return args.reduce((a,c)=>a+c,0)
}

console.log(somatoria(10,20,20,50,60,40,70));