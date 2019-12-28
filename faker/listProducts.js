//File created and ran using Node terminal, requiring 'faker' dependency
var faker = require('faker');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties


console.log("====================");
console.log("WELCOME TO MY SHOP!");
console.log("====================");
for (i = 0; i < 10; i++) {
    console.log(faker.fake("{{commerce.productAdjective}}" + " " + "{{commerce.productMaterial}}" + " " + "{{commerce.product}}" + " - $" + "{{commerce.price}}"));
}