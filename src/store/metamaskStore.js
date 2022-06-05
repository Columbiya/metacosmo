import { makeAutoObservable } from 'mobx';
import { ethers } from 'ethers'

class Metamask {
    ethereum = window.ethereum
    cosmoland_contract = ''
    _cosmoland_address = ''
    _usdc_address = ''
    usdc_contract = ''
    provider = ''
    accounts = ''
    signer = ''
    USDC = ''
    COSMOLAND = ''
    _isConnected = false
    _isChainMatic = false
    _isChainBSC = false
    _connectedWallet = ''
    _currentSupplyCosmoland = 0
    _currentPriceCosmoland = 0
    _percentage = 0
    _currentOwn = 0
    _currentChain = ''

    get currentChain() {
        return this._currentChain
    }

    set currentChain(value) {
        this._currentChain = value
    }

    get usdc_address() {
        return this._usdc_address
    }

    set usdc_address(value) {
        this._usdc_address = value
    }

    get cosmoland_address() {
        return this._cosmoland_address
    }

    set cosmoland_address(value) {
        this._cosmoland_address = value
    }

    get isConnected() {
        return this._isConnected
    }

    set isConnected(value) {
        this._isConnected = value
    }

    get isChainMatic() {
        return this._isChainMatic
    }

    set isChainMatic(value) {
        this._isChainMatic = value
    }

    get isChainBSC() {
        return this._isChainBSC
    }

    get connectedWallet() {
        return this._connectedWallet
    }

    set connectedWallet(value) {
        this._connectedWallet = value
    }

    get currentSupplyCosmoland() {
        return this._currentSupplyCosmoland
    }

    set currentSupplyCosmoland(value) {
        this._currentSupplyCosmoland = value
    }

    get currentPriceCosmoland() {
        return this._currentPriceCosmoland
    }

    set currentPriceCosmoland(value) {
        this._currentPriceCosmoland = value
    }

    get percentage() {
        return this._percentage
    }

    set percentage(value) {
        this._percentage = value
    }

    get currentOwn() {
        return this._currentOwn
    }

    set currentOwn(value) {
        this._currentOwn = value
    }

    constructor() {
        makeAutoObservable(this)
    }

    subscribeOnChainChanged() {
        this.ethereum.on('chainChanged', (chainId) => {
            this.currentChain = chainId
        })
    }

    subscribeOnConnectionReset() {
        this.ethereum.on('accountsChanged', (accounts) => {
            if (!accounts.length) {
                this.isConnected = false
            }
            else {
                this.connectedWallet = accounts[0]
            }
        })
    }

    async init() {
        this.cosmoland_address = '0x0DEeE3B23764246e36CB84F6C1BDd9d414564DB5';
        this.usdc_address = '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174';
        this.cosmoland_abi=["function mint(uint256 numberOfCosmoLands) public",
        "function balanceOf(address owner) external view returns (uint256 balance)",
        "function ownerOf(uint256 tokenId) external view returns (address owner)",
        "function getPrice() public view returns (uint256)",
        "function safeTransferFrom(address from, address to, uint256 tokenId) external",
        "function transferFrom(address from, address to, uint256 tokenId) external",
        "function approve(address to, uint256 tokenId) external",
        "function getApproved(uint256 tokenId) external view returns (address operator)",
        "function setApprovalForAll(address operator, bool _approved) external",
        "function isApprovedForAll(address owner, address operator) external view returns (bool)",
        "function safeTransferFrom(address from, address to, uint256 tokenId, bytes calldata data) external",
        "function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256)",
        "function tokenByIndex(uint256 index) public view returns (uint256)",
        "function _exists(uint256 tokenId) internal view returns (bool)",
        "function setBaseURI(string memory baseURI_) public onlyOwner",
        "function setContractURI(string memory contractURI_) public onlyOwner",
        "function setURL(string memory newUrl) public onlyOwner",
        "function tokenURI(uint256 _tokenId) external view returns (string memory)",
        "function totalSupply() external view returns (uint256)",
       ]
  
        this.usdc_abi=["function approve(address spender, uint256 amount) public returns (bool)", 
        "function totalSupply() public view returns (uint256)",
        "function balanceOf(address account) public view  returns (uint256)" ,
        "function transfer(address to, uint256 amount) public  returns (bool)",
        "function allowance(address owner, address spender) public view returns (uint256)"]
  
        if (window.ethereum) {
  
         this.provider = new ethers.providers.Web3Provider(window.ethereum,"any");
         this.accounts = await this.provider.send("eth_requestAccounts", []);
       
         console.log('Metamask')
        
         const signer = await this.provider.getSigner();
      
         this.cosmoland_contract = new ethers.Contract(this.cosmoland_address,this.cosmoland_abi, signer);
         this.usdc_contract = new ethers.Contract(this.usdc_address,this.usdc_abi, signer);
         this.USDC=this.usdc_contract.connect(signer);
         this.COSMOLAND=this.cosmoland_contract.connect(signer);
  
         this.update();

         this.ethereum.on('chainChanged', (chainId) => {
            if (chainId !== '0x89') {
                this.isConnected = true
                this.isChainMatic = false
            }
            else if (chainId === '0x89' || chainId === 137) {
                this.isChainMatic = true
                this.isConnected = true
            }
        })

        this.ethereum.on('accountsChanged', (accounts) => {
            if (!accounts.length) {
                this.isConnected = false
            }
            else {
                this.connectedWallet = accounts[0]
            }

            this.checkMetamask()
        })
  
         return [this.USDC, this.COSMOLAND]
  
        }
        else
        {
            this.provider = new ethers.providers.InfuraProvider('matic');
            console.log('Infura')
            this.cosmoland_contract = new ethers.Contract(this.cosmoland_address,this.cosmoland_abi, this.provider);
            this.usdc_contract = new ethers.Contract(this.usdc_address,this.usdc_abi,this.provider);
            return [this.usdc_contract, this.cosmoland_contract]
        }
    }

    async checkMetamask() {
        const chainId = await this.ethereum.request({method: 'eth_chainId'})
        const accounts = await this.ethereum.request({method: 'eth_accounts'})
     
        if (!window.ethereum || !window.ethereum.isConnected() || chainId !== '0x89' || accounts.length == 0) {
            
            if (chainId !== '0x89' && window.ethereum && accounts.length > 0) {
                this.isConnected = true
                this.isChainMatic = false
            }
        }  
        else {
            this.isConnected = true
            this.connectedWallet = accounts[0]
            this.isChainMatic = true
        }
    }

    async switchChain(params = {}) {
        try {
            await this.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: params.chainId ? params.chainId: '0x89' }],
            });
            this.currentChain = params ? params.chainId: '0x89'
        } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === 4902) {
                try {
                    await this.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [ !Object.keys(params).length ?
                        {
                            chainId: "0x89",
                            rpcUrls: ["https://rpc-mainnet.matic.network/"],
                            chainName: "Matic Mainnet",
                            nativeCurrency: {
                                name: "MATIC",
                                symbol: "MATIC",
                                decimals: 18
                            },
                            blockExplorerUrls: ["https://polygonscan.com/"]
                        }: params,
                        ],
                    });
                    this.isChainMatic = true
                } catch (addError) {
                    
                }
            }
        }

        await this.checkMetamask()
    }

    async connect_to_metamask(isTokensContractPage) {
        const provider = new ethers.providers.Web3Provider(window.ethereum,"any");
        const signer = await provider.getSigner();
        const network = await provider.getNetwork();
        const accounts = await provider.send("eth_requestAccounts", []);
        window.ethereum.enable();  
        console.log(network.chainId);
        console.log(accounts[0]);
        if (!window.ethereum) {
            this.isConnected = false
            return
        }
        if (isTokensContractPage && window.ethereum) {
            this.isConnected = true
            return
        }
        else {
            if (window.ethereum.chainId!==137) {
                await window.ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [{
                        chainId: "0x89",
                        rpcUrls: ["https://rpc-mainnet.matic.network/"],
                        chainName: "Matic Mainnet",
                        nativeCurrency: {
                            name: "MATIC",
                            symbol: "MATIC",
                            decimals: 18
                        },
                        blockExplorerUrls: ["https://polygonscan.com/"]
                    }]
                });
                this.isConnected = true
                this.isChainMatic = true
            }
            alert('Connected to Metamask');
            this.checkMetamask()
        }
    }

    async update() {
        this.currentSupplyCosmoland = await this.cosmoland_contract.totalSupply()
        const accounts = this.ethereum.request('eth_requestAccounts').then(accounts => this.connectedWallet = accounts[0])
        this.currentPriceCosmoland = await this.COSMOLAND.getPrice()
        const dollars = this.currentPriceCosmoland / 1000000 
        this.currentPriceCosmoland = dollars.toFixed(2)
        this.percentage = Math.round((parseFloat(this.currentSupplyCosmoland*100/16400000) + Number.EPSILON) * 1000) / 1000

        this.currentOwn = await this.cosmoland_contract.balanceOf(window.ethereum.selectedAddress) || '0';
    }

    async buyCosmoland(amount) {
        const to_mint=parseInt(amount);

        console.log('Minting', to_mint);
        // get price from clContract
    
        const price = await this.COSMOLAND.getPrice();
    
        // two steps 1. approve USDC
        /* global BigInt */
        const usdc_approval = BigInt(price*to_mint)
        const tx = await this.USDC.approve(this.cosmoland_address, usdc_approval)
        let receipt =  await tx.wait();
        console.log(receipt);
        // mint
        const buy_tx = await this.COSMOLAND.mint(to_mint);
        receipt = await buy_tx.wait();
        this.update()
    }

    async getCurrentChainId() {
        const chainId = await this.ethereum.request({ method: 'eth_chainId' });
        this.currentChain = chainId
    }

    async getConnectedAccount() {
        const accounts = await this.ethereum.request({ method: 'eth_requestAccounts' })

        if (!accounts.length) {
            this.isConnected = false
            return
        }

        this.connectedWallet = accounts[0]
        this.isConnected = true
    }

    async addToken(params) {
        try {
            // wasAdded is a boolean. Like any RPC method, an error may be thrown.
            const wasAdded = await this.ethereum.request({
              method: 'wallet_watchAsset',
              params
            });
          
            if (wasAdded) {
                console.log('token is added')
            } else {
              console.log('Something went wrong')
            }
          } catch (error) {
            console.log(error);
          }
    }

}

export default new Metamask()