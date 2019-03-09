const Discord = require('discord.js');
const fs = require("fs");
const ms = require('ms');
const moment = require('moment');
const client = new Discord.Client(); 




client.on('message', message => {
  if(message.content === "+help") {
      const embed = new Discord.RichEmbed()
      .setColor("#00FFFF")
 .addField('** ╔════════أوامر عامة════════╗ **' , '** 🔰-| +id | ل رؤية هويتك ** ')
 .addField('** 🔰-| +ping | ل رؤية ترددات البوت **' , '** 🔰-| +count | ل معرفة عدد الأعضاء ب السيرفر**')
 .addField('** 🔰-| +embed | ل جعل البوت يردد كلامك ب امبيد **' , '** 🔰-| +bot | معلومات عن البوت **')
 .addField('** 🔰-| +bots | يضهر لك جميع بوتات السيرفر **')
 .addField('** |═════════أوامر ادارية═════════| **' , '** 🔰-| +dc | ل حذف جميع رومات السيرفر**')
 .addField('** 🔰-| +dr | ل حذف جميع رتب السيرفر**' , '**🔰-| +cc | ل انشاء مستند أو كاتوغاري**')
 .addField('**🔰-| +ct | ل انشاء روم كتابي**' , '**🔰-| +cv | ل انشاء روم صوتي**')
 .addField('** 🔰-| +moveall | سحب جميع الأعضاء ل رومك الصوتي**' , '** 🔰-| +move | ل سحب شخص معين ل رومك الصوتي **')
 .addField('** 🔰-| +ban | ل عمل باند ل شخص معين **' , '** 🔰-| +mute | ل اسكات شخص معين **')
 .addField('** 🔰-| +mutechannel | ل منع كل الأعضاء من التكلم ب الروم المختار**' , '** 🔰-| +unmutechannel | ل جعل الأعضاء يستطيعون الكلام ب الروم في حالة كان مغلوق**')
 .addField('** 🔰-| +kick | ل عمل كيك ل شخص معين **' , '** 🔰-| +bc | ل ارسال رسالة جماعية ل أعضاء السيرفر **')
 .addField('** 🔰-| +server | ل رؤية معلومات عن السيرفر **' , '** 🔰-| +clear | ل مسح الرسائل ب الشات **')
 .addField('** |═════════أوامر أخرى═════════| **' , '** 🔰-| +inv / +invite | ل اخذ رابط دعوة البوت **')
 .addField('** 🔰-| +support | ل اخذ رابط سيرفر الدعم الفني **' , '**  ╚════════المزيد قريبا════════╝ **')
             message.channel.sendEmbed(embed);
         }
});



client.on('message' , message => {
    var prefix = "+"
    if (message.author.bot) return;
    if (message.content.startsWith(prefix + "contact")) {
    if (!message.channel.guild) return;
    let args = message.content.split(" ").slice(1).join(" ");
    client.users.get("411255565499629579").send(
        "\n" + "**" + "● السيرفر :" + "**" +
        "\n" + "**" + "» " + message.guild.name + "**" +
        "\n" + "**" + " ● المرسل : " + "**" +
        "\n" + "**" + "» " + message.author.tag + "**" +
        "\n" + "**" + " ● الرسالة : " + "**" +
        "\n" + "**" + args + "**");
    
    
    }
        
    });



