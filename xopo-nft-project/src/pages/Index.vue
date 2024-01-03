<template>
  <div>
    <q-header class="header1 text-bold" reveal v-if="isSecond">
      <q-toolbar class="gt-sm">
        <q-toolbar-title class="q-ml-md">
            <q-avatar class="text-light q-ml-sm" >
            <img src="~assets/logos/three_logo.svg" style="width: 45px;" />
            </q-avatar>
            <span class="q-ml-sm text-princess">Xopo </span><span> Awaits</span>
        </q-toolbar-title>
        <q-tabs v-model="tab" indicator-color="transparent" active-color="grey" class="text-regular my-tabs q-mr-md">
            <q-tab name="tab1" label="Welcome" @click="goToWelcome()" />
            <q-tab name="tab4" label="First Collection" @click="goToKoloda()" />
            <q-tab name="tab4" label="Roadmap" @click="goToRoadmap()" />
            <q-tab name="tab4" label="Теам" @click="goToTeam()" />
            <q-tab name="tab4" label="$XOPO" @click="goToToken()" />
            <q-tab name="tab5" class="text-orange" label="Create your own NFTs" @click="goToCreateNFTs()" />
        </q-tabs>
      </q-toolbar>
      <q-toolbar class="lt-md">
        <q-toolbar-title class="q-ml-md">
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
            <q-avatar class="text-light q-ml-sm" >
            <img src="~assets/logos/three_logo.svg" style="width: 45px;" />
            </q-avatar>
            <span class="q-ml-sm text-princess">Xopo </span><span> Awaits</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page class="flex flex-center bodyt">
      <div class="text-center text container">
        <div v-if="isFirst">
          <div class="text-princess text-h3 joinT">Join The</div>
          <q-img class="j-logo q-mb-xl" src="~assets/logos/horo_logo.svg" />
        </div>
        <q-img class="logo" src="~assets/logos/lp_bg.svg" />
        <q-layout @scroll="scrollHandler">
          <div v-if="isFirst">
            <p class="text-regular q-mb-xl first-p">
              We're crafting a worldwide platform for creatives of all kinds, with
            </p>
            <div
              class="text-montserrat-bold second-p"
            >
              <span class="nft-text">NFTs</span> as Our Canvas
            </div>
            <p class="text-uppercase text-bold third-p">
              Decentralized hub for artists, developers, and free speech enthusiasts.
            </p>
            <q-img src="~assets/icons/mouse.svg" class="mouse" />
          </div>
          <div v-else>
          <p class="text-regular first-p">
            We're crafting a worldwide platform for creatives of all kinds, with
          </p>
          <div class="text-montserrat-bold second-p">
            <span class="nft-text">NFTs</span> as <img src="~assets/logos/three_logo.svg" class="small-logo q-mb-sm" />ur Canvas
          </div>
          <p
            class="text-uppercase text-bold third-p">
            Decentralized hub for artists, developers, and free speech enthusiasts.
          </p>
          <div class="q-mt-md q-mb-md">
            <a
              class="q-mr-xs"
              tag="a"
              href="https://discord.gg/q8KvRKtXHw"
              target="_blank"
            >
              <q-img src="~assets/icons/media/discord_i.svg" class="media" />
            </a>
            <a
              class="q-mr-xs"
              tag="a"
              href="https://twitter.com/XopoNft"
              target="_blank"
            >
              <q-img src="~assets/icons/media/twiter_i.svg"  class="media" />
            </a>
            <a
              class="q-mr-xs"
              tag="a"
              href="https://www.instagram.com/xoponft"
              target="_blank"
            >
              <q-img src="~assets/icons/media/instagram_i.svg" class="media" />
            </a>
            <a
              class="q-mr-xs"
              tag="a"
              href="https://t.me/xoponft"
              target="_blank"
            >
              <q-img src="~assets/icons/media/telegram_i.svg" class="media" />
            </a>
            <a
              class="q-mr-xs"
              tag="a"
              href="https://medium.com/@XoroNft"
              target="_blank"
            >
              <q-img src="~assets/icons/media/medium_i.svg" class="media" />
            </a>
            <a
              class="q-mr-xs"
              tag="a"
              href="https://github.com/IskraNikolova/Xopo"
              target="_blank"
            >
              <q-img src="~assets/icons/media/github_i.svg" class="media" />
            </a>
          </div>
          <div class="wrapAnime">
              <div class="row anime">
                <span class="anime1 background-image-fullsize"></span>
                <span class="anime2"></span>
                <span class="anime3 background-image-fullsize"></span>
                <span class="anime4 background-image-fullsize"></span>
                <span class="anime5"></span>
            </div>
          </div>
          <div class="first-text" id="paragraph1">
            <p class="title welcomeT text-uppercase text-bold">Priceless Creations in the Digital Age </p>
            <p class="subTitle">Welcome to <span class="text-bold">"Join The Xopo"</span>, the Ultimate Platform for NFT Creation and Artistic Empowerment</p>
            <div class="paragraph wp parent-paragraph">
              <div class="p"><p>In today's digital age, the world of art is constantly evolving. As an artist, it can be a challenge to break through the noise and gain recognition for your work. That's where <span class="text-bold">"Join The Xopo"</span> comes in - we're the ultimate platform for NFT creation, empowering artists to unlock the full potential of their masterpieces and take their creations to new heights.</p></div>
              <div class="p">Our team of NFT experts and talented artists work together to transform your artwork into non-fungible tokens, giving it a unique value and making it more accessible to a wider audience. But <span class="text-bold">"Join The Xopo"</span> is more than just a marketplace - it's a decentralized hub for artists, developers, and free speech enthusiasts. We're here to empower you, fuel your passion, and help you forge connections in the world of digital art.</div>
              <div class="p">
                <p>With our expert guidance and unwavering support, you'll be able to convert your art into NFTs and redefine the way the world views and appreciates digital art. <span class="text-bold">So what are you waiting for?</span> Join the <span class="text-bold">"Join The Xopo"</span> movement today and unlock new realms of artistic expression. Welcome to the world of NFTs - welcome to <span class="text-bold">"Join The Xopo"</span></p>
                <a
                  tag="a"
                  href="https://medium.com/@XoroNft/how-to-become-a-wealthy-and-recognized-artist-in-todays-world-d207a36b8f2f"
                  target="_blank"
                  v-html="'Read More'"
                  class="a-button"
                ></a>
              </div>
            </div>
          </div>
          <div class="second-text gt-sm">
            <div class="row paragraph wp" id="paragraph2" style="margin-top: 12%">
              <div class="col q-pl-xl">
                <p class="text-uppercase text-bold text-h5">Xopo's First Own Collection: "Koloda"</p>
                <p class="text-h6">Minted on Avalanche, our first NFT collection will feature 85 stunning paintings<span class="text-bold"> by Bulgarian artist Miroslav Mihov (Eternal Mirror)</span>. 'Koloda' - original works of art created between 2014 and 2022 using oil paints on canvas, watercolors, and chalk on cardboard.</p>
                <p>
                  This collection showcases a range of styles, from beautiful classical and abstract landscapes to vividly colored artworks and paintings with mysterious figurative and symbolic images. Each piece carries a substantial charge of natural, humane, aesthetic, and philosophical energy, making it a unique and captivating addition to any art collection.
                  As a testament to Xopo's commitment to artistic expression and innovation in the world of digital art, these artworks are available as NFTs.<span class="text-bold"> Don't miss your chance </span> to own a piece of this remarkable collection.
                </p>
                <a
                  tag="a"
                  href="https://medium.com/@XoroNft/xoponft-52af6632edab#:~:text=Our%20first%20collection,own%20an%20NFT."
                  target="_blank"
                  v-html="'Read More'"
                  class="a-button"
                ></a>
              </div>
              <div class="col">
                <div class="row anime">
                  <span class="anime6 background-image-fullsize"></span>
                  <span class="anime7"></span>
                  <span class="anime8 background-image-fullsize"></span>
                  <span class="anime9 background-image-fullsize"></span>
                  <span class="anime10"></span>
                  <span class="anime12"></span>
                  <span class="anime13"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="second-text lt-md q-mt-xl">
            <div class="row anime">
              <span class="anime6 background-image-fullsize"></span>
              <span class="anime7"></span>
              <span class="anime8 background-image-fullsize"></span>
              <span class="anime9 background-image-fullsize"></span>
              <span class="anime10"></span>
              <span class="anime12"></span>
              <span class="anime13"></span>
            </div>
            <div id="paragraph2">
                <p class="text-uppercase text-bold text-h5 title text-center">Xopo's First Own Collection: "Koloda"</p>
                <p class="text-h6 subTitle text-center">Minted on Avalanche, our first NFT collection will feature 85 stunning paintings<span class="text-bold"> by Bulgarian artist Miroslav Mihov (Eternal Mirror)</span>. 'Koloda' - original works of art created between 2014 and 2022 using oil paints on canvas, watercolors, and chalk on cardboard.</p>
                <p class="paragraph">
                  This collection showcases a range of styles, from beautiful classical and abstract landscapes to vividly colored artworks and paintings with mysterious figurative and symbolic images. Each piece carries a substantial charge of natural, humane, aesthetic, and philosophical energy, making it a unique and captivating addition to any art collection.
                  As a testament to Xopo's commitment to artistic expression and innovation in the world of digital art, these artworks are available as NFTs.<span class="text-bold"> Don't miss your chance </span> to own a piece of this remarkable collection.
                </p>
                <a
                  tag="a"
                  href="https://medium.com/@XoroNft/xoponft-52af6632edab#:~:text=Our%20first%20collection,own%20an%20NFT."
                  target="_blank"
                  v-html="'Read More'"
                  class="a-button"
                ></a>
            </div>
          </div>
          <div class="second-text gt-sm">
            <div class="row paragraph" id="paragraph6" style="margin-top: 12%; margin-bottom: 12%;">
              <div class="col q-pt-xl">
                <div class="row anime">
                  <span class="anime8-1"></span>
                  <span class="anime9-1"></span>
                  <span class="anime12-1"></span>
                </div>
              </div>
              <div class="col q-pr-xl">
                <p class="text-bold text-h5">JoinTheXopo: <span class="text-uppercase">Empowering Artists with </span> NFTs</p>
                <p class="text-h6">Revolutionize Your Artistic Journey in the World of NFTs</p>
                <p>
                  At JoinTheXopo, we offer a seamless process for creating NFTs, giving artists the opportunity to showcase their work to a global audience. Our platform utilizes smart contracts to manage key aspects such as voting and approval.
