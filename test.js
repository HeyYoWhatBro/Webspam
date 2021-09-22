const web = require("webhook-discord")
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const chalk = require('chalk')
const figlet = require('figlet');
const text = figlet.textSync('WebSpam', {
    font: 'Big',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 60,
    whitespaceBreak: true
});
const input = (quest) => {
  return new Promise((resolve, reject) => {
    rl.question(quest, (answer) => {
      resolve(answer);
    })
  })
}

const main = async () => {
 const pass = await input('=====> Password:');
 if(pass.trim() == 'webspam', 'test'){
console.clear();
console.log(chalk.yellow('BY : NOTH'))
console.log('ㅤ')
console.log('ㅤ')
console.log(chalk.blue(text))
console.log('ㅤ')
console.log('Options:')
console.log(chalk.blue('[1] Spam Webhook'))
console.log(chalk.blue('[2] Delete Webhook'))
console.log('ㅤ')
const select = await input('=====> Select:')



if(select.trim() == '1'){
 const webhookurl = await input('=====> Webhook:');
const client = new web.Webhook(webhookurl)
 const spam = await input('=====> Spam? (y/n):');



if(spam.trim() == 'y'){
const pesan = await input('=====> Message:');
for (var i = 0; i < 250; i++) {
const msg = new web.MessageBuilder()
                .setName('WebHook Getting Bitched')
                .setText(pesan);

client.send(msg)
}
}

if(spam.trim() == 'n'){
const pesanan = await input('=====> Message:');
const berapa = await input('=====> How Much:');

for(var i = 1; i <= berapa; i++) {
const msg = new web.MessageBuilder()
                .setName('WebHook Getting Bitched')
                .setText(pesanan);

client.send(msg)
    }
}
 }
 
}
}
main();