const name = process.argv[2];
console.log(`Hi ${name}!`);

process.argv.forEach((val) => {
    console.log(`${val}`);
});