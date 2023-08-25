const { baileys, proto, generateWAMessageFromContent, getContentType } = require('@adiwajshing/baileys')
const { getGroupAdmins,updateDatabase } = require('./lib/functions.js')
const { exec } = require('child_process')
const fs = require('fs')
const request = require("request")
module.exports = async (semar, denz, msg) => {
try { 
if (msg.key && msg.key.remoteJid === 'status@broadcast') return
const type = getContentType(msg.message)
const content = JSON.stringify(msg.message)
const from = msg.key.remoteJid
const quoted = type == 'extendedTextMessage' && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const body = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const dn = args.join(' ')
const isGroup = from.endsWith('@g.us')
const botNumber = semar.user.id.split(':')[0]
const sender = msg.key.fromMe ? (semar.user.id.split(':')[0]+'@s.whatsapp.net' || semar.user.id) : (msg.key.participant || msg.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = msg.pushName || `${senderNumber}`
const groupMetadata = isGroup ? await semar.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.id : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(`${botNumber}@s.whatsapp.net`) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isSaya = botNumber.includes(senderNumber)
const isDev = nomorDeveloper.includes(senderNumber) || isSaya
const isOwner = nomorOwner.includes(senderNumber) || isSaya
const reply = async(teks) => {await semar.sendMessage(from,{text: teks},{quoted:msg})}
const sleep = async (ms) => { return new Promise(resolve => setTimeout(resolve, ms))}
const validGrup=(id,array)=>{for(var i=0;i<array.length;i++){if(array[i]==id){return!0}}
return!1}
0
// kirimprib hasillrndy
const kirimprib =async(text,id) => { await semar.sendMessage(id,{text: text},{quoted:msg}) }
//ALL DATABASE
server = JSON.parse(fs.readFileSync('./database/server.json'))
grups = JSON.parse(fs.readFileSync('./database/grups.json'))
switch (command) {

    // 5 JUNI 2023
    // FITUR HOST BY Hydickyy Nesia
        case 'sc':
        case 'script':
        id = msg.key.remoteJid
        if(validGrup(id,grups)){
            script =`
*NIH DEK!!!!*
_*Sc WEBP ©Hydickyy Nesia_*
-
*_MINIMAL SUBS LAH_*
https://www.youtube.com/c/@hydickyy`
            reply(script)
              }else{
            reply("MAU NGAPAIN? MASUK:https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx")
        }
        break
case 'menu' :
     id = msg.key.remoteJid
        if(validGrup(id,grups)){

        menu =`
*Hay Kak ${pushname} 👋*
Owner : Hydickyy Nesia
Total Pengguna : 2829
Status : Bot Active✅
⚙️ : Perbaikan
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*MENU BOT*
🔏 .menuweb
🔏 .bahanyt
🔏 .menu
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*TEMUKAN ADMIN*
*⏳ WHATSAPP¹*
_wa.me/6285795799447_
*⏳ YOUTUBE*
https://youtube.com/@hydickyy
*⏳ GRUB CREATE WEB*
_https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx_
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`
reply(menu)

        }else{
            reply("MAU NGAPAIN? MASUK:https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx")
        }
        break
// 5 JUNI 2023
// FITUR HOST BY Hydickyy Nesia
// BATAS MENU    
        case 'update':
        if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
        
            if(args == ""){
            psn = `ketik .bo om
            `
            reply(psn)
            }else{                
                jenis = args[0]
                isi = args[2]
            
            update= updateDatabase(jenis,isi)
            if(update == "success"){
            server = JSON.parse(fs.readFileSync('./database/server.json'))
            grups = JSON.parse(fs.readFileSync('./database/grups.json'))
            
                info = `*SUKSES OM*`
reply(info)
}                
}            
break
// 5 JUNI 2023
// FITUR HOST BY Hydickyy Nesia
// BATAS UPDATE           
            case 'infobot' :
            if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
            id = msg.key.remoteJid
        info = `*PERASAAN GUA GA ENAK DAH, KAYA NYA ADA YANG MAU MALING ROOT GUA NIH 🗿*`
            reply(info);
            break
// 5 JUNI 2023
// FITUR HOST BY Hydickyy Nesia
// BATAS DATA ROOT
        case 'listgrup':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
        let text = "LIST GRUP VIP :\n\n"
            for (let i = 0; i < grups.length; i++) {
                text += "> "+ grups[i] + "\n";
            }
            reply(text)
            break
// 5 JUNI 2023
// FITUR HOST BY Hydickyy Nesia
// BATAS LIST GRUP    
            case 'bo':
            if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
                id = msg.key.remoteJid
                pengirim = msg.key.participant
                nama = msg.pushName
reply('*Hydickyy Nesia Dek*')          

    await semar.sendMessage(pengirim,{text: `.update grup | ${id} \n\n`},{quoted:msg})

            break 
    case 'test' : 
        image = 'https://i.ibb.co/rkfyn5c/IMG-20230825-031059.jpg'
        semar.sendMessage(from,{text: `test`},{image: image})
        
       break
// 5 JUNI 2023
// FITUR HOST BY Hydickyy Nesia
// BATAS
//CASE HOST
        case 'domain' :
        case 'subdomain' :
        domain = `
*MINIMAL BELI BANGSAT!!! GA MODAL LU KONTOL!!!*`
        reply(domain)
        break
case 'shortlink' :
case 'bungkus' :
case 'pembungkus' :
case 'short' :
shortlink =`
*ALL SHORT BY ©Hydickyy Nesia*
Belom Ada Bro`
reply(shortlink)
break

case 'list' :
case 'web' :
case 'webp' :
case 'listweb' :
case 'menuweb' :
   menuweb = `
𝙷𝚊𝚒 𝙺𝚊𝚔 ${pushname}👋🏻
𝙱𝙴𝚁𝙸𝙺𝚄𝚃 𝙼𝙴𝙽𝚄 𝚆𝙴𝙱𝙿 𝙺𝙰𝙼𝙸
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
┏━━⊱ 𝙸𝚝'𝚜 𝙼𝚎 Hydickyy Nesia
┃➜ .𝚠𝚎𝚋𝚙1   : MediaFire V1
┃➜ .𝚠𝚎𝚋𝚙2   : MediaFire V2
┃➜ .𝚠𝚎𝚋𝚙3   : Mediafire V3
┃➜ .𝚠𝚎𝚋𝚙4   : Grup Wa 18+
┃➜ .𝚠𝚎𝚋𝚙5   : Grup Wa 18+ V2
┃➜ .𝚠𝚎𝚋𝚙6   : Free Fire V1
┃➜ .𝚠𝚎𝚋𝚙7   : Free Fire V2
┃➜ .𝚠𝚎𝚋𝚙8   : Mobile Legends
┃➜ .𝚠𝚎𝚋𝚙9   : Nonton Okep 18+
┃➜ .𝚠𝚎𝚋𝚙10  : Simontok
┃➜ .𝚠𝚎𝚋𝚙11  : Coda Shop
┃➜ .𝚠𝚎𝚋𝚙12  : Pubg Mobile 
┃➜ .𝚠𝚎𝚋𝚙13  : Stumble Guys
┃➜ .𝚠𝚎𝚋𝚙14  : Youtube 
┃➜ .𝚠𝚎𝚋𝚙15  : Pemblokiran Facebook
┃➜ .𝚠𝚎𝚋𝚙16  : Dana Kaget
┃➜ .𝚠𝚎𝚋𝚙17  : Kuota Gratis
┗━━━[ *𝙲𝚊𝚕𝚕 𝙼𝚎 Hydickyy Nesia* ]━━━❏
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
𝚃𝚞𝚝𝚘𝚛? 𝙺𝚎𝚝𝚒𝚔 .𝚠𝚎𝚋𝚙𝟷
𝙳𝚘𝚗𝚊𝚜𝚒 𝙱𝚛𝚘 𝙱𝚒𝚊𝚛 𝙱𝚘𝚝 𝙻𝚎𝚋𝚒𝚑 𝚂𝚎𝚖𝚊𝚗𝚐𝚊𝚝

━━━━━━━━━━━━━━━
𝙻𝚒𝚗𝚔 𝙶𝚛𝚘𝚞𝚙 𝙲𝚛𝚎𝚊𝚝𝚎 𝚆𝚎𝚋𝚙
https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx
️━━━━━━━━━━━━━━━
`
reply(menuweb)
break
// 5 JUNI 2023
// FITUR HOST BY Hydickyy Nesia
// BATAS MENU WEB
case 'webp1' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "mediafirre111" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("__Proses Sabar Deck Jeda 2 Menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii-qrizku.x-vip.my.id/api-web/mediafire/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii-qrizku.x-vip.my.id/api-web/mediafire/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`_*Sukses*, Web Sudah Terkirim Ke*${pushname}*_`, idmu)
                    }


                    hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
*➢ Website :*
${pendek}
==========================
*➢ Web Setting :*
${domain}/vhsfhqpdhdsih6/host.php
==========================
*➢ Gc Create Webp*
https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx
==========================
*➢ Sewa Bot Web*
https://wa.me/6285795799447
==========================

Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`Hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_*GAGAL COBA LAGI DALAM 5 MENIT*_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("MAU NGAPAIN? MASUK:https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx")
        }
break
// 5 JUNI 2023
// FITUR HOST BY Hydickyy Nesia
// BATAS WEB
case 'webp2' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "mediafire111" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("__Proses Sabar Deck Jeda 2 Menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii-qrizku.x-vip.my.id/api-web/mediafire2/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii-qrizku.x-vip.my.id/api-web/mediafire2/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`*Sukses, Web Sudah Terkirim Ke_*${pushname}*_`, idmu)
                    }


hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
*➢ Website :*
${pendek}
==========================
*➢ Web Setting :*
${domain}/vhsfhqpdhdsih6/host.php
==========================
*➢ Gc Create Webp*
https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx
==========================
*➢ Sewa Bot Webp*
https://wa.me/6285795799447
==========================

Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_*GAGAL COBA LAGI DALAM 5 MENIT*_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("MAU NGAPAIN? MASUK:https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx")
        }
break
// 5 JUNI 2023
// FITUR HOST BY Hydickyy Nesia
// BATAS WEB
case 'webp3' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "mediafire111" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("__Proses Sabar Deck Jeda 2 Menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii-qrizku.x-vip.my.id/api-web/mediafire3/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii-qrizku.x-vip.my.id/api-web/mediafire3/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`*Sukses, Web Sudah Terkirim Ke_*${pushname}*_`, idmu)
                    }


hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
*➢ Website :*
${pendek}
==========================
*➢ Web Setting :*
${domain}/vhsfhqpdhdsih6/host.php
==========================
*➢ Gc Create Webp*
https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx
==========================
*➢ Sewa Bot Webp*
https://wa.me/6285795799447
==========================

Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("GAGAL COBA LAGI DALAM 5 MENIT_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("MAU NGAPAIN? MASUK:https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx")
        }
break
// 5 JUNI 2023
// FITUR HOST BY Hydickyy Nesia
// BATAS WEB
case 'webp4' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "grupwa111" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("__Proses Sabar Deck Jeda 2 Menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii-qrizku.x-vip.my.id/api-web/grupwa/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii-qrizku.x-vip.my.id/api-web/grupwa/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`*Sukses, Web Sudah Terkirim Ke_*${pushname}*_`, idmu)
                    }


hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
*➢ Website :*
${pendek}
==========================
*➢ Web Setting :*
${domain}/vhsfhqpdhdsih6/host.php
==========================
*➢ Gc Create Webp*
https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx
==========================
*➢ Sewa Bot Webp*
https://wa.me/6285795799447
==========================

Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`
                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_*GAGAL COBA LAGI DALAM 5 MENIT*_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("MAU NGAPAIN? MASUK:https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx")
        }
break
// 5 JUNI 2023
// FITUR HOST BY Hydickyy Nesia
// BATAS WEB
case 'webp5' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "grupwa111" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("__Proses Sabar Deck Jeda 2 Menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii-qrizku.x-vip.my.id/api-web/grupwa2/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii-qrizku.x-vip.my.id/api-web/grupwa2/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`*Sukses, Web Sudah Terkirim Ke_*${pushname}*_`, idmu)
                    }


hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
*➢ Website :*
${pendek}
==========================
*➢ Web Setting :*
${domain}/vhsfhqpdhdsih6/host.php
==========================
*➢ Gc Create Webp*
https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx
==========================
*➢ Sewa Bot Webp*
https://wa.me/62857534438182
==========================

Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("GAGAL COBA LAGI DALAM 5 MENIT_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("MAU NGAPAIN? MASUK:https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx")
        }
break
// 5 JUNI 2023
// FITUR HOST BY Hydickyy Nesia
// BATAS WEB
case 'webp6' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "freefire111" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("__Proses Sabar Deck Jeda 2 Menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii-qrizku.x-vip.my.id/api-web/freefire/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii-qrizku.x-vip.my.id/api-web/freefire/upload.php',
                    form: inputt
                }, function (error, res, body) {
                     // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`*Sukses, Web Sudah Terkirim Ke_*${pushname}*_`, idmu)
                    }


hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
*➢ Website :*
${pendek}
==========================
*➢ Web Setting :*
${domain}/vhsfhqpdhdsih6/host.php
==========================
*➢ Gc Create Webp*
https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx
==========================
*➢ Sewa Bot Webp*
https://wa.me/6285795799447
==========================

Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("GAGAL COBA LAGI DALAM 5 MENIT_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
break
// 5 JUNI 2023
// FITUR HOST BY Hydickyy Nesia
// BATAS MENU WEB
case 'webp7' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "freefire111" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("__Proses Sabar Deck Jeda 2 Menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii-qrizku.x-vip.my.id/api-web/freefire2/domaindgrub/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii-qrizku.x-vip.my.id/api-web/freefire2/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`*Sukses, Web Sudah Terkirim Ke_*${pushname}*_`, idmu)
                    }


                    hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
*➢ Website :*
${pendek}
==========================
*➢ Web Setting :*
${domain}/vhsfhqpdhdsih6/host.php
==========================
*➢ Gc Create Webp*
https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx
==========================
*➢ Sewa Bot Web*
https://wa.me/6285795799447
==========================

Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`Hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_*GAGAL COBA LAGI DALAM 5 MENIT*_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("MAU NGAPAIN? MASUK:https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx")
        }
break
// 5 JUNI 2023
// FITUR HOST BY Hydickyy Nesia
// BATAS MENU WEB
case 'webp8' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "mobile-legend111" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("__Proses Sabar Deck Jeda 2 Menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii-qrizku.x-vip.my.id/api-web/mobile-legend/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii-qrizku.x-vip.my.id/api-web/mobile-legend/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`*Sukses, Web Sudah Terkirim Ke_*${pushname}*_`, idmu)
                    }


                    hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
*➢ Website :*
${pendek}
==========================
*➢ Web Setting :*
${domain}/vhsfhqpdhdsih6/host.php
==========================
*➢ Gc Create Webp*
https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx
==========================
*➢ Sewa Bot Web*
https://wa.me/6285795799447
==========================

Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`Hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_*GAGAL COBA LAGI DALAM 5 MENIT*_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("MAU NGAPAIN? MASUK:https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx")
        }
break
// 5 JUNI 2023
// FITUR HOST BY Hydickyy Nesia
// BATAS MENU WEB
case 'webp9' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "nonton111" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("__Proses Sabar Deck Jeda 2 Menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii-qrizku.x-vip.my.id/api-web/nontonbokep/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii-qrizku.x-vip.my.id/api-web/nontonbokep/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`*Sukses, Web Sudah Terkirim Ke_*${pushname}*_`, idmu)
                    }


                    hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
*➢ Website :*
${pendek}
==========================
*➢ Web Setting :*
${domain}/vhsfhqpdhdsih6/host.php
==========================
*➢ Gc Create Webp*
https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx
==========================
*➢ Sewa Bot Web*
https://wa.me/6285795799447
==========================

Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`Hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_*GAGAL COBA LAGI DALAM 5 MENIT*_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("MAU NGAPAIN? MASUK:https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx")
        }
break
// 5 JUNI 2023
// FITUR HOST BY Hydickyy Nesia
// BATAS MENU WEB
case 'webp10' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "xxxnx111" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("__Proses Sabar Deck Jeda 2 Menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii-qrizku.x-vip.my.id/api-web/simontok/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii-qrizku.x-vip.my.id/api-web/simontok/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`*Sukses, Web Sudah Terkirim Ke_*${pushname}*_`, idmu)
                    }


                    hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
*➢ Website :*
${pendek}
==========================
*➢ Web Setting :*
${domain}/vhsfhqpdhdsih6/host.php
==========================
*➢ Gc Create Webp*
https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx
==========================
*➢ Sewa Bot Web*
https://wa.me/6285795799447
==========================

Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`Hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_*GAGAL COBA LAGI DALAM 5 MENIT*_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("MAU NGAPAIN? MASUK:https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx")
        }
break
// 5 JUNI 2023
// FITUR HOST BY Hydickyy Nesia
// BATAS MENU WEB
case 'webp11' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "codashop111" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("__Proses Sabar Deck Jeda 2 Menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii-qrizku.x-vip.my.id/api-web/codashop/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii-qrizku.x-vip.my.id/api-web/codashop/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`*Sukses, Web Sudah Terkirim Ke_*${pushname}*_`, idmu)
                    }


                    hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
*➢ Website :*
${pendek}
==========================
*➢ Web Setting :*
${domain}/vhsfhqpdhdsih6/host.php
==========================
*➢ Gc Create Webp*
https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx
==========================
*➢ Sewa Bot Web*
https://wa.me/6285795799447
==========================

Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`Hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_*GAGAL COBA LAGI DALAM 5 MENIT*_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("MAU NGAPAIN? MASUK:https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx")
        }
break
// 5 JUNI 2023
// FITUR HOST BY Hydickyy Nesia
// BATAS MENU WEB
case 'webp12' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "freefire111" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("__Proses Sabar Deck Jeda 2 Menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii-qrizku.x-vip.my.id/api-web/pubgm12/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii-qrizku.x-vip.my.id/api-web/pubgm12/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`*Sukses, Web Sudah Terkirim Ke_*${pushname}*_`, idmu)
                    }


                    hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
*➢ Website :*
${pendek}
==========================
*➢ Web Setting :*
${domain}/vhsfhqpdhdsih6/host.php
==========================
*➢ Gc Create Webp*
https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx
==========================
*➢ Sewa Bot Web*
https://wa.me/6285795799447
==========================

Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`Hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_*GAGAL COBA LAGI DALAM 5 MENIT*_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("MAU NGAPAIN? MASUK:https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx")
        }
break
// 5 JUNI 2023
// FITUR HOST BY Hydickyy Nesia
// BATAS MENU WEB
case 'webp13' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "stumble111" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("__Proses Sabar Deck Jeda 2 Menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii-qrizku.x-vip.my.id/api-web/stumble/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii-qrizku.x-vip.my.id/api-web/stumble/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`*Sukses, Web Sudah Terkirim Ke_*${pushname}*_`, idmu)
                    }


                    hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
*➢ Website :*
${pendek}
==========================
*➢ Web Setting :*
${domain}/vhsfhqpdhdsih6/host.php
==========================
*➢ Gc Create Webp*
https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx
==========================
*➢ Sewa Bot Web*
https://wa.me/6285795799447
==========================

Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`Hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_*GAGAL COBA LAGI DALAM 5 MENIT*_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("MAU NGAPAIN? MASUK:https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx")
        }
break
// 5 JUNI 2023
// FITUR HOST BY Hydickyy Nesia
// BATAS MENU WEB
case 'webp14' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "youtube111" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("__Proses Sabar Deck Jeda 2 Menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii-qrizku.x-vip.my.id/api-web/youtube/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii-qrizku.x-vip.my.id/api-web/youtube/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`*Sukses, Web Sudah Terkirim Ke_*${pushname}*_`, idmu)
                    }


                    hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
*➢ Website :*
${pendek}
==========================
*➢ Web Setting :*
${domain}/vhsfhqpdhdsih6/host.php
==========================
*➢ Gc Create Webp*
https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx
==========================
*➢ Sewa Bot Web*
https://wa.me/6285795799447
==========================

Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`Hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_*GAGAL COBA LAGI DALAM 5 MENIT*_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("MAU NGAPAIN? MASUK:https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx")
        }
