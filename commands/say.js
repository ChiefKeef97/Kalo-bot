const mappings = (function (object) {
    let output = [];

    for (let key in object) {
        output.push({
            regex: new RegExp(key, 'ig'),
            replacement: object[key]
        });
    }

    return output;
})({
    a: '\u1D00',
    b: '\u0299',
    c: '\u1D04',
    d: '\u1D05',
    e: '\u1D07',
    f: '\uA730',
    g: '\u0262',
    h: '\u029C',
    i: '\u026A',
    j: '\u1D0A',
    k: '\u1D0B',
    l: '\u029F',
    m: '\u1D0D',
    n: '\u0274',
    o: '\u1D0F',
    p: '\u1D18',
    q: '\u01EB',
    r: '\u0280',
    s: '\uA731',
    t: '\u1D1B',
    u: '\u1D1C',
    v: '\u1D20',
    w: '\u1D21',
    x: '\u0078',//this one needs fixed to something smaller but not lowercase
    y: '\u028F',
    z: '\u1D22'
});

module.exports.run = (client, message, args) => {
    if (args.length < 1) {
        throw 'You must provide some text to shrink!';
    }

    let output = args.join(' ');
    mappings.forEach(replacer => output = output.replace(replacer.regex, replacer.replacement));
    
  if(message.author.id == process.env.RAL || message.author.id == process.env.FREAK)
    message.channel.send(output);
  message.delete()
};

exports.conf = {
aliases: ['say', 'speak']
};

exports.help = {
name: 'say',
description: 'Say Command for Ralston & Freak', 
usage: `${process.env.PREFIX}say <text> `
};