client.on('message' , message => {
    var prefix = "+"
    if (message.author.bot) return;
    if (message.content.startsWith(prefix + "contact")) {
    if (!message.channel.guild) return message.reply("هذا الأمر فقط في السيرفرات");
    let args = message.content.split(" ").slice(1).join(" ");
    client.users.get("411255565499629579").send(
        "\n" + "**__" + "● السيرفر :" + "__**" +
        "\n" + "" + "» " + message.guild.name + "" +
        "\n" + "**__" + " ● المرسل : " + "__**" +
        "\n" + "" + "» " + message.author.tag + "" +
        "\n" + "**__" + " ● الرسالة : " + "__**" +
        "\n" + "" + args + "")
    
    let embed = new Discord.RichEmbed()
         .setAuthor(message.author.username, message.author.avatarURL)
         .setDescription(':mailbox_with_mail: تم ارسال الرسالة ل أصحاب البوت')
         .setThumbnail(message.author.avatarURL)
         .setFooter("IُTZًَ Bَotَََ")
                                                    
    
    message.channel.send(embed);
    
    
    }
        
    });



  client.on('message', msg => {
    var prefix = "+";
      if(!msg.guild) return;
        if (msg.content.startsWith(prefix +'cc')) {
         let args = msg.content.split(" ").slice(1);
        if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
    let ra3d = new Discord.RichEmbed()
    .setThumbnail(msg.author.avatarURL)
    .setDescription(`ان كنت تريد انشاء للمستند اظغط علي الايموجي📝`)                                                                                                                                                                       
    .setFooter('لديك دقيقه للاختيار')
    msg.channel.send(ra3d).then(message => {
        
        
     message.react('📝').then(r=>{
                                  
        
     let Category = (reaction, user) => reaction.emoji.name === '📝' && user.id === msg.author.id;
    
     let cy  = message.createReactionCollector(Category, { time: 60000 });
    
    cy.on("collect", r => {
    msg.guild.createChannel(args.join(' '), 'category');
        msg.channel.send(`☑ تم انشاء المستند بنجاح : \`${args}\``)
        msg.delete();
    })
    })
    })
    }
    });



    client.on('message', msg => {
        var prefix = "+";
          if(!msg.guild) return;
            if (msg.content.startsWith(prefix +'ct')) {
             let args = msg.content.split(" ").slice(1);
            if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
        let ra3d = new Discord.RichEmbed()
        .setThumbnail(msg.author.avatarURL)
        .setDescription(`ان كنت تريد انشاء شات كتابي اظغط علي الايموجي✏`)                                                                                                                                                                       
        .setFooter('لديك دقيقه للاختيار')
        msg.channel.send(ra3d).then(message => {
            
            
         message.react('✏').then(r=>{
                                      
            
         let Text = (reaction, user) => reaction.emoji.name === '✏' && user.id === msg.author.id;
        
         let tt  = message.createReactionCollector(Text, { time: 60000 });
        
        tt.on("collect", r => {
        msg.guild.createChannel(args.join(' '), 'text');
            msg.channel.send(`☑ تم انشاء شات كتابي بنجاح : \`${args}\``)
            msg.delete();
        })
        })
        })
        }
        });



        client.on('message', msg => {
            var prefix = "+";
              if(!msg.guild) return;
                if (msg.content.startsWith(prefix +'cv')) {
                 let args = msg.content.split(" ").slice(1);
                if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
            let ra3d = new Discord.RichEmbed()
            .setThumbnail(msg.author.avatarURL)
            .setDescription(`ان كنت تريد انشاء روم صوتي اظغط علي الايموجي🎤`)                                                                                                                                                                       
            .setFooter('لديك دقيقه للاختيار')
            msg.channel.send(ra3d).then(message => {
                
                
             message.react('🎤').then(r=>{
                                          
                
             let Voice = (reaction, user) => reaction.emoji.name === '🎤' && user.id === msg.author.id;
            
             let ve  = message.createReactionCollector(Voice, { time: 60000 });
            
            ve.on("collect", r => {
            msg.guild.createChannel(args.join(' '), 'voice');
                msg.channel.send(`☑ تم انشاء روم صوتي بنجاح : \`${args}\``)
                msg.delete();
            })
            })
            })
            }
            });



  client.on('message', message => {
    if (!message.channel.guild) return;
if(message.content =='+count')
var IzRo = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setFooter(message.author.username, message.author.avatarURL)
.setTitle('🌍| معلومات الأعضاء')
.addBlankField(true)
.addField('عدد الأعضاء',`${message.guild.memberCount}`)
message.channel.send(IzRo);
});



client.on('message', message => {
  if(message.content === "+inv") {
      const embed = new Discord.RichEmbed()
      .setColor("#00FFFF")
 .addField('** :space_invader: رابط دعوة البوت :space_invader:  **' , '** https://discordapp.com/api/oauth2/authorize?client_id=553246553939116035&permissions=8&scope=bot **')
             message.channel.sendEmbed(embed);
         }
});