break
// 5 JUNI 2023
// FITUR HOST BY Hydickyy Nesia
// BATAS MENU WEB
case 'webp15' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "pemblokiran111" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("__Proses Sabar Deck Jeda 2 Menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii-qrizku.x-vip.my.id/api-web/fbpemblokiran/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii-qrizku.x-vip.my.id/api-web/fbpemblokiran/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`*Sukses, Web Sudah Terkirim Ke_*${pushname}*_`, idmu)
                    }


                    hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
*➢ Website :*
${pendek}
==========================
*➢ Web Setting :*
${domain}/vhsfhqpdhdsih6/host.php
==========================
*➢ Gc Create Webp*
https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx
==========================
*➢ Sewa Bot Web*
https://wa.me/6285795799447
==========================

Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`Hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_*GAGAL COBA LAGI DALAM 5 MENIT*_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("MAU NGAPAIN? MASUK:https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx")
        }
// 5 JUNI 2023
// FITUR HOST BY Hydickyy Nesia
// BATAS MENU WEB
case 'webp16' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "daget11" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("__Proses Sabar Deck Jeda 2 Menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii-qrizku.x-vip.my.id/api-web/daget/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii-qrizku.x-vip.my.id/api-web/daget/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`*Sukses, Web Sudah Terkirim Ke_*${pushname}*_`, idmu)
                    }


                    hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
*➢ Website :*
${pendek}
==========================
*➢ Web Setting :*
${domain}/vhsfhqpdhdsih6/host.php
==========================
*➢ Gc Create Webp*
https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx
==========================
*➢ Sewa Bot Web*
https://wa.me/6285795799447
==========================

Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`Hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_*GAGAL COBA LAGI DALAM 5 MENIT*_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("MAU NGAPAIN? MASUK:https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx")
        }
