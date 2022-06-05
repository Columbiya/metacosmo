import { ethers } from 'ethers';
import { makeAutoObservable } from 'mobx';

class CvrStore {
    usdt_abi=[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
    cvr_abi=[{"inputs":[{"internalType":"address","name":"_dex","type":"address"},{"internalType":"address","name":"_company","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCurrentEmission","outputs":[{"internalType":"uint256","name":"_current_emission","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getEmissions","outputs":[{"components":[{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"sell","type":"uint256"},{"internalType":"uint256","name":"company","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"internalType":"struct CosmoVirtual.EmissionStage[]","name":"_emissions","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getInfo","outputs":[{"internalType":"uint256","name":"_stage","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_rest","type":"uint256"},{"internalType":"uint256","name":"_current_emission","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPrice","outputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPrices","outputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRest","outputs":[{"internalType":"uint256","name":"_rest","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStage","outputs":[{"internalType":"uint256","name":"_stage","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintEmission","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"resetEmission","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_company","type":"address"}],"name":"setCompany","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stage","type":"uint256"}],"name":"setStage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}];
    dex_abi=[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Bought","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"string","name":"text","type":"string"}],"name":"Logger","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"success","type":"bool"},{"indexed":false,"internalType":"bytes","name":"data","type":"bytes"}],"name":"Response","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Sold","type":"event"},{"inputs":[{"internalType":"address","name":"_destination","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"approveUsdt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"buyer","type":"address"},{"internalType":"uint256","name":"_usdt_amount","type":"uint256"}],"name":"buy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getLastExhaustTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_destination","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transferUsdt","outputs":[],"stateMutability":"nonpayable","type":"function"}];

    usdt_address="0x55d398326f99059fF775485246999027B3197955";
    dex_address="0xeA9ba390aC2cC98246a87147C441e6E71a802756";
    cvr_address="0x4DE3a72f8F96D66B3c2E7Da6FD49061E1879f722";

    provider = ''
    signer = ''

    cvr_contract = ''
    dex_contract = ''
    usdt_contract = ''

    ethereum = window.ethereum

    _cvr_price=1;
    _cvr_stage=1;
    _cvr_emission=1;
    _cvr_rest=1;
    _cvr_percent=100;
    _isConnected = false
    _isChainBSC = false
    _connectedWallet = ''
    _youOwn = 0

    get cvr_price() {
        return this._cvr_price
    }

    set cvr_price(value) {
        this._cvr_price = value
    }

    get youOwn() {
        return this._youOwn
    }

    set youOwn(value) {
        this._youOwn = value
    }

    get cvr_stage() {
        return this._cvr_stage
    }

    set cvr_stage(value) {
        this._cvr_stage = value
    }

    get cvr_emission() {
        return this._cvr_emission
    }

    set cvr_emission(value) {
        this._cvr_emission = value
    }

    get cvr_rest() {
        return this._cvr_rest
    }

    set cvr_rest(value) {
        this._cvr_rest = value
    }

    get cvr_percent() {
        return this._cvr_percent
    }

    set cvr_percent(value) {
        this._cvr_percent = value
    }

    get isConnected() {
        return this._isConnected
    }

    set isConnected(value) {
        this._isConnected = value
    }

    get isChainBSC() {
        return this._isChainBSC
    }

    set isChainBSC(value) {
        this._isChainBSC = value
    }

    get connectedWallet() {
        return this._connectedWallet
    }

    set connectedWallet(value) {
        this._connectedWallet = value
    }

    constructor() {
        makeAutoObservable(this)

        if (window.ethereum) {
            this.provider = new ethers.providers.Web3Provider(window.ethereum,"any")
            this.signer = this.provider.getSigner();
    
            this.cvr_contract = new ethers.Contract(this.cvr_address,this.cvr_abi, this.signer);
            this.dex_contract = new ethers.Contract(this.dex_address,this.dex_abi, this.signer);
            this.usdt_contract = new ethers.Contract(this.usdt_address,this.usdt_abi, this.signer);
    
            this.usdt_contract.connect(this.signer);
            this.dex_contract.connect(this.signer);
    
            this.ethereum.on('chainChanged', (chainId) => {
                if (chainId !== "0x38") {
                    this.isConnected = true
                    this.isChainBSC = false
                }
                else if (chainId === "0x38") {
                    this.isChainBSC = true
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
        }
    }

    async checkMetamask() {
        const chainId = await this.ethereum.request({method: 'eth_chainId'})
        const accounts = await this.ethereum.request({method: 'eth_accounts'})
     
        if (!window.ethereum || !window.ethereum.isConnected() || chainId !== "0x38" || accounts.length == 0) {
            
            if (chainId !== "0x38" && window.ethereum && accounts.length > 0) {
                this.isConnected = true
                this.isChainBSC = false
            }
        }  
        else {
            this.isConnected = true
            this.connectedWallet = accounts[0]
            this.isChainBSC = true
        }
    }

    async getStatus() {
        let status = await this.cvr_contract.getInfo();
        console.log(status);
        this.cvr_price = status._price.toNumber();
        this.cvr_stage = status._stage.toNumber();
        this.cvr_rest = ethers.utils.formatEther(ethers.BigNumber.from(status._rest).toString());
        this.cvr_emission = ethers.utils.formatEther(ethers.BigNumber.from(status._current_emission).toString());
        this.cvr_percent = (1 - parseFloat(this.cvr_rest) / parseFloat(this.cvr_emission)) * 100;
        // document.getElementById('cvr_price').innerText = parseInt(cvr_price)/100 + ' USDT';

        
        const sold = this.cvr_emission - this.cvr_rest
        this.cvr_emission = parseInt(this.cvr_emission).toLocaleString('en');
        this.cvr_rest = parseInt(this.cvr_rest).toLocaleString('en');
        console.log('sold', sold)
        this.soldCVR = sold.toLocaleString('en');
        this.percent = parseInt(Math.ceil(((this.cvr_emission / sold)* 100) / 100))
        this.youOwn = await this.cvr_contract.balanceOf(window.ethereum.selectedAddress) / 1e18
        this.youOwnNumber = this.youOwn
        this.youOwn = this.youOwn.toLocaleString('en')
        console.log('you own', this.youOwn)
        // setProgress(this.cvr_percent,parseInt(this.cvr_rest).toLocaleString('en'),sold.toLocaleString('en'));
        //document.getElementById('cvr_percent').innerText = cvr_percent;
        //   document.querySelector('.progressbar__text').innerHTML =
        //       `<span>Sold <span id="cvr_sold">${soldCVR}</span></span>. Left <span id="cvr_rest_2">${rest2CVR}</span> at this price.`;

    }

    async init(){
        await this.provider.send("eth_requestAccounts", [])
         .then((x) => {
             let signer_account = x[0];
             this.getStatus().then(x=>console.log(x));
         });
    }

    async switchChain() {
        try {
            await this.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: "0x38" }],
            });
            this.isChainBSC = true
        } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === 4902) {
                try {
                    await this.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                        {
                            chainId: "0x38",
                            rpcUrls: ["https://bsc-dataseed.binance.org/"],
                            chainName: "Smart Chain",
                            nativeCurrency: {
                                name: "BNB",
                                symbol: "BNB",
                                decimals: 18
                            },
                            blockExplorerUrls: ["https://bscscan.com"]
                        },
                        ],
                    });
                    this.isChainBSC = true
                } catch (addError) {
                    
                }
            }
        }

        await this.checkMetamask()
    }

    async purchaseCVR(amount, price){
        let account = window.ethereum.selectedAddress;
        let usdt_num = amount*price
        let usdt_amt = ethers.utils.parseEther(usdt_num.toString());
        console.log(usdt_amt)
        const tx = await this.usdt_contract.approve(this.dex_address, usdt_amt );
        const receipt =  await tx.wait();
        console.log(receipt);
        console.log(receipt.status);

        const tx2_buy= await this.dex_contract.buy(account, usdt_amt, {gasPrice: ethers.utils.parseUnits('7', 'gwei'), gasLimit: 200000});
        const buy_receipt = await tx2_buy.wait();
        console.log(buy_receipt);

    }


}

export default new CvrStore()