client.on('message', message => {
  if(message.content === "+invite") {
      const embed = new Discord.RichEmbed()
      .setColor("#00FFFF")
 .addField('** :space_invader: رابط دعوة البوت :space_invader:  **' , '** https://discordapp.com/api/oauth2/authorize?client_id=553246553939116035&permissions=8&scope=bot **')
             message.channel.sendEmbed(embed);
         }
});



client.on('message', message => {
  if(message.content === "+support") {
      const embed = new Discord.RichEmbed()
      .setColor("#00FFFF")
.addField('** :gear: سيرفر الدعم الفني :gear:  **' , '** https://discord.gg/4gxh8t **')
             message.channel.sendEmbed(embed);
         }
});



client.on('message' , message => {
  var prefix = "+"
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('pong').then((msg) => {
var PinG = `${Date.now() - msg.createdTimestamp}`
var ApL = `${Math.round(client.ping)}`
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.\`\`\``);
 })
  }  
 });
 


 client.on('message', message => {
  if(message.content === "+bot") {
      const embed = new Discord.RichEmbed()
      .setColor("#00FFFF")
.addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
       .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
      .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
      .addField('**🌐 عدد السيرفرات**' , `${client.guilds.size}`, true)
      .addField('**عدد المستخدمين 👥 **' , `${client.users.size}`, true)
             message.channel.sendEmbed(embed);
         }
});