// 5 JUNI 2023
// FITUR HOST BY Hydickyy Nesia
// BATAS MENU WEB
case 'webp17' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "kuotagratis111" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("__Proses Sabar Deck Jeda 2 Menit_")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apiii-qrizku.x-vip.my.id/api-web/kuotagratis/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apiii-qrizku.x-vip.my.id/api-web/kuotagratis/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`*Sukses, Web Sudah Terkirim Ke_*${pushname}*_`, idmu)
                    }


                    hasillrndy = `Ini Web Nya Om *${pushname}*🤤
==========================
*➢ Website :*
${pendek}
==========================
*➢ Web Setting :*
${domain}/vhsfhqpdhdsih6/host.php
==========================
*➢ Gc Create Webp*
https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx
==========================
*➢ Sewa Bot Web*
https://wa.me/6285795799447
==========================

Tunggu 1-3 Menit Agar Web Bisa Di Gunakan`

                    kirimprib(`Hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_*GAGAL COBA LAGI DALAM 5 MENIT*_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("MAU NGAPAIN? MASUK:https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx")
        }
break
case 'grup':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (args.length < 1) return reply("silahkan pilih grup open/close")
if (args[0] === 'open'){ await semar.groupSettingUpdate(from, 'not_announcement')
} else if (args[0] === 'close'){ await semar.groupSettingUpdate(from, 'announcement')} else { reply('yang bener lah pantek')}
break

case 'kick':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
remove = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [remove], "remove")
break

case 'promote':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
promote = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [promote], "promote")
reply('Done!')
break

case 'demote':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
demote = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [demote], "demote")
reply('Done!')
break

case 'leave':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
await semar.groupLeave(from)
break

case 'delete': case 'd': case 'del':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
semar.sendMessage(from, { delete: { id: msg.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }})
break
case 'bahanyt':
        id = msg.key.remoteJid
        if(validGrup(id,grups)){
                bahanyt =`
*AWKKAWOK GABISA NEBAR DEK? NIH BAHANNYA MEMEKKKK!!!!*

_BAHAN NEBAR YT_
*_©Hydickyy Nesia_*

- JUDUL

VIRAL LINK MEDIAFIRE📌📌- Link MediaFire Viral Terbaru 2023 hari ini🤩KUMPULAN VIDEO VIRAL‼️#trending

- HT

ENJOY FOR VIDEO
JANGAN LUPA SUBSCRIBE BIAR BISA UPLOAD LAGI GUYSS 😖

Link Pin Komentar‼️

#mediafire
#linkmediafirebaru
#linkmediafireviral 
#chikaviral 
#chika20jt
#chikatiktok 
#viraltiktok 
#viral 
nl#viralvideo 
#viralshorts
Link 📌: (bayar pake like) #virallinkmediafire #linkmediafire #ng3n Tag:link tiktol viral, link tiktol viral mediafire, tiktol, viral link terbaru, tiktol viral link deskripsi, link tiktol viral 41 detik, link tiktol download mediafıre, tiktol viral link telegram, link viral artis 2022, link viral tik tok animasi, link viral dokter, video tiktok viral prot prot, link dj tiktok viral 2021, link domino, dj tiktok viral, link dj titkok terbaru viral, viral tiktok 2022 link mediafire, viral tiktok, link mediafire ff, tiktok viral ff link, viral link tiktok mediafire, adik dan kaka viral tiktok, video viral link mediafire, link media fire ids vanny, link link media fire virall jepang, link media fire viral colm3k

- TEKS BUAT SHARE" DI VIDEO/LADANG ORANG BIAR VIEW DERES

[ tempelin link yt ladang mu ] viral adek kaka🤤
23:23 Hermosa elección 10:10 hopi:"sweeter"11:12 sun:"hooter" 00:18 jooine:"cooler" 18:00yongy:*Butter" 23:23 son Uno's de Los memories conciertos`
                reply(bahanyt)


        }else{
            reply("Grup Tidak Terdaftar Silahkan Hubungi Owner Ku Untuk Sewa")
        }
    break
case 'bahantwit':
id = msg.key.remoteJid
        if(validGrup(id,grups)){
 bahantwit =`
*AWOKAWOK GABISA NEBAR DEK? NIH BAHAN NYA KONTOL!!!*

 _BAHAN NEBAR TWITTER_
*_©Hydickyy Nesia_*
 
 HT TWITTER 

Yg lagi viral Biadab Artis Anissa Aziza
Terekam cctv  di mall selingkuh 

Scandal viral  terbaru VCS
malam sabtu bokep indo terbaru
#JanganLupaNgeDOT
#SANGE_AAAAAAAAAAH
#SANGE_AAAAAAAAAA`
reply(bahantwit)

        }else{
            reply("MAU NGAPAIN? MASUK:https://chat.whatsapp.com/LLbdU0cma9E5Jg9hkvXifx")
        }

break
case 'restart':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
exec(`pm2 restart index`, (error, stdout, stderr) => {
    reply("BERHASIL RESTART ULANG")
    reply(stdout)
})
break
case 'shutdown':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
exec(`pm2 kill`, (error, stdout, stderr) => { reply(stdout)})
break
default:
}} catch (e) {
console.log(e)
}
}