const accountId = 3453344;
let emailId = "meghannumh@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

//accountId = 2; //not allowed

console.log(accountId);
emailId = "meghana@google.com";
accountPassword = "213131131";
accountCity = "Bengaluru";

console.table([accountId, accountPassword, accountCity, accountState]);


// Prefer not to use var
// because of issue in block scope & funcitonal scope