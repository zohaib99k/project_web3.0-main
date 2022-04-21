require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/guYu4xsbsWz79RDSxlRHb5LHKR02x0nU',
      accounts: ['6dbc69e650b8b51e0bbd4159ab604548e81df0580c5757923d1d118c2e03eb0a'],
    },
  },
};