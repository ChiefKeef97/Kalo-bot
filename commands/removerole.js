const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {

    const permError = new Discord.RichEmbed()
            .setColor('#ed455a')
              .setTitle('• Error: 01 •')
                .setDescription('```You do not have **MANAGE_ROLES** Permissions```')

    const userError = new Discord.RichEmbed()
            .setColor('#ed455a')
              .setTitle('• Error: 02 •')
                .setDescription('```Please mention a user to remove a role from```')
  
    const roleError = new Discord.RichEmbed()
            .setColor('#ed455a')
              .setTitle('• Error : 03 •')
                .setDescription('```Please specify a role after the mentioned user```')
    
    const roleError2 = new Discord.RichEmbed()
            .setColor('#ed455a')
              .setTitle('• Error : 04•')
                .setDescription('```Please specify a VALID role after the mentioned user```') 
    
    const levelError = new Discord.RichEmbed()
            .setColor('#ed455a')
              .setTitle('• Error: 05•')
                .setDescription('```You cannot remove a role from a member with the same or higher role than yourself```') 
    
    const failError = new Discord.RichEmbed()
            .setColor('#ed455a')
              .setTitle('• Error: 06•')
                .setDescription('```Mentioned user doesn\'t have that role```') 
    
    const modlogError = new Discord.RichEmbed()
            .setColor('#ed455a')
              .setTitle('• Error: 07')
                .setDescription('```The Channel "moderation-logs" was not found```')
    
//========================  End of Error Embeds  =======================//
    
    if  (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send
          (permError).then
            (message.delete()).then
              (msg => msg.delete(5000));
    
    let  user = message.guild.member(message.mentions.users.first());
      if  (!user) return message.channel.send
            (userError).then 
              (message.delete()).then
                (msg => msg.delete(5000));
    
    if  (!args[1]) return message.channel.send
          (roleError).then 
              (message.delete()).then
                (msg => msg.delete(5000));
  
    let  roleName = args[1].slice(3).replace('>', '');      
      if  (!roleName) return message.channel.send
            (roleError).then
              (message.delete()).then
                (msg => msg.delete(5000));

    let  role = message.guild.roles.find( r => r.id === `${roleName}`);
      if  (!role) return message.channel.send
            (roleError2).then
              (message.delete()).then
                (msg => msg.delete(5000))

    let   modlog = message.guild.channels.find(c => c.name === 'moderation-logs');
      if  (!modlog) return message.channel.send
            (`The channel *Moderatu was not found`).then
              (message.delete()).then
                (msg => msg.delete(5000))
  
    if  (user.highestRole > message.author.highestRole) return message.channel.send
          (levelError).then
            (message.delete()).then
              (msg => msg.delete(5000));
        
    if  (!user.roles.has(role.id)) return message.channel.send
          (failError).then
            (message.delete()).then
              (msg => msg.delete(5000));
  
    await  (user.removeRole(role));
            message.delete();
  
    try  {await user.send(`Bummer! You have been stripped of the role **${role.name}** on ${message.guild.name}`)
    }  catch(e) { modlog.send(`${user} was Stripped of the role **${role}**`);
  }
}

    exports.conf = {
    aliases: ['removerole','rrole']
    };
      
    exports.help = {
    name: 'removerole',
    description: 'Removes role from specified user',
    usage: `${process.env.PREFIX}removerole @user @role`
    };