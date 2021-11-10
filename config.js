require('dotenv').config()

module.exports = {
  deployments: {
    netId137: {
      usdc: {
        instanceAddress: {
          '1': '',
          '100': '',
          '1000': '',
          '50000': '',
          '100000': ''
        },
        tokenAddress: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
        symbol: 'USDC',
        decimals: 6
      }
    }
  }
}