client.on('message', function(msg) {
  var prefix = "+";
  if(msg.content.startsWith (prefix  + 'server')) {
   let embed = new Discord.RichEmbed()
   .setColor('RANDOM')
   .setThumbnail(msg.guild.iconURL)
   .setTitle(`Showing Details Of  **${msg.guild.name}*`)
   .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
   .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
   .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
   .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
   .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
   .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
   .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
   .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
   .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
   msg.channel.send({embed:embed});
  }
  });



    client.on('message', message => {
      var prefix = "+";
      if(!message.channel.guild) return;
                 if(message.content.startsWith(prefix + 'bots')) {
 
     
     if (message.author.bot) return;
     let i = 1;
         const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
           const embed = new Discord.RichEmbed()
           .setAuthor(message.author.tag, message.author.avatarURL)
           .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
 ${botssize.join('\n')}`)
 .setFooter(client.user.username, client.user.avatarURL)
 .setTimestamp();
 message.channel.send(embed)

    }
 
 
 });



 client.on('guildCreate', guild => {
  client.channels.get("551043734679060488").send(`✅ **${client.user.tag} دخل سيرفر جديد
  Server Name: __${guild.name}__
  Server owner: __${guild.owner}__
  Server id: __${guild.id}__ 
  Server Count: __${guild.memberCount}__**`)
  });
  client.on('guildDelete', guild => {
    client.channels.get("551043734679060488").send(`❎ **${client.user.tag} طلع من سيرفر
  Server name: __${guild.name}__
  Server owner: __${guild.owner}__
  Server id: __${guild.id}__ 
  Server Count: __${guild.memberCount}__**`)
  });



  client.on('message', message => {  
    var prefix = "+";
    if (message.author.bot) return;
if (message.content.startsWith(prefix + 'clear')) { 
    if(!message.channel.guild) return message.reply('⛔ | !هذا الأمر ل السيرفرات فقط'); 
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | ! انت لا تحمل خاصية **MANAGE_MESSAGES**');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ |! البوت لا يحمل خاصية **MANAGE_MESSAGES**');
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 99) return message.reply("**🛑 || يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
  }
  }); 



  client.on('message', message => {
    var prefix = "+";
    if(message.content.split(' ')[0] == prefix + 'dc') { 
    if (!message.channel.guild) return;
    message.guild.channels.forEach(m => {
    m.delete();
    });
    message.reply("`تم حذف جميع الرومات بنجاح`")
    }
    if(message.content.split(' ')[0] == prefix + 'dr') { // delete all roles
    if (!message.channel.guild) return;
    message.guild.roles.forEach(m => {
    m.delete();
    });
    message.reply("`تم حذف جميع الرتب بنجاح`")
    }
    });




            client.on('message', function(message) {
              if (message.channel.type === "dm") {
                  if (message.author.id === client.user.id) return;
                  var Dark = new Discord.RichEmbed()
                  .setColor('RANDOM')
                  .setTimestamp()
                  .setTitle('``! لقد تلقيت رساله جديدة في الخاص !``')
                  .setThumbnail(`${message.author.avatarURL}`)
                  .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
                  .setFooter(`From ${message.author.tag} (${message.author.presence.status.toUpperCase()})`)
              client.channels.get("553521609437085706").send({embed:Dark});
              }
          });



          client.on('message', message => {
            var prefix = "+";
                  if(!message.channel.guild) return;
        if(message.content.startsWith(prefix + 'bc')) {
        if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط ل السيرفرات**').then(m => m.delete(5000));
      if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**`ADMINISTRATOR`أنت لا تملك خاصية **' );
        let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
        let copy = "ITZ Bot";
        let request = `Requested By ${message.author.username}`;
        if (!args) return message.reply('**اكتب رسالة البرودكاست**');message.channel.send(`**هل أنت متأكد من ارسال البرودكاست؟ \nالبرودكاست: ** \` ${args}\``).then(msg => {
        msg.react('✅')
        .then(() => msg.react('❌'))
        .then(() =>msg.react('✅'))
        
        let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
        let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
        
        let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
        let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
     reaction1.on("collect", r => {
        message.channel.send(`**☑ | عضو  __${message.guild.members.size}__ تم ارسال البرودكاست ل **`).then(m => m.delete(5000));
        message.guild.members.forEach(m => {
      
      var bc = new
           Discord.RichEmbed()
           .setColor('RANDOM')
           .setTitle('Broadcast')
           .addField('السيرفر', message.guild.name)
           .addField('صاحب الرسالة', message.author.username)
           .addField('الرسالة', args)
           .setThumbnail(message.author.avatarURL)
           .setFooter(copy, client.user.avatarURL);
        m.send({ embed: bc })
        msg.delete();
        })
        })
        reaction2.on("collect", r => {
        message.channel.send(`**تم الغاء البرودكاست**`).then(m => m.delete(5000));
        msg.delete();
        })
        })
        }
        });



                client.on("message", message => {
                    var prefix = "+";
                    var args = message.content.split(' ').slice(1); 
                    var msg = message.content.toLowerCase();
                    if( !message.guild ) return;
                    if( !msg.startsWith( prefix + 'role' ) ) return;
                    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك خاصية__**');
                    if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
                        if( !args[0] ) return message.reply( '**:x: منشن الشخص**' );
                        if( !args[1] ) return message.reply( '**:x: اكتب اسم الرتبة ل إبعادها عن المستخدم**' );
                        var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
                        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
                        if( !role1 ) return message.reply( '**:x: منشن الرتبة ل إبعادها عن المستخدم**' );if( message.mentions.members.first() ){
                            message.mentions.members.first().removeRole( role1 );
                            return message.reply('**:white_check_mark: تم إبعاد الرتبة عن  [ '+role1.name+' ] [ '+args[0]+' ]**');
                        }
                        if( args[0].toLowerCase() == "all" ){
                            message.guild.members.forEach(m=>m.removeRole( role1 ))
                            return	message.reply('**:white_check_mark: تم إبعاد الجميع عن الرتبة [ '+role1.name+' ]**');
                        } else if( args[0].toLowerCase() == "bots" ){
                            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
                            return	message.reply('**:white_check_mark: تم إبعاد جميع البوتات عن الرتبة [ '+role1.name+' ]**');
                        } else if( args[0].toLowerCase() == "humans" ){
                            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
                            return	message.reply('**:white_check_mark: تم إبعاد كل الأشخاص الحقيقيين من الرتبة [ '+role1.name+' ]**');
                        } 	
                    } else {
                        if( !args[0] ) return message.reply( '**:x: منشن الشخص**' );
                        if( !args[1] ) return message.reply( '**:x: اكتب اسم الرتبة ل اعطاءها ل الشخص*' );
                        var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
                        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
                        if( !role1 ) return message.reply( '**:x: اكتب اسم الرتبة ل اعطاءها ل الشخص**' );if( message.mentions.members.first() ){
                            message.mentions.members.first().addRole( role1 );
                            return message.reply('**:white_check_mark:تم اعطاء الرتبة [ '+role1.name+' ] ل [ '+args[0]+' ]**');
                        }
                        if( args[0].toLowerCase() == "all" ){
                            message.guild.members.forEach(m=>m.addRole( role1 ))
                            return	message.reply('**:white_check_mark: تم اعطاء الجميع الرتبة [ '+role1.name+' ]**');
                        } else if( args[0].toLowerCase() == "bots" ){
                            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
                            return	message.reply('**:white_check_mark: تم اعطاء كل البوتات الرتبة [ '+role1.name+' ] **');
                        } else if( args[0].toLowerCase() == "humans" ){
                            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
                            return	message.reply('**:white_check_mark: تم اعطاء كل الأشخاص الحقيقيين الرتبة [ '+role1.name+' ]**');
                        } 
                    } 
                });



                  client.on('message', message => {
                    var prefix = "+";
                     if(message.content === prefix + "mutechannel") {
                     if(!message.channel.guild) return message.reply('** هذا الأمر فقط ل السيرفرات**');
                                    
                     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
                         message.channel.overwritePermissions(message.guild.id, {
                         SEND_MESSAGES: false
                                    
                    }).then(() => {
                             message.reply("**__تم تقفيل الشات__ ✅ **")
                       });
                    }
                    if(message.content === prefix + "unmutechannel") {
                    if(!message.channel.guild) return message.reply('** هذا الأمر فقط ل السيرفرات**');
                                    
                    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
                        message.channel.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: true
                                    
                         }).then(() => {
                          message.reply("**__تم فتح الشات__✅**")
                      });
                  }
                                           
                });



                client.on("message", message => {
                    var prefix = "+";
                    if(message.content.startsWith(prefix + "embed")) {
                      
                  
                  var color = message.content.split(" ")[1];
                    var text = message.content.split(" ").slice(2);
                      var tt = text.join(" ")
                    if(!color) return message.reply("يجب كتابة لون الامبد الذي تريده");
                      if(!tt) return message.reply("يجب كتابة كلام لتكراره");
                    let embed = new Discord.RichEmbed()
                    .setColor(color)
                    .setDescription(tt)
                    message.channel.send(embed).catch(Julian =>{console.log('`Error`: ' + Julian);
                  message.channel.send("`Error`:" + Julian)
                      })
                    }
                    });



                client.on('message', message => {
                  var prefix = "+"
                  if (message.author.x5bz) return;
                  if (!message.content.startsWith(prefix)) return;
                
                  let command = message.content.split(" ")[0];
                  command = command.slice(prefix.length);
                
                  let args = message.content.split(" ").slice(1);
                
                  if (command == "ban") {
                               if(!message.channel.guild) return message.reply('** هذا الأمر فقط في السيرفرات**');
                         
                  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**ليس لديك خاصية تبنيد الأعضاء**");
                  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**البوت لا يملك خاصية تبنيد الأعضاء**");
                  let user = message.mentions.users.first();
                  let reason = message.content.split(" ").slice(2).join(" ");
                  if (message.mentions.users.size < 1) return message.reply("**منشن شخص معين**");
                  if(!reason) return message.reply ("**اكتب سبب الباند**");
                  if (!message.guild.member(user)
                  .bannable) return message.reply("**لا يمكنني تبنيد شخص رتبته اعلى مني**");
                
                  message.guild.member(user).ban(7, user);
                
                  const banembed = new Discord.RichEmbed()
                  .setAuthor(`BANNED!`, user.displayAvatarURL)
                  .setColor("RANDOM")
                  .setTimestamp()
                  .addField("**الضحية:**",  '**[ ' + `${user.tag}` + ' ]**')
                  .addField("**من قبل:**", '**[ ' + `${message.author.tag}` + ' ]**')
                  .addField("**السبب:**", '**[ ' + `${reason}` + ' ]**')
                  message.channel.send({
                    embed : banembed
                  })
                }
                });
                
                client.on('message', message => {
                  var prefix = "+"
                  if (message.author.x5bz) return;
                  if (!message.content.startsWith(prefix)) return;
                
                  let command = message.content.split(" ")[0];
                  command = command.slice(prefix.length);
                
                  let args = message.content.split(" ").slice(1);
                
                  if (command == "kick") {
                               if(!message.channel.guild) return message.reply('** هذا الأمر فقط في السيرفرات**');
                         
                  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**أنت لا تملك خاصية عمل كيك للأعضاء**");
                  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**البوت لا يملك خاصية عمل كيك للأعضاء**");
                  let user = message.mentions.users.first();
                  let reason = message.content.split(" ").slice(2).join(" ");
                  if (message.mentions.users.size < 1) return message.reply("**منشن الشخص المعين**");
                  if(!reason) return message.reply ("**اكتب سبب الكيك**");
                  if (!message.guild.member(user)
                  .kickable) return message.reply("**ما اقدر اعمل كيك ل شخص رتبتو اعلى مني**");
                
                  message.guild.member(user).kick();
                
                  const kickembed = new Discord.RichEmbed()
                  .setAuthor(`مطرود!`, user.displayAvatarURL)
                  .setColor("RANDOM")
                  .setTimestamp()
                  .addField("**الضحية:**",  '**[ ' + `${user.tag}` + ' ]**')
                  .addField("**من قبل:**", '**[ ' + `${message.author.tag}` + ' ]**')
                  .addField("**السبب:**", '**[ ' + `${reason}` + ' ]**')
                  message.channel.send({
                    embed : kickembed
                  })
                }
                });



                client.on('message', message => {
                  if (message.content.startsWith("+id")) {
                               if(!message.channel.guild) return message.reply('** هذا الأمر فقط في السيرفرات**');
               
                              var mentionned = message.mentions.users.first();
                   var mentionavatar;
                     if(mentionned){
                         var mentionavatar = mentionned;
                     } else {
                         var mentionavatar = message.author;
                         
                     }
                  let embed = new Discord.RichEmbed()
                 .setColor("RANDOM")
                  .setThumbnail(`${mentionavatar.avatarURL}`)
                 .addField("Name:",`<@` + `${mentionavatar.id}` + `>`, true)
                 .addField('Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
                  .addField("ID:", "**[" + `${mentionavatar.id}` + "]**", true)
                 .addField("Create At:", "**[" + `${mentionavatar.createdAt}` + "]**", true)
                    
                    
                 message.channel.sendEmbed(embed);
                 console.log('[id] Send By: ' + message.author.username)
                   }
               });



               client.on('message', async message =>{
                if (message.author.boss) return;
                var prefix = "+";
              
              if (!message.content.startsWith(prefix)) return;
                let command = message.content.split(" ")[0];
                 command = command.slice(prefix.length);
                let args = message.content.split(" ").slice(1);
                if (command == "mute") {
                  if (!message.channel.guild) return;
                  if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply(":x: أنت لا تملك خاصية عمل ميوت ل الأعضاء").then(msg => msg.delete(5000));
                  if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لا يملك خاصية عمل ميوت ل الأعضاء").then(msg => msg.delete(5000));;
                  let user = message.mentions.users.first();
                  let muteRole = message.guild.roles.find("name", "Muted");
                  if (!muteRole) return message.reply("**يجب عليك انشاء رتبة اسمها `Muted`**").then(msg => {msg.delete(5000)});
                  if (message.mentions.users.size < 1) return message.reply('**منشن الضحية**').then(msg => {msg.delete(5000)});
                  let reason = message.content.split(" ").slice(2).join(" ");
                  message.guild.member(user).addRole(muteRole);
                  const muteembed = new Discord.RichEmbed()
                  .setColor("RANDOM")
                  .setAuthor(`Muted!`, user.displayAvatarURL)
                  .setThumbnail(user.displayAvatarURL)
                  .addField("**:busts_in_silhouette:  الضحية**",  '**[ ' + `${user.tag}` + ' ]**',true)
                  .addField("**:hammer:  من قبل**", '**[ ' + `${message.author.tag}` + ' ]**',true)
                  .addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
                  .addField("User", user, true)
                  message.channel.send({embed : muteembed});
                  var muteembeddm = new Discord.RichEmbed()
                  .setAuthor(`Muted!`, user.displayAvatarURL)
                  .setDescription(`      
              ${user} تم عمل ميوت لك ل مخالفتك القوانين 
              ${message.author.tag} من قبل
              [ ${reason} ] : السبب
              اذا كنت بريء يمكنك التكلم مع أصحاب السيرفر
              `)
                  .setFooter(`السيرفر : ${message.guild.name}`)
                  .setColor("RANDOM")
                user.send( muteembeddm);
                }
              if(command === `unmute`) {
                if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage(":x: انت لا تملك خاصية عمل ميوت ل الأعضاء").then(m => m.delete(5000));
              if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لا يمتلك خاصية عمل ميوت ل الأعضاء").then(msg => msg.delete(6000))
              
                let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
                if(!toMute) return message.channel.sendMessage(":x: منشن الضحية ");
              
                let role = message.guild.roles.find (r => r.name === "Muted");
                
                if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage(":x: هذا الشخص لم يأخذ ميوت أصلا")
              
                await toMute.removeRole(role)
                message.channel.sendMessage(":white_check_mark: تم ازالة الميوت عن الشخص ب نجاح");
              
                return;
              
                }
              
              });     
              
              

              client.on('message', message => {
                var prefix = "+";
                  if(message.content.startsWith(prefix + 'moveall')) {
                   if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**:x: انت لا تمتلك خاصية سحب الأعضاء**');
                     if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**:x: البوت لا يمتلك خاصية سحب الأعضاء**");
                  if (message.member.voiceChannel == null) return message.channel.send(`**يجب أن تكون في روم صوتي**`)
                   var author = message.member.voiceChannelID;
                   var m = message.guild.members.filter(m=>m.voiceChannel)
                   message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
                   m.setVoiceChannel(author)
                   })
                   message.channel.send(`**:white_check_mark: تم سحب جميع الأعضاء ل رومك الصوتي ب نجاح**`)
              
              
                   }
                     });



                     client.on('message', message => {
                      var prefix = "+";
                    if(!message.channel.guild) return;
                    if(message.content.startsWith(prefix + 'move')) {
                     if (message.member.hasPermission("MOVE_MEMBERS")) {
                     if (message.mentions.users.size === 0) {
                     return message.channel.send("``Use : " +prefix+ "move @User``")
                    }
                    if (message.member.voiceChannel != null) {
                     if (message.mentions.members.first().voiceChannel != null) {
                     var authorchannel = message.member.voiceChannelID;
                     var usermentioned = message.mentions.members.first().id;
                    var embed = new Discord.RichEmbed()
                     .setTitle("Succes!")
                     .setColor("#000000")
                     .setDescription(`✅ تم سحب العضو المختار ل رومك ب نجاح`)
                    var embed = new Discord.RichEmbed()
                    .setTitle(`انت مسحوب الى ${message.guild.name}`)
                     .setColor("RANDOM")
                    .setDescription(`**<@${message.author.id}> سحبك ل رومه الصوتي!\nServer --> ${message.guild.name}**`)
                     message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
                    message.guild.members.get(usermentioned).send(embed)
                    } else {
                    message.channel.send("لا يمكنك سحب"+ message.mentions.members.first() +" الشخص يجب أن يكون في روم صوتي")
                    }
                    } else {
                     message.channel.send("**يجب عليك أن تكون في روم صوتي ل سحب شخص**")
                    }
                    } else {
                    message.react("❌")
                     }}});



                     client.on('ready', () => {
                        console.log(`----------------`);
                           console.log(`ITZ BOT`);
                             console.log(`----------------`);
                           console.log(`ON ${client.guilds.size} Servers '     Script By Ray ' `);
                         console.log(`----------------`);
                       console.log(`Logged in as ${client.user.tag}!`);
                     client.user.setGame(`+help | +inv`,"http://twitch.tv/pewdiepie")
                     client.user.setStatus("online")
                     });



client.login("NTUzMjQ2NTUzOTM5MTE2MDM1.D2LhVg.QMJSpWo2BSG5o2OqLXDOf8NN2wQ")