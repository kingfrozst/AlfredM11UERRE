const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log("Estoy listo!");
});

client.on("message", (message) => {
    if (message.content.startsWith("Alfred")) {
        message.channel.send("¿Que pasa amo?");
    }

});

client.on("message", (message) => {
    if (message.content.startsWith("English")) {
        message.channel.send("Aquí está su clase: https://meet.google.com/akf-pdmx-pjo");
    }

});

client.on("message", (message) => {
    if (message.content.startsWith("Algebra")) {
        message.channel.send("Aquí está su clase: https://meet.google.com/hfb-pwhh-azt");
    }

});

client.on("message", (message) => {
    if (message.content.startsWith("Biology")) {
        message.channel.send("Aquí está su clase: https://meet.google.com/tqx-opyo-zok");
    }

});

client.on("message", (message) => {
    if (message.content.startsWith("French")) {
        message.channel.send("Aquí está su clase: https://meet.google.com/dzg-ioij-efy");
    }

});

client.on("message", (message) => {
    if (message.content.startsWith("Informatic")) {
        message.channel.send("Aquí está su clase: https://meet.google.com/vmw-xjat-osu");
    }

});

client.on("message", (message) => {
    if (message.content.startsWith("Physical")) {
        message.channel.send("Aquí está su clase: https://meet.google.com/jtg-qtpa-sfn");
    }

});
client.on("message", (message) => {
    if (message.content.startsWith("Psicology")) {
        message.channel.send("Aquí está su clase:[{TRABAJO EN MARCHA}]");
    }

});
client.on("message", (message) => {
    if (message.content.startsWith("Creative")) {
        message.channel.send("Aquí está su clase:[{TRABAJO EN MARCHA}]");
    }

});
client.on("message", (message) => {
    if (message.content.startsWith("Art")) {
        message.channel.send("Aquí está su clase:  https://meet.google.com/xkd-fkdi-urr");
    }

});

client.on("message", (message) => {
    if (message.content.startsWith("Spanish")) {
        message.channel.send("Aquí está su clase: https://meet.google.com/zdt-jnsr-qin");
    }

});

client.on("message", (message) => {
    if (message.content.startsWith("Civic")) {
        message.channel.send("Aquí está su clase: https://meet.google.com/vkn-dbpk-heo");
    }

});

client.on("message", (message) => {
    if (message.content.startsWith("Hola Alfred")) {
        message.channel.send("Muy buenas ¿Como está?");
    }

});

client.on("message", (message) => {
    if (message.content.startsWith("Monday Calendar")) {
        message.channel.send("1. French x2 | 2. Civic | 3. Descanso | 4. Spanish | 5. English | 6. Algebra| 7. Psicology | 8. Creative |");
    }
});

client.on("message", (message) => {
    if (message.content.startsWith("Tuesday Calendar")) {
        message.channel.send("1. French| 2. Informatic | 3. Civic | 4. Descanso | 5. Spanish | 6. English | 7. Algebra | 8. Phisical |");
    }
});
client.on("message", (message) => {
    if (message.content.startsWith("Wednesday Calendar")) {
        message.channel.send("1. Informatic x2 | 2. Civic | 3. Descanso | 4. Spanish | 5. English | 6. Algebra | 7. Psicology |");
    }
});

client.on("message", (message) => {
    if (message.content.startsWith("Thursday Calendar")) {
        message.channel.send("1. Biology | 2. Psicology | 3. Civic | 4. Descanso | 5. Spanish | 6. English | 7. Algebra | 8. Creative");
    }
});

client.on("message", (message) => {
    if (message.content.startsWith("Friday Calendar")) {
        message.channel.send("1. Art | 2. Biology | 3. Civic | 4. Descanso | 5. Spanish | 6. English | 7. Algebra | 8. Phisical");
    }
});




client.login("NzQ2MzU0NDE4ODMxODUxNTYw.Xz_GuA.pTWlUtPtasblDkprFfXpNw8dzLE");