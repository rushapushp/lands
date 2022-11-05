const tokens = [
  {
    symbol: 'FIL',
    name: 'Filecoin',
    decimals: 18,
    address: '0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153',
    logoURI:
      'https://tokens.1inch.io/0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153.png',
  },
  {
    symbol: 'sBDO',
    name: 'bDollar Share',
    decimals: 18,
    address: '0x0d9319565be7f53cefe84ad201be3f40feae2740',
    logoURI:
      'https://tokens.1inch.io/0x0d9319565be7f53cefe84ad201be3f40feae2740.png',
  },
  {
    symbol: 'MOONMOON',
    name: 'MoonMoon',
    decimals: 9,
    address: '0x0e0e877894a101ad8711ae3a0194fa44ca837a79',
    logoURI:
      'https://tokens.1inch.io/0x0e0e877894a101ad8711ae3a0194fa44ca837a79.png',
  },
  {
    symbol: 'CAKE',
    name: 'PancakeSwap Token',
    decimals: 18,
    address: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    logoURI:
      'https://tokens.1inch.io/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82.png',
  },
  {
    symbol: 'ATOM',
    name: 'Cosmos Token',
    decimals: 18,
    address: '0x0eb3a705fc54725037cc9e008bdede697f62f335',
    logoURI:
      'https://tokens.1inch.io/0x0eb3a705fc54725037cc9e008bdede697f62f335.png',
  },
  {
    symbol: 'PERL',
    name: 'Perlin',
    decimals: 18,
    address: '0x0f9e4d49f25de22c2202af916b681fbb3790497b',
    logoURI:
      'https://tokens.1inch.io/0x0f9e4d49f25de22c2202af916b681fbb3790497b.png',
  },
  {
    symbol: 'Warden',
    name: 'WardenSwap Token',
    decimals: 18,
    address: '0x0feadcc3824e7f3c12f40e324a60c23ca51627fc',
    logoURI:
      'https://tokens.1inch.io/0x0feadcc3824e7f3c12f40e324a60c23ca51627fc.png',
  },
  {
    symbol: 'SHIELD',
    name: 'Shield Protocol',
    decimals: 18,
    address: '0x00f97c17f4dc4f3bfd2dd9ce5e67f3a339a8a261',
    logoURI:
      'https://tokens.1inch.io/0x00f97c17f4dc4f3bfd2dd9ce5e67f3a339a8a261.png',
  },
  {
    symbol: 'DAI',
    name: 'Dai Token',
    decimals: 18,
    address: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    logoURI:
      'https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png',
  },
  {
    symbol: 'SACT',
    name: 'srnArtGallery',
    decimals: 18,
    address: '0x1ba8c21c623c843cd4c60438d70e7ad50f363fbb',
    logoURI:
      'https://tokens.1inch.io/0x1ba8c21c623c843cd4c60438d70e7ad50f363fbb.png',
  },
  {
    symbol: 'TORN',
    name: 'TornadoCash',
    decimals: 18,
    address: '0x1ba8d3c4c219b124d351f603060663bd1bcd9bbf',
    logoURI:
      'https://tokens.1inch.io/0x1ba8d3c4c219b124d351f603060663bd1bcd9bbf.png',
  },
  {
    symbol: 'ZEC',
    name: 'Zcash Token',
    decimals: 18,
    address: '0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb',
    logoURI:
      'https://tokens.1inch.io/0x1ba42e5193dfa8b03d15dd1b86a3113bbbef8eeb.png',
  },
  {
    symbol: 'SQUID',
    name: 'SQUID',
    decimals: 9,
    address: '0x1c3c3941acb8a9be35e50f086fae6a481f7d9df7',
    logoURI:
      'https://tokens.1inch.io/0x1c3c3941acb8a9be35e50f086fae6a481f7d9df7.png',
  },
  {
    symbol: 'ZD',
    name: 'ZD',
    decimals: 18,
    address: '0x1c213179c2c08906fb759878860652a61727ed14',
    logoURI:
      'https://tokens.1inch.io/0x1c213179c2c08906fb759878860652a61727ed14.png',
  },
  {
    symbol: 'HAKKA',
    name: 'Hakka Finance on xDai on BSC',
    decimals: 18,
    address: '0x1d1eb8e8293222e1a29d2c0e4ce6c0acfd89aaac',
    logoURI:
      'https://tokens.1inch.io/0x1d1eb8e8293222e1a29d2c0e4ce6c0acfd89aaac.png',
  },
  {
    symbol: 'XRP',
    name: 'XRP Token',
    decimals: 18,
    address: '0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe',
    logoURI:
      'https://tokens.1inch.io/0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe.png',
  },
  {
    symbol: 'deUSDC',
    name: 'deBridge USD Coin',
    decimals: 6,
    address: '0x1ddcaa4ed761428ae348befc6718bcb12e63bfaa',
    logoURI:
      'https://tokens.1inch.io/0x1ddcaa4ed761428ae348befc6718bcb12e63bfaa_2.png',
  },
  {
    symbol: 'bBADGER',
    name: 'Badger Sett Badger',
    decimals: 18,
    address: '0x1f7216fdb338247512ec99715587bb97bbf96eae',
    logoURI:
      'https://tokens.1inch.io/0x1f7216fdb338247512ec99715587bb97bbf96eae.png',
  },
  {
    symbol: 'NEAR',
    name: 'NEAR Protocol',
    decimals: 18,
    address: '0x1fa4a73a3f0133f0025378af00236f3abdee5d63',
    logoURI:
      'https://tokens.1inch.io/0x1fa4a73a3f0133f0025378af00236f3abdee5d63.png',
  },
  {
    symbol: 'ATL',
    name: 'Atlantis',
    decimals: 18,
    address: '0x1fd991fb6c3102873ba68a4e6e6a87b3a5c10271',
    logoURI:
      'https://tokens.1inch.io/0x1fd991fb6c3102873ba68a4e6e6a87b3a5c10271.png',
  },
  {
    symbol: 'TXL',
    name: 'Tixl Token',
    decimals: 18,
    address: '0x1ffd0b47127fdd4097e54521c9e2c7f0d66aafc5',
    logoURI:
      'https://tokens.1inch.io/0x1ffd0b47127fdd4097e54521c9e2c7f0d66aafc5.png',
  },
  {
    symbol: 'CLIMB',
    name: 'Climb Token Finance',
    decimals: 8,
    address: '0x2a1d286ed5edad78befd6e0d8beb38791e8cd69d',
    logoURI:
      'https://tokens.1inch.io/0x2a1d286ed5edad78befd6e0d8beb38791e8cd69d.png',
  },
  {
    symbol: 'ElonGate',
    name: 'ElonGate',
    decimals: 9,
    address: '0x2a9718deff471f3bb91fa0eceab14154f150a385',
    logoURI:
      'https://tokens.1inch.io/0x2a9718deff471f3bb91fa0eceab14154f150a385.png',
  },
  {
    symbol: 'ACCEL',
    name: 'ACCEL',
    decimals: 18,
    address: '0x2cace984dab08bd192a7fd044276060cb955dd9c',
    logoURI:
      'https://tokens.1inch.io/0x2cace984dab08bd192a7fd044276060cb955dd9c.png',
  },
  {
    symbol: 'TFF',
    name: 'Tutti Frutti',
    decimals: 18,
    address: '0x2d69c55baecefc6ec815239da0a985747b50db6e',
    logoURI:
      'https://tokens.1inch.io/0x2d69c55baecefc6ec815239da0a985747b50db6e.png',
  },
  {
    symbol: 'deFRAX',
    name: 'deBridge Frax',
    decimals: 18,
    address: '0x2d871631058827b703535228fb9ab5f35cf19e76',
    logoURI:
      'https://tokens.1inch.io/0x2d871631058827b703535228fb9ab5f35cf19e76.png',
  },
  {
    symbol: 'NFTL',
    name: 'NFTL Token',
    decimals: 18,
    address: '0x2f7b4c618dc8e0bba648e54cdadce3d8361f9816',
    logoURI:
      'https://tokens.1inch.io/0x2f7b4c618dc8e0bba648e54cdadce3d8361f9816.png',
  },
  {
    symbol: 'MARSH',
    name: 'UnmarshalToken',
    decimals: 18,
    address: '0x2fa5daf6fe0708fbd63b1a7d1592577284f52256',
    logoURI:
      'https://tokens.1inch.io/0x5a666c7d92e5fa7edcb6390e4efd6d0cdd69cf37.png',
  },
  {
    symbol: 'MYST',
    name: 'Mysterium',
    decimals: 18,
    address: '0x2ff0b946a6782190c4fe5d4971cfe79f0b6e4df2',
    logoURI:
      'https://tokens.1inch.io/0x2ff0b946a6782190c4fe5d4971cfe79f0b6e4df2.png',
  },
  {
    symbol: 'vSXP',
    name: 'Venus SXP',
    decimals: 8,
    address: '0x2ff3d0f6990a40261c66e1ff2017acbc282eb6d0',
    logoURI:
      'https://tokens.1inch.io/0x2ff3d0f6990a40261c66e1ff2017acbc282eb6d0.png',
  },
  {
    symbol: 'FUSII',
    name: 'Fusible | Fusible.io',
    decimals: 18,
    address: '0x3a50d6daacc82f17a2434184fe904fc45542a734',
    logoURI:
      'https://tokens.1inch.io/0x4c924a1fe185c6c6f870bc6bf1762b832208d748.png',
  },
  {
    symbol: 'POLAR',
    name: 'Polaris',
    decimals: 18,
    address: '0x3a5325f0e5ee4da06a285e988f052d4e45aa64b4',
    logoURI:
      'https://tokens.1inch.io/0x1c545e9943cfd1b41e60a7917465911fa00fc28c.png',
  },
  {
    symbol: 'SPG',
    name: 'SPONGE',
    decimals: 9,
    address: '0x3aabcf53a1930a42e18d938c019e83ebee50a849',
    logoURI:
      'https://tokens.1inch.io/0x3aabcf53a1930a42e18d938c019e83ebee50a849.png',
  },
  {
    symbol: 'SAFEMARS',
    name: 'SafeMars',
    decimals: 9,
    address: '0x3ad9594151886ce8538c1ff615efa2385a8c3a88',
    logoURI:
      'https://tokens.1inch.io/0x3ad9594151886ce8538c1ff615efa2385a8c3a88.png',
  },
  {
    symbol: 'SAFESTAR',
    name: 'SafeStar',
    decimals: 9,
    address: '0x3c00f8fcc8791fa78daa4a480095ec7d475781e2',
    logoURI:
      'https://tokens.1inch.io/0x3c00f8fcc8791fa78daa4a480095ec7d475781e2.png',
  },
  {
    symbol: 'ROOM',
    name: 'OptionRoom Token',
    decimals: 18,
    address: '0x3c45a24d36ab6fc1925533c1f57bc7e1b6fba8a4',
    logoURI:
      'https://tokens.1inch.io/0x3c45a24d36ab6fc1925533c1f57bc7e1b6fba8a4.png',
  },
  {
    symbol: 'ETC',
    name: 'Ethereum Classic',
    decimals: 18,
    address: '0x3d6545b08693dae087e957cb1180ee38b9e3c25e',
    logoURI:
      'https://tokens.1inch.io/0x3d6545b08693dae087e957cb1180ee38b9e3c25e.png',
  },
  {
    symbol: 'DEGOV2',
    name: 'dego.finance',
    decimals: 18,
    address: '0x3da932456d082cba208feb0b096d49b202bf89c8',
    logoURI:
      'https://tokens.1inch.io/0x3da932456d082cba208feb0b096d49b202bf89c8.png',
  },
  {
    symbol: 'ADA',
    name: 'Cardano Token',
    decimals: 18,
    address: '0x3ee2200efb3400fabb9aacf31297cbdd1d435d47',
    logoURI:
      'https://tokens.1inch.io/0x3ee2200efb3400fabb9aacf31297cbdd1d435d47.png',
  },
  {
    symbol: 'POTS',
    name: 'Moonpot',
    decimals: 18,
    address: '0x3fcca8648651e5b974dd6d3e50f61567779772a8',
    logoURI:
      'https://tokens.1inch.io/0x3fcca8648651e5b974dd6d3e50f61567779772a8.png',
  },
  {
    symbol: 'ITAM',
    name: 'ITAM',
    decimals: 18,
    address: '0x04c747b40be4d535fc83d09939fb0f626f32800b',
    logoURI:
      'https://tokens.1inch.io/0x04c747b40be4d535fc83d09939fb0f626f32800b.png',
  },
  {
    symbol: 'MILK2',
    name: 'MilkyWay Token by SpaceSwap v2',
    decimals: 18,
    address: '0x4a5a34212404f30c5ab7eb61b078fa4a55adc5a5',
    logoURI:
      'https://tokens.1inch.io/0x80c8c3dcfb854f9542567c8dac3f44d709ebc1de.png',
  },
  {
    symbol: 'POODL',
    name: 'Poodl',
    decimals: 9,
    address: '0x4a68c250486a116dc8d6a0c5b0677de07cc09c5d',
    logoURI:
      'https://tokens.1inch.io/0x56a980328aee33aabb540a02e002c8323326bf36.png',
  },
  {
    symbol: 'XEND',
    name: 'XEND',
    decimals: 18,
    address: '0x4a080377f83d669d7bb83b3184a8a5e61b500608',
    logoURI:
      'https://tokens.1inch.io/0x4a080377f83d669d7bb83b3184a8a5e61b500608.png',
  },
  {
    symbol: 'TWT',
    name: 'Trust Wallet',
    decimals: 18,
    address: '0x4b0f1812e5df2a09796481ff14017e6005508003',
    logoURI:
      'https://tokens.1inch.io/0x4b0f1812e5df2a09796481ff14017e6005508003.png',
  },
  {
    symbol: 'VAI',
    name: 'VAI Stablecoin',
    decimals: 18,
    address: '0x4bd17003473389a42daf6a0a729f6fdb328bbbd7',
    logoURI:
      'https://tokens.1inch.io/0x4bd17003473389a42daf6a0a729f6fdb328bbbd7.png',
  },
  {
    symbol: 'PET',
    name: 'Pet Token',
    decimals: 18,
    address: '0x4d4e595d643dc61ea7fcbf12e4b1aaa39f9975b8',
    logoURI:
      'https://tokens.1inch.io/0x4d4e595d643dc61ea7fcbf12e4b1aaa39f9975b8.png',
  },
  {
    symbol: 'WOW',
    name: 'WOWswap',
    decimals: 18,
    address: '0x4da996c5fe84755c80e108cf96fe705174c5e36a',
    logoURI:
      'https://tokens.1inch.io/0x4da996c5fe84755c80e108cf96fe705174c5e36a.png',
  },
  {
    symbol: 'LOT',
    name: 'Lottery Token',
    decimals: 9,
    address: '0x4e7ae924fd9a5d60b56be486b2900efe0c6a9ca7',
    logoURI:
      'https://tokens.1inch.io/0x4e7ae924fd9a5d60b56be486b2900efe0c6a9ca7.png',
  },
  {
    symbol: 'LUNAR',
    name: 'LunarHighway',
    decimals: 9,
    address: '0x4e8a9d0bf525d78fd9e0c88710099f227f6924cf',
    logoURI:
      'https://tokens.1inch.io/0x4e8a9d0bf525d78fd9e0c88710099f227f6924cf.png',
  },
  {
    symbol: 'FINE',
    name: 'Refinable',
    decimals: 18,
    address: '0x4e6415a5727ea08aae4580057187923aec331227',
    logoURI:
      'https://tokens.1inch.io/0x4e6415a5727ea08aae4580057187923aec331227.png',
  },
  {
    symbol: 'QA',
    name: 'Quantum Assets Token',
    decimals: 18,
    address: '0x4ef29f3b804c316ba8ba464a765c601fc092a2e9',
    logoURI:
      'https://tokens.1inch.io/0x4ef29f3b804c316ba8ba464a765c601fc092a2e9.png',
  },
  {
    symbol: 'ORE',
    name: 'pTokens ORE [via ChainPort.io]',
    decimals: 18,
    address: '0x4ef285c8cbe52267c022c39da98b97ca4b7e2ff9',
    logoURI:
      'https://tokens.1inch.io/0x4ef285c8cbe52267c022c39da98b97ca4b7e2ff9.png',
  },
  {
    symbol: 'vBSWAP',
    name: 'vSWAP.fi',
    decimals: 18,
    address: '0x4f0ed527e8a95ecaa132af214dfd41f30b361600',
    logoURI:
      'https://tokens.1inch.io/0x4f0ed527e8a95ecaa132af214dfd41f30b361600.png',
  },
  {
    symbol: 'Ramen',
    name: 'Ramen Token',
    decimals: 18,
    address: '0x4f47a0d15c1e53f3d94c069c7d16977c29f9cb6b',
    logoURI:
      'https://tokens.1inch.io/0x4f47a0d15c1e53f3d94c069c7d16977c29f9cb6b.png',
  },
  {
    symbol: 'NAUT',
    name: 'Astronaut',
    decimals: 8,
    address: '0x05b339b0a346bf01f851dde47a5d485c34fe220c',
    logoURI:
      'https://tokens.1inch.io/0x05b339b0a346bf01f851dde47a5d485c34fe220c.png',
  },
  {
    symbol: 'JulD',
    name: 'JulSwap',
    decimals: 18,
    address: '0x5a41f637c3f7553dba6ddc2d3ca92641096577ea',
    logoURI:
      'https://tokens.1inch.io/0x5a41f637c3f7553dba6ddc2d3ca92641096577ea.png',
  },
  {
    symbol: 'BSCPAD',
    name: 'BSCPAD.com',
    decimals: 18,
    address: '0x5a3010d4d8d3b5fb49f8b6e57fb9e48063f16700',
    logoURI:
      'https://tokens.1inch.io/0x5a3010d4d8d3b5fb49f8b6e57fb9e48063f16700.png',
  },
  {
    symbol: 'BSCX',
    name: 'BSCX',
    decimals: 18,
    address: '0x5ac52ee5b2a633895292ff6d8a89bb9190451587',
    logoURI:
      'https://tokens.1inch.io/0x5ac52ee5b2a633895292ff6d8a89bb9190451587.png',
  },
  {
    symbol: 'MIR',
    name: 'Wrapped MIR Token',
    decimals: 18,
    address: '0x5b6dcf557e2abe2323c48445e8cc948910d8c2c9',
    logoURI:
      'https://tokens.1inch.io/0x09a3ecafa817268f77be1283176b946c4ff2e608.png',
  },
  {
    symbol: 'ACSI',
    name: 'ACryptoS(I)',
    decimals: 18,
    address: '0x5b17b4d5e4009b5c43e3e3d63a5229f794cba389',
    logoURI:
      'https://tokens.1inch.io/0x5b17b4d5e4009b5c43e3e3d63a5229f794cba389.png',
  },
  {
    symbol: 'PDO',
    name: 'pDollar',
    decimals: 18,
    address: '0x5bccfbd33873a5498f8406146868eddd5e998962',
    logoURI:
      'https://tokens.1inch.io/0x5bccfbd33873a5498f8406146868eddd5e998962.png',
  },
  {
    symbol: 'zSEED',
    name: 'zSeedToken',
    decimals: 18,
    address: '0x5cd50aae14e14b3fdf3ff13c7a40e8cf5ae8b0a5',
    logoURI:
      'https://tokens.1inch.io/0x5cd50aae14e14b3fdf3ff13c7a40e8cf5ae8b0a5.png',
  },
  // {
  //   symbol: 'BONDLY',
  //   name: 'Bondly Token',
  //   decimals: 18,
  //   address: '0x5d0158a5c3ddf47d4ea4517d8db0d76aa2e87563',
  //   logoURI:
  //     'https://tokens.1inch.io/0x5d0158a5c3ddf47d4ea4517d8db0d76aa2e87563.png',
  // },
  {
    symbol: 'ALLOY',
    name: 'HyperAlloy',
    decimals: 18,
    address: '0x5ef5994fa33ff4eb6c82d51ee1dc145c546065bd',
    logoURI:
      'https://tokens.1inch.io/0x5ef5994fa33ff4eb6c82d51ee1dc145c546065bd.png',
  },
  {
    symbol: 'vBCH',
    name: 'Venus BCH',
    decimals: 8,
    address: '0x5f0388ebc2b94fa8e123f404b79ccf5f40b29176',
    logoURI:
      'https://tokens.1inch.io/0x5f0388ebc2b94fa8e123f404b79ccf5f40b29176.png',
  },
  {
    symbol: 'SAFEGALAXY',
    name: 'SafeGalaxy',
    decimals: 9,
    address: '0x6b51231c43b1604815313801db5e9e614914d6e4',
    logoURI:
      'https://tokens.1inch.io/0x6b51231c43b1604815313801db5e9e614914d6e4.png',
  },
  {
    symbol: 'MRAT',
    name: 'Moon Rat Token',
    decimals: 9,
    address: '0x6d949f9297a522c0f97c232cc209a67bd7cfa471',
    logoURI:
      'https://tokens.1inch.io/0x6d949f9297a522c0f97c232cc209a67bd7cfa471.png',
  },
  {
    symbol: 'DRIVENx',
    name: 'DVX',
    decimals: 18,
    address: '0x6db3972c6a5535708e7a4f7ad52f24d178d9a93e',
    logoURI:
      'https://tokens.1inch.io/0x6db3972c6a5535708e7a4f7ad52f24d178d9a93e.png',
  },
  {
    symbol: 'RVL',
    name: 'Revolotto',
    decimals: 18,
    address: '0x6dc3d0d6ec970bf5522611d8eff127145d02b675',
    logoURI:
      'https://tokens.1inch.io/0x6dc3d0d6ec970bf5522611d8eff127145d02b675.png',
  },
  {
    symbol: 'anyETH',
    name: 'ANY Ethereum',
    decimals: 18,
    address: '0x6f817a0ce8f7640add3bc0c1c2298635043c2423',
    logoURI:
      'https://tokens.1inch.io/0x6f817a0ce8f7640add3bc0c1c2298635043c2423.png',
  },
  {
    symbol: 'BHC',
    name: 'Billion Happiness',
    decimals: 18,
    address: '0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4',
    logoURI:
      'https://tokens.1inch.io/0x6fd7c98458a943f469e1cf4ea85b173f5cd342f4.png',
  },
  {
    symbol: 'AQUAGOAT',
    name: 'Aquagoat',
    decimals: 9,
    address: '0x07af67b392b7a202fad8e0fbc64c34f33102165b',
    logoURI:
      'https://tokens.1inch.io/0x07af67b392b7a202fad8e0fbc64c34f33102165b.png',
  },
  {
    symbol: 'WATCH',
    name: 'yieldwatch',
    decimals: 18,
    address: '0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0',
    logoURI:
      'https://tokens.1inch.io/0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0.png',
  },
  {
    symbol: 'TRADE',
    name: 'UniTrade',
    decimals: 18,
    address: '0x7af173f350d916358af3e218bdf2178494beb748',
    logoURI:
      'https://tokens.1inch.io/0x7af173f350d916358af3e218bdf2178494beb748.png',
  },
  {
    symbol: 'IRON',
    name: 'IRON Stablecoin',
    decimals: 18,
    address: '0x7b65b489fe53fce1f6548db886c08ad73111ddd8',
    logoURI:
      'https://tokens.1inch.io/0x7b65b489fe53fce1f6548db886c08ad73111ddd8.png',
  },
  {
    symbol: 'RUPEE',
    name: 'Rupee Token',
    decimals: 18,
    address: '0x7b0409a3a3f79baa284035d48e1dfd581d7d7654',
    logoURI:
      'https://tokens.1inch.io/0x7b0409a3a3f79baa284035d48e1dfd581d7d7654.png',
  },
  {
    symbol: 'CZF',
    name: 'CZFarm',
    decimals: 18,
    address: '0x7c1608c004f20c3520f70b924e2bfef092da0043',
    logoURI:
      'https://tokens.1inch.io/0x7c1608c004f20c3520f70b924e2bfef092da0043.png',
  },
  {
    symbol: 'OPERAND',
    name: 'Operand',
    decimals: 8,
    address: '0x7cb2f28505e733f60c0db208afaa321c792f6cf4',
    logoURI:
      'https://tokens.1inch.io/0x7cb2f28505e733f60c0db208afaa321c792f6cf4.png',
  },
  {
    symbol: 'RVZ',
    name: 'Revoluzion',
    decimals: 9,
    address: '0x7d89c67d3c4e72e8c5c64be201dc225f99d16aca',
    logoURI:
      'https://tokens.1inch.io/0x7d89c67d3c4e72e8c5c64be201dc225f99d16aca.png',
  },
  {
    symbol: 'SYL',
    name: 'SYL',
    decimals: 6,
    address: '0x7e52a123ed6db6ac872a875552935fbbd2544c86',
    logoURI:
      'https://tokens.1inch.io/0x7e52a123ed6db6ac872a875552935fbbd2544c86.png',
  },
  {
    symbol: 'POLS',
    name: 'PolkastarterToken',
    decimals: 18,
    address: '0x7e624fa0e1c4abfd309cc15719b7e2580887f570',
    logoURI:
      'https://tokens.1inch.io/0x7e624fa0e1c4abfd309cc15719b7e2580887f570.png',
  },
  {
    symbol: 'MOONRISE',
    name: 'MoonRise',
    decimals: 9,
    address: '0x7ee7f14427cc41d6db17829eb57dc74a26796b9d',
    logoURI:
      'https://tokens.1inch.io/0x7ee7f14427cc41d6db17829eb57dc74a26796b9d.png',
  },
  {
    symbol: 'WHIRL',
    name: 'Whirl Finance',
    decimals: 18,
    address: '0x7f479d78380ad00341fdd7322fe8aef766e29e5a',
    logoURI:
      'https://tokens.1inch.io/0x7f479d78380ad00341fdd7322fe8aef766e29e5a.png',
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 18,
    address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    logoURI:
      'https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
  },
  {
    symbol: 'WOOP',
    name: 'Woonkly Power',
    decimals: 18,
    address: '0x8b303d5bbfbbf46f1a4d9741e491e06986894e18',
    logoURI:
      'https://tokens.1inch.io/0x8b303d5bbfbbf46f1a4d9741e491e06986894e18.png',
  },
  {
    symbol: 'SPH',
    name: 'Sphynx Network',
    decimals: 18,
    address: '0x8bac6b4af65c8c1967a0fbc27cd37fd6059daa00',
    logoURI:
      'https://tokens.1inch.io/0x8bac6b4af65c8c1967a0fbc27cd37fd6059daa00.png',
  },
  {
    symbol: 'MSC',
    name: 'Monster Slayer Cash',
    decimals: 18,
    address: '0x8c784c49097dcc637b93232e15810d53871992bf',
    logoURI:
      'https://tokens.1inch.io/0x8c784c49097dcc637b93232e15810d53871992bf.png',
  },
  {
    symbol: 'CMERGE',
    name: 'Coin Merge',
    decimals: 9,
    address: '0x8d3e3a57c5f140b5f9feb0d43d37a347ee01c851',
    logoURI:
      'https://tokens.1inch.io/0x8d3e3a57c5f140b5f9feb0d43d37a347ee01c851.png',
  },
  {
    symbol: 'TFT',
    name: 'TFT on BSC',
    decimals: 7,
    address: '0x8f0fb159380176d324542b3a7933f0c2fd0c2bbf',
    logoURI:
      'https://tokens.1inch.io/0x8f0fb159380176d324542b3a7933f0c2fd0c2bbf.png',
  },
  {
    symbol: 'ALPACA',
    name: 'AlpacaToken',
    decimals: 18,
    address: '0x8f0528ce5ef7b51152a59745befdd91d97091d2f',
    logoURI:
      'https://tokens.1inch.io/0x8f0528ce5ef7b51152a59745befdd91d97091d2f.png',
  },
  {
    symbol: 'BCH',
    name: 'Bitcoin Cash Token',
    decimals: 18,
    address: '0x8ff795a6f4d97e7887c79bea79aba5cc76444adf',
    logoURI:
      'https://tokens.1inch.io/0x8ff795a6f4d97e7887c79bea79aba5cc76444adf.png',
  },
  {
    symbol: 'UNCX',
    name: 'UniCrypt on xDai on BSC',
    decimals: 18,
    address: '0x09a6c44c3947b69e2b45f4d51b67e6a39acfb506',
    logoURI:
      'https://tokens.1inch.io/0x09a6c44c3947b69e2b45f4d51b67e6a39acfb506.png',
  },
  {
    symbol: 'WWY',
    name: 'WeWay Token',
    decimals: 18,
    address: '0x9ab70e92319f0b9127df78868fd3655fb9f1e322',
    logoURI:
      'https://tokens.1inch.io/0x9ab70e92319f0b9127df78868fd3655fb9f1e322.png',
  },
  {
    symbol: 'LAND',
    name: 'Landshare Token',
    decimals: 18,
    address: '0x9d986a3f147212327dd658f712d5264a73a1fdb0',
    logoURI:
      'https://tokens.1inch.io/0x9d986a3f147212327dd658f712d5264a73a1fdb0.png',
  },
  {
    symbol: 'TKO',
    name: 'Tokocrypto Token',
    decimals: 18,
    address: '0x9f589e3eabe42ebc94a44727b3f3531c0c877809',
    logoURI:
      'https://tokens.1inch.io/0x9f589e3eabe42ebc94a44727b3f3531c0c877809.png',
  },
  {
    symbol: 'FREE',
    name: 'FREE coin BSC',
    decimals: 18,
    address: '0x12e34cdf6a031a10fe241864c32fb03a4fdad739',
    logoURI:
      'https://tokens.1inch.io/0x12e34cdf6a031a10fe241864c32fb03a4fdad739.png',
  },
  {
    symbol: 'bSRK',
    name: 'SparkPoint',
    decimals: 18,
    address: '0x14b1166ab53a237c8ceaee2bbc4bbca200cb7da8',
    logoURI:
      'https://tokens.1inch.io/0x14b1166ab53a237c8ceaee2bbc4bbca200cb7da8.png',
  },
  {
    symbol: 'DND',
    name: 'DungeonSwap Token',
    decimals: 18,
    address: '0x14c358b573a4ce45364a3dbd84bbb4dae87af034',
    logoURI:
      'https://tokens.1inch.io/0x14c358b573a4ce45364a3dbd84bbb4dae87af034.png',
  },
  {
    symbol: 'PRNTR',
    name: 'PRNTR',
    decimals: 18,
    address: '0x016c8da9d916905a00ef26a2e7dc2ee67b6020cf',
    logoURI:
      'https://tokens.1inch.io/0x016c8da9d916905a00ef26a2e7dc2ee67b6020cf.png',
  },
  {
    symbol: 'AIRT',
    name: 'AirNFT Token',
    decimals: 18,
    address: '0x016cf83732f1468150d87dcc5bdf67730b3934d3',
    logoURI:
      'https://tokens.1inch.io/0x016cf83732f1468150d87dcc5bdf67730b3934d3.png',
  },
  {
    symbol: 'OLYMPUS',
    name: 'OLYMPUS',
    decimals: 9,
    address: '0x18b426813731c144108c6d7faf5ede71a258fd9a',
    logoURI:
      'https://tokens.1inch.io/0x18b426813731c144108c6d7faf5ede71a258fd9a.png',
  },
  {
    symbol: 'xMARK',
    name: 'Standard on xDai on BSC',
    decimals: 9,
    address: '0x26a5dfab467d4f58fb266648cae769503cec9580',
    logoURI:
      'https://tokens.1inch.io/0x26a5dfab467d4f58fb266648cae769503cec9580.png',
  },
  {
    symbol: 'CUMMIES',
    name: 'CumRocket',
    decimals: 18,
    address: '0x27ae27110350b98d564b9a3eed31baebc82d878d',
    logoURI:
      'https://tokens.1inch.io/0x27ae27110350b98d564b9a3eed31baebc82d878d.png',
  },
  {
    symbol: 'PURSE',
    name: 'PURSE TOKEN',
    decimals: 18,
    address: '0x29a63f4b209c29b4dc47f06ffa896f32667dad2c',
    logoURI:
      'https://tokens.1inch.io/0x29a63f4b209c29b4dc47f06ffa896f32667dad2c.png',
  },
  {
    symbol: 'PORN',
    name: 'Porn',
    decimals: 9,
    address: '0x31b9773f225408129a90788ef013bd449e283865',
    logoURI:
      'https://tokens.1inch.io/0x31b9773f225408129a90788ef013bd449e283865.png',
  },
  {
    symbol: 'START',
    name: 'BSCstarter',
    decimals: 18,
    address: '0x31d0a7ada4d4c131eb612db48861211f63e57610',
    logoURI:
      'https://tokens.1inch.io/0x31d0a7ada4d4c131eb612db48861211f63e57610.png',
  },
  {
    symbol: 'JULb',
    name: 'JULb',
    decimals: 18,
    address: '0x32dffc3fe8e3ef3571bf8a72c0d0015c5373f41d',
    logoURI:
      'https://tokens.1inch.io/0x32dffc3fe8e3ef3571bf8a72c0d0015c5373f41d.png',
  },
  {
    symbol: 'MDO',
    name: 'Midas Dollar',
    decimals: 18,
    address: '0x35e869b7456462b81cdb5e6e42434bd27f3f788c',
    logoURI:
      'https://tokens.1inch.io/0x35e869b7456462b81cdb5e6e42434bd27f3f788c.png',
  },
  {
    symbol: 'DEXE',
    name: 'DeXe',
    decimals: 18,
    address: '0x039cb485212f996a9dbb85a9a75d898f94d38da6',
    logoURI:
      'https://tokens.1inch.io/0x039cb485212f996a9dbb85a9a75d898f94d38da6.png',
  },
  {
    symbol: 'NRV',
    name: 'Nerve',
    decimals: 18,
    address: '0x42f6f551ae042cbe50c739158b4f0cac0edb9096',
    logoURI:
      'https://tokens.1inch.io/0x42f6f551ae042cbe50c739158b4f0cac0edb9096.png',
  },
  {
    symbol: 'bCFX',
    name: 'BSC Conflux',
    decimals: 18,
    address: '0x045c4324039da91c52c55df5d785385aab073dcf',
    logoURI:
      'https://tokens.1inch.io/0x045c4324039da91c52c55df5d785385aab073dcf.png',
  },
  // {
  //   symbol: 'WSPP',
  //   name: 'WolfSafePoorPeople',
  //   decimals: 0,
  //   address: '0x46d502fac9aea7c5bc7b13c8ec9d02378c33d36f',
  //   logoURI:
  //     'https://tokens.1inch.io/0x46d502fac9aea7c5bc7b13c8ec9d02378c33d36f.png',
  // },
  {
    symbol: 'xYSL',
    name: 'xYSL token',
    decimals: 18,
    address: '0x0047a0deadafb7ee6b1a0d219e70fb6767057d93',
    logoURI:
      'https://tokens.1inch.io/0x0047a0deadafb7ee6b1a0d219e70fb6767057d93.png',
  },
  {
    symbol: 'SXP',
    name: 'Swipe',
    decimals: 18,
    address: '0x47bead2563dcbf3bf2c9407fea4dc236faba485a',
    logoURI:
      'https://tokens.1inch.io/0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9.png',
  },
  {
    symbol: 'YVS',
    name: 'YVS.Finance on BSC',
    decimals: 18,
    address: '0x47c1c7b9d7941a7265d123dcfb100d8fb5348213',
    logoURI:
      'https://tokens.1inch.io/0xec681f28f4561c2a9534799aa38e0d36a83cf478.png',
  },
  {
    symbol: 'CUB',
    name: 'Cub Finance',
    decimals: 18,
    address: '0x50d809c74e0b8e49e7b4c65bb3109abe3ff4c1c1',
    logoURI:
      'https://tokens.1inch.io/0x50d809c74e0b8e49e7b4c65bb3109abe3ff4c1c1.png',
  },
  {
    symbol: 'SUPER',
    name: 'SUPER-ERC20',
    decimals: 18,
    address: '0x51ba0b044d96c3abfca52b64d733603ccc4f0d4d',
    logoURI:
      'https://tokens.1inch.io/0x51ba0b044d96c3abfca52b64d733603ccc4f0d4d.png',
  },
  {
    symbol: 'COMP',
    name: 'Compound Coin',
    decimals: 18,
    address: '0x52ce071bd9b1c4b00a0b92d298c512478cad67e8',
    logoURI:
      'https://tokens.1inch.io/0xc00e94cb662c3520282e6f5717214004a7f26888.png',
  },
  {
    symbol: 'SWIRL',
    name: 'Swirl.Cash',
    decimals: 18,
    address: '0x52d86850bc8207b520340b7e39cdaf22561b9e56',
    logoURI:
      'https://tokens.1inch.io/0x52d86850bc8207b520340b7e39cdaf22561b9e56.png',
  },
  {
    symbol: 'USDT',
    name: 'Tether USD',
    decimals: 18,
    address: '0x55d398326f99059ff775485246999027b3197955',
    logoURI:
      'https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png',
  },
  {
    symbol: 'EOS',
    name: 'EOS Token',
    decimals: 18,
    address: '0x56b6fb708fc5732dec1afc8d8556423a2edccbd6',
    logoURI:
      'https://tokens.1inch.io/0x56b6fb708fc5732dec1afc8d8556423a2edccbd6.png',
  },
  {
    symbol: 'vLTC',
    name: 'Venus LTC',
    decimals: 8,
    address: '0x57a5297f2cb2c0aac9d554660acd6d385ab50c6b',
    logoURI:
      'https://tokens.1inch.io/0x57a5297f2cb2c0aac9d554660acd6d385ab50c6b.png',
  },
  {
    symbol: 'RUGBUST',
    name: 'Rug Busters ',
    decimals: 18,
    address: '0x57bb0f40479d7dd0caa67f2a579273a8e9c038ee',
    logoURI:
      'https://tokens.1inch.io/0x57bb0f40479d7dd0caa67f2a579273a8e9c038ee.png',
  },
  {
    symbol: 'TSUGA',
    name: 'Tsukiverse: Galactic Adventures',
    decimals: 18,
    address: '0x58d372a8db7696c0c066f25c9eaf2af6f147b726',
    logoURI:
      'https://tokens.1inch.io/0x58d372a8db7696c0c066f25c9eaf2af6f147b726.png',
  },
  // {
  //   symbol: 'GTON',
  //   name: 'Graviton',
  //   decimals: 18,
  //   address: '0x64d5baf5ac030e2b7c435add967f787ae94d0205',
  //   logoURI:
  //     'https://tokens.1inch.io/0x01e0e2e61f554ecaaec0cc933e739ad90f24a86d.png',
  // },
  {
    symbol: 'SOUL',
    name: 'APOyield SOULS',
    decimals: 8,
    address: '0x67d012f731c23f0313cea1186d0121779c77fcfe',
    logoURI:
      'https://tokens.1inch.io/0x67d012f731c23f0313cea1186d0121779c77fcfe.png',
  },
  {
    symbol: 'FEED',
    name: 'Feeder.finance',
    decimals: 18,
    address: '0x67d66e8ec1fd25d98b3ccd3b19b7dc4b4b7fc493',
    logoURI:
      'https://tokens.1inch.io/0x67d66e8ec1fd25d98b3ccd3b19b7dc4b4b7fc493.png',
  },
  {
    symbol: 'DODO',
    name: 'DODO bird',
    decimals: 18,
    address: '0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2',
    logoURI:
      'https://tokens.1inch.io/0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd.png',
  },
  {
    symbol: 'SpacePi',
    name: 'SpacePi Token',
    decimals: 9,
    address: '0x69b14e8d3cebfdd8196bfe530954a0c226e5008e',
    logoURI:
      'https://tokens.1inch.io/0x69b14e8d3cebfdd8196bfe530954a0c226e5008e.png',
  },
  {
    symbol: 'bALBT',
    name: 'AllianceBlock Token',
    decimals: 18,
    address: '0x72faa679e1008ad8382959ff48e392042a8b06f7',
    logoURI:
      'https://tokens.1inch.io/0x72faa679e1008ad8382959ff48e392042a8b06f7.png',
  },
  {
    symbol: 'DFX',
    name: 'DeFireX on BSC',
    decimals: 18,
    address: '0x74b3abb94e9e1ecc25bd77d6872949b4a9b2aacf',
    logoURI:
      'https://tokens.1inch.io/0x74b3abb94e9e1ecc25bd77d6872949b4a9b2aacf.png',
  },
  {
    symbol: 'TRY',
    name: 'TryHards',
    decimals: 18,
    address: '0x75d107de2217ffe2cd574a1b3297c70c8fafd159',
    logoURI:
      'https://tokens.1inch.io/0x75d107de2217ffe2cd574a1b3297c70c8fafd159.png',
  },
  {
    symbol: 'MOONTOKEN',
    name: 'Moon Token',
    decimals: 18,
    address: '0x81e4d494b85a24a58a6ba45c9b418b32a4e039de',
    logoURI:
      'https://tokens.1inch.io/0x81e4d494b85a24a58a6ba45c9b418b32a4e039de.png',
  },
  {
    symbol: 'GMEE',
    name: 'GAMEE',
    decimals: 18,
    address: '0x84e9a6f9d240fdd33801f7135908bfa16866939a',
    logoURI:
      'https://tokens.1inch.io/0x84e9a6f9d240fdd33801f7135908bfa16866939a.png',
  },
  {
    symbol: 'KEY',
    name: 'MoMo KEY',
    decimals: 18,
    address: '0x85c128ee1feeb39a59490c720a9c563554b51d33',
    logoURI:
      'https://tokens.1inch.io/0x85c128ee1feeb39a59490c720a9c563554b51d33.png',
  },
  {
    symbol: 'OCTA',
    name: 'Octans',
    decimals: 9,
    address: '0x86c3e4ffacdb3af628ef985a518cd6ee22a22b28',
    logoURI:
      'https://tokens.1inch.io/0x86c3e4ffacdb3af628ef985a518cd6ee22a22b28.png',
  },
  {
    symbol: 'YFI',
    name: 'yearn.finance',
    decimals: 18,
    address: '0x88f1a5ae2a3bf98aeaf342d26b30a79438c9142e',
    logoURI:
      'https://tokens.1inch.io/0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e.png',
  },
  {
    symbol: 'FRAX',
    name: 'Frax',
    decimals: 18,
    address: '0x90c97f71e18723b0cf0dfa30ee176ab653e89f40',
    logoURI:
      'https://tokens.1inch.io/0x90c97f71e18723b0cf0dfa30ee176ab653e89f40.png',
  },
  {
    symbol: 'STM',
    name: 'Streamity',
    decimals: 18,
    address: '0x90df11a8cce420675e73922419e3f4f3fe13cccb',
    logoURI:
      'https://tokens.1inch.io/0x0e22734e078d6e399bcee40a549db591c4ea46cb.png',
  },
  {
    symbol: 'FAT',
    name: 'Fatfi Protocol',
    decimals: 18,
    address: '0x90e767a68a7d707b74d569c8e79f9bbb79b98a8b',
    logoURI:
      'https://tokens.1inch.io/0x90e767a68a7d707b74d569c8e79f9bbb79b98a8b.png',
  },
  {
    symbol: 'TRDG',
    name: 'Tardigrades.Finance',
    decimals: 9,
    address: '0x92a42db88ed0f02c71d439e55962ca7cab0168b5',
    logoURI:
      'https://tokens.1inch.io/0x92a42db88ed0f02c71d439e55962ca7cab0168b5.png',
  },
  {
    symbol: 'GFCE',
    name: 'GFORCE',
    decimals: 9,
    address: '0x94babbe728d9411612ee41b20241a6fa251b26ce',
    logoURI:
      'https://tokens.1inch.io/0x94babbe728d9411612ee41b20241a6fa251b26ce.png',
  },
  {
    symbol: 'SOUP',
    name: 'Soup',
    decimals: 18,
    address: '0x94f559ae621f1c810f31a6a620ad7376776fe09e',
    logoURI:
      'https://tokens.1inch.io/0x94f559ae621f1c810f31a6a620ad7376776fe09e.png',
  },
  {
    symbol: 'vBUSD',
    name: 'Venus BUSD',
    decimals: 8,
    address: '0x95c78222b3d6e262426483d42cfa53685a67ab9d',
    logoURI:
      'https://tokens.1inch.io/0x95c78222b3d6e262426483d42cfa53685a67ab9d.png',
  },
  {
    symbol: 'DUET',
    name: 'Duet Governance Token',
    decimals: 18,
    address: '0x95ee03e1e2c5c4877f9a298f1c0d6c98698fab7b',
    logoURI:
      'https://tokens.1inch.io/0x95ee03e1e2c5c4877f9a298f1c0d6c98698fab7b.png',
  },
  {
    symbol: 'COS',
    name: 'Contentos',
    decimals: 18,
    address: '0x96dd399f9c3afda1f194182f71600f1b65946501',
    logoURI:
      'https://tokens.1inch.io/0x96dd399f9c3afda1f194182f71600f1b65946501.png',
  },
  {
    symbol: 'CRX',
    name: 'CryptEx Token',
    decimals: 18,
    address: '0x97a30c692ece9c317235d48287d23d358170fc40',
    logoURI:
      'https://tokens.1inch.io/0x97a30c692ece9c317235d48287d23d358170fc40.png',
  },
  // {
  //   symbol: 'FMT',
  //   name: 'Finminity',
  //   decimals: 18,
  //   address: '0x99c6e435ec259a7e8d65e1955c9423db624ba54c',
  //   logoURI:
  //     'https://tokens.1inch.io/0x99c6e435ec259a7e8d65e1955c9423db624ba54c.png',
  // },
  {
    symbol: 'GMT_1',
    name: 'Gambit',
    decimals: 18,
    address: '0x99e92123eb77bc8f999316f622e5222498438784',
    logoURI:
      'https://tokens.1inch.io/0x99e92123eb77bc8f999316f622e5222498438784.png',
  },
  {
    symbol: 'BAT',
    name: 'Basic Attention Token',
    decimals: 18,
    address: '0x101d82428437127bf1608f699cd651e6abf9766e',
    logoURI:
      'https://tokens.1inch.io/0x0d8775f648430679a709e98d2b0cb6250d2887ef.png',
  },
  {
    symbol: 'vXVS',
    name: 'Venus XVS',
    decimals: 8,
    address: '0x151b1e2635a717bcdc836ecd6fbb62b674fe3e1d',
    logoURI:
      'https://tokens.1inch.io/0x151b1e2635a717bcdc836ecd6fbb62b674fe3e1d.png',
  },
  {
    symbol: 'BELUGA',
    name: 'BelugaToken',
    decimals: 18,
    address: '0x181de8c57c4f25eba9fd27757bbd11cc66a55d31',
    logoURI:
      'https://tokens.1inch.io/0x181de8c57c4f25eba9fd27757bbd11cc66a55d31.png',
  },
  {
    symbol: 'HOGL',
    name: 'HOGL Finance',
    decimals: 18,
    address: '0x182c763a4b2fbd18c9b5f2d18102a0ddd9d5df26',
    logoURI:
      'https://tokens.1inch.io/0x182c763a4b2fbd18c9b5f2d18102a0ddd9d5df26.png',
  },
  {
    symbol: 'BDO',
    name: 'bDollar',
    decimals: 18,
    address: '0x190b589cf9fb8ddeabbfeae36a813ffb2a702454',
    logoURI:
      'https://tokens.1inch.io/0x190b589cf9fb8ddeabbfeae36a813ffb2a702454.png',
  },
  {
    symbol: 'BUX',
    name: 'BUX Token',
    decimals: 18,
    address: '0x211ffbe424b90e25a15531ca322adf1559779e45',
    logoURI:
      'https://tokens.1inch.io/0x211ffbe424b90e25a15531ca322adf1559779e45.png',
  },
  {
    symbol: 'bwJUP',
    name: 'BSC Wrapped Jupiter',
    decimals: 18,
    address: '0x0231f91e02debd20345ae8ab7d71a41f8e140ce7',
    logoURI:
      'https://tokens.1inch.io/0x0231f91e02debd20345ae8ab7d71a41f8e140ce7.png',
  },
  {
    symbol: 'SHEESHA',
    name: 'Sheesha Finance',
    decimals: 18,
    address: '0x232fb065d9d24c34708eedbf03724f2e95abe768',
    logoURI:
      'https://tokens.1inch.io/0x232fb065d9d24c34708eedbf03724f2e95abe768.png',
  },
  {
    symbol: 'DITTO',
    name: 'Ditto',
    decimals: 9,
    address: '0x233d91a0713155003fc4dce0afa871b508b3b715',
    logoURI:
      'https://tokens.1inch.io/0x233d91a0713155003fc4dce0afa871b508b3b715.png',
  },
  {
    symbol: 'SWTH',
    name: 'Switcheo Token',
    decimals: 8,
    address: '0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c',
    logoURI:
      'https://tokens.1inch.io/0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c.png',
  },
  {
    symbol: 'DARA',
    name: 'Immutable',
    decimals: 18,
    address: '0x0255af6c9f86f6b0543357bacefa262a2664f80f',
    logoURI:
      'https://tokens.1inch.io/0x0255af6c9f86f6b0543357bacefa262a2664f80f.png',
  },
  {
    symbol: 'ZEFI',
    name: 'ZCore Finance',
    decimals: 18,
    address: '0x0288d3e353fe2299f11ea2c2e1696b4a648ecc07',
    logoURI:
      'https://tokens.1inch.io/0x0288d3e353fe2299f11ea2c2e1696b4a648ecc07.png',
  },
  {
    symbol: 'vDAI',
    name: 'Venus DAI',
    decimals: 8,
    address: '0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1',
    logoURI:
      'https://tokens.1inch.io/0x334b3ecb4dca3593bccc3c7ebd1a1c1d1780fbf1.png',
  },
  {
    symbol: 'GAIA',
    name: 'GAIA Everworld',
    decimals: 18,
    address: '0x347e430b7cd1235e216be58ffa13394e5009e6e2',
    logoURI:
      'https://tokens.1inch.io/0x347e430b7cd1235e216be58ffa13394e5009e6e2.png',
  },
  {
    symbol: 'DERC',
    name: 'DeRace Token',
    decimals: 18,
    address: '0x373e768f79c820aa441540d254dca6d045c6d25b',
    logoURI:
      'https://tokens.1inch.io/0x373e768f79c820aa441540d254dca6d045c6d25b.png',
  },
  {
    symbol: 'MOWA',
    name: 'Moniwar',
    decimals: 18,
    address: '0x411ec510c85c9e56271bf4e10364ffa909e685d9',
    logoURI:
      'https://tokens.1inch.io/0x411ec510c85c9e56271bf4e10364ffa909e685d9.png',
  },
  {
    symbol: 'GST',
    name: 'Gemstone Token',
    decimals: 18,
    address: '0x444a0e0c139cac67e8f9be945c6dfe01a2766ed1',
    logoURI:
      'https://tokens.1inch.io/0x444a0e0c139cac67e8f9be945c6dfe01a2766ed1.png',
  },
  {
    symbol: 'DOME',
    name: 'Everdome',
    decimals: 18,
    address: '0x475bfaa1848591ae0e6ab69600f48d828f61a80e',
    logoURI:
      'https://tokens.1inch.io/0x475bfaa1848591ae0e6ab69600f48d828f61a80e.png',
  },
  {
    symbol: 'SFUND',
    name: 'SeedifyFund',
    decimals: 18,
    address: '0x477bc8d23c634c154061869478bce96be6045d12',
    logoURI:
      'https://tokens.1inch.io/0x477bc8d23c634c154061869478bce96be6045d12.png',
  },
  {
    symbol: 'XBN',
    name: 'Elastic BNB',
    decimals: 18,
    address: '0x547cbe0f0c25085e7015aa6939b28402eb0ccdac',
    logoURI:
      'https://tokens.1inch.io/0x547cbe0f0c25085e7015aa6939b28402eb0ccdac.png',
  },
  {
    symbol: 'pOPIUM',
    name: 'pTokens OPIUM',
    decimals: 18,
    address: '0x566cedd201f67e542a6851a2959c1a449a041945',
    logoURI:
      'https://tokens.1inch.io/0x566cedd201f67e542a6851a2959c1a449a041945.png',
  },
  {
    symbol: 'BANANA',
    name: 'ApeSwapFinance Banana',
    decimals: 18,
    address: '0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95',
    logoURI:
      'https://tokens.1inch.io/0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95.png',
  },
  {
    symbol: 'PEAK',
    name: 'PEAKDEFI',
    decimals: 8,
    address: '0x630d98424efe0ea27fb1b3ab7741907dffeaad78',
    logoURI:
      'https://tokens.1inch.io/0x630d98424efe0ea27fb1b3ab7741907dffeaad78.png',
  },
  {
    symbol: 'vLINK',
    name: 'Venus LINK',
    decimals: 8,
    address: '0x650b940a1033b8a1b1873f78730fcfc73ec11f1f',
    logoURI:
      'https://tokens.1inch.io/0x650b940a1033b8a1b1873f78730fcfc73ec11f1f.png',
  },
  {
    symbol: 'FOR',
    name: 'The Force Token',
    decimals: 18,
    address: '0x658a109c5900bc6d2357c87549b651670e5b0539',
    logoURI:
      'https://tokens.1inch.io/0x658a109c5900bc6d2357c87549b651670e5b0539.png',
  },
  {
    symbol: 'UNFI',
    name: 'UNFI',
    decimals: 18,
    address: '0x728c5bac3c3e370e372fc4671f9ef6916b814d8b',
    logoURI:
      'https://tokens.1inch.io/0x728c5bac3c3e370e372fc4671f9ef6916b814d8b.png',
  },
  {
    symbol: 'CGU',
    name: 'Crypto Gaming United',
    decimals: 8,
    address: '0x747d74db20cc422f39ab54edb2a3ce21f3c98af1',
    logoURI:
      'https://tokens.1inch.io/0x747d74db20cc422f39ab54edb2a3ce21f3c98af1.png',
  },
  {
    symbol: 'CYC',
    name: 'Cyclone Protocol',
    decimals: 18,
    address: '0x810ee35443639348adbbc467b33310d2ab43c168',
    logoURI:
      'https://tokens.1inch.io/0x810ee35443639348adbbc467b33310d2ab43c168.png',
  },
  {
    symbol: 'REVV',
    name: 'REVV',
    decimals: 18,
    address: '0x833f307ac507d47309fd8cdd1f835bef8d702a93',
    logoURI:
      'https://tokens.1inch.io/0x833f307ac507d47309fd8cdd1f835bef8d702a93.png',
  },
  {
    symbol: 'lowb',
    name: 'loser coin',
    decimals: 18,
    address: '0x843d4a358471547f51534e3e51fae91cb4dc3f28',
    logoURI:
      'https://tokens.1inch.io/0x843d4a358471547f51534e3e51fae91cb4dc3f28.png',
  },
  {
    symbol: 'ARGON',
    name: 'ArgonToken',
    decimals: 18,
    address: '0x851f7a700c5d67db59612b871338a85526752c25',
    logoURI:
      'https://tokens.1inch.io/0x851f7a700c5d67db59612b871338a85526752c25.png',
  },
  {
    symbol: 'LTO',
    name: 'LTO Network',
    decimals: 18,
    address: '0x857b222fc79e1cbbf8ca5f78cb133d1b7cf34bbd',
    logoURI:
      'https://tokens.1inch.io/0x3db6ba6ab6f95efed1a6e794cad492faaabf294d.png',
  },
  {
    symbol: 'vBTC',
    name: 'Venus BTC',
    decimals: 8,
    address: '0x882c173bc7ff3b7786ca16dfed3dfffb9ee7847b',
    logoURI:
      'https://tokens.1inch.io/0x882c173bc7ff3b7786ca16dfed3dfffb9ee7847b.png',
  },
  {
    symbol: 'FRONT',
    name: 'Frontier Token',
    decimals: 18,
    address: '0x928e55dab735aa8260af3cedada18b5f70c72f1b',
    logoURI:
      'https://tokens.1inch.io/0xf8c3527cc04340b208c854e985240c02f7b7793f.png',
  },
  {
    symbol: 'Helmet',
    name: 'Helmet.insure Governance Token',
    decimals: 18,
    address: '0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8',
    logoURI:
      'https://tokens.1inch.io/0x948d2a81086a075b3130bac19e4c6dee1d2e3fe8.png',
  },
  {
    symbol: 'COOK',
    name: 'Poly-Peg COOK',
    decimals: 18,
    address: '0x965b0df5bda0e7a0649324d78f03d5f7f2de086a',
    logoURI:
      'https://tokens.1inch.io/0x965b0df5bda0e7a0649324d78f03d5f7f2de086a.png',
  },
  {
    symbol: 'BSW',
    name: 'Biswap',
    decimals: 18,
    address: '0x965f527d9159dce6288a2219db51fc6eef120dd1',
    logoURI:
      'https://tokens.1inch.io/0x965f527d9159dce6288a2219db51fc6eef120dd1.png',
  },
  {
    symbol: 'TOOLS',
    name: 'TOOLS',
    decimals: 18,
    address: '0x1311b352467d2b5c296881badea82850bcd8f886',
    logoURI:
      'https://tokens.1inch.io/0x1311b352467d2b5c296881badea82850bcd8f886.png',
  },
  {
    symbol: 'vDOT',
    name: 'Venus DOT',
    decimals: 8,
    address: '0x1610bc33319e9398de5f57b33a5b184c806ad217',
    logoURI:
      'https://tokens.1inch.io/0x1610bc33319e9398de5f57b33a5b184c806ad217.png',
  },
  {
    symbol: 'Fuel',
    name: 'Fuel Token',
    decimals: 18,
    address: '0x2090c8295769791ab7a3cf1cc6e0aa19f35e441a',
    logoURI:
      'https://tokens.1inch.io/0x2090c8295769791ab7a3cf1cc6e0aa19f35e441a.png',
  },
  {
    symbol: 'ETH',
    name: 'Ethereum Token',
    decimals: 18,
    address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    logoURI:
      'https://tokens.1inch.io/0x2170ed0880ac9a755fd29b2688956bd959f933f8.png',
  },
  {
    symbol: 'SALT',
    name: 'Salt Token',
    decimals: 18,
    address: '0x2849b1ae7e04a3d9bc288673a92477cf63f28af4',
    logoURI:
      'https://tokens.1inch.io/0x2849b1ae7e04a3d9bc288673a92477cf63f28af4.png',
  },
  {
    symbol: 'GMT',
    name: 'Green Metaverse Token',
    decimals: 8,
    address: '0x3019bf2a2ef8040c242c9a4c5c4bd4c81678b2a1',
    logoURI:
      'https://tokens.1inch.io/0x3019bf2a2ef8040c242c9a4c5c4bd4c81678b2a1_1.png',
  },
  {
    symbol: 'ORI',
    name: 'Orica',
    decimals: 18,
    address: '0x3045d1a840364c3657b8df6c6f86a4359c23472b',
    logoURI:
      'https://tokens.1inch.io/0x3045d1a840364c3657b8df6c6f86a4359c23472b_1.png',
  },
  {
    symbol: 'INSUR',
    name: 'Bsc-Peg INSUR Token',
    decimals: 18,
    address: '0x3192ccddf1cdce4ff055ebc80f3f0231b86a7e30',
    logoURI:
      'https://tokens.1inch.io/0x3192ccddf1cdce4ff055ebc80f3f0231b86a7e30.png',
  },
  {
    symbol: 'MBOX',
    name: 'Mobox',
    decimals: 18,
    address: '0x3203c9e46ca618c8c1ce5dc67e7e9d75f5da2377',
    logoURI:
      'https://tokens.1inch.io/0x3203c9e46ca618c8c1ce5dc67e7e9d75f5da2377.png',
  },
  {
    symbol: 'SPARTA',
    name: 'Spartan Protocol Token',
    decimals: 18,
    address: '0x3910db0600ea925f63c36ddb1351ab6e2c6eb102',
    logoURI:
      'https://tokens.1inch.io/0x3910db0600ea925f63c36ddb1351ab6e2c6eb102.png',
  },
  {
    symbol: 'TYPH',
    name: 'Typhoon',
    decimals: 18,
    address: '0x4090e535f2e251f5f88518998b18b54d26b3b07c',
    logoURI:
      'https://tokens.1inch.io/0x4090e535f2e251f5f88518998b18b54d26b3b07c.png',
  },
  {
    symbol: 'bMXX',
    name: 'Multiplier',
    decimals: 18,
    address: '0x4131b87f74415190425ccd873048c708f8005823',
    logoURI:
      'https://tokens.1inch.io/0x4131b87f74415190425ccd873048c708f8005823.png',
  },
  {
    symbol: 'ACS',
    name: 'ACryptoS',
    decimals: 18,
    address: '0x4197c6ef3879a08cd51e5560da5064b773aa1d29',
    logoURI:
      'https://tokens.1inch.io/0x4197c6ef3879a08cd51e5560da5064b773aa1d29.png',
  },
  {
    symbol: '$RFG',
    name: 'Refugees Token',
    decimals: 9,
    address: '0x4477b28e8b797ebaebd2539bb24290fdfcc27807',
    logoURI:
      'https://tokens.1inch.io/0x4477b28e8b797ebaebd2539bb24290fdfcc27807.png',
  },
  {
    symbol: 'CHI',
    name: 'Chi Gastoken by 1inch',
    decimals: 0,
    address: '0x0000000000004946c0e9f43f4dee607b0ef1fa1c',
    logoURI:
      'https://tokens.1inch.io/0x0000000000004946c0e9f43f4dee607b0ef1fa1c.png',
  },
  {
    symbol: 'XED',
    name: 'Exeedme',
    decimals: 18,
    address: '0x5621b5a3f4a8008c4ccdd1b942b121c8b1944f1f',
    logoURI:
      'https://tokens.1inch.io/0x5621b5a3f4a8008c4ccdd1b942b121c8b1944f1f.png',
  },
  {
    symbol: 'FUSE',
    name: 'Fuse Token on BSC',
    decimals: 18,
    address: '0x5857c96dae9cf8511b08cb07f85753c472d36ea3',
    logoURI:
      'https://tokens.1inch.io/0x970b9bb2c0444f5e81e9d0efb84c8ccdcdcaf84d.png',
  },
  {
    symbol: 'bDIGG',
    name: 'Badger Sett Digg',
    decimals: 18,
    address: '0x5986d5c77c65e5801a5caa4fae80089f870a71da',
    logoURI:
      'https://tokens.1inch.io/0x5986d5c77c65e5801a5caa4fae80089f870a71da.png',
  },
  {
    symbol: 'ARV',
    name: 'ARIVA',
    decimals: 8,
    address: '0x6679eb24f59dfe111864aec72b443d1da666b360',
    logoURI:
      'https://tokens.1inch.io/0x6679eb24f59dfe111864aec72b443d1da666b360.png',
  },
  {
    symbol: 'STACK',
    name: 'StackOS',
    decimals: 18,
    address: '0x6855f7bb6287f94ddcc8915e37e73a3c9fee5cf3',
    logoURI:
      'https://tokens.1inch.io/0x6855f7bb6287f94ddcc8915e37e73a3c9fee5cf3.png',
  },
  {
    symbol: 'BTCB',
    name: 'BTCB Token',
    decimals: 18,
    address: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    logoURI:
      'https://tokens.1inch.io/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c.png',
  },
  {
    symbol: 'KEBAB',
    name: 'Kebab Token',
    decimals: 18,
    address: '0x7979f6c54eba05e18ded44c4f986f49a5de551c2',
    logoURI:
      'https://tokens.1inch.io/0x7979f6c54eba05e18ded44c4f986f49a5de551c2.png',
  },
  {
    symbol: 'RAMP',
    name: 'RAMP DEFI',
    decimals: 18,
    address: '0x8519ea49c997f50ceffa444d240fb655e89248aa',
    logoURI:
      'https://tokens.1inch.io/0x8519ea49c997f50ceffa444d240fb655e89248aa.png',
  },
  {
    symbol: 'VANCAT',
    name: 'VANCAT Token',
    decimals: 0,
    address: '0x8597ba143ac509189e89aab3ba28d661a5dd9830',
    logoURI:
      'https://tokens.1inch.io/0x8597ba143ac509189e89aab3ba28d661a5dd9830.png',
  },
  {
    symbol: 'PIG',
    name: 'Pig Token',
    decimals: 9,
    address: '0x8850d2c68c632e3b258e612abaa8fada7e6958e5',
    logoURI:
      'https://tokens.1inch.io/0x8850d2c68c632e3b258e612abaa8fada7e6958e5.png',
  },
  {
    symbol: 'NUTS',
    name: 'Squirrel Finance',
    decimals: 18,
    address: '0x8893d5fa71389673c5c4b9b3cb4ee1ba71207556',
    logoURI:
      'https://tokens.1inch.io/0x8893d5fa71389673c5c4b9b3cb4ee1ba71207556.png',
  },
  {
    symbol: 'POR',
    name: 'Portuma',
    decimals: 18,
    address: '0x9000cac49c3841926baac5b2e13c87d43e51b6a4',
    logoURI:
      'https://tokens.1inch.io/0x9000cac49c3841926baac5b2e13c87d43e51b6a4.png',
  },
  {
    symbol: 'STEEL',
    name: 'IRON Share V2',
    decimals: 18,
    address: '0x9001ee054f1692fef3a48330cb543b6fec6287eb',
    logoURI:
      'https://tokens.1inch.io/0x9001ee054f1692fef3a48330cb543b6fec6287eb.png',
  },
  {
    symbol: 'LGX',
    name: 'Legion Token',
    decimals: 18,
    address: '0x9096b4309224d751fcb43d7eb178dcffc122ad15',
    logoURI:
      'https://tokens.1inch.io/0x9096b4309224d751fcb43d7eb178dcffc122ad15.png',
  },
  {
    symbol: 'IOTX',
    name: 'IoTeX Network',
    decimals: 18,
    address: '0x9678e42cebeb63f23197d726b29b1cb20d0064e5',
    logoURI:
      'https://tokens.1inch.io/0x9678e42cebeb63f23197d726b29b1cb20d0064e5.png',
  },
  {
    symbol: 'yPANDA',
    name: 'YieldPanda.finance',
    decimals: 8,
    address: '0x9806aec346064183b5ce441313231dff89811f7a',
    logoURI:
      'https://tokens.1inch.io/0x9806aec346064183b5ce441313231dff89811f7a.png',
  },
  {
    symbol: 'FREN',
    name: 'Frenchie',
    decimals: 18,
    address: '0x13958e1eb63dfb8540eaf6ed7dcbbc1a60fd52af',
    logoURI:
      'https://tokens.1inch.io/0x13958e1eb63dfb8540eaf6ed7dcbbc1a60fd52af.png',
  },
  {
    symbol: 'TUSD',
    name: 'TrueUSD',
    decimals: 18,
    address: '0x14016e85a25aeb13065688cafb43044c2ef86784',
    logoURI:
      'https://tokens.1inch.io/0x0000000000085d4780b73119b644ae5ecd22b376.png',
  },
  {
    symbol: 'XTZ',
    name: 'Tezos Token',
    decimals: 18,
    address: '0x16939ef78684453bfdfb47825f8a5f714f12623a',
    logoURI:
      'https://tokens.1inch.io/0x16939ef78684453bfdfb47825f8a5f714f12623a.png',
  },
  {
    symbol: 'UST',
    name: 'Wrapped UST Token',
    decimals: 18,
    address: '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
    logoURI:
      'https://tokens.1inch.io/0xa47c8bf37f92abed4a126bda807a7b7498661acd.png',
  },
  {
    symbol: 'TREE',
    name: 'OakTree Token',
    decimals: 18,
    address: '0x039471b9e8a86b977aaeb5ec4182cf3866f436b0',
    logoURI:
      'https://tokens.1inch.io/0x039471b9e8a86b977aaeb5ec4182cf3866f436b0.png',
  },
  {
    symbol: 'SFM',
    name: 'SafeMoon',
    decimals: 9,
    address: '0x42981d0bfbaf196529376ee702f2a9eb9092fcb5',
    logoURI:
      'https://tokens.1inch.io/0x42981d0bfbaf196529376ee702f2a9eb9092fcb5.png',
  },
  {
    symbol: 'OCT',
    name: 'Octree Finance',
    decimals: 8,
    address: '0x49277cc5be56b519901e561096bfd416277b4f6d',
    logoURI:
      'https://tokens.1inch.io/0x49277cc5be56b519901e561096bfd416277b4f6d.png',
  },
  {
    symbol: 'PEKC',
    name: 'PEACOCKCOIN',
    decimals: 9,
    address: '0x050787de0cf5da03d9387b344334d51cae5dd0fd',
    logoURI:
      'https://tokens.1inch.io/0x050787de0cf5da03d9387b344334d51cae5dd0fd.png',
  },
  {
    symbol: 'PETN',
    name: 'Pylon Eco Token',
    decimals: 18,
    address: '0x57457b5d725d85a70a3625d6a71818304e773618',
    logoURI:
      'https://tokens.1inch.io/0x57457b5d725d85a70a3625d6a71818304e773618.png',
  },
  {
    symbol: 'ERC20',
    name: 'ERC20',
    decimals: 18,
    address: '0x58730ae0faa10d73b0cddb5e7b87c3594f7a20cb',
    logoURI:
      'https://tokens.1inch.io/0x58730ae0faa10d73b0cddb5e7b87c3594f7a20cb.png',
  },
  {
    symbol: 'blink',
    name: 'BLinkToken',
    decimals: 6,
    address: '0x63870a18b6e42b01ef1ad8a2302ef50b7132054f',
    logoURI:
      'https://tokens.1inch.io/0x63870a18b6e42b01ef1ad8a2302ef50b7132054f.png',
  },
  {
    symbol: 'PFY',
    name: 'Portify',
    decimals: 9,
    address: '0x69083b64988933e8b4783e8302b9bbf90163280e',
    logoURI:
      'https://tokens.1inch.io/0x69083b64988933e8b4783e8302b9bbf90163280e.png',
  },
  {
    symbol: 'DOGGY',
    name: 'DOGGY',
    decimals: 18,
    address: '0x74926b3d118a63f6958922d3dc05eb9c6e6e00c6',
    logoURI:
      'https://tokens.1inch.io/0x74926b3d118a63f6958922d3dc05eb9c6e6e00c6.png',
  },
  {
    symbol: 'BTCST',
    name: 'StandardBTCHashrateToken',
    decimals: 17,
    address: '0x78650b139471520656b9e7aa7a5e9276814a38e9',
    logoURI:
      'https://tokens.1inch.io/0x78650b139471520656b9e7aa7a5e9276814a38e9.png',
  },
  {
    symbol: 'PAPR',
    name: 'PAPR',
    decimals: 18,
    address: '0x246475df8703be0c2ba2f8d0fb7248d95cc1ba26',
    logoURI:
      'https://tokens.1inch.io/0x246475df8703be0c2ba2f8d0fb7248d95cc1ba26.png',
  },
  {
    symbol: 'ECP',
    name: 'Eclipse',
    decimals: 9,
    address: '0x375483cfa7fc18f6b455e005d835a8335fbdbb1f',
    logoURI:
      'https://tokens.1inch.io/0x375483cfa7fc18f6b455e005d835a8335fbdbb1f.png',
  },
  {
    symbol: 'SAFEBTC',
    name: 'SafeBTC',
    decimals: 9,
    address: '0x380624a4a7e69db1ca07deecf764025fc224d056',
    logoURI:
      'https://tokens.1inch.io/0x380624a4a7e69db1ca07deecf764025fc224d056.png',
  },
  {
    symbol: 'BSHARE',
    name: 'BSHARE',
    decimals: 18,
    address: '0x531780face85306877d7e1f05d713d1b50a37f7a',
    logoURI:
      'https://tokens.1inch.io/0x531780face85306877d7e1f05d713d1b50a37f7a.png',
  },
  {
    symbol: 'LINA',
    name: 'Linear Token',
    decimals: 18,
    address: '0x762539b45a1dcce3d36d080f74d1aed37844b878',
    logoURI:
      'https://tokens.1inch.io/0x3e9bc21c9b189c09df3ef1b824798658d5011937.png',
  },
  {
    symbol: 'vBETH',
    name: 'Venus BETH',
    decimals: 8,
    address: '0x972207a639cc1b374b893cc33fa251b55ceb7c07',
    logoURI:
      'https://tokens.1inch.io/0x972207a639cc1b374b893cc33fa251b55ceb7c07.png',
  },
  {
    symbol: 'MTDR',
    name: 'Matador Token',
    decimals: 18,
    address: '0x994517e000aa3f117e7ad61b0e2336c76b4fd94a',
    logoURI:
      'https://tokens.1inch.io/0x994517e000aa3f117e7ad61b0e2336c76b4fd94a.png',
  },
  {
    symbol: 'TLM',
    name: 'Alien Worlds Trilium',
    decimals: 4,
    address: '0x2222227e22102fe3322098e4cbfe18cfebd57c95',
    logoURI:
      'https://tokens.1inch.io/0x2222227e22102fe3322098e4cbfe18cfebd57c95.png',
  },
  {
    symbol: 'LTC',
    name: 'Litecoin Token',
    decimals: 18,
    address: '0x4338665cbb7b2485a8855a139b75d5e34ab0db94',
    logoURI:
      'https://tokens.1inch.io/0x4338665cbb7b2485a8855a139b75d5e34ab0db94.png',
  },
  {
    symbol: 'MLT',
    name: 'Media Licensing Token',
    decimals: 18,
    address: '0x4518231a8fdf6ac553b9bbd51bbb86825b583263',
    logoURI:
      'https://tokens.1inch.io/0x4518231a8fdf6ac553b9bbd51bbb86825b583263.png',
  },
  {
    symbol: 'WOO',
    name: 'Wootrade Network',
    decimals: 18,
    address: '0x4691937a7508860f876c9c0a2a617e7d9e945d4b',
    logoURI:
      'https://tokens.1inch.io/0x4691937a7508860f876c9c0a2a617e7d9e945d4b.png',
  },
  {
    symbol: 'bLEO',
    name: 'BEP20 LEO',
    decimals: 3,
    address: '0x6421531af54c7b14ea805719035ebf1e3661c44a',
    logoURI:
      'https://tokens.1inch.io/0x6421531af54c7b14ea805719035ebf1e3661c44a.png',
  },
  {
    symbol: 'DOT',
    name: 'DOT',
    decimals: 18,
    address: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    logoURI:
      'https://tokens.1inch.io/0x7083609fce4d1d8dc0c979aab8c869ea2c873402.png',
  },
  {
    symbol: 'STARSHIP',
    name: 'StarShip',
    decimals: 9,
    address: '0x52419258e3fa44deac7e670eadd4c892b480a805',
    logoURI:
      'https://tokens.1inch.io/0x52419258e3fa44deac7e670eadd4c892b480a805.png',
  },
  {
    symbol: 'PACOCA',
    name: 'Pacoca',
    decimals: 18,
    address: '0x55671114d774ee99d653d6c12460c780a67f1d18',
    logoURI:
      'https://tokens.1inch.io/0x55671114d774ee99d653d6c12460c780a67f1d18.png',
  },
  {
    symbol: 'BFI',
    name: 'bearn.fi',
    decimals: 18,
    address: '0x81859801b01764d4f0fa5e64729f5a6c3b91435b',
    logoURI:
      'https://tokens.1inch.io/0x81859801b01764d4f0fa5e64729f5a6c3b91435b.png',
  },
  {
    symbol: 'KTY',
    name: 'Krypto Kitty',
    decimals: 9,
    address: '0x86296279c147bd40cbe5b353f83cea9e9cc9b7bb',
    logoURI:
      'https://tokens.1inch.io/0x86296279c147bd40cbe5b353f83cea9e9cc9b7bb.png',
  },
  {
    symbol: 'BETH',
    name: 'Binance Beacon ETH',
    decimals: 18,
    address: '0x250632378e573c6be1ac2f97fcdf00515d0aa91b',
    logoURI:
      'https://tokens.1inch.io/0x250632378e573c6be1ac2f97fcdf00515d0aa91b.png',
  },
  {
    symbol: 'BOMB',
    name: 'bomb.money',
    decimals: 18,
    address: '0x522348779dcb2911539e76a1042aa922f9c47ee3',
    logoURI:
      'https://tokens.1inch.io/0x522348779dcb2911539e76a1042aa922f9c47ee3.png',
  },
  {
    symbol: 'anyBTC',
    name: 'ANY Bitcoin',
    decimals: 8,
    address: '0x54261774905f3e6e9718f2abb10ed6555cae308a',
    logoURI:
      'https://tokens.1inch.io/0x54261774905f3e6e9718f2abb10ed6555cae308a.png',
  },
  {
    symbol: '1INCH',
    name: '1INCH Token',
    decimals: 18,
    address: '0x111111111117dc0aa78b770fa6a738034120c302',
    logoURI:
      'https://tokens.1inch.io/0x111111111117dc0aa78b770fa6a738034120c302.png',
  },
  {
    symbol: 'ALPHA',
    name: 'AlphaToken',
    decimals: 18,
    address: '0xa1faa113cbe53436df28ff0aee54275c13b40975',
    logoURI:
      'https://tokens.1inch.io/0xa1faa113cbe53436df28ff0aee54275c13b40975_1.png',
  },
  {
    symbol: 'INJ',
    name: 'Injective Protocol',
    decimals: 18,
    address: '0xa2b726b1145a4773f68593cf171187d8ebe4d495',
    logoURI:
      'https://tokens.1inch.io/0xe28b3b32b6c345a34ff64674606124dd5aceca30.png',
  },
  {
    symbol: 'MAIN',
    name: 'MAIN',
    decimals: 18,
    address: '0xa5f249f401ba8931899a364d8e2699b5fa1d87a9',
    logoURI:
      'https://tokens.1inch.io/0xa5f249f401ba8931899a364d8e2699b5fa1d87a9_1.png',
  },
  {
    symbol: 'vBNB',
    name: 'Venus BNB',
    decimals: 8,
    address: '0xa07c5b74c9b40447a954e1466938b865b6bbea36',
    logoURI:
      'https://tokens.1inch.io/0xa07c5b74c9b40447a954e1466938b865b6bbea36.png',
  },
  {
    symbol: 'EPS',
    name: 'Ellipsis',
    decimals: 18,
    address: '0xa7f552078dcc247c2684336020c03648500c6d9f',
    logoURI:
      'https://tokens.1inch.io/0xa7f552078dcc247c2684336020c03648500c6d9f.png',
  },
  {
    symbol: 'CTK',
    name: 'CertiK Token',
    decimals: 6,
    address: '0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929',
    logoURI:
      'https://tokens.1inch.io/0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929.png',
  },
  {
    symbol: 'WEX',
    name: 'WaultSwap',
    decimals: 18,
    address: '0xa9c41a46a6b3531d28d5c32f6633dd2ff05dfb90',
    logoURI:
      'https://tokens.1inch.io/0xa9c41a46a6b3531d28d5c32f6633dd2ff05dfb90.png',
  },
  {
    symbol: 'PIT',
    name: 'Pitbull',
    decimals: 9,
    address: '0xa57ac35ce91ee92caefaa8dc04140c8e232c2e50',
    logoURI:
      'https://tokens.1inch.io/0xa57ac35ce91ee92caefaa8dc04140c8e232c2e50.png',
  },
  {
    symbol: 'FEB',
    name: 'FEB Token',
    decimals: 0,
    address: '0xa72a0564d0e887123112e6a4dc1aba7611ad861d',
    logoURI:
      'https://tokens.1inch.io/0xa72a0564d0e887123112e6a4dc1aba7611ad861d.png',
  },
  {
    symbol: 'BR34P',
    name: 'BR34P',
    decimals: 8,
    address: '0xa86d305a36cdb815af991834b46ad3d7fbb38523',
    logoURI:
      'https://tokens.1inch.io/0xa86d305a36cdb815af991834b46ad3d7fbb38523.png',
  },
  {
    symbol: 'BBS',
    name: 'BBS [via ChainPort.io]',
    decimals: 18,
    address: '0xa477a79a118a84a0d371a53c8f46f8ce883ec1dd',
    logoURI:
      'https://tokens.1inch.io/0xa477a79a118a84a0d371a53c8f46f8ce883ec1dd.png',
  },
  {
    symbol: 'FRM',
    name: 'Ferrum Network Token',
    decimals: 18,
    address: '0xa719b8ab7ea7af0ddb4358719a34631bb79d15dc',
    logoURI:
      'https://tokens.1inch.io/0xa719b8ab7ea7af0ddb4358719a34631bb79d15dc.png',
  },
  {
    symbol: 'SUSHIBA',
    name: 'Sushiba',
    decimals: 9,
    address: '0xa96658cd0d04a8fdcdc30d1156cc65bbfc7591ed',
    logoURI:
      'https://tokens.1inch.io/0xa96658cd0d04a8fdcdc30d1156cc65bbfc7591ed.png',
  },
  {
    symbol: 'AUTO',
    name: 'AUTOv2',
    decimals: 18,
    address: '0xa184088a740c695e156f91f5cc086a06bb78b827',
    logoURI:
      'https://tokens.1inch.io/0xa184088a740c695e156f91f5cc086a06bb78b827.png',
  },
  {
    symbol: 'MSS',
    name: 'Monster Slayer Share',
    decimals: 18,
    address: '0xacabd3f9b8f76ffd2724604185fa5afa5df25ac6',
    logoURI:
      'https://tokens.1inch.io/0xacabd3f9b8f76ffd2724604185fa5afa5df25ac6.png',
  },
  {
    symbol: 'MCRN',
    name: 'MacaronSwap Token',
    decimals: 18,
    address: '0xacb2d47827c9813ae26de80965845d80935afd0b',
    logoURI:
      'https://tokens.1inch.io/0xacb2d47827c9813ae26de80965845d80935afd0b.png',
  },
  {
    symbol: 'RBX',
    name: 'RBX',
    decimals: 18,
    address: '0xace3574b8b054e074473a9bd002e5dc6dd3dff1b',
    logoURI:
      'https://tokens.1inch.io/0xace3574b8b054e074473a9bd002e5dc6dd3dff1b.png',
  },
  {
    symbol: 'BAND',
    name: 'Band Protocol Token',
    decimals: 18,
    address: '0xad6caeb32cd2c308980a548bd0bc5aa4306c6c18',
    logoURI:
      'https://tokens.1inch.io/0xba11d00c5f74255f56a5e366f4f77f5a186d7f55.png',
  },
  {
    symbol: 'XSPACE',
    name: 'XSPACE',
    decimals: 9,
    address: '0xad90c05bc51672eedfee36e58b3ff1a78bbc146d',
    logoURI:
      'https://tokens.1inch.io/0xad90c05bc51672eedfee36e58b3ff1a78bbc146d.png',
  },
  {
    symbol: 'CHS',
    name: 'cheesemaker.farm',
    decimals: 18,
    address: '0xadd8a06fd58761a5047426e160b2b88ad3b9d464',
    logoURI:
      'https://tokens.1inch.io/0xadd8a06fd58761a5047426e160b2b88ad3b9d464.png',
  },
  {
    symbol: 'BURGER',
    name: 'Burger Swap',
    decimals: 18,
    address: '0xae9269f27437f0fcbc232d39ec814844a51d6b8f',
    logoURI:
      'https://tokens.1inch.io/0xae9269f27437f0fcbc232d39ec814844a51d6b8f.png',
  },
  {
    symbol: 'PULI',
    name: 'PULI INU',
    decimals: 9,
    address: '0xaef0a177c8c329cbc8508292bb7e06c00786bbfc',
    logoURI:
      'https://tokens.1inch.io/0xaef0a177c8c329cbc8508292bb7e06c00786bbfc.png',
  },
  {
    symbol: 'MAFA',
    name: 'MafaCoin',
    decimals: 18,
    address: '0xaf44400a99a9693bf3c2e89b02652babacc5cdb9',
    logoURI:
      'https://tokens.1inch.io/0xaf44400a99a9693bf3c2e89b02652babacc5cdb9.png',
  },
  {
    symbol: 'GEN',
    name: 'Gen Token',
    decimals: 18,
    address: '0xb0f2939a1c0e43683e5954c9fe142f7df9f8d967',
    logoURI:
      'https://tokens.1inch.io/0xb0f2939a1c0e43683e5954c9fe142f7df9f8d967.png',
  },
  {
    symbol: 'DUSK',
    name: 'Dusk Network',
    decimals: 18,
    address: '0xb2bd0749dbe21f623d9baba856d3b0f0e1bfec9c',
    logoURI:
      'https://tokens.1inch.io/0x940a2db1b7008b6c776d4faaca729d6d4a4aa551.png',
  },
  // {
  //   symbol: 'PAX',
  //   name: 'Paxos Standard',
  //   decimals: 18,
  //   address: '0xb7f8cd00c5a06c0537e2abff0b58033d02e5e094',
  //   logoURI:
  //     'https://tokens.1inch.io/0x8e870d67f660d95d5be530380d0ec0bd388289e1.png',
  // },
  {
    symbol: 'TCUB',
    name: 'TCUB www.tiger-king.org',
    decimals: 9,
    address: '0xb7fda7374362f66a50665b991aa7ee77b2c6abbe',
    logoURI:
      'https://tokens.1inch.io/0xb7fda7374362f66a50665b991aa7ee77b2c6abbe.png',
  },
  {
    symbol: 'ZIL',
    name: 'Zilliqa',
    decimals: 12,
    address: '0xb86abcb37c3a4b64f74f59301aff131a1becc787',
    logoURI:
      'https://tokens.1inch.io/0xb86abcb37c3a4b64f74f59301aff131a1becc787_1.png',
  },
  {
    symbol: 'WENMOON',
    name: 'WenMoon Token',
    decimals: 7,
    address: '0xb93ba7dc61ecfced69067151fc00c41ca369a797',
    logoURI:
      'https://tokens.1inch.io/0xb93ba7dc61ecfced69067151fc00c41ca369a797.png',
  },
  {
    symbol: 'vXRP',
    name: 'Venus XRP',
    decimals: 8,
    address: '0xb248a295732e0225acd3337607cc01068e3b9c10',
    logoURI:
      'https://tokens.1inch.io/0xb248a295732e0225acd3337607cc01068e3b9c10.png',
  },
  {
    symbol: 'LAUNCH',
    name: 'Super Launcher',
    decimals: 18,
    address: '0xb5389a679151c4b8621b1098c6e0961a3cfee8d4',
    logoURI:
      'https://tokens.1inch.io/0xb5389a679151c4b8621b1098c6e0961a3cfee8d4.png',
  },
  {
    symbol: 'LIT',
    name: 'Litentry',
    decimals: 18,
    address: '0xb59490ab09a0f526cc7305822ac65f2ab12f9723',
    logoURI:
      'https://tokens.1inch.io/0xb59490ab09a0f526cc7305822ac65f2ab12f9723.png',
  },
  {
    symbol: 'DOGE',
    name: 'Dogecoin',
    decimals: 8,
    address: '0xba2ae424d960c26247dd6c32edc70b295c744c43',
    logoURI:
      'https://tokens.1inch.io/0xba2ae424d960c26247dd6c32edc70b295c744c43.png',
  },
  {
    symbol: 'SHAKE',
    name: 'SHAKE token by SpaceSwap v2',
    decimals: 18,
    address: '0xba8a6ef5f15ed18e7184f44a775060a6bf91d8d0',
    logoURI:
      'https://tokens.1inch.io/0x6006fc2a849fedaba8330ce36f5133de01f96189.png',
  },
  {
    symbol: 'WBNB',
    name: 'Wrapped BNB',
    decimals: 18,
    address: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    logoURI:
      'https://tokens.1inch.io/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c_1.png',
  },
  {
    symbol: 'BAGEL',
    name: 'BAGEL',
    decimals: 18,
    address: '0xbb238fce6e2ee90781cd160c9c6eaf3a4cfad801',
    logoURI:
      'https://tokens.1inch.io/0xbb238fce6e2ee90781cd160c9c6eaf3a4cfad801.png',
  },
  {
    symbol: 'BFG',
    name: 'BFG Token',
    decimals: 18,
    address: '0xbb46693ebbea1ac2070e59b4d043b47e2e095f86',
    logoURI:
      'https://tokens.1inch.io/0xbb46693ebbea1ac2070e59b4d043b47e2e095f86_1.png',
  },
  {
    symbol: 'UBXT',
    name: 'UpBots',
    decimals: 18,
    address: '0xbbeb90cfb6fafa1f69aa130b7341089abeef5811',
    logoURI:
      'https://tokens.1inch.io/0xbbeb90cfb6fafa1f69aa130b7341089abeef5811.png',
  },
  {
    symbol: 'BSCS',
    name: 'BSCS Token',
    decimals: 18,
    address: '0xbcb24afb019be7e93ea9c43b7e22bb55d5b7f45d',
    logoURI:
      'https://tokens.1inch.io/0xbcb24afb019be7e93ea9c43b7e22bb55d5b7f45d.png',
  },
  {
    symbol: 'pCWS',
    name: 'PolyCrowns',
    decimals: 18,
    address: '0xbcf39f0edda668c58371e519af37ca705f2bfcbd',
    logoURI:
      'https://tokens.1inch.io/0xbcf39f0edda668c58371e519af37ca705f2bfcbd.png',
  },
  {
    symbol: 'EGLD',
    name: 'Elrond',
    decimals: 18,
    address: '0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe',
    logoURI:
      'https://tokens.1inch.io/0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe.png',
  },
  {
    symbol: 'UNI',
    name: 'Uniswap',
    decimals: 18,
    address: '0xbf5140a22578168fd562dccf235e5d43a02ce9b1',
    logoURI:
      'https://tokens.1inch.io/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png',
  },
  {
    symbol: 'BTS',
    name: 'Bolt Share',
    decimals: 18,
    address: '0xc2e1acef50ae55661855e8dcb72adb182a3cc259',
    logoURI:
      'https://tokens.1inch.io/0xc2e1acef50ae55661855e8dcb72adb182a3cc259.png',
  },
  {
    symbol: 'BRICK',
    name: 'BrickChain',
    decimals: 18,
    address: '0xc4daa5a9f2b832ed0f9bc579662883cd53ea9d61',
    logoURI:
      'https://tokens.1inch.io/0xc4daa5a9f2b832ed0f9bc579662883cd53ea9d61.png',
  },
  {
    symbol: 'SWAMP',
    name: 'Swampy',
    decimals: 18,
    address: '0xc5a49b4cbe004b6fd55b30ba1de6ac360ff9765d',
    logoURI:
      'https://tokens.1inch.io/0xc5a49b4cbe004b6fd55b30ba1de6ac360ff9765d.png',
  },
  {
    symbol: 'ALPA',
    name: 'AlpaToken',
    decimals: 18,
    address: '0xc5e6689c9c8b02be7c49912ef19e79cf24977f03',
    logoURI:
      'https://tokens.1inch.io/0xc5e6689c9c8b02be7c49912ef19e79cf24977f03.png',
  },
  {
    symbol: 'JGN',
    name: 'Juggernaut DeFi',
    decimals: 18,
    address: '0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75',
    logoURI:
      'https://tokens.1inch.io/0xc13b7a43223bb9bf4b69bd68ab20ca1b79d81c75.png',
  },
  {
    symbol: 'SAFUYIELD',
    name: 'SafuYield Protocol',
    decimals: 9,
    address: '0xc74cd0042c837ce59210857504ebb0859e06aa22',
    logoURI:
      'https://tokens.1inch.io/0xc74cd0042c837ce59210857504ebb0859e06aa22.png',
  },
  {
    symbol: 'ROCK',
    name: 'Bedrock',
    decimals: 18,
    address: '0xc3387e4285e9f80a7cfdf02b4ac6cdf2476a528a',
    logoURI:
      'https://tokens.1inch.io/0xc3387e4285e9f80a7cfdf02b4ac6cdf2476a528a.png',
  },
  {
    symbol: 'CCAKE',
    name: 'CheesecakeSwap Token',
    decimals: 18,
    address: '0xc7091aa18598b87588e37501b6ce865263cd67ce',
    logoURI:
      'https://tokens.1inch.io/0xc7091aa18598b87588e37501b6ce865263cd67ce.png',
  },
  {
    symbol: 'DDIM',
    name: 'DuckDaoDime',
    decimals: 18,
    address: '0xc9132c76060f6b319764ea075973a650a1a53bc9',
    logoURI:
      'https://tokens.1inch.io/0xfbeea1c75e4c4465cb2fccc9c6d6afe984558e20.png',
  },
  {
    symbol: 'BUNNY',
    name: 'Bunny Token',
    decimals: 18,
    address: '0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51',
    logoURI:
      'https://tokens.1inch.io/0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51.png',
  },
  {
    symbol: 'BCMC',
    name: 'Blockchain Monster Coin',
    decimals: 18,
    address: '0xc10358f062663448a3489fc258139944534592ac',
    logoURI:
      'https://tokens.1inch.io/0xc10358f062663448a3489fc258139944534592ac.png',
  },
  {
    symbol: 'BNSD',
    name: 'bns.finance',
    decimals: 18,
    address: '0xc1165227519ffd22fdc77ceb1037b9b284eef068',
    logoURI:
      'https://tokens.1inch.io/0xc1165227519ffd22fdc77ceb1037b9b284eef068.png',
  },
  {
    symbol: 'TCT',
    name: 'Token Club',
    decimals: 18,
    address: '0xca0a9df6a8cad800046c1ddc5755810718b65c44',
    logoURI:
      'https://tokens.1inch.io/0xca0a9df6a8cad800046c1ddc5755810718b65c44.png',
  },
  {
    symbol: 'BIFI',
    name: 'beefy.finance',
    decimals: 18,
    address: '0xca3f508b8e4dd382ee878a314789373d80a5190a',
    logoURI:
      'https://tokens.1inch.io/0xca3f508b8e4dd382ee878a314789373d80a5190a.png',
  },
  {
    symbol: 'ccCLO',
    name: 'Callisto Network Token',
    decimals: 18,
    address: '0xccbf1c9e8b4f2cdf3bfba1098b8f56f97d219d53',
    logoURI:
      'https://tokens.1inch.io/0xccbf1c9e8b4f2cdf3bfba1098b8f56f97d219d53_2.png',
  },
  {
    symbol: 'UNIF',
    name: 'Unified',
    decimals: 9,
    address: '0xce5347fdd503f25f8428151a274544a5bd1bd8ca',
    logoURI:
      'https://tokens.1inch.io/0xce5347fdd503f25f8428151a274544a5bd1bd8ca.png',
  },
  {
    symbol: 'MOONSTAR',
    name: 'MoonStar',
    decimals: 9,
    address: '0xce5814efff15d53efd8025b9f2006d4d7d640b9b',
    logoURI:
      'https://tokens.1inch.io/0xce5814efff15d53efd8025b9f2006d4d7d640b9b.png',
  },
  {
    symbol: 'XVS',
    name: 'Venus',
    decimals: 18,
    address: '0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63',
    logoURI:
      'https://tokens.1inch.io/0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63.png',
  },
  {
    symbol: 'ZBTC',
    name: 'ZBTC',
    decimals: 18,
    address: '0xd0dff49de3e314fdfd3f93c5eeee7d5d2f5515cd',
    logoURI:
      'https://tokens.1inch.io/0xd0dff49de3e314fdfd3f93c5eeee7d5d2f5515cd.png',
  },
  {
    symbol: 'UBU',
    name: 'UBUToken',
    decimals: 18,
    address: '0xd2ddfba7bb12f6e70c2aab6b6bf9edaef42ed22f',
    logoURI:
      'https://tokens.1inch.io/0xd2ddfba7bb12f6e70c2aab6b6bf9edaef42ed22f.png',
  },
  {
    symbol: 'YEL',
    name: 'YEL Token',
    decimals: 18,
    address: '0xd3b71117e6c1558c1553305b44988cd944e97300',
    logoURI:
      'https://tokens.1inch.io/0xd3b71117e6c1558c1553305b44988cd944e97300.png',
  },
  {
    symbol: 'MOD',
    name: 'Modefi',
    decimals: 18,
    address: '0xd4fbc57b6233f268e7fba3b66e62719d74deecbc',
    logoURI:
      'https://tokens.1inch.io/0xd4fbc57b6233f268e7fba3b66e62719d74deecbc.png',
  },
  {
    symbol: 'BOG',
    name: 'Bogged Finance',
    decimals: 18,
    address: '0xd7b729ef857aa773f47d37088a1181bb3fbf0099',
    logoURI:
      'https://tokens.1inch.io/0xd7b729ef857aa773f47d37088a1181bb3fbf0099.png',
  },
  {
    symbol: 'NMX',
    name: 'Nominex',
    decimals: 18,
    address: '0xd32d01a43c869edcd1117c640fbdcfcfd97d9d65',
    logoURI:
      'https://tokens.1inch.io/0xd32d01a43c869edcd1117c640fbdcfcfd97d9d65.png',
  },
  {
    symbol: 'SFP',
    name: 'SafePal Token',
    decimals: 18,
    address: '0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb',
    logoURI:
      'https://tokens.1inch.io/0xd41fdb03ba84762dd66a0af1a6c8540ff1ba5dfb.png',
  },
  {
    symbol: 'MDA',
    name: 'Moeda Loyalty Points',
    decimals: 18,
    address: '0xd72aa9e1cddc2f6d6e0444580002170fba1f8eed',
    logoURI:
      'https://tokens.1inch.io/0xd72aa9e1cddc2f6d6e0444580002170fba1f8eed.png',
  },
  {
    symbol: 'XWIN',
    name: 'xWIN Token',
    decimals: 18,
    address: '0xd88ca08d8eec1e9e09562213ae83a7853ebb5d28',
    logoURI:
      'https://tokens.1inch.io/0xd88ca08d8eec1e9e09562213ae83a7853ebb5d28.png',
  },
  {
    symbol: 'bKANGAL',
    name: 'Kangal',
    decimals: 18,
    address: '0xd632bd021a07af70592ce1e18717ab9aa126decb',
    logoURI:
      'https://tokens.1inch.io/0xd632bd021a07af70592ce1e18717ab9aa126decb.png',
  },
  {
    symbol: 'BTD',
    name: 'Bolt Dollar',
    decimals: 18,
    address: '0xd1102332a213e21faf78b69c03572031f3552c33',
    logoURI:
      'https://tokens.1inch.io/0xd1102332a213e21faf78b69c03572031f3552c33.png',
  },
  {
    symbol: 'DFY',
    name: 'DeFi For You.',
    decimals: 18,
    address: '0xd98560689c6e748dc37bc410b4d3096b1aa3d8c2',
    logoURI:
      'https://tokens.1inch.io/0xd98560689c6e748dc37bc410b4d3096b1aa3d8c2.png',
  },
  {
    symbol: 'BINGUS',
    name: 'Bingus Token',
    decimals: 9,
    address: '0xda20c8a5c3b1ab48e31ba6e43f0f2830e50218d8',
    logoURI:
      'https://tokens.1inch.io/0xda20c8a5c3b1ab48e31ba6e43f0f2830e50218d8.png',
  },
  {
    symbol: 'DOS',
    name: 'DOS Network Token BEP20',
    decimals: 18,
    address: '0xdc0f0a5719c39764b011edd02811bd228296887c',
    logoURI:
      'https://tokens.1inch.io/0x0a913bead80f321e7ac35285ee10d9d922659cb7.png',
  },
  {
    symbol: 'INCOME',
    name: 'Income',
    decimals: 18,
    address: '0xdfcf44e9a6d99717fc04addd57fb667286bb7dc0',
    logoURI:
      'https://tokens.1inch.io/0xdfcf44e9a6d99717fc04addd57fb667286bb7dc0.png',
  },
  {
    symbol: 'BELT',
    name: 'BELT Token',
    decimals: 18,
    address: '0xe0e514c71282b6f4e823703a39374cf58dc3ea4f',
    logoURI:
      'https://tokens.1inch.io/0xe0e514c71282b6f4e823703a39374cf58dc3ea4f.png',
  },
  {
    symbol: 'SAFESPACE',
    name: 'SAFESPACE',
    decimals: 9,
    address: '0xe1db3d1ee5cfe5c6333be96e6421f9bd5b85c987',
    logoURI:
      'https://tokens.1inch.io/0xe1db3d1ee5cfe5c6333be96e6421f9bd5b85c987.png',
  },
  {
    symbol: 'BAKE',
    name: 'BakeryToken',
    decimals: 18,
    address: '0xe02df9e3e622debdd69fb838bb799e3f168902c5',
    logoURI:
      'https://tokens.1inch.io/0xe02df9e3e622debdd69fb838bb799e3f168902c5.png',
  },
  {
    symbol: '$ANRX',
    name: 'pTokens $ANRX',
    decimals: 18,
    address: '0xe2e7329499e8ddb1f2b04ee4b35a8d7f6881e4ea',
    logoURI:
      'https://tokens.1inch.io/0xe2e7329499e8ddb1f2b04ee4b35a8d7f6881e4ea.png',
  },
  {
    symbol: 'UNICORN',
    name: 'UNICORN Token',
    decimals: 18,
    address: '0xe3e1fabeabd48491bd6902b0c32fdeee8d2ff12b',
    logoURI:
      'https://tokens.1inch.io/0xe3e1fabeabd48491bd6902b0c32fdeee8d2ff12b.png',
  },
  {
    symbol: 'KaiInu',
    name: 'Kai Inu',
    decimals: 9,
    address: '0xe5a09784b16e1065c37df14c6e2f06fdce317a1b',
    logoURI:
      'https://tokens.1inch.io/0xe5a09784b16e1065c37df14c6e2f06fdce317a1b.png',
  },
  {
    symbol: 'TOWER',
    name: 'TOWER',
    decimals: 18,
    address: '0xe7c9c6bc87b86f9e5b57072f907ee6460b593924',
    logoURI:
      'https://tokens.1inch.io/0xe7c9c6bc87b86f9e5b57072f907ee6460b593924.png',
  },
  {
    symbol: 'BNBTC',
    name: 'BNbitcoin Token - minable bitcoin on BSC',
    decimals: 8,
    address: '0xe7cb24f449973d5b3520e5b93d88b405903c75fb',
    logoURI:
      'https://tokens.1inch.io/0xe7cb24f449973d5b3520e5b93d88b405903c75fb.png',
  },
  {
    symbol: 'VLX',
    name: 'Velas',
    decimals: 18,
    address: '0xe9c803f48dffe50180bd5b01dc04da939e3445fc',
    logoURI:
      'https://tokens.1inch.io/0xe9c803f48dffe50180bd5b01dc04da939e3445fc.png',
  },
  {
    symbol: 'OKBOOMER',
    name: 'OKBoomer',
    decimals: 9,
    address: '0xe9db02a654b74ca04734b26ef3b2a79808d43404',
    logoURI:
      'https://tokens.1inch.io/0xe9db02a654b74ca04734b26ef3b2a79808d43404.png',
  },
  {
    symbol: 'BUSD',
    name: 'BUSD Token',
    decimals: 18,
    address: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    logoURI:
      'https://tokens.1inch.io/0x4fabb145d64652a948d72533023f6e7a623c7c53.png',
  },
  {
    symbol: 'wBAN',
    name: 'Wrapped Banano',
    decimals: 18,
    address: '0xe20b9e246db5a0d21bf9209e4858bc9a3ff7a034',
    logoURI:
      'https://tokens.1inch.io/0xe20b9e246db5a0d21bf9209e4858bc9a3ff7a034.png',
  },
  {
    symbol: 'SWAP',
    name: 'SafeSwap Token',
    decimals: 18,
    address: '0xe56a473043eaab7947c0a2408cea623074500ee3',
    logoURI:
      'https://tokens.1inch.io/0xe56a473043eaab7947c0a2408cea623074500ee3.png',
  },
  {
    symbol: 'bROOBEE',
    name: 'ROOBEE',
    decimals: 18,
    address: '0xe64f5cb844946c1f102bd25bbd87a5ab4ae89fbe',
    logoURI:
      'https://tokens.1inch.io/0xa31b1767e09f842ecfd4bc471fe44f830e3891aa.png',
  },
  {
    symbol: 'HOKK',
    name: 'Hokkaido Inu',
    decimals: 18,
    address: '0xe87e15b9c7d989474cb6d8c56b3db4efad5b21e8',
    logoURI:
      'https://tokens.1inch.io/0xe87e15b9c7d989474cb6d8c56b3db4efad5b21e8.png',
  },
  {
    symbol: 'ASIA',
    name: 'ASIA COIN',
    decimals: 18,
    address: '0xebaffc2d2ea7c66fb848c48124b753f93a0a90ec',
    logoURI:
      'https://tokens.1inch.io/0xebaffc2d2ea7c66fb848c48124b753f93a0a90ec.png',
  },
  {
    symbol: 'BPAY',
    name: 'BNBPay',
    decimals: 9,
    address: '0xebc76079da0c245fae7225b58a57a54809b40618',
    logoURI:
      'https://tokens.1inch.io/0xebc76079da0c245fae7225b58a57a54809b40618.png',
  },
  {
    symbol: 'TPT',
    name: 'TokenPocket Token',
    decimals: 4,
    address: '0xeca41281c24451168a37211f0bc2b8645af45092',
    logoURI:
      'https://tokens.1inch.io/0xeca41281c24451168a37211f0bc2b8645af45092.png',
  },
  {
    symbol: 'vUSDC',
    name: 'Venus USDC',
    decimals: 8,
    address: '0xeca88125a5adbe82614ffc12d0db554e2e2867c8',
    logoURI:
      'https://tokens.1inch.io/0xeca88125a5adbe82614ffc12d0db554e2e2867c8.png',
  },
  {
    symbol: 'HPS',
    name: 'HappinessToken',
    decimals: 18,
    address: '0xeda21b525ac789eab1a08ef2404dd8505ffb973d',
    logoURI:
      'https://tokens.1inch.io/0xeda21b525ac789eab1a08ef2404dd8505ffb973d.png',
  },
  {
    symbol: 'FSAFE',
    name: 'Fair Safe',
    decimals: 9,
    address: '0xee738a9e5fb78c24d26cecd30389ed977c38d0ca',
    logoURI:
      'https://tokens.1inch.io/0xee738a9e5fb78c24d26cecd30389ed977c38d0ca.png',
  },
  {
    symbol: 'ELK',
    name: 'Elk',
    decimals: 18,
    address: '0xeeeeeb57642040be42185f49c52f7e9b38f8eeee',
    logoURI:
      'https://tokens.1inch.io/0xeeeeeb57642040be42185f49c52f7e9b38f8eeee.png',
  },
  {
    symbol: 'BNB',
    name: 'BNB',
    decimals: 18,
    address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    logoURI:
      'https://tokens.1inch.io/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c_1.png',
  },
  {
    symbol: 'NVT',
    name: 'NerveNetwork',
    decimals: 8,
    address: '0xf0e406c49c63abf358030a299c0e00118c4c6ba5',
    logoURI:
      'https://tokens.1inch.io/0xf0e406c49c63abf358030a299c0e00118c4c6ba5.png',
  },
  {
    symbol: 'LINK',
    name: 'ChainLink Token',
    decimals: 18,
    address: '0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd',
    logoURI:
      'https://tokens.1inch.io/0x514910771af9ca656af840dff83e8264ecf986ca.png',
  },
  {
    symbol: 'BGOV',
    name: 'BGOV Token',
    decimals: 18,
    address: '0xf8e026dc4c0860771f691ecffbbdfe2fa51c77cf',
    logoURI:
      'https://tokens.1inch.io/0xf8e026dc4c0860771f691ecffbbdfe2fa51c77cf.png',
  },
  {
    symbol: 'ICE',
    name: 'IceToken',
    decimals: 18,
    address: '0xf16e81dce15b08f326220742020379b855b87df9',
    logoURI:
      'https://tokens.1inch.io/0xf16e81dce15b08f326220742020379b855b87df9.png',
  },
  {
    symbol: 'ANY',
    name: 'Anyswap-BEP20',
    decimals: 18,
    address: '0xf68c9df95a18b2a5a5fa1124d79eeeffbad0b6fa',
    logoURI:
      'https://tokens.1inch.io/0xf99d58e463a2e07e5692127302c20a191861b4d6.png',
  },
  {
    symbol: 'OM',
    name: 'MANTRA DAO',
    decimals: 18,
    address: '0xf78d2e7936f5fe18308a3b2951a93b6c4a41f5e2',
    logoURI:
      'https://tokens.1inch.io/0xf78d2e7936f5fe18308a3b2951a93b6c4a41f5e2.png',
  },
  {
    symbol: 'vFIL',
    name: 'Venus FIL',
    decimals: 8,
    address: '0xf91d58b5ae142dacc749f58a49fcbac340cb0343',
    logoURI:
      'https://tokens.1inch.io/0xf91d58b5ae142dacc749f58a49fcbac340cb0343.png',
  },
  {
    symbol: 'vETH',
    name: 'Venus ETH',
    decimals: 8,
    address: '0xf508fcd89b8bd15579dc79a6827cb4686a3592c8',
    logoURI:
      'https://tokens.1inch.io/0xf508fcd89b8bd15579dc79a6827cb4686a3592c8.png',
  },
  {
    symbol: 'GUARD',
    name: 'Guardian',
    decimals: 18,
    address: '0xf606bd19b1e61574ed625d9ea96c841d4e247a32',
    logoURI:
      'https://tokens.1inch.io/0xf606bd19b1e61574ed625d9ea96c841d4e247a32.png',
  },
  {
    symbol: 'GNT',
    name: 'GreenTrust',
    decimals: 18,
    address: '0xf750a26eb0acf95556e8529e72ed530f3b60f348',
    logoURI:
      'https://tokens.1inch.io/0xf750a26eb0acf95556e8529e72ed530f3b60f348.png',
  },
  {
    symbol: 'BRY',
    name: 'Berry Tributes',
    decimals: 18,
    address: '0xf859bf77cbe8699013d6dbc7c2b926aaf307f830',
    logoURI:
      'https://tokens.1inch.io/0xf859bf77cbe8699013d6dbc7c2b926aaf307f830.png',
  },
  {
    symbol: 'EGG',
    name: 'Goose Golden Egg',
    decimals: 18,
    address: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    logoURI:
      'https://tokens.1inch.io/0xf952fc3ca7325cc27d15885d37117676d25bfda6.png',
  },
  {
    symbol: 'LSS',
    name: 'Chainport.io-Peg Lossless Token',
    decimals: 18,
    address: '0xf7686f43591302cd9b4b9c4fe1291473fae7d9c9',
    logoURI:
      'https://tokens.1inch.io/0xf7686f43591302cd9b4b9c4fe1291473fae7d9c9.png',
  },
  {
    symbol: 'NFTART',
    name: 'NFTArt.Finance',
    decimals: 9,
    address: '0xf7844cb890f4c339c497aeab599abdc3c874b67a',
    logoURI:
      'https://tokens.1inch.io/0xf7844cb890f4c339c497aeab599abdc3c874b67a.png',
  },
  {
    symbol: 'REEF',
    name: 'Reef.finance',
    decimals: 18,
    address: '0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e',
    logoURI:
      'https://tokens.1inch.io/0xfe3e6a25e6b192a42a44ecddcd13796471735acf.png',
  },
  {
    symbol: 'HARD',
    name: 'HARD',
    decimals: 6,
    address: '0xf79037f6f6be66832de4e7516be52826bc3cbcc4',
    logoURI:
      'https://tokens.1inch.io/0xf79037f6f6be66832de4e7516be52826bc3cbcc4.png',
  },
  {
    symbol: 'MATH',
    name: 'MATH Token',
    decimals: 18,
    address: '0xf218184af829cf2b0019f8e6f0b2423498a36983',
    logoURI:
      'https://tokens.1inch.io/0x08d967bb0134f2d07f7cfb6e246680c53927dd30.png',
  },
  {
    symbol: 'ANKR',
    name: 'Ankr',
    decimals: 18,
    address: '0xf307910a4c7bbc79691fd374889b36d8531b08e3',
    logoURI:
      'https://tokens.1inch.io/0x8290333cef9e6d528dd5618fb97a76f268f3edd4.png',
  },
  {
    symbol: 'TAO',
    name: 'Friction Finance',
    decimals: 9,
    address: '0xf0443834b7b21104b7102edbe8f9ec06204cd395',
    logoURI:
      'https://tokens.1inch.io/0xf0443834b7b21104b7102edbe8f9ec06204cd395.png',
  },
  {
    symbol: 'FOX',
    name: 'Fox Finance',
    decimals: 9,
    address: '0xfad8e46123d7b4e77496491769c167ff894d2acb',
    logoURI:
      'https://tokens.1inch.io/0xfad8e46123d7b4e77496491769c167ff894d2acb.png',
  },
  {
    symbol: 'FLOKI',
    name: 'FLOKI',
    decimals: 9,
    address: '0xfb5b838b6cfeedc2873ab27866079ac55363d37e',
    logoURI:
      'https://tokens.1inch.io/0xfb5b838b6cfeedc2873ab27866079ac55363d37e.png',
  },
  {
    symbol: 'SEA',
    name: 'Sea Token',
    decimals: 18,
    address: '0xfb52fc1f90dd2b070b9cf7ad68ac3d68905643fa',
    logoURI:
      'https://tokens.1inch.io/0xfb52fc1f90dd2b070b9cf7ad68ac3d68905643fa.png',
  },
  {
    symbol: 'SA',
    name: 'Superalgos',
    decimals: 18,
    address: '0xfb981ed9a92377ca4d75d924b9ca06df163924fd',
    logoURI:
      'https://tokens.1inch.io/0xfb981ed9a92377ca4d75d924b9ca06df163924fd.png',
  },
  {
    symbol: 'renBTC',
    name: 'renBTC',
    decimals: 8,
    address: '0xfce146bf3146100cfe5db4129cf6c82b0ef4ad8c',
    logoURI:
      'https://tokens.1inch.io/0xfce146bf3146100cfe5db4129cf6c82b0ef4ad8c.png',
  },
  {
    symbol: 'ONT',
    name: 'Ontology Token',
    decimals: 18,
    address: '0xfd7b3a77848f1c2d67e05e54d78d174a0c850335',
    logoURI:
      'https://tokens.1inch.io/0xfd7b3a77848f1c2d67e05e54d78d174a0c850335.png',
  },
  {
    symbol: 'vUSDT',
    name: 'Venus USDT',
    decimals: 8,
    address: '0xfd5840cd36d94d7229439859c0112a4185bc0255',
    logoURI:
      'https://tokens.1inch.io/0xfd5840cd36d94d7229439859c0112a4185bc0255.png',
  },
  {
    symbol: 'KNC',
    name: 'Kyber Network Crystal',
    decimals: 18,
    address: '0xfe56d5892bdffc7bf58f2e84be1b2c32d21c308b',
    logoURI:
      'https://tokens.1inch.io/0xdefa4e8a7bcba345f687a2f1456f5edd9ce97202.png',
  },
  {
    symbol: 'VINU',
    name: 'Vita Inu',
    decimals: 18,
    address: '0xfebe8c1ed424dbf688551d4e2267e7a53698f0aa',
    logoURI:
      'https://tokens.1inch.io/0xfebe8c1ed424dbf688551d4e2267e7a53698f0aa.png',
  },
  {
    symbol: '8PAY',
    name: '8PAY Network',
    decimals: 18,
    address: '0xfeea0bdd3d07eb6fe305938878c0cadbfa169042',
    logoURI:
      'https://tokens.1inch.io/0xfeea0bdd3d07eb6fe305938878c0cadbfa169042.png',
  },
  {
    symbol: 'BORING',
    name: 'BoringDAO',
    decimals: 18,
    address: '0xffeecbf8d7267757c2dc3d13d730e97e15bfdf7f',
    logoURI:
      'https://tokens.1inch.io/0xffeecbf8d7267757c2dc3d13d730e97e15bfdf7f.png',
  },
]

export default tokens