You can submit your candidacy by providing images or other digital formats of your art. The community then engages in a voting process facilitated by smart contracts, deciding whether to welcome you as a team member. Once approved, you'll gain access to your own dedicated stage, where you can publish your unique art collections.
JoinTheXopo empowers artists to harness the potential of NFTs, allowing you to elevate your creations and gain recognition in the ever-evolving world of digital art. We provide expert guidance and unwavering support, helping you navigate the process of converting your art into NFTs. Welcome to JoinTheXopo, where we redefine artistic expression in the realm of NFTs.
                </p>
              </div>
            </div>
          </div>
          <div class="second-text lt-md q-mt-xl">
            <div class="paragraph" id="paragraph6" style="margin-top: 12%; margin-bottom: 12%;">
              <div class="q-pt-xl">
                <div class="row anime">
                  <span class="anime8-1"></span>
                  <span class="anime9-1"></span>
                  <span class="anime12-1"></span>
                </div>
              </div>
              <div>
                <p class="text-bold text-h5">JoinTheXopo: <span class="text-uppercase">Empowering Artists with </span> NFTs</p>
                <p class="text-h6">Revolutionize Your Artistic Journey in the World of NFTs</p>
                <p>
                  At JoinTheXopo, we offer a seamless process for creating NFTs, giving artists the opportunity to showcase their work to a global audience. Our platform utilizes smart contracts to manage key aspects such as voting and approval.
You can submit your candidacy by providing images or other digital formats of your art. The community then engages in a voting process facilitated by smart contracts, deciding whether to welcome you as a team member. Once approved, you'll gain access to your own dedicated stage, where you can publish your unique art collections.
JoinTheXopo empowers artists to harness the potential of NFTs, allowing you to elevate your creations and gain recognition in the ever-evolving world of digital art. We provide expert guidance and unwavering support, helping you navigate the process of converting your art into NFTs. Welcome to JoinTheXopo, where we redefine artistic expression in the realm of NFTs.
                </p>
              </div>
            </div>
          </div>
          <p class="title text-uppercase text-bold q-pt-xl" id="paragraph3">XOPO ROADMAP </p>
          <p class="subTitle" style="font-size: 15pt;">What is the Journey of XOPO?</p>
          <p class="subTitle" style="font-size: 13pt;">At our project, we envision a journey through <span class="text-bold"> ten foundational eras</span>, all humming with activity and evolving concurrently yet unfolding sequentially. Like strokes on a canvas, each era contributes to the grand tableau of our mission: to create a project that harnesses art to save the world.</p>
          <div class="row q-mt-xl gt-sm">
            <div class="col-4 q-mt-md q-mr-xl q-ml-xl q-mb-xl">
              <span class="anime11 background-image-fullsize"></span>
            </div>
            <div class="col-7 paragraph rp">
            We start with the <span class="text-bold">DaVinci Dawn</span>, a welcoming beacon to potential users, followed by the <span class="text-bold">Picasso Beta</span> that crafts our digital platform. The <span class="text-bold">Warhol Mint</span> users in the era of creation and commerce, setting the stage for <span class="text-bold">Hokusai Governance</span> to establish our project's guiding principles.

            <br /><br />With the <span class="text-bold">O'Keeffe Stake</span>, we invite users to become part of our vision, leading us to the <span class="text-bold">Michelangelo Airdrop</span>, a token of gratitude for our early adopters. The <span class="text-bold">Kahlo Portal</span> opens doors to artists worldwide, while the <span class="text-bold">Matisse Lottery</span> gives voice to our community, enabling them to shape the project.

            <br /><br />The <span class="text-bold">Van Gogh Integration</span> extends our reach, inviting more users to connect and engage.Finally, the <span class="text-bold">Kandinsky Legacy</span> solidifies our commitment to art and its causes, creating commemorative collections that resonate far beyond our platform.

              <br />Each era will be detailed upon arrival, painting a vivid picture of our journey so far. For now, we invite you to explore these concepts and join us in creating a project that does more than just exist - it lives, breathes, and thrives on art and passion. The number of eras is not definitive - after all, our journey is as dynamic as the art we aim to save.

              <br /><br /><span style="font-size: large;">Welcome to our evolving masterpiece. Let's make the world our canvas!</span>
            </div>
          </div>
          <div class="q-mt-xl lt-md">
            <div class="q-mt-md q-mr-xl q-ml-xl q-mb-xl">
              <span class="anime11 background-image-fullsize"></span>
            </div>
            <div class="paragraph rp">
            We start with the <span class="text-bold">DaVinci Dawn</span>, a welcoming beacon to potential users, followed by the <span class="text-bold">Picasso Beta</span> that crafts our digital platform. The <span class="text-bold">Warhol Mint</span> users in the era of creation and commerce, setting the stage for <span class="text-bold">Hokusai Governance</span> to establish our project's guiding principles.

            <br /><br />With the <span class="text-bold">O'Keeffe Stake</span>, we invite users to become part of our vision, leading us to the <span class="text-bold">Michelangelo Airdrop</span>, a token of gratitude for our early adopters. The <span class="text-bold">Kahlo Portal</span> opens doors to artists worldwide, while the <span class="text-bold">Matisse Lottery</span> gives voice to our community, enabling them to shape the project.

            <br /><br />The <span class="text-bold">Van Gogh Integration</span> extends our reach, inviting more users to connect and engage.Finally, the <span class="text-bold">Kandinsky Legacy</span> solidifies our commitment to art and its causes, creating commemorative collections that resonate far beyond our platform.

              <br />Each era will be detailed upon arrival, painting a vivid picture of our journey so far. For now, we invite you to explore these concepts and join us in creating a project that does more than just exist - it lives, breathes, and thrives on art and passion. The number of eras is not definitive - after all, our journey is as dynamic as the art we aim to save.

              <br /><br /><span style="font-size: large;">Welcome to our evolving masterpiece. Let's make the world our canvas!</span>
            </div>
          </div>
          <roadmap class="gt-sm" style="margin-top: 7%; margin-bottom: 10%;"/>
          <roadmap2 class="lt-md" style="margin-top: 7%; margin-bottom: 10%;"/>
          <p class="title text-uppercase text-bold" id="paragraph4">Xopo Team</p>
          <p class="subTitle" style="font-size: 15pt;">Our diverse team of developers, UX/UI designers, marketing specialists, event managers, web3 enthusiasts, community moderators, musicians, artists, and more has come together with a shared vision.</p>
          <div class="gt-sm">
            <div class="row">
            <div class="col-2"></div>
            <member v-bind:className="'anime0m'" v-bind:text="''" v-bind:name="'You'" v-bind:title="'?'"/>
            <div class="col-2"></div>
            </div>
            <div class="row">
              <div class="col-2"></div>
              <member v-bind:className="'anime1m'" v-bind:text="`Meet RADoHaema, co-founder of Xopo, a dynamic player in the NFT landscape. With his unique blend of visionary leadership, collaborative efforts with top-tier artists, and a steadfast commitment to blockchain's transformative potential, he is reshaping the art market and beyond.`" v-bind:name="'RADoHaema'" v-bind:title="'co-founder'"/>
              <member v-bind:className="'anime2m'" v-bind:text="`
DarKniA, co-founder of XopoNFT, is a visionary leader in the NFT space, combining international experience, Solidity expertise, and a profound passion for art. With a remarkable track record in client relations, groundbreaking projects on Avalanche, and captivating art collections, Radina stands out as a pioneering figure, blending tech-savviness with artistic flair in the world of NFTs.`" v-bind:name="'DarKniA'" v-bind:title="'co-founder, artist'"/>
              <member v-bind:className="'anime3m'" v-bind:text="`Sh∀dowina, co-founder of VScout and a crucial member of the Xopo team, is an expert in full-stack blockchain development. With extensive experience in dApp development, smart contracts, and NFT creation, she plays a vital role in shaping our decentralized application for artists and establishing our unique position in the blockchain ecosystem.`" v-bind:name="'Sh∀dowina'" v-bind:title="'CTO, Senior Software Engineer'"/>
              <div class="col-2"></div>
            </div>
            <div class="row">
              <member v-bind:className="'anime4m'" v-bind:text="`Stefan Bachvarov is a seasoned project manager and event organizer, known for his success as co-founder and chairman of ‘Bastar studio’, NGO ‘DEMO’, and Varna youth festival ‘FUNCITY’. Now steering the helm as the project manager at ‘Xopo’, Stefan's fusion of online platform expertise, project creativity, and a passion for art and extreme sports make him a dynamic and valuable contributor to the team`" v-bind:name="'Stefan Bachvarov'" v-bind:title="'Project Manager, Musician'"/>
              <member v-bind:className="'anime5m'" v-bind:text="`Ventsislav Bahnev is a highly skilled UX/UI Designer and Web Developer with over 10 years of experience, specializing in front-end web development, UX/Web Design, and creating stunning corporate videos. His exceptional attention to detail and unwavering commitment to quality results have made him a respected expert in the industry.`" v-bind:name="'Ventsislav Bahnev'" v-bind:title="'UX/UI Designer, artist'"/>
              <member v-bind:className="'anime6m'" v-bind:text="`AzZer is a key member of the XopoNFT project, focusing on community moderation and support. With a strong passion for NFTs and their integration on the Avalanche blockchain, AzZer's creative and innovative approach drives the project forward. His enthusiasm for technology, art, music, games, and nature further enhances his contributions to XopoNFT.`" v-bind:name="'AzZer'" v-bind:title="'Community Manager'"/>
              <member v-bind:className="'anime7m'" v-bind:text="`
Dani Nikolov is an experienced digital marketing manager with expertise in business, marketing, and copywriting. Their deep understanding of effective campaign creation, coupled with their passion for sales and marketing, positions them as a valuable asset in driving sales and conversions.`" v-bind:name="'Dani Nikolov'" v-bind:title="'Digital Marketing Manager'"/>
            </div>
          </div>
          <div class="lt-md">
            <member v-bind:className="'anime01m'" v-bind:text="''" v-bind:name="'You'" v-bind:title="'?'"/>
            <member v-bind:className="'anime1m'" v-bind:text="`Meet RADoHaema, co-founder of Xopo, a dynamic player in the NFT landscape. With his unique blend of visionary leadership, collaborative efforts with top-tier artists, and a steadfast commitment to blockchain's transformative potential, he is reshaping the art market and beyond.`" v-bind:name="'RADoHaema'" v-bind:title="'co-founder'"/>
            <member v-bind:className="'anime2m'" v-bind:text="`
DarKniA, co-founder of XopoNFT, is a visionary leader in the NFT space, combining international experience, Solidity expertise, and a profound passion for art. With a remarkable track record in client relations, groundbreaking projects on Avalanche, and captivating art collections, Radina stands out as a pioneering figure, blending tech-savviness with artistic flair in the world of NFTs.`" v-bind:name="'DarKniA'" v-bind:title="'co-founder, artist'"/>
            <member v-bind:className="'anime3m'" v-bind:text="`Sh∀dowina, co-founder of VScout and a crucial member of the Xopo team, is an expert in full-stack blockchain development. With extensive experience in dApp development, smart contracts, and NFT creation, she plays a vital role in shaping our decentralized application for artists and establishing our unique position in the blockchain ecosystem.`" v-bind:name="'Sh∀dowina'" v-bind:title="'CTO, Senior Software Engineer'"/>
            <member v-bind:className="'anime4m'" v-bind:text="`Stefan Bachvarov is a seasoned project manager and event organizer, known for his success as co-founder and chairman of ‘Bastar studio’, NGO ‘DEMO’, and Varna youth festival ‘FUNCITY’. Now steering the helm as the project manager at ‘Xopo’, Stefan's fusion of online platform expertise, project creativity, and a passion for art and extreme sports make him a dynamic and valuable contributor to the team`" v-bind:name="'Stefan Bachvarov'" v-bind:title="'Project Manager, Musician'"/>
            <member v-bind:className="'anime5m'" v-bind:text="`Ventsislav Bahnev is a highly skilled UX/UI Designer and Web Developer with over 10 years of experience, specializing in front-end web development, UX/Web Design, and creating stunning corporate videos. His exceptional attention to detail and unwavering commitment to quality results have made him a respected expert in the industry.`" v-bind:name="'Ventsislav Bahnev'" v-bind:title="'UX/UI Designer, artist'"/>
            <member v-bind:className="'anime6m'" v-bind:text="`AzZer is a key member of the XopoNFT project, focusing on community moderation and support. With a strong passion for NFTs and their integration on the Avalanche blockchain, AzZer's creative and innovative approach drives the project forward. His enthusiasm for technology, art, music, games, and nature further enhances his contributions to XopoNFT.`" v-bind:name="'AzZer'" v-bind:title="'Community Manager'"/>
            <member v-bind:className="'anime7m'" v-bind:text="`
Dani Nikolov is an experienced digital marketing manager with expertise in business, marketing, and copywriting. Their deep understanding of effective campaign creation, coupled with their passion for sales and marketing, positions them as a valuable asset in driving sales and conversions.`" v-bind:name="'Dani Nikolov'" v-bind:title="'Digital Marketing Manager'"/>
          </div>
        </div>
        </q-layout>
      </div>
      <div class="footer" id="paragraph5">
        <q-img src="~assets/tokens/XOPO_3.gif" class="token-logo gt-sm" />
        <q-img src="~assets/tokens/XOPO_3.gif" class="token-logo2 lt-md" />
        <p class="text-uppercase text-bold text-h5">$XOPO, the native token of Xopo</p>
        <p class="text-h6">At Xopo, the $XOPO token plays a central role in fostering a community-driven ecosystem.</p>
        <div class="row flex flex-center q-mb-xl q-pa-md">
          <div class="col-auto col-md-4 col-xl-4 q-pr-md text-right">
            <span class="text-bold">Our Decentralized Autonomous Organization (DAO)</span>, consisting of $XOPO token holders, plays a pivotal role in maintaining a vibrant and dynamic ecosystem where all participants have an equal say. In the DAO, collective decisions are made through a robust voting process. Once the voting is complete, the tokens used for voting are burned, symbolizing the consensus reached. Furthermore, each minted NFT generates both unique artwork and tokens, ensuring that the creative output and $XOPO tokens are intertwined.
          </div>
          <div class="col-auto col-md-4 col-xl-4 q-pl-md text-left">
            These tokens serve as a powerful incentive, motivating and recognizing the contributions of our engaged community members. By holding $XOPO tokens, individuals have the opportunity to shape the destiny of Xopo while being rewarded for their active involvement.
            Join us on this exhilarating journey, where $XOPO tokens empower artists, foster community engagement, and drive the future of NFT innovation. Together, we are building a platform that celebrates artistic expression and inclusivity, revolutionizing the way we appreciate and collect digital art.
          </div>
        </div>
        <a
          tag="a"
          href="https://medium.com/@XoroNft/how-to-become-a-wealthy-and-recognized-artist-in-todays-world-d207a36b8f2f"
          target="_blank"
          v-html="'Read More'"
          class="a-btn-pr"
        ></a>
      </div>
      <media-links />
    </q-page>
    <q-drawer
      v-model="drawer"
      :width="200"
      :breakpoint="500"
      bordered
      overlay
    >
      <q-scroll-area class="fit">
        <q-list>

          <div v-for="(menuItem, index) in menuList" v-bind:key="index">
            <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple @click="goto(menuItem)">
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator v-bind:key="'sep' + index"  v-if="menuItem.separator" />
          </div>

        </q-list>
      </q-scroll-area>
      <div class="q-mini-drawer-hide absolute" style="top: 10px; right: -0.1px">
        <q-btn
          flat
          round
          unelevated
          color="accent"
          icon="chevron_left"
          @click="drawer = !drawer"
        />
      </div>
    </q-drawer>
  </div>
</template>

<script>
import { ref } from 'vue'
import { scroll } from 'quasar'
import { mapGetters } from 'vuex'
import { xopo, joinTheXopo } from './../modules/constants'
const { getScrollTarget, setVerticalScrollPosition } = scroll

const menuList = [
  {
    icon: 'home',
    label: 'Wellcome',
    separator: true
  },
  {
    icon: 'collections',
    label: 'First Collection',
    separator: false
  },
  {
    icon: 'route',
    label: 'Roadmap',
    separator: false
  },
  {
    icon: 'groups',
    label: 'Team',
    separator: true
  },
  {
    icon: 'token',
    label: '$XOPO',
    separator: false
  },
  {
    icon: 'queue',
    label: 'Create Your Own NFTs',
    separator: false
  }
]

export default {
  name: 'PageIndex',
  components: {
    // TooltipStyle: () => import('components/tooltip-style.vue')
    // AnimatedNumber: () => import('animated-number-vue')
    Roadmap: () => import('../components/roadmap.vue'),
    Roadmap2: () => import('../components/roadmap2.vue'),
    Member: () => import('../components/member.vue'),
    MediaLinks: () => import('../components/mediaLinks.vue')
  },
  setup () {
    return {
      tab: ref(''),
      menuList
    }
  },
  data () {
    return {
      xopo,
      joinTheXopo,
      isFirst: true,
      isSecond: false,
      scroll: 0,
      inerh: 0,
      lastScrollTop: 0,
      drawer: false
    }
  },
  computed: {
    ...mapGetters([
      'appTheme'
    ])
  },
  mounted () {
    this.xopo = xopo
    this.joinTheXopo = joinTheXopo
  },
  methods: {
    scrollHandler (event) {
      const {
        position,
        direction
        // directionChanged
      } = event
      const logo = document.querySelector('.logo')
      const text = document.querySelector('.text')
      // const fText = document.querySelector('.first-text')
      // const sText = document.querySelector('.second-text')
      // const tText = document.querySelector('.third-text')
      const anime = document.querySelector('.wrapAnime')
      const cards = document.querySelectorAll('.my-card')
      let index = 100
      cards.forEach(function (card) {
        const cardPosition = card.offsetTop
        if (position > cardPosition - window.innerHeight / 3.6) {
          card.classList.remove(`down-${index}`)
          card.classList.add(`animate-in-${index}`)
        } else if (position > cardPosition - window.innerHeight / 0.8) {
          card.classList.remove(`down-${index}`)
          card.classList.remove(`animate-in-${index}`)
        } else if (position > cardPosition - window.innerHeight / 0.2) {
          card.classList.add(`down-${index}`)
        }
        index += 20
      })

      if (direction === 'up') {
        if (position < 0) {
          text.classList.remove('show')
          logo.classList.remove('logo-small', 'logo-below')
          this.isFirst = true
          this.isSecond = false
        }

        if (position <= 1500 && anime) {
          anime.classList.remove('show3')
          anime.classList.add('show2')
        }
        if (position <= 650 && anime) {
          anime.classList.remove('show2')
          anime.classList.add('reverse')
        }
        // if (anime) {
        //   for (let i = 1; i <= 5; i++) {
        //     const el = anime.querySelector(`.anime${i}`)
        //     this.checkElementPosition(el)
        //   }
        // }
      } else {
        if (position > 1) {
          text.classList.add('show')
          logo.classList.add('logo-small', 'logo-below')
          this.isFirst = false
          this.isSecond = true
        }
        if (position >= 1500 && anime) {
          anime.classList.add('show3')
          anime.classList.remove('show2')
          anime.classList.remove('reverse')
        } else if (position >= 300 && anime) {
          anime.classList.remove('show3')
          anime.classList.add('show2')
          anime.classList.remove('reverse')
        }
      }

      logo.style.top = `${Math.min(75 + position * 0.2, window.innerHeight)}px`
      logo.style.opacity = `${Math.max(1 - position / window.innerHeight, 0)}`
    },
    checkElementPosition (element) {
      const rect = element.getBoundingClientRect()
      if (rect.bottom <= 0) {
        element.style.transform = 'translate(0, 0) scale(1)'
      } else {
        element.style.transform = ''
      }
    },
    scrollToElement (el, duration) {
      const target = getScrollTarget(el)
      const offset = el.offsetTop
      setVerticalScrollPosition(target, offset, duration)
    },
    goto (menuItem) {
      switch (menuItem.label) {
        case 'Wellcome':
          this.goToWelcome()
          break
        case 'First Collection':
          this.goToKoloda()
          break
        case 'Roadmap':
          this.goToRoadmap()
          break
        case 'Team':
          this.goToTeam()
          break
        case '$XOPO':
          this.goToToken()
          break
        case 'Create Your Own NFTs':
          this.goToCreateNFTs()
          break
      }
      this.drawer = !this.drawer
    },
    goToWelcome () {
      const el = document.getElementById('paragraph1')
      this.scrollToElement(el, 3000)
    },
    goToKoloda () {
      const el = document.getElementById('paragraph2')
      this.scrollToElement(el, 3000)
    },
    goToRoadmap () {
      const el = document.getElementById('paragraph3')
      this.scrollToElement(el, 3000)
    },
    goToTeam () {
      const el = document.getElementById('paragraph4')
      this.scrollToElement(el, 3000)
    },
    goToCreateNFTs () {
      const el = document.getElementById('paragraph6')
      this.scrollToElement(el, 3000)
    },
    goToToken () {
      const el = document.getElementById('paragraph5')
      this.scrollToElement(el, 3000)
    },
    beforeDestroy () {
      // Remove scroll event listener when component is destroyed
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
}
</script>

<style>
.token-logo {
    width: 6%;
  }
  .token-logo2 {
    margin-top: 5%;
    width: 10%;
  }
.joinT {
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
}
.a-button {
  padding: 8px 15px;
  border: 1px solid #dfd19d;
  border-radius: 35px;
  color: #dfd19d;
  text-decoration: none;
}
.a-btn-pr {
  z-index: 2;
  padding: 8px 15px;
  border: 1px solid #dfd19d;
  border-radius: 35px;
  text-decoration: none;
  color: #1f1f1e;
  background-color: #dfd19d;
}
.container {
  max-width: 100%;
  padding: 0 20px;
  text-align: center;
}
.logo {
  position: fixed;
  top: 20%;
  left: 25%;
  width: 50%;
  transform: translateZ(-200px) scale(3.5);
  transition: transform 1.5s, top 0.5s;
  z-index: -1;
}

.footer {
    background-image: url('../assets/logos/logo-footer.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    text-align: center;
    height: 100%;
    margin-left: -20px;
    margin-right: -20px;
    margin-bottom: 3%;
    margin-top: 10%;
    padding-bottom: 5%;
    padding-top: 2%;
}
.footer-content {
  position: fixed;
  right: auto;
  bottom: 10%;
}

.first-p,
.second-p,
.third-p,
.show .second-p,
.show .third-p {
  margin-top: 1%;
}
.show .first-p {
  padding-top: 4%;
}
.small-logo {
  width: 20px;
  margin-bottom: 10px;
  width: 80pt;
  vertical-align: middle;
}
.text {
  position: relative;
  margin-top: 5px;
  transform-style: preserve-3d;
  transition: transform 0.5s;
}
.third-p {
  letter-spacing: .05rem;
}
  .paragraph {
    gap: 70px;
    line-height: 2.2;
    font-size: 12pt;
  }
  .parent-paragraph {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .p {
    flex: 1 1 250px;
    max-width: 400px;
  }
.wp {
  margin-top: 3%;
  display: flex;
  text-align: center;
}
.rp {
  justify-content: center;
  text-align: left;
  margin-bottom: 100px;
}
.mouse {
  width: 22pt;
  margin-top: 10%;
}
.nft-text {
  background-color: #1f1f1e;
  padding: 4px;
  color: white;
}
.show {
  transform: translateY(50px) scale(0.99);
  transition: transform 2s;
}
.show .logo {
  transition: transform 1.5s;
  transform: translateY(-100px) scale(0.01);
  left: 41.5%;
}
.show p {
  transform: translateZ(500px) scale(1);
  transition: transform 1s;
}
.show .animated-text {
  opacity: 1;
  transform: translateY(0);
}
.logo-below {
  position: absolute;
  z-index: -1;
}
.logo-small {
  width: 200px;
  height: 200px;
}

.show3 p {
  transform: translateZ(500px) scale(1);
  transition: transform 1s;
}
.animated-text {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s, transform 0.1s;
}
.animated-text2 {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.5s, transform 0.9s;
}
.show2 .animated-text2 {
  opacity: 1;
  transform: translateY(0);
}
.show3 .animated-text2 {
  opacity: 1;
  transform: translateY(0);
}
.j-logo {
  width: 55px;
}
.anime {
  width: 80%;
  margin-left: 5%;
}
.anime1 {
  position: static;
  display: block;
  background-image: url('./../assets/animeImages/65.png');
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: organic 12s infinite alternate ease-in-out;
  animation-delay: 3s;
}
.anime2 {
  position: static;
  display: block;
  background-color: #1f1f1e;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: organic 12s infinite alternate ease-in-out;
}
.anime3 {
  position: static;
  display: block;
  background-image: url('./../assets/animeImages/newGold.gif');
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: organic 12s infinite alternate ease-in-out;
  animation-delay: 4s;
}
.anime4 {
  position: static;
  display: block;
  background-image: url('./../assets/animeImages/face3.png');
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: organic 12s infinite alternate ease-in-out;
  animation-delay: 1s;
}
.anime5 {
  position: static;
  display: block;
  background-color: #1f1f1e;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: organic 12s infinite alternate ease-in-out;
}
.anime6 {
  position: static;
  display: block;
  background-image: url('./../assets/animeImages/face.png');
  animation: organic 12s infinite alternate ease-in-out;
}
.anime7 {
  position: static;
  display: block;
  background-color: #1f1f1e;
  animation: organic 12s infinite alternate ease-in-out;
}
.anime8 {
  position: static;
  display: block;
  background-image: url('./../assets/animeImages/48.jpg');
  background-size: cover;
  animation: organic 12s infinite alternate ease-in-out;
}
.anime8-1 {
  position: static;
  display: block;
  background-image: url('./../assets/animeImages/1.jpg');
  background-size: cover;
  animation: organic 12s infinite alternate ease-in-out;
}
.anime9 {
  position: static;
  display: block;
  background-image: url('./../assets/animeImages/4.jpg');
  background-size: cover;
  animation: organic 12s infinite alternate ease-in-out;
}
.anime9-1 {
  position: static;
  display: block;
  background-image: url('./../assets/animeImages/kk.png');
  background-size: cover;
  animation: organic 12s infinite alternate ease-in-out;
}
.anime10 {
  position: static;
  display: block;
  background-color: #1f1f1e;
  animation: organic 12s infinite alternate ease-in-out;
}
.anime11 {
  position: static;
  display: block;
  background-image: url('./../assets/roadmap/gifs/all.gif');
  animation: organic 12s infinite alternate ease-in-out;
}
.anime12 {
  position: static;
  display: block;
  background-image: url('./../assets/animeImages/45.jpg');
  background-size: cover;
  animation: organic 12s infinite alternate ease-in-out;
}
.anime12-1 {
  position: static;
  display: block;
  background-image: url('./../assets/animeImages/kk3.jpeg');
  background-size: cover;
  animation: organic 12s infinite alternate ease-in-out;
}
.anime13 {
  position: static;
  display: block;
  background-image: url('./../assets/animeImages/57.jpg');
  background-size: cover;
  animation: organic 12s infinite alternate ease-in-out;
}
.background-image-fullsize {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100%;
}
.text-center {
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
}
@keyframes organic {
  0% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }

  25% {
    border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
  }

  50% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }

  100% {
    border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
  }
}
.reverse .anime > .anime1 {
    transition: transform 2s;
    transform: translate(0, 0) scale(1);
  }

  .reverse .anime > .anime2 {
    transition: transform 2.2s;
    transform: translate(0, 0) scale(1);
  }

  .reverse .anime > .anime3 {
    transition: transform 3s;
    transform: translate(0, 0) scale(1);
  }

  .reverse .anime > .anime4 {
    transition: transform 3.5s;
    transform: translate(0, 0) scale(1);
  }

  .reverse .anime > .anime5 {
    transition: transform 4.1s;
    transform: translate(0, 0) scale(1);
  }
  .title {
    clear: both;
    text-align: center;
    font-size: 23pt;
    letter-spacing: .05rem;
    margin-left: auto;
    margin-right: auto;
  }
  .subTitle {
    max-width: 50%;
    font-size: 15pt;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  .welcomeT {
    margin-top: 10%;
    margin-bottom: 1%;
  }

/* Styles for screens with a min-width 320 and a height between 480px and 786px */
@media (min-width: 320px),
       (min-height: 480px) and (max-height: 786px) {
  .show {
    transform: translateY(-90px) scale(0.99);
    transition: transform 2s;
  }
  .first-p {
    font-size: 7pt;
  }
  .second-p {
    font-size: 21pt;
  }
  .third-p {
    font-size: 11pt;
  }
  .show .first-p {
    font-size: 10pt;
  }
  .show .second-p {
    font-size: 30pt;
  }
  .show .third-p {
    font-size: 12pt;
  }
  .show .small-logo {
    width: 70px;
  }
  .anime1 {
    width: 30%;
    height: 80px;
    margin-top: -2%;
    margin-left: 12px;
  }
  .anime2 {
    width: 12%;
    height: 30px;
    margin-left: -8%;
    margin-top: 16%;
  }
  .anime3 {
    width: 28%;
    height: 70px;
    margin-top: 6%;
  }
  .anime4 {
    width: 30%;
    height: 80px;
    margin-left: 2px;
  }
  .anime5 {
    width: 12%;
    height: 30px;
    margin-top: -3%;
    margin-left: -12%;
  }
  .anime6 {
    margin-left: 20%;
    width: 15%;
    height: 130pt;
    z-index: -1;
  }
  .anime7 {
    margin-top: 68%;
    width: 8%;
    height: 20pt;
    z-index: -1;
  }
  .anime8 {
    margin-top: 10%;
    margin-left: 15%;
    width: 15%;
    height: 130pt;
    z-index: 1;
  }
  .anime8-1 {
    margin-left: 40%;
    width: 12%;
    height: 140pt;
    z-index: -1;
  }
  .anime9{
    margin-left: -55%;
    margin-top: 20%;
    width: 66%;
    height: 28pt;
    z-index: -1;
  }
  .anime9-1 {
    margin-top: 3%;
    margin-left: -50%;
    width: 60%;
    height: 20pt;
  }
  .anime10 {
    margin-top: -8%;
    width: 10%;
    height: 20pt;
  }
  .anime10 {
    margin-top: -20%;
    width: 80%;
  }
  .anime11 {
    margin-top: 2%;
    width: 120%;
    height: 220pt;
  }
  .anime12-1 {
    margin-top: -52%;
    margin-left: 40%;
    width: 95%;
    height: 35pt;
    z-index: -2;
  }
  .anime12{
    margin-top: -50%;
    margin-left: 45%;
    width: 50%;
    height: 25pt;
  }
  .anime13 {
    margin-top: -115%;
    margin-left: 40%;
    width: 18%;
    height: 50pt;
    z-index: -2;
  }
  .title {
    font-size: 15pt;
  }
  .subTitle {
    max-width: 80%;
    font-size: 12pt;
  }
  .paragraph {
    gap: 20px;
    font-size: 9.5pt;
  }
  .show2 .anime > .anime1 {
    transition: transform 2s;
    transform: translate(150px, 1230px) scale(0.7);
    z-index: -2;
  }
  .show2 .anime > .anime2 {
    transition: transform 2.2s;
    transform: translate(90px, 1180px) scale(0.35);
  }
  .show2 .anime > .anime3 {
    transition: transform 3s;
    transform: translate(20px, 1180px) scale(0);
    z-index: -2;
  }
  .show2 .anime > .anime4 {
    transition: transform 3.5s;
    transform: translate(42px, 1080px) scale(0);
  }
  .show2 .anime > .anime5 {
    transition: transform 4.1s;
    transform: translate(5px, 1195px) scale(0.8);
    z-index: -2;
  }
  .show3 .anime > .anime3 {
    transition: transform 3s;
    transform: translate(-70px, 2450px) scale(0.7);
    z-index: -2;
  }
  .show3 .anime > .anime2 {
    transition: transform 2s;
    transform: translate(-60px, 2530px) scale(0.4);
    z-index: -2;
  }
  .show3 .anime > .anime4 {
    transition: transform 3.5s;
    transform: translate(-15px, 2402px) scale(0.8);
  }
  .show3 .anime > .anime1 {
    transition: transform 4s;
    transform: translate(90px, 2527px) scale(0.59);
    z-index: -2;
  }
  .show3 .anime > .anime5 {
    transition: transform 2.1s;
    transform: translate(-154px, 2546px) scale(0.7);
    z-index: -2;
  }
}

/* Styles for screens with a min-width 360px and max-width 384px and a height between 639px and 668px */
@media (min-width: 360px) and (max-width: 384px), (min-height: 639px) and (max-height: 668px) {
  .anime1 {
    width: 30%;
    height: 80px;
    margin-top: -2%;
    margin-left: 12px;
  }
  .anime2 {
    width: 12%;
    height: 30px;
    margin-left: -8%;
    margin-top: 16%;
  }
  .anime3 {
    width: 28%;
    height: 70px;
    margin-top: 6%;
  }
  .anime4 {
    width: 30%;
    height: 80px;
    margin-left: 2px;
  }
  .anime5 {
    width: 12%;
    height: 30px;
    margin-top: -3%;
    margin-left: -12%;
  }
  .anime7 {
    margin-top: 47%;
    width: 10%;
    height: 30pt;
    z-index: -1;
  }
  .anime12{
    margin-top: -40%;
    margin-left: 51%;
    width: 45%;
    height: 30pt;
  }
  .anime13 {
    margin-top: -95%;
    margin-left: 40%;
    width: 16%;
    height: 50pt;
  }
  .show2 .anime > .anime1 {
    transition: transform 2s;
    transform: translate(170px, 1150px) scale(0.8);
    z-index: -2;
  }
  .show2 .anime > .anime5 {
    transition: transform 4.1s;
    transform: translate(27px, 1149px) scale(0.8);
    z-index: -2;
  }
  .show3 .anime > .anime3 {
    transition: transform 3s;
    transform: translate(-80px, 2290px) scale(0.7);
    z-index: -2;
  }
  .show3 .anime > .anime2 {
    transition: transform 2s;
    transform: translate(-60px, 2350px) scale(0.4);
    z-index: -2;
  }
  .show3 .anime > .anime4 {
    transition: transform 3.5s;
    transform: translate(-10px, 2260px) scale(0.7);
  }
  .show3 .anime > .anime1 {
    transition: transform 4s;
    transform: translate(110px, 2376px) scale(0.6);
    z-index: -2;
  }
  .show3 .anime > .anime5 {
    transition: transform 2.1s;
    transform: translate(-184px, 2366px) scale(0.7);
    z-index: -2;
  }
}

/* Styles for screens with a min-width 410px*/
@media (min-width: 410px) {
  .show {
    transform: translateY(-90px) scale(0.99);
    transition: transform 2s;
  }
  .first-p {
    font-size: 7pt;
  }
  .second-p {
    font-size: 21pt;
  }
  .third-p {
    font-size: 11pt;
  }
  .show .first-p {
    font-size: 10pt;
  }
  .show .second-p {
    font-size: 30pt;
  }
  .show .third-p {
    font-size: 12pt;
  }
  .show .small-logo {
    width: 70px;
  }
  .anime1 {
    width: 70px;
    height: 80px;
    margin-top: -2%;
    margin-left: 12px;
  }
  .anime2 {
    width: 30px;
    height: 50px;
    margin-left: -8%;
    margin-top: 12%;
  }
  .anime3 {
    width: 80px;
    height: 70px;
    margin-top: 6%;
  }
  .anime4 {
    width: 66px;
    height: 80px;
    margin-left: 2px;
  }
  .anime5 {
    width: 30px;
    height: 40px;
    margin-top: -3%;
    margin-left: -12%;
  }
  .anime6 {
    margin-left: 20%;
    width: 16%;
    height: 150pt;
    z-index: -1;
  }
  .anime7 {
    margin-top: 55%;
    width: 10%;
    height: 30pt;
    z-index: -1;
  }
  .anime8 {
    margin-top: 22%;
    margin-left: 15%;
    width: 15%;
    height: 160pt;
    z-index: 1;
  }
  .anime8-1 {
    margin-left: 40%;
    width: 12%;
    height: 140pt;
    z-index: -1;
  }
  .anime9{
    margin-left: -55%;
    margin-top: 23%;
    width: 55%;
    height: 30pt;
    z-index: -1;
  }
  .anime9-1 {
    margin-top: 3%;
    margin-left: -40%;
    width: 55%;
    height: 20pt;
  }
  .anime10 {
    margin-top: -8%;
    width: 10%;
    height: 30pt;
  }
  .anime10 {
    margin-top: -20%;
    width: 80%;
  }
  .anime11 {
    margin-top: 2%;
    width: 120%;
    height: 220pt;
  }
  .anime12-1 {
    margin-top: -42%;
    margin-left: 40%;
    width: 75%;
    height: 30pt;
    z-index: -2;
  }
  .anime12{
    margin-top: -40%;
    margin-left: 45%;
    width: 45%;
    height: 30pt;
  }
  .anime13 {
    margin-top: -110%;
    margin-left: 40%;
    width: 16%;
    height: 50pt;
    z-index: -2;
  }
  .title {
    font-size: 15pt;
  }
  .subTitle {
    max-width: 80%;
    font-size: 12pt;
  }
  .paragraph {
    gap: 20px;
    font-size: 9.5pt;
  }
  .show2 .anime > .anime1 {
    transition: transform 2s;
    transform: translate(170px, 1200px) scale(0.8);
    z-index: -2;
  }
  .show2 .anime > .anime2 {
    transition: transform 2.2s;
    transform: translate(130px, 1120px) scale(0.35);
  }
  .show2 .anime > .anime3 {
    transition: transform 3s;
    transform: translate(20px, 1180px) scale(0);
    z-index: -2;
  }
  .show2 .anime > .anime4 {
    transition: transform 3.5s;
    transform: translate(42px, 1080px) scale(0);
  }
  .show2 .anime > .anime5 {
    transition: transform 4.1s;
    transform: translate(20px, 1105px) scale(0.8);
    z-index: -2;
  }
  .show3 .anime > .anime3 {
    transition: transform 3s;
    transform: translate(-80px, 2250px) scale(0.7);
    z-index: -2;
  }
  .show3 .anime > .anime2 {
    transition: transform 2s;
    transform: translate(-60px, 2330px) scale(0.4);
    z-index: -2;
  }
  .show3 .anime > .anime4 {
    transition: transform 3.5s;
    transform: translate(-30px, 2220px) scale(0.8);
  }
  .show3 .anime > .anime1 {
    transition: transform 4s;
    transform: translate(110px, 2336px) scale(0.6);
    z-index: -2;
  }
  .show3 .anime > .anime5 {
    transition: transform 2.1s;
    transform: translate(-184px, 2346px) scale(0.7);
    z-index: -2;
  }
}

/* Styles for screens with a min-width 412px and a min-height 892px */
@media (min-width: 410px) and (max-width: 430px), (min-height: 723px) and (max-height: 932px) {
  .show {
    transform: translateY(-60px) scale(0.99);
    transition: transform 2s;
  }
  .show .small-logo {
    width: 80px;
  }
  .first-p {
    font-size: 7pt;
  }
  .third-p {
    font-size: 8.4pt;
  }
  .show .first-p {
    font-size: 11pt;
  }
  .show .second-p {
    font-size: 35pt;
  }
  .show .third-p {
    font-size: 12pt;
  }
  .anime {
    margin-top: 2%;
  }
  .anime1 {
    width: 80px;
    height: 90px;
  }
  .anime2 {
    width: 40px;
    height: 50px;
    margin-left: -10%;
    margin-top: 12%;
  }
  .anime3 {
    width: 80px;
    height: 70px;
    margin-top: 1%;
  }
  .anime4 {
    width: 80px;
    height: 80px;
    margin-top: -3%;
  }
  .anime5 {
    width: 30px;
    height: 50px;
    margin-top: -8%;
    margin-left: -12%;
  }
  .show2 .anime > .anime1 {
    transition: transform 2s;
    transform: translate(170px, 1090px) scale(0.7);
    z-index: -2;
  }
  .show2 .anime > .anime2 {
    transition: transform 2.2s;
    transform: translate(130px, 1120px) scale(0);
  }
  .show3 .anime > .anime1 {
    transition: transform 4s;
    transform: translate(130px, 2160px) scale(0.5);
    z-index: -2;
  }
  .show3 .anime > .anime3 {
    transition: transform 3s;
    transform: translate(-80px, 2090px) scale(0.9);
    z-index: -2;
  }
  .show3 .anime > .anime4 {
    transition: transform 3.5s;
    transform: translate(-30px, 2060px) scale(0.5);
  }
  .show3 .anime > .anime5{
    transition: transform 3.5s;
    transform: translate(-30px, 2050px) scale(0.5);
  }
  .show3 .anime > .anime2 {
    transition: transform 2s;
    transform: translate(-40px, 2130px) scale(1.1);
    z-index: -2;
  }
}

@media (min-width: 540px) {
  .anime1 {
  width: 180px;
  height: 160px;
  margin-top: -3%;
  }
  .anime2 {
  width: 80px;
  height: 80px;
  margin-left: -10%;
  margin-top: 13%;
  }
  .anime3 {
    width: 170px;
    height: 160px;
    margin-top: 2%;
    margin-left: 0.5%;
  }
  .anime4 {
    width: 160px;
    height: 170px;
    margin-top: -6%;
  }
  .anime5 {
    width: 70px;
    height: 70px;
    margin-top: -10%;
  }
  .anime8-1 {
    margin-left: 40%;
    width: 10%;
    height: 180pt;
    z-index: -1;
  }
  .anime13 {
    margin-top: -57%;
  }
  .anime9{
    margin-top: 10%;
    z-index: -2;
  }
  .anime12{
    margin-top: -35%;
    margin-left: 45%;
    width: 45%;
    height: 25pt;
  }
  .anime12-1 {
    margin-top: -25%;
    height: 50pt;
  }
  .anime7 {
    margin-top: 45%;
  }
  .anime8 {
    margin-top: 12%;
    margin-left: 15%;
    width: 10%;
    height: 170pt;
    z-index: 1;
  }
  .show2 .anime > .anime1 {
    transition: transform 2s;
    transform: translate(330px, 890px) scale(0.7);
    z-index: -2;
  }
  .show2 .anime > .anime2 {
    transition: transform 2.2s;
    transform: translate(130px, 1120px) scale(0);
  }
  .show2 .anime > .anime3 {
    transition: transform 3s;
    transform: translate(20px, 1180px) scale(0);
    z-index: -2;
  }
  .show2 .anime > .anime4 {
    transition: transform 3.5s;
    transform: translate(42px, 1080px) scale(0);
  }
  .show2 .anime > .anime5 {
    transition: transform 4.1s;
    transform: translate(-15px, 905px) scale(0.8);
    z-index: -2;
  }
  .show3 .anime > .anime3 {
    transition: transform 3s;
    transform: translate(-150px, 1680px) scale(0.7);
    z-index: -2;
  }
  .show3 .anime > .anime2 {
    transition: transform 2s;
    transform: translate(-60px, 1730px) scale(0.6);
    z-index: -2;
  }
  .show3 .anime > .anime4 {
    transition: transform 3.5s;
    transform: translate(-50px, 1650px) scale(0.57);
  }
  .show3 .anime > .anime1 {
    transition: transform 4s;
    transform: translate(240px, 1786px) scale(0.4);
    z-index: -2;
  }
  .show3 .anime > .anime5 {
    transition: transform 2.1s;
    transform: translate(-30px, 1646px) scale(0.9);
    z-index: -2;
  }
}

/* Styles for screens with a min-width 768px and a max-height 1024px */
@media (min-width: 768px) and (max-height: 1024px) {

  .show {
    transform: translateY(20px) scale(0.99);
    transition: transform 2s;
  }
  .show .logo {
      transition: transform 1.5s;
      transform: translateY(-38px) scale(0.01);
      left: 35%;
    }
  .first-p {
    font-size: 14pt;
  }
  .second-p {
    font-size: 43pt;
  }
  .third-p {
    font-size: 18pt;
  }
  .show .second-p {
    font-size: 42pt;
  }
  .show .small-logo {
    width: 75px;
  }
  .show .first-p {
    font-size: 14pt;
  }
  .show .third-p {
    font-size: 18pt;
  }
  .media {
    width: 30pt;
  }
}

/* Styles for screens with a min-width  820px and a max-height 1368px */
@media (min-width: 820px) and (max-height: 1368px) {
    .anime4 {
      width: 150px;
      margin-top: -1%;
    }
    .anime5 {
      width: 70px;
      height: 70px;
      margin-top: -4%;
    }
    .show {
      transform: translateY(-10px) scale(0.99);
      transition: transform 2s;
    }
    .show .logo {
      transition: transform 1.5s;
      transform: translateY(-38px) scale(0.01);
      left: 35%;
    }
    .first-p {
      font-size: 16.5pt;
    }
    .second-p {
      font-size: 50pt;
    }
    .third-p {
      font-size: 21pt;
    }
    .media {
      width: 30pt;
    }
    .show .first-p {
      font-size: 17pt;
    }
    .show .second-p {
      font-size: 50pt;
    }
    .show .third-p {
      font-size: 20pt;
    }
}

/* Styles for screens with a width of 1000px*/
@media (min-width: 912px) {
  .show .logo {
      transition: transform 1.5s;
      transform: translateY(-98px) scale(0.01);
      left: 38%;
    }
  .media {
    width: 31pt;
  }
  .anime1 {
    margin-top: -3%;
    width: 28%;
    height: 200pt;
    margin-left: auto;
    margin-right: auto;
  }
  .anime2 {
    margin-top: 12%;
    margin-left: -27%;
    width: 15%;
    height: 130pt;
  }
  .anime3 {
    margin-top: 2%;
    width: 22%;
    height: 200pt;

  }
  .anime4 {
    margin-top: -4%;
    width: 27%;
    height: 200pt;
  }
  .anime5 {
    margin-left: -10%;
    margin-top: -8%;
    width: 10%;
    height: 100pt;
  }
  .anime6 {
    margin-left: 20%;
    width: 10%;
    height: 200pt;
    z-index: -1;
  }
  .anime7 {
    margin-top: 55%;
    width: 10%;
    height: 50pt;
    z-index: -1;
  }
  .anime8 {
    margin-top: 22%;
    margin-left: 15%;
    width: 15%;
    height: 280pt;
    z-index: 1;
  }
  .anime8-1 {
    margin-left: 40%;
    width: 15%;
    height: 280pt;
    z-index: -1;
  }
  .anime9{
    margin-left: -55%;
    margin-top: 23%;
    width: 55%;
    height: 40pt;
    z-index: -1;
  }
  .anime9-1 {
    margin-top: 5%;
    margin-left: -35%;
    width: 55%;
    height: 40pt;
  }
  .anime10 {
    margin-top: -8%;
    width: 10%;
    height: 60pt;
  }
  .anime10 {
    margin-top: -20%;
    width: 80%;
  }
  .anime12-1 {
    margin-top: -32%;
    margin-left: 45%;
    width: 75%;
    height: 50pt;
    z-index: -2;
  }
  .anime11 {
    margin-top: 2%;
    width: 90%;
    height: 450pt;
  }
  .anime12{
    margin-top: -40%;
    margin-left: 45%;
    width: 45%;
    height: 50pt;
  }
  .anime13 {
    margin-top: -90%;
    margin-left: 40%;
    width: 16%;
    height: 100pt;
    z-index: -2;
  }
  .first-p {
    font-size: 13pt;
    margin-right: auto;
    margin-left: auto;
  }
  .second-p {
    font-size: 41pt;
  }
  .third-p {
    font-size: 17pt;
    max-width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
  .show .first-p {
    font-size: 17pt;
    margin-top: -5%;
  }
  .show .second-p {
    font-size: 51pt;
  }
  .show .third-p {
    max-width: 50%;
    font-size: 22pt;
  }
  .show2 .anime > .anime1 {
    transition: transform 2s;
    transform: translate(500px, 1030px) scale(0.3);
    z-index: -2;
  }
  .show2 .anime > .anime2 {
    transition: transform 2.2s;
    transform: translate(630px, 870px) scale(0.3);
  }
  .show2 .anime > .anime3 {
    transition: transform 3s;
    transform: translate(280px, 1180px) scale(0);
    z-index: -2;
  }
  .show2 .anime > .anime4 {
    transition: transform 3.5s;
    transform: translate(42px, 1080px) scale(0);
  }
  .show2 .anime > .anime5 {
    transition: transform 4.1s;
    transform: translate(-270px, 1600px) scale(0);
    z-index: -2;
  }
  .show3 .anime > .anime3 {
    transition: transform 3s;
    transform: translate(-610px, 1820px) scale(0.4);
    z-index: -2;
  }
  .show3 .anime > .anime2 {
    transition: transform 3s;
    transform: translate(-430px, 1900px) scale(0.2);
    z-index: -2;
  }
  .show3 .anime > .anime4 {
    transition: transform 3.5s;
    transform: translate(-600px, 1850px) scale(0.5);
  }
  .show3 .anime > .anime1 {
    transition: transform 2s;
    transform: translate(-35px, 2040px) scale(0.3);
    z-index: -2;
  }
  .show3 .anime > .anime5 {
    transition: transform 2.1s;
    transform: translate(-950px, 2100px) scale(0.4);
    z-index: -2;
  }
}

/* Styles for screens with a width 1280px  */
@media (min-width: 1280px) {
  .title {
    font-size: 23pt;
  }
  .subTitle {
    max-width: 50%;
    font-size: 15pt;
  }
  .show {
    transform: translateY(90px) scale(0.99);
    transition: transform 2s;
  }
  .show .logo {
    transition: transform 1.5s;
    transform: translateY(-108px) scale(0.01);
    left: 42%;
  }
  .paragraph {
    gap: 70px;
    font-size: 12pt;
  }
}

/* */

@media (min-width: 1023px) and (max-width: 1025px) {
  .anime13 {
    margin-top: -140%;
    margin-left: 40%;
    width: 16%;
    height: 100pt;
    z-index: -2;
  }
  .show2 .anime > .anime1 {
    transition: transform 2s;
    transform: translate(580px, 900px) scale(0.5);
    z-index: -2;
  }
  .show2 .anime > .anime5 {
    transition: transform 4.1s;
    transform: translate(-80px, 1105px) scale(0.3);
    z-index: -2;
  }
  .show2 .anime > .anime2 {
    transition: transform 2.2s;
    transform: translate(130px, 1120px) scale(0);
  }
  .show3 .anime > .anime3 {
    transition: transform 3s;
    transform: translate(-420px, 1590px) scale(0.5);
    z-index: -2;
  }
  .show3 .anime > .anime2 {
    transition: transform 2s;
    transform: translate(-320px, 1670px) scale(0.4);
    z-index: -2;
  }
  .show3 .anime > .anime4 {
    transition: transform 3.5s;
    transform: translate(-370px, 1500px) scale(0.3);
  }
  .show3 .anime > .anime1 {
    transition: transform 4s;
    transform: translate(16px, 1590px) scale(0.39);
    z-index: -2;
  }
  .show3 .anime > .anime5 {
    transition: transform 2.1s;
    transform: translate(-384px, 1646px) scale(0.4);
    z-index: -2;
  }
}

/* Styles for screens with a 280px*/
@media (min-width: 280px) and (max-width: 281px){
  .show {
    transform: translateY(-120px) scale(0.99);
    transition: transform 2s;
  }
  .show .logo {
    transition: transform 1.5s;
    transform: translateY(-38px) scale(0.01);
    left: 3%;
  }
  .media {
    width: 15pt;
  }
  .first-p {
    font-size: 5pt;
  }
  .second-p {
    font-size: 14.5pt;
  }
  .third-p {
    font-size: 8pt;
  }
  .show .first-p {
    font-size: 8pt;
  }
  .show .second-p {
    font-size: 30pt;
  }
  .show .third-p {
    font-size: 8pt;
  }
  .show .small-logo {
    width: 60px;
  }
  .anime1 {
    width: 70px;
    height: 80px;
    margin-top: -5%;
    margin-left: -8%;
    }
  .anime2 {
    width: 40px;
    height: 30px;
    margin-left: -12%;
    margin-top: 12%;
  }
  .anime3 {
    width: 70px;
    height: 70px;
    margin-top: 1%;
  }
  .anime4 {
    width: 60px;
    height: 70px;
    margin-top: -3%;
  }
  .anime5 {
    width: 20px;
    height: 30px;
    margin-top: -8%;
    margin-left: -12%;
  }
}

/* Styles for screens with a min-width 412px and a max-width: 431px */
@media (min-width: 430px) and (max-width: 431px) {
  .show2 .anime > .anime1 {
    transition: transform 2s;
    transform: translate(190px, 1040px) scale(0.5);
    z-index: -2;
  }
  .show2 .anime > .anime5 {
    transition: transform 4.1s;
    transform: translate(20px, 1025px) scale(0.5);
    z-index: -2;
  }
  .show3 .anime > .anime1 {
    transition: transform 4s;
    transform: translate(140px, 2070px) scale(0.6);
    z-index: -2;
  }
  .show3 .anime > .anime3 {
    transition: transform 3s;
    transform: translate(-80px, 2000px) scale(0.8);
    z-index: -2;
  }
  .show3 .anime > .anime4 {
    transition: transform 3.5s;
    transform: translate(9px, 1970px) scale(0.7);
  }
  .show3 .anime > .anime5{
    transition: transform 3.5s;
    transform: translate(-170px, 2100px) scale(0.9);
  }
  .show3 .anime > .anime2 {
    transition: transform 2s;
    transform: translate(-50px, 2030px) scale(0.4);
    z-index: -2;
  }
}

/* Styles for screens with a width 391px  */
@media (min-width: 390px) and (max-width: 391px){
  .show {
    transform: translateY(-50px) scale(0.99);
    transition: transform 2s;
  }
  .show .first-p {
    font-size: 11pt;
  }
  .first-p {
    font-size: 7pt;
  }
  .third-p {
    font-size: 12pt;
  }
  .show3 .anime > .anime3 {
    transition: transform 3s;
    transform: translate(-80px, 2200px) scale(0.7);
    z-index: -2;
  }
  .show3 .anime > .anime2 {
    transition: transform 2s;
    transform: translate(-40px, 2280px) scale(0.4);
    z-index: -2;
  }
  .show3 .anime > .anime4 {
    transition: transform 3.5s;
    transform: translate(-40px, 2190px) scale(0.5);
  }
  .show3 .anime > .anime1 {
    transition: transform 4s;
    transform: translate(110px, 2290px) scale(0.6);
    z-index: -2;
  }
  .show3 .anime > .anime5 {
    transition: transform 2.1s;
    transform: translate(-154px, 2306px) scale(0.7);
    z-index: -2;
  }
}

/* Styles for screens with a width 540px  */
@media (min-width: 540px) and (max-width: 541px){
  .show {
    transform: translateY(-10px) scale(0.99);
    transition: transform 2s;
  }
  .first-p {
    font-size: 10pt;
  }
  .second-p {
    font-size: 29pt;
  }
  .third-p {
    font-size: 14pt;
  }
  .show .small-logo {
    width: 80px;
  }
  .show .first-p {
    font-size: 11pt;
  }
  .show .second-p {
    font-size:32pt;
  }
  .show .third-p {
    font-size: 13pt;
  }
  .anime1 {
    width: 120px;
    height: 110px;
    margin-top: -4%;
  }
  .anime2 {
    width: 40px;
    height: 60px;
    margin-left: -9%;
    margin-top: 12%;
  }
  .anime3 {
    width: 120px;
    height: 110px;
    margin-top: 1%;
  }
  .anime4 {
    width: 110px;
    height: 100px;
    margin-top: -3%;
  }
  .anime5 {
    width: 30px;
    height: 50px;
    margin-top: -8%;
    margin-left: -8%;
  }
  .show2 .anime > .anime1 {
    transform: translate(240px, 960px) scale(0.8);
  }
  .show3 .anime > .anime3 {
    transform: translate(-80px, 1890px) scale(0.7);
  }
  .show3 .anime > .anime2 {
    transform: translate(-60px, 2330px) scale(0.4);
  }
  .show3 .anime > .anime4 {
    transform: translate(0px, 1850px) scale(0.8);
  }
  .show3 .anime > .anime1 {
    transform: translate(160px, 1906px) scale(0.6);
  }
  .show3 .anime > .anime5 {
    transform: translate(-184px, 1946px) scale(0.7);
  }
}

@media ((min-width: 353px) and (max-width: 394px)) and ((min-height: 739px) and (max-height: 787px)) {
  .anime1 {
    width: 28%;
    height: 80px;
    margin-top: -2%;
    margin-left: 12px;
  }
  .anime2 {
    width: 12%;
    height: 30px;
    margin-left: -8%;
    margin-top: 16%;
  }
  .anime3 {
    width: 28%;
    height: 70px;
    margin-top: 6%;
  }
  .anime4 {
    width: 28%;
    height: 80px;
    margin-left: 2px;
  }
  .anime5 {
    width: 12%;
    height: 30px;
    margin-top: -3%;
    margin-left: -12%;
  }
  .anime7 {
    margin-top: 47%;
    width: 10%;
    height: 30pt;
    z-index: -1;
  }
  .anime12{
    margin-top: -40%;
    margin-left: 51%;
    width: 45%;
    height: 30pt;
  }
  .anime13 {
    margin-top: -95%;
    margin-left: 40%;
    width: 16%;
    height: 50pt;
  }
  .show2 .anime > .anime1 {
    transition: transform 2s;
    transform: translate(170px, 1150px) scale(0.8);
    z-index: -2;
  }
  .show2 .anime > .anime5 {
    transition: transform 4.1s;
    transform: translate(27px, 1149px) scale(0.8);
    z-index: -2;
  }
  .show3 .anime > .anime3 {
    transition: transform 3s;
    transform: translate(-80px, 2290px) scale(0.7);
    z-index: -2;
  }
  .show3 .anime > .anime2 {
    transition: transform 2s;
    transform: translate(-60px, 2350px) scale(0.4);
    z-index: -2;
  }
  .show3 .anime > .anime4 {
    transition: transform 3.5s;
    transform: translate(-10px, 2260px) scale(0.7);
  }
  .show3 .anime > .anime1 {
    transition: transform 4s;
    transform: translate(110px, 2376px) scale(0.6);
    z-index: -2;
  }
  .show3 .anime > .anime5 {
    transition: transform 2.1s;
    transform: translate(-184px, 2366px) scale(0.7);
    z-index: -2;
  }
}

@media ((min-width: 375px) and (max-width: 384px)) and ((min-height: 639px) and (max-height: 668px)) {
  .show2 .anime > .anime1 {
    transform: translate(170px, 1090px) scale(0.7);
  }
  .show3 .anime > .anime3 {
    transform: translate(-70px, 2200px) scale(0.7);
  }
  .show3 .anime > .anime2 {
    transform: translate(-60px, 2250px) scale(0.4);
  }
  .show3 .anime > .anime4 {
    transform: translate(0px, 2141px) scale(0.7);
  }
  .show3 .anime > .anime1 {
    transform: translate(120px, 2259px) scale(0.6);
  }
  .show3 .anime > .anime5 {
    transform: translate(-194px, 2276px) scale(0.7);
  }
}

@media ((min-width: 375px) and (max-width: 376px)) and ((min-height: 811px) and (max-height: 813px)) {
  .anime1 {
    width: 30%;
    height: 80px;
    margin-top: -4%;
  }
  .anime2 {
    width: 10%;
    height: 40px;
    margin-left: -9%;
    margin-top: 12%;
  }
  .anime3 {
    width: 30%;
    height: 80px;
    margin-top: 1%;
  }
  .anime4 {
    width: 30%;
    height: 80px;
    margin-top: -3%;
  }
  .anime5 {
    width: 10%;
    height: 30px;
    margin-top: -6%;
    margin-left: -8%;
  }
  .show2 .anime > .anime1 {
    transform: translate(170px, 1090px) scale(0.7);
  }
  .show3 .anime > .anime3 {
    transform: translate(-70px, 2200px) scale(0.7);
  }
  .show3 .anime > .anime2 {
    transform: translate(-60px, 2250px) scale(0.4);
  }
  .show3 .anime > .anime4 {
    transform: translate(0px, 2141px) scale(0.7);
  }
  .show3 .anime > .anime1 {
    transform: translate(120px, 2259px) scale(0.6);
  }
  .show3 .anime > .anime5 {
    transform: translate(-194px, 2276px) scale(0.7);
  }
}

@media ((min-width: 390px) and (max-width: 394px)) and ((min-height: 785px) and (max-height: 885px)) {
  .anime1 {
    width: 30%;
    height: 80px;
    margin-top: -4%;
  }
  .anime2 {
    width: 10%;
    height: 40px;
    margin-left: -9%;
    margin-top: 12%;
  }
  .anime3 {
    width: 30%;
    height: 80px;
    margin-top: 1%;
  }
  .anime4 {
    width: 30%;
    height: 80px;
    margin-top: -3%;
  }
  .anime5 {
    width: 10%;
    height: 30px;
    margin-top: -6%;
    margin-left: -8%;
  }
  .anime7 {
    margin-top: 45%;
    width: 9%;
    height: 5pt;
  }
  .anime12{
    margin-top: -40%;
    margin-left: 51%;
    width: 50%;
    height: 30pt;
  }
  .anime13 {
    margin-top: -84%;
    margin-left: 40%;
    width: 15%;
    height: 45pt;
  }
  .show2 .anime > .anime1 {
    transform: translate(170px, 1080px) scale(0.63);
  }
  .show2 .anime > .anime2 {
    transition: transform 2.2s;
    transform: translate(175px, 1029px) scale(0.6);
  }
  .show3 .anime > .anime3 {
    transform: translate(-70px, 2150px) scale(0.7);
  }
  .show3 .anime > .anime2 {
    transform: translate(-60px, 2219px) scale(0.4);
  }
  .show3 .anime > .anime4 {
    transform: translate(-10px, 2080px) scale(0.75);
  }
  .show3 .anime > .anime1 {
    transform: translate(120px, 2209px) scale(0.6);
  }
  .show3 .anime > .anime5 {
    transform: translate(-194px, 2240px) scale(0.75);
  }
  .show2 .anime > .anime5 {
    transition: transform 4.1s;
    transform: translate(-20px, 1155px) scale(0.76);
  }
}

@media ((min-width: 392px) and (max-width: 394px)) and ((min-height: 785px) and (max-height: 787px)) {
  .show3 .anime > .anime3 {
    transform: translate(-70px, 2110px) scale(0.7);
  }
  .show3 .anime > .anime2 {
    transform: translate(-60px, 2200px) scale(0.4);
  }
  .show3 .anime > .anime4 {
    transform: translate(-10px, 2060px) scale(0.75);
  }
  .show3 .anime > .anime1 {
    transform: translate(120px, 2200px) scale(0.6);
  }
  .show3 .anime > .anime5 {
    transform: translate(-194px, 2220px) scale(0.75);
  }
}

@media (min-height: 359px) and (max-height: 361px) {
  .anime1 {
    width: 30%;
    height: 80px;
    margin-top: -2%;
    margin-left: 12px;
  }
  .anime2 {
    width: 12%;
    height: 30px;
    margin-left: -8%;
    margin-top: 12%;
  }
  .anime3 {
    width: 28%;
    height: 70px;
    margin-top: 6%;
  }
  .anime4 {
    width: 30%;
    height: 80px;
    margin-top: -1%;
    margin-left: 2px;
  }
  .anime5 {
    width: 12%;
    height: 30px;
    margin-top: -5%;
    margin-left: -10%;
  }
  .anime10 {
    margin-top: -7%;
    width: 100%;
  }
  .anime12{
    margin-top: -30%;
  }
  .anime13 {
    margin-top: -65%;
  }
  .show2 .anime > .anime2 {
    transform: translate(160px, 970px) scale(0.35);
  }
  .show2 .anime > .anime5 {
    transform: translate(-40px, 870px) scale(0.8);
  }
  .show3 .anime > .anime4 {
    transform: translate(-15px, 1680px) scale(0.8);
  }
  .show3 .anime > .anime1 {
    transform: translate(190px, 1837px) scale(0.59);
  }
  .show3 .anime > .anime5 {
    transform: translate(-24px, 1680px) scale(0.7);
  }
  .show3 .anime > .anime3 {
    transform: translate(-100px, 1690px) scale(0.7);
  }
}
</style>
