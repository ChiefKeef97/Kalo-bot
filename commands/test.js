const Discord = require(`discord.js`);
const db = require ('quick.db')
  module.exports.run = async (client, message, args, con) => {
    if(message.author.id === process.env.RAL || message.author.id === process.env.FREAK) {

  
        message.channel.send('Test command for testing things')
          console.log('testing command for testing things')


    }
  }    
  exports.conf = {
    aliases: ['t', 'test', 'testing'],
  };
  
  exports.help = {
    name: 'test',
    description: 'Test any code in this file',
    usage: `${process.env.PREFIX}test`
  };