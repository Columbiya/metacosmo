import { useQuery } from "@apollo/client";
import { TOKEN_QUERY } from './../apollo/queries';

function useTokens() {
    const { loading: cupLoading, error: cupError, data: cupData } = useQuery(TOKEN_QUERY, { variables: { id:'0x1fadbb8d7c2d84daad1c6f52f92480cef8c96024' } })
    const { loading: cmpLoading, error: cmpError, data: cmpData } = useQuery(TOKEN_QUERY, { variables: { id:'0xb9fdc13f7f747baedcc356e9da13ab883ffa719b' } })
    const { loading: cbpLoading, error: cbpError, data: cbpData } = useQuery(TOKEN_QUERY, { variables: { id:'0xd6319d0d2bc6d58066f61c1f82715564b31dd864' } })
    const { loading: cdpLoading, error: cdpError, data: cdpData } = useQuery(TOKEN_QUERY, { variables: { id:'0x0690554989758e50895c5e7bfe6184a02203cbc6' } })

    return {
        loading: cupLoading && cmpLoading && cbpLoading && cdpLoading,
        cup: cupData,
        cmp: cmpData,
        cbp: cbpData,
        cdp: cdpData
    }
}

export default useTokens