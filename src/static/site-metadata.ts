interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Alex Running Life',
  siteUrl: 'https://alexs.austsxk.com',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  description: 'Alex Running Life',
  navLinks: [
    {
      name: 'AI',
      url: 'https://next.sunls.de/',
    },
    {
      name: 'AI算卦',
      url: 'https://divination.sunls.de',
    },
    {
      name: '博客',
      url: 'https://austsxk.com',
    },
  ],
};

export default data;
