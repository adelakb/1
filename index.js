const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message',message=> {
if (message.content.includes('ncode')) {
    if (!message.member.roles.find("name", "manage bunker code")) return message.channel.send(' :unamused:   You do not have permission ! :x: ');
    message.guild.me.setNickname(message.content.replace('ncode', 'Code Bunker '));{
message.channel.send(':radio: Code changed :white_check_mark: ');
}
}
});

client.on('message', message => {
      if (message.content === "code bunker") {
          var currentTime = new Date(),
              Year = currentTime.getFullYear(),
              Month = currentTime.getMonth() + 1,
              Day = currentTime.getDate();
              var Date15= new Discord.RichEmbed()
              .setColor('RANDOM')
              .setDescription( "Date "+ Day + "-" + Month + "-" + Year + "")
			   message.channel.sendEmbed(Date15);
      }
  });

client.on('message', message => {
      if (message.content === "Code bunker") {
          var currentTime = new Date(),
              Year = currentTime.getFullYear(),
              Month = currentTime.getMonth() + 1,
              Day = currentTime.getDate();
              var Date15= new Discord.RichEmbed()
              .setColor('RANDOM')
              .setDescription( "Date "+ Day + "-" + Month + "-" + Year + "")
			   message.channel.sendEmbed(Date15);
      }
  });

client.on('message', message => {
      if (message.content === "Code Bunker") {
          var currentTime = new Date(),
              Year = currentTime.getFullYear(),
              Month = currentTime.getMonth() + 1,
              Day = currentTime.getDate();
              var Date15= new Discord.RichEmbed()
              .setColor('RANDOM')
              .setDescription( "Date "+ Day + "-" + Month + "-" + Year + "")
			   message.channel.sendEmbed(Date15);
      }
  });
  
client.on('message', message => {
      if (message.content === "bunker code") {
          var currentTime = new Date(),
              Year = currentTime.getFullYear(),
              Month = currentTime.getMonth() + 1,
              Day = currentTime.getDate();
              var Date15= new Discord.RichEmbed()
              .setColor('RANDOM')
              .setDescription( "Date "+ Day + "-" + Month + "-" + Year + "")
			   message.channel.sendEmbed(Date15);
      }
  });


client.on('message', message => {
      if (message.content === "Bunker code") {
          var currentTime = new Date(),
              Year = currentTime.getFullYear(),
              Month = currentTime.getMonth() + 1,
              Day = currentTime.getDate();
              var Date15= new Discord.RichEmbed()
              .setColor('RANDOM')
              .setDescription( "Date "+ Day + "-" + Month + "-" + Year + "")
			   message.channel.sendEmbed(Date15);
      }
  });

client.on('message', message => {
      if (message.content === "Bunker Code") {
          var currentTime = new Date(),
              Year = currentTime.getFullYear(),
              Month = currentTime.getMonth() + 1,
              Day = currentTime.getDate();
              var Date15= new Discord.RichEmbed()
              .setColor('RANDOM')
              .setDescription( "Date "+ Day + "-" + Month + "-" + Year + "")
			   message.channel.sendEmbed(Date15);
      }
  });

 client.on('message', message => {
      if (message.content === "كود البنكر") {
          var currentTime = new Date(),
              Year = currentTime.getFullYear(),
              Month = currentTime.getMonth() + 1,
              Day = currentTime.getDate();
              var Date15= new Discord.RichEmbed()
              .setColor('RANDOM')
              .setDescription( "Date "+ Day + "-" + Month + "-" + Year + "")
			   message.channel.sendEmbed(Date15);
      }
  });

client.on('message', message => {
      if (message.content === "رمز البنكر") {
          var currentTime = new Date(),
              Year = currentTime.getFullYear(),
              Month = currentTime.getMonth() + 1,
              Day = currentTime.getDate();
              var Date15= new Discord.RichEmbed()
              .setColor('RANDOM')
              .setDescription( "Date "+ Day + "-" + Month + "-" + Year + "")
			   message.channel.sendEmbed(Date15);
      }
  });



client.login(process.env.TOKEN)


