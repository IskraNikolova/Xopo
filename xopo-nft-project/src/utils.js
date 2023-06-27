const MD5 = makeMD5()
/**
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
*/
export function makeMD5 () {
  /*
  * Calculate the MD5 of an array of little-endian words, and a bit length
  */
  function coreMd5 (x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << ((len) % 32)
    x[(((len + 64) >>> 9) << 4) + 14] = len

    let a = 1732584193
    let b = -271733879
    let c = -1732584194
    let d = 271733878

    for (let i = 0; i < x.length; i += 16) {
      const olda = a
      const oldb = b
      const oldc = c
      const oldd = d

      a = md5Ff(a, b, c, d, x[i + 0], 7, -680876936)
      d = md5Ff(d, a, b, c, x[i + 1], 12, -389564586)
      c = md5Ff(c, d, a, b, x[i + 2], 17, 606105819)
      b = md5Ff(b, c, d, a, x[i + 3], 22, -1044525330)
      a = md5Ff(a, b, c, d, x[i + 4], 7, -176418897)
      d = md5Ff(d, a, b, c, x[i + 5], 12, 1200080426)
      c = md5Ff(c, d, a, b, x[i + 6], 17, -1473231341)
      b = md5Ff(b, c, d, a, x[i + 7], 22, -45705983)
      a = md5Ff(a, b, c, d, x[i + 8], 7, 1770035416)
      d = md5Ff(d, a, b, c, x[i + 9], 12, -1958414417)
      c = md5Ff(c, d, a, b, x[i + 10], 17, -42063)
      b = md5Ff(b, c, d, a, x[i + 11], 22, -1990404162)
      a = md5Ff(a, b, c, d, x[i + 12], 7, 1804603682)
      d = md5Ff(d, a, b, c, x[i + 13], 12, -40341101)
      c = md5Ff(c, d, a, b, x[i + 14], 17, -1502002290)
      b = md5Ff(b, c, d, a, x[i + 15], 22, 1236535329)

      a = md5Gg(a, b, c, d, x[i + 1], 5, -165796510)
      d = md5Gg(d, a, b, c, x[i + 6], 9, -1069501632)
      c = md5Gg(c, d, a, b, x[i + 11], 14, 643717713)
      b = md5Gg(b, c, d, a, x[i + 0], 20, -373897302)
      a = md5Gg(a, b, c, d, x[i + 5], 5, -701558691)
      d = md5Gg(d, a, b, c, x[i + 10], 9, 38016083)
      c = md5Gg(c, d, a, b, x[i + 15], 14, -660478335)
      b = md5Gg(b, c, d, a, x[i + 4], 20, -405537848)
      a = md5Gg(a, b, c, d, x[i + 9], 5, 568446438)
      d = md5Gg(d, a, b, c, x[i + 14], 9, -1019803690)
      c = md5Gg(c, d, a, b, x[i + 3], 14, -187363961)
      b = md5Gg(b, c, d, a, x[i + 8], 20, 1163531501)
      a = md5Gg(a, b, c, d, x[i + 13], 5, -1444681467)
      d = md5Gg(d, a, b, c, x[i + 2], 9, -51403784)
      c = md5Gg(c, d, a, b, x[i + 7], 14, 1735328473)
      b = md5Gg(b, c, d, a, x[i + 12], 20, -1926607734)

      a = md5Hh(a, b, c, d, x[i + 5], 4, -378558)
      d = md5Hh(d, a, b, c, x[i + 8], 11, -2022574463)
      c = md5Hh(c, d, a, b, x[i + 11], 16, 1839030562)
      b = md5Hh(b, c, d, a, x[i + 14], 23, -35309556)
      a = md5Hh(a, b, c, d, x[i + 1], 4, -1530992060)
      d = md5Hh(d, a, b, c, x[i + 4], 11, 1272893353)
      c = md5Hh(c, d, a, b, x[i + 7], 16, -155497632)
      b = md5Hh(b, c, d, a, x[i + 10], 23, -1094730640)
      a = md5Hh(a, b, c, d, x[i + 13], 4, 681279174)
      d = md5Hh(d, a, b, c, x[i + 0], 11, -358537222)
      c = md5Hh(c, d, a, b, x[i + 3], 16, -722521979)
      b = md5Hh(b, c, d, a, x[i + 6], 23, 76029189)
      a = md5Hh(a, b, c, d, x[i + 9], 4, -640364487)
      d = md5Hh(d, a, b, c, x[i + 12], 11, -421815835)
      c = md5Hh(c, d, a, b, x[i + 15], 16, 530742520)
      b = md5Hh(b, c, d, a, x[i + 2], 23, -995338651)

      a = md5Ii(a, b, c, d, x[i + 0], 6, -198630844)
      d = md5Ii(d, a, b, c, x[i + 7], 10, 1126891415)
      c = md5Ii(c, d, a, b, x[i + 14], 15, -1416354905)
      b = md5Ii(b, c, d, a, x[i + 5], 21, -57434055)
      a = md5Ii(a, b, c, d, x[i + 12], 6, 1700485571)
      d = md5Ii(d, a, b, c, x[i + 3], 10, -1894986606)
      c = md5Ii(c, d, a, b, x[i + 10], 15, -1051523)
      b = md5Ii(b, c, d, a, x[i + 1], 21, -2054922799)
      a = md5Ii(a, b, c, d, x[i + 8], 6, 1873313359)
      d = md5Ii(d, a, b, c, x[i + 15], 10, -30611744)
      c = md5Ii(c, d, a, b, x[i + 6], 15, -1560198380)
      b = md5Ii(b, c, d, a, x[i + 13], 21, 1309151649)
      a = md5Ii(a, b, c, d, x[i + 4], 6, -145523070)
      d = md5Ii(d, a, b, c, x[i + 11], 10, -1120210379)
      c = md5Ii(c, d, a, b, x[i + 2], 15, 718787259)
      b = md5Ii(b, c, d, a, x[i + 9], 21, -343485551)

      a = safeAdd(a, olda)
      b = safeAdd(b, oldb)
      c = safeAdd(c, oldc)
      d = safeAdd(d, oldd)
    }
    return [a, b, c, d]
  }

  /*
  * These functions implement the four basic operations the algorithm uses.
  */
  function md5Cmn (q, a, b, x, s, t) {
    return safeAdd(bitRol(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b)
  }
  function md5Ff (a, b, c, d, x, s, t) {
    return md5Cmn((b & c) | ((~b) & d), a, b, x, s, t)
  }
  function md5Gg (a, b, c, d, x, s, t) {
    return md5Cmn((b & d) | (c & (~d)), a, b, x, s, t)
  }
  function md5Hh (a, b, c, d, x, s, t) {
    return md5Cmn(b ^ c ^ d, a, b, x, s, t)
  }
  function md5Ii (a, b, c, d, x, s, t) {
    return md5Cmn(c ^ (b | (~d)), a, b, x, s, t)
  }

  /*
  * Calculate the HMAC-MD5, of a key and some data
  */
  function coreHmacMd5 (key, data) {
    let bkey = str2binl(key)
    if (bkey.length > 16) bkey = coreMd5(bkey, key.length * MD5.chrsz)

    const ipad = [], opad = []
    for (let i = 0; i < 16; i++) {
      ipad[i] = bkey[i] ^ 0x36363636
      opad[i] = bkey[i] ^ 0x5C5C5C5C
    }

    const hash = coreMd5(ipad.concat(str2binl(data)), 512 + data.length * MD5.chrsz)
    return coreMd5(opad.concat(hash), 512 + 128)
  }

  /*
  * Add integers, wrapping at 2^32. This uses 16-bit operations internally
  * to work around bugs in some JS interpreters.
  */
  function safeAdd (x, y) {
    const lsw = (x & 0xFFFF) + (y & 0xFFFF)
    const msw = (x >> 16) + (y >> 16) + (lsw >> 16)
    return (msw << 16) | (lsw & 0xFFFF)
  }

  /*
  * Bitwise rotate a 32-bit number to the left.
  */
  function bitRol (num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt))
  }

  /*
  * Convert a string to an array of little-endian words
  * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
  */
  function str2binl (str) {
    const bin = [], chrsz = MD5.chrsz
    const mask = (1 << chrsz) - 1
    for (let i = 0; i < str.length * chrsz; i += chrsz) {
      bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32)
    }
    return bin
  }

  /*
  * Convert an array of little-endian words to a string
  */
  function binl2str (bin) {
    let str = ''
    const chrsz = MD5.chrsz
    const mask = (1 << chrsz) - 1
    for (let i = 0; i < bin.length * 32; i += chrsz) {
      str += String.fromCharCode((bin[i >> 5] >>> (i % 32)) & mask)
    }
    return str
  }

  /*
  * Convert an array of little-endian words to a hex string.
  */
  function binl2hex (binarray) {
    const hexTab = MD5.hexcase ? '0123456789ABCDEF' : '0123456789abcdef'
    let str = ''
    for (let i = 0; i < binarray.length * 4; i++) {
      str += hexTab.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF) +
            hexTab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF)
    }
    return str
  }

  /*
  * Convert an array of little-endian words to a base-64 string
  */
  function binl2b64 (binarray) {
    const tab = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    let str = ''
    for (let i = 0; i < binarray.length * 4; i += 3) {
      const triplet = (((binarray[i >> 2] >> 8 * (i % 4)) & 0xFF) << 16) |
        (((binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4)) & 0xFF) << 8) |
        ((binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4)) & 0xFF)
      for (let j = 0; j < 4; j++) {
        if (i * 8 + j * 6 > binarray.length * 32) str += MD5.b64pad
        else str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F)
      }
    }
    return str
  }

  return {
    /*
    * Configurable variables. You may need to tweak these to be compatible with
    * the server-side, but the defaults work in most cases.
    */
    hexcase: 0, // hex output format. 0 - lowercase; 1 - uppercase
    b64pad: '', // base-64 pad character. "=" for strict RFC compliance
    chrsz: 8, // bits per input character. 8 - ASCII; 16 - Unicode

    /*
    * These are the functions you'll usually want to call
    * They take string arguments and return either hex or base-64 encoded strings
    */
    hex: function (s) {
      return binl2hex(coreMd5(str2binl(s), s.length * MD5.chrsz))
    },

    base64: function (s) {
      return binl2b64(coreMd5(str2binl(s), s.length * MD5.chrsz))
    },

    string: function (s) {
      return binl2str(coreMd5(str2binl(s), s.length * MD5.chrsz))
    },

    hmac: {
      hex: function (key, data) {
        return binl2hex(coreHmacMd5(key, data))
      },

      base64: function (key, data) {
        return binl2b64(coreHmacMd5(key, data))
      },

      string: function (key, data) {
        return binl2str(coreHmacMd5(key, data))
      }
    },

    test: function () { // Perform a simple self-test to see if the VM is working
      return this.hex('abc') === '900150983cd24fb0d6963f7d28e17f72'
    }
  }
}

