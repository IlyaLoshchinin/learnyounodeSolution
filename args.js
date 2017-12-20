const [, , ...args] = process.argv;
if (args.length > 0) console.log(args.reduce((prev, next) => +prev + +next, 0));
