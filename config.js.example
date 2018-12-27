const config = {
  "ownerID": "id-here like 3343246564",

  "admins": "id-here",

  "support": "id-here",

  "token": "your-toke",

 
  
  "defaultSettings" : {
    "prefix": "?",
    "modLogChannel": "elections",
    "modRole": "Moderator",
    "adminRole": "Administrator",
    "systemNotice": "true", 
    "welcomeChannel": "welcome",
    "welcomeMessage": "Hi !user, welcome to !server. Now this server have !memberCount members. Please feel free to browse around and get to know the others. If you have any questions please don't hesitate to ask in our support forums. Kindly introduce yourself in #introductions.",
    "welcomeEnabled": "true",
	  "leaveChannel": "welcome",
  	"leaveMessage": "Bye !user, Now this server have !memberCount members. Maybe he is no more Lazy.",
    "leaveEnabled": "true"
  },


  permLevels: [
    { level: 0,
      name: "User", 
      check: () => true
    },

    { level: 2,
      name: "Moderator",
      check: (message) => {
        try {
          const modRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.modRole.toLowerCase());
          if (modRole && message.member.roles.has(modRole.id)) return true;
        } catch (e) {
          return false;
        }
      }
    },

    { level: 3,
      name: "Administrator", 
      check: (message) => {
        try {
          const adminRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.adminRole.toLowerCase());
          return (adminRole && message.member.roles.has(adminRole.id));
        } catch (e) {
          return false;
        }
      }
    },
    { level: 4,
      name: "Server Owner", 
      check: (message) => message.channel.type === "text" ? (message.guild.ownerID === message.author.id ? true : false) : false
    },

    { level: 8,
      name: "Bot Support",
      check: (message) => config.support.includes(message.author.id)
    },

    { level: 9,
      name: "Bot Admin",
      check: (message) => config.admins.includes(message.author.id)
    },

    { level: 10,
      name: "Bot Owner", 
      check: (message) => message.client.config.ownerID === message.author.id
    }
  ]
};

module.exports = config;