export function getAvatar (id) {
  const Md5 = makeMD5()
  const hash = Md5.hex(id)
  return {
    monster: `https://www.gravatar.com/avatar/${hash}?d=monsterid&s=150`,
    avatar: `https://www.gravatar.com/avatar/${hash}?d=identicon&s=150`
  }
}

export const c = {
  // enpoints
  cChainWs: 'ext/C/ws',

  // EVM API
  evm: (id) => `ext/bc/${id}/rpc`,
  ethBlockNumber: 'eth_blockNumber',
  ethChainID: 'eth_chainId',
  ethNetVersion: 'net_version',
  ethGetBalance: 'eth_getBalance',
  paramsForBalance: (address) => [
    address,
    'latest'
    // 'AVAX'
  ],

  jsonrpc: '2.0',
  contentTypeValue: 'application/json',
  contentTypeHeader: 'content-type',
  cacheControlValue: 'no-cache',
  cacheControlHeader: 'cache-control',

  // Welcome page

  // Roadmap
  eras: [{
    text: `DaVinci Dawn (Welcome): This marks the inauguration of our project, setting the stage for the journey ahead. The dawn begins with the creation of an inviting and aesthetically appealing welcome page. Just like Leonardo Da Vinci's paintings that leave a powerful first impression, our goal is to captivate potential users right from their first encounter.
        We strive to make our welcome page not only a gateway to our project but also a representation of what we stand for. It will provide an intuitive introduction to our project, its goals, and how users can be part of this transformative journey. Key features, benefits, and a preview of what's to come will all be artistically woven into this introduction, painting a clear and enticing picture of our project to every visitor.
        The DaVinci Dawn is not just the beginning of our project; it's the first brush stroke on a canvas yet to be filled with innovation, collaboration, and a shared love for art. We believe in making powerful first impressions, and our DaVinci Dawn aims to do just that.
      `,
    title: 'DaVinci Dawn (Welcome)',
    subTitle: 'Starting with the creation of the welcoming page to introduce the project to potential users.'
  }, {
    text: ` Picasso Beta (Beta): Much like Pablo Picasso, who constantly pushed the boundaries of art with his pioneering spirit, we set out to innovate with the development of our beta dApp.

      This phase entails constructing a comprehensive and user-friendly digital platform that stands as a testament to the creativity we wish to foster. The Picasso Beta phase signifies more than just technological advancement—it embodies our commitment to creating an accessible and inclusive space for artists and art enthusiasts alike.
    
      The heart of the Picasso Beta dApp lies in its multi-faceted capabilities.  User portfolios serve as personal galleries, an elegant digital space where artists can curate and highlight their works.
    
      Furthermore, each artist gets their own individual collection page, providing a focused platform for their creativity. This allows artists to present their works coherently, effectively telling their artistic story to the audience.
    
      The Picasso Beta is not just about building an app; it's about creating a digital canvas where art meets technology, a space that nurtures creativity and paves the way for the artists of the digital age.
    `,
    title: 'Picasso Beta (Beta)',
    subTitle: 'Development of the beta version of the dApp, which includes user portfolios, and pages for each artist\'s collection and minting capabilities'
  }, {
    text: `Warhol Bazaar (Marketplace): Taking inspiration from Andy Warhol, an artist known for challenging traditional boundaries and commercializing art, we embark on the creation of our vibrant marketplace. This isn't just a place for transactions - it's a thriving hub of creativity, exchange, and discovery.
      The Warhol Bazaar is dedicated to developing an intuitive, accessible, and engaging marketplace, where each interaction is as unique as the art it revolves around. This marketplace will not only be a platform for artists to monetize their creativity but also a conduit for art lovers to explore, connect with creators, and acquire pieces that resonate with them.
      Drawing upon Warhol's belief in the artistic value of everyday objects, our marketplace will celebrate art in all its forms, and every transaction will be a nod to the intrinsic value of creativity. This isn't just a marketplace; it's a crossroads where creators and admirers converge, contributing to the dynamic and constantly evolving tapestry of the art world. The Warhol Bazaar, with its pulsating energy, mirrors the excitement and unpredictability of a bustling art market, creating a vibrant and dynamic space that fuels and fosters creativity.
    `,
    title: 'Warhol Bazaar (Marketplace)',
    subTitle: 'This era is dedicated to the development of an inclusive and dynamic marketplace, fostering a space for artists to monetize their creativity and art enthusiasts to discover and acquire unique pieces…'
  }, {
    text: ` Hokusai Governance (Tokens and DAO): Drawing inspiration from Katsushika Hokusai, an artist renowned for his diverse and innovative works, we venture into the creation of our project's lifeblood - the $XOPO and $JTX tokens and our own Decentralized Autonomous Organization (DAO).

      The Hokusai Governance era is a significant step towards democratizing decision-making within our project, much like Hokusai democratized ukiyo-e art by making it accessible to the masses. This is where we transition from a centralized framework to a more community-oriented model, enabling stakeholders to have a direct say in the project's future direction.
    
      The creation of the $XOPO and $JTX tokens is not merely a technical process; it represents our commitment to building an inclusive and participatory project. These tokens are the currency of influence within our ecosystem, enabling token holders to influence decisions, propose changes, and play an active role in shaping the project's journey.
    
      Our DAO is designed to be the project's governing body, a digital roundtable where every stakeholder can contribute. It reflects our belief in collective wisdom and the power of decentralized decision-making. By placing control in the hands of the community, we aim to ensure our project evolves in a way that reflects the needs, wishes, and creative spirit of those it serves.
    
      The Hokusai Governance era marks our project's shift towards a decentralized, participatory model, a crucial stage that underscores our commitment to creating a project by the community, for the community. It's more than creating a token or a DAO; it's about creating a culture of shared ownership, collaboration, and creative freedom.
    `,
    title: 'Hokusai Governance (Tokens and DAO)',
    subTitle: 'Creation of the $XOPO and $JTX token and DAO, implementing a governance system for community-driven decision-making.'
  }, {
    text: `O'Keeffe Stake (Staking and Mining): Named after Georgia O'Keeffe, an artist known for her innovative and independent spirit, this era introduces the concepts of staking and mining to our project. Much like O'Keeffe's art, which represents the boldness of individual expression, the O'Keeffe Stake era is about empowering users to actively participate in our project's growth and direction.

      The process of staking $XOPO tokens embodies our aim to foster a committed community. By staking their tokens, users signal their confidence in our project's vision, while also gaining the opportunity to influence its trajectory.
    
      The introduction of $XOPO staking also adds a new dynamic to our NFT ecosystem. Users will be able to mine $XOPO tokens as they create and engage with NFTs on our platform. This adds another layer of value to the creative process, giving artists and users more ways to benefit from their participation in our community.
    
      Mining $JTX, on the other hand, provides users with a direct voice in the project's governance. With $JTX tokens, users can vote on various proposals and decisions, truly making our project a community-driven endeavor. This democratic approach ensures that the evolution of our project reflects the collective will of its participants.
    
      In essence, the O'Keeffe Stake era represents a significant step towards decentralization. It is not just about introducing new ways for users to engage with our project; it's about establishing a system that rewards active participation, promotes democratic governance, and builds a strong, committed community around our shared passion for art.
    `,
    title: 'O\'Keeffe Stake (Staking and Mining)',
    subTitle: 'Introduction of staking for $XOPO and mining of $JTX to enable users to become part of the DAO.'
  }, {
    text: ` Michelangelo Airdrop (Airdrop): This era draws its name from Michelangelo, one of history's most influential artists, renowned for his meticulous attention to detail and generous contribution to art. Just as Michelangelo's masterpieces, from the Sistine Chapel to the statue of David, were generous gifts to humanity, the Michelangelo Airdrop represents our token of gratitude to our early adopters.
      The Airdrop era is all about recognizing and rewarding the members of our community who have actively engaged with our platform from the very beginning. These early adopters have minted NFTs on our platform, contributing to the vibrant tapestry of creativity that we aim to foster. By airdropping $XOPO tokens to these users, we express our appreciation for their support and engagement.
      The Michelangelo Airdrop isn't simply a distribution of tokens; it's a celebration of the pioneering spirit of our community. By rewarding our early adopters, we encourage others to join us in our journey of transforming the art world. The Airdrop doesn't just provide tangible benefits; it cultivates a sense of belonging and appreciation within our community.
      The significance of this era extends beyond the immediate benefits it provides. Much like Michelangelo's art, which continues to inspire millions around the world, the Michelangelo Airdrop sets a precedent for how we value and reward our community members, establishing a culture of appreciation that we hope will inspire continued engagement and innovation within our platform.
    `,
    title: 'Michelangelo Airdrop (Airdrop)',
    subTitle: 'Distributing an $XOPO as an airdrop to all users who have minted NFTs thus far.'
  }, {
    text: `Kahlo Portal (Artist Portal): The Kahlo Portal era, named after the iconic Frida Kahlo, represents a significant milestone in our journey. Frida Kahlo was a self-made artist, known for her profound and personal works that spoke to the human experience. In the same spirit, the Kahlo Portal era is all about empowering artists by giving them the opportunity to apply and become part of our growing community.
      The launch of the artist portal marks a pivotal moment where we open our doors wide to the world's creative minds. This platform is designed to be more than just an application system. It serves as a bridge, connecting artists from all corners of the globe to our community. It's a digital beacon, signaling our project's commitment to fostering diverse artistic voices.
      With the Kahlo Portal, artists can submit their applications to participate in our project and create their own NFT collections. The process is designed to be as inclusive and accessible as possible, mirroring Kahlo's commitment to expressing authentic personal experiences.
      But the significance of the Kahlo Portal goes beyond the technical aspects of launching a new feature. It represents the embodiment of our core values - inclusivity, creativity, and empowerment. Just as Frida Kahlo's art celebrated individuality, the Kahlo Portal welcomes artists in all their uniqueness, inviting them to share their artistic narratives with the world through NFTs.
      In essence, the Kahlo Portal era is about making our platform a global stage for artists, a place where they can express themselves freely and contribute to the evolving narrative of digital art. It's about transforming our project into a worldwide art forum, where every artist, no matter their background or style, can find a welcoming and supportive community.
    `,
    title: 'Kahlo Portal (Artist Portal)',
    subTitle: 'Launch of an artist portal where artists can submit applications to participate in the project and create their own NFT collections.'
  }, {
    text: `Matisse Lottery (Voting and Raffle): Named after the influential artist Henri Matisse, known for his innovative use of color and form, this era seeks to bring a similar sense of creativity, innovation, and vibrancy to our community.
      The Matisse Lottery era is a significant step in promoting active community participation, introducing the voting process for the DAO, and holding a raffle for users who have minted NFTs. In this era, the community transcends the boundaries of the digital realm, marrying the virtual and physical worlds of art.
      The DAO voting process democratizes the direction of our project, allowing community members to voice their opinions, propose changes, and collectively shape the future of our platform. This represents a fundamental principle of a DAO - a project truly guided by the will of its community.
      Alongside the implementation of DAO voting, we're also holding a unique raffle, where those who have minted NFTs stand a chance to win physical manifestations of NFT art. This isn't just a lottery; it's a celebration of art that transcends the digital realm, a revolutionary concept that offers tangible ownership of digital creations.
      These tangible rewards bring a new dimension to the NFT art experience. They make the connection between the digital and physical art world more palpable, turning the abstract into the concrete. It's not just about owning a digital asset, but also about the joy of holding a piece of art in your hands, experiencing its physical presence.
      In essence, the Matisse Lottery era is about engagement, excitement, and a celebration of art in its many forms. It's an era that embodies Matisse's innovative spirit, creating a vibrant and dynamic phase in our project's evolution.
    `,
    title: 'Matisse Lottery (Voting and Raffle)',
    subTitle: 'Initiation of the voting process for the DAO and holding a raffle for users who have minted NFTs.'
  }, {
    text: `Van Gogh Integration (Integration): The Van Gogh Integration era, named after the legendary artist Vincent Van Gogh, is dedicated to expanding our ecosystem's inclusivity and user-friendliness. Van Gogh was an artist who passionately explored new techniques and styles throughout his career, always pushing boundaries. In this era, we emulate Van Gogh's spirit of innovation by integrating additional features and expanding options for our users.
      One of the most significant enhancements of this era is the addition of more wallet options for user connection. Until now, our platform has primarily been connected with Metamask, but we understand that our community uses a wide array of digital wallets. By expanding our compatibility with other popular wallets, we are breaking down barriers, allowing more users to participate in our community with the wallets they are familiar and comfortable with. This initiative reflects our commitment to creating a versatile and accessible platform that caters to the diverse needs of our growing community.
      In addition to expanding our wallet connections, we are also enhancing our user profile pages with more customization options. By doing this, we aim to provide our users with a more personalized, engaging, and satisfying experience on our platform. Whether it's about showcasing their NFT collections, sharing their artistic journey, or expressing their identity, the enhanced profile customization offers our users more ways to make their presence unique and personal.
      In essence, the Van Gogh Integration era is about innovation, accessibility, and personalization. Just like Van Gogh never ceased to experiment with his art, we continue to evolve our platform, pushing the boundaries of what's possible, and striving to create a more inclusive, interactive, and personalized experience for all our users.
    `,
    title: 'Van Gogh Integration (Integration)',
    subTitle: 'Addition of more wallet options for user connection and enhancement of user profile     pages with more customization options.'
  }, {
    text: `Kandinsky Legacy (Sponsorship and Commemoration): The Kandinsky Legacy era, named after the innovative abstract artist Wassily Kandinsky, who believed in the profound emotional power of art, marks a pivotal moment in our project’s trajectory. This era is dedicated to leveraging the power of our community and our platform to give back and make a difference.
      During this era, we will create commemorative collections that go beyond mere celebration of our journey. These collections will serve a dual purpose - they will stand as symbols of our collective achievement and growth, but more importantly, they will also sponsor different causes, reflecting our commitment to social responsibility.
      Our project has always been about more than just art and technology - it's about people, communities, and the world we live in. Through these sponsored collections, we're demonstrating our commitment to use our platform not just to change how art is created, collected, and appreciated, but also to contribute to the betterment of society.
      But it's not just about us deciding what causes to support - we want our community to be actively involved in these decisions. Therefore, we're also initiating a voting system for users to choose which causes will be sponsored by our commemorative collections. It's a democratic process that ensures that our efforts are directed towards causes that our community truly cares about.
      In essence, the Kandinsky Legacy era is about embodying the same spirit of creativity and emotional depth that Kandinsky brought to his art, but with an added dimension of social responsibility. It's about using art to connect, to inspire, and to make a tangible difference in the world. This era encapsulates our vision of what the future of art can be - a tool for change, a catalyst for good, and a legacy that we all can be proud of.
    `,
    title: 'Kandinsky Legacy (Sponsorship and Commemoration)',
    subTitle: 'Creation of commemorative collections that sponsor different causes and initiation of a voting system for users to choose sponsored causes.'
  }]
}

export function round (num, prec) {
  const multiplier = Math.pow(prec, 1 || 0)
  return Math.round((Number(num) + Number.EPSILON) * multiplier) / multiplier
}

/**
* Performs a deep merge of objects and returns new object. Does not modify
* objects (immutable) and merges arrays via concatenation.
*
* @param {...object} objects - Objects to merge
* @returns {object} New object with merged key/values
*/
export function deepMerge (...objects) {
  if (JSON.stringify(objects[0]) === JSON.stringify(objects[1])) return objects[0]
  if (typeof objects[0] === 'string' || typeof objects[1] === 'string') return undefined

  const isObject = obj => obj && typeof obj === 'object'

  try {
    return objects.reduce((prev, obj) => {
      Object.keys(obj).forEach(key => {
        if (Array.isArray(prev[key]) && Array.isArray(obj[key])) {
          prev[key] = prev[key].concat(...obj[key])
        } else if (isObject(prev[key]) && isObject(obj[key])) {
          prev[key] = deepMerge(prev[key], obj[key])
        } else {
          prev[key] = obj[key]
        }
      })
      return prev
    }, {})
  } catch (err) {
    return undefined
  }
}
