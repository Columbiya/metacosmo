import gql from 'graphql-tag'

export const TOKEN_QUERY = gql`
    query tokens($id: String!) {
      tokens(where: { id: $id }) {
        totalLiquidity
        derivedETH
        totalSupply
      }
    }
`;

export const PAIR_QUERY = gql`
  query pair($id: String!) {
    pair(id: $id) {
      token0Price
      token1Price
      liquidityProviderCount
    }
  }
`;