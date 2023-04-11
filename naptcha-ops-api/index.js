const express = require('express');

const app = express();

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

///////////////////////////////////////////////////////         FAUX STATIC DATA

/////////////////////////////////////////////         USER DATA (user_profiles)

let UsersList = [
    {
        account: {
         id: "m3u7inu3m7V1mvGj8qcg", 
         asset_id: null, 
         last_used_wallet: "addr1q8ucfze9w0tf4chgrdr0rw382kwd8nj0n70nvp8jxs8qntalvkzqrtussxlqm4t89fz0h0es9u99hk22x8ggyf2yl38s63pr80", 
         account_age: "1/1/20", 
         last_login: "2/22/23", 
         status: "REGISTERED", 
         status_date: "2/22/23", 
        }, 
        profile: {
         name: "Seamoss", // No spaces or special characters allowed. Stored in the same case as typed.
         website: "https://talismo.io", 
         bio: "Lorem ipsum", 
         pic: "https://i.ibb.co/PQr9yxX/m3u7inu3m7-V1mv-Gj8qcg.png", 
         tw: "wellspringagncy", 
        }
     },
     {
        account: {
         id: "fCgydaOGpRLxyMOqdRF8", 
         asset_id: null, 
         last_used_wallet: "addr1qxalxs087hq4fryzjzk03x5eey8q3zght428znymagmrwm44rm8h2z0chp0arwwef3575gup3mr4k03ssw0sjmcch8usz3cl7w", 
         account_age: "1/1/20", 
         last_login: "2/22/23", 
         status: "REGISTERED", 
         status_date: "2/22/23", 
        }, 
        profile: {
         name: "Seamoss2", // No spaces or special characters allowed. Stored in the same case as typed.
         website: "https://talismo.io", 
         bio: "Lorem ipsum number 2", 
         pic: "https://i.ibb.co/PQr9yxX/m3u7inu3m7-V1mv-Gj8qcg.png", 
         tw: "wellspringagncy", 
        }
     },
     {
        account: {
         id: "qclh96CokW3RMjJUuIFo", 
         asset_id: "asset1c9gdzqg5j4har3kttk6g7qsmxxv8wh4vqvestt", 
         last_used_wallet: "addr1q9g2ee7ctk6r07kdujuc95wcy2uggsmf3yu54ed5pwthr3drpt7vh9vv0yjgvv5llax4xyp3rmgnzdc9yz6mhanv92aqwrwwcv", 
         account_age: "1/1/20", 
         last_login: "2/22/23", 
         status: "ACTIVE", 
         status_date: "2/22/23", 
        }, 
        profile: {
         name: "Seamoss3", // No spaces or special characters allowed. Stored in the same case as typed.
         website: "https://talismo.io", 
         bio: "Lorem ipsum number 3", 
         pic: "https://i.ibb.co/PQr9yxX/m3u7inu3m7-V1mv-Gj8qcg.png", 
         tw: "wellspringagncy", 
        }
     }
];

/*
app.get()
app.post()
app.put()
app.delete()
*/

/*
w_id = wallet address user connected to. Search last_used_wallet of REGISTERED accounts.
a_id = account ID
t_id = token ID... the assetID of the login token associated with an account.
g_id = Serial gate ID
*/

/////////////////////////////////////////////         WALLET DATA (internal_balances)
let walletList = [
    {
        internal_address: "addr1q96dhszzpagksm8v7crzymglzjutsl06rvcsr39qc8uutz99g27yltvl2qk32cnw7d4h9w72608hz6qd5m689lmzvvvsnzykav",
        account_id: "m3u7inu3m7V1mvGj8qcg", 
        last_dep_date: "6/25/22", 
        last_dep_amt: 5, 
        last_dep_from: "addr1q8ucfze9w0tf4chgrdr0rw382kwd8nj0n70nvp8jxs8qntalvkzqrtussxlqm4t89fz0h0es9u99hk22x8ggyf2yl38s63pr80", 
        next_charge_date: null, 
        service_tier: "STARTER", 
        gatekey_queries_remaining: 11500, 
        free_tier_expires: "7/25/22", 
        last_balance_checked: 5,  
    },
    {
        internal_address: "addr1q96dhszzpagksm8v7crzymglzjutsl06rvcsr39qc8uutz99g27yltvl2qk32cnw7d4h9w72608hz6qd5m689lmzvvvsnzykav",
        account_id: "fCgydaOGpRLxyMOqdRF8", 
        last_dep_date: "1/1/23", 
        last_dep_amt: 10, 
        last_dep_from: "addr1qxalxs087hq4fryzjzk03x5eey8q3zght428znymagmrwm44rm8h2z0chp0arwwef3575gup3mr4k03ssw0sjmcch8usz3cl7w", 
        next_charge_date: null, 
        service_tier: "COMMUNITY", 
        gatekey_queries_remaining: 500, 
        free_tier_expires: "1/31/23", 
        last_balance_checked: 5, 
    },
    {
        internal_address: "addr1q96dhszzpagksm8v7crzymglzjutsl06rvcsr39qc8uutz99g27yltvl2qk32cnw7d4h9w72608hz6qd5m689lmzvvvsnzykav",
        account_id: "qclh96CokW3RMjJUuIFo", 
        last_dep_date: "6/25/22", 
        last_dep_amt: 30, 
        last_dep_from: "addr1q9g2ee7ctk6r07kdujuc95wcy2uggsmf3yu54ed5pwthr3drpt7vh9vv0yjgvv5llax4xyp3rmgnzdc9yz6mhanv92aqwrwwcv", 
        next_charge_date: null, 
        service_tier: "FREE", 
        gatekey_queries_remaining: 500, 
        free_tier_expires: "3/5/23", 
        last_balance_checked: 5, 
    },
    {
        internal_address: "TBD",
        account_id: "TBD", 
        last_dep_date: "TBD", 
        last_dep_amt: 30, 
        last_dep_from: "TBD", 
        next_charge_date: null, 
        service_tier: "ENTERPRISE", 
        gatekey_queries_remaining: 500, 
        free_tier_expires: "3/5/23", 
        last_balance_checked: 5, 
    },
]


const tierConfigs = {
    0: {
        name: "FREE", 
        price: 0, 
        expiry_days: 30, 
        deletion_days: 90, 
        max_credits: 1000, 
        max_gates: 1, 
    }, 
    1: {
        name: "STARTER", 
        price: 12, 
        expiry_days: 30, 
        deletion_days: 0, 
        max_credits: 10000, 
        max_gates: 5, 
    }, 
    2: {
        name: "COMMUNITY", 
        price: 50, 
        expiry_days: 30, 
        deletion_days: 0, 
        max_credits: 100000, 
        max_gates: 50, 
    }, 
    3: {
        name: "ENTERPRISE", 
        price: 300, 
        expiry_days: 30, 
        deletion_days: 0, 
        max_credits: -1, // UNLIMITED
        max_gates: -1,  // UNLIMITED
    }, 
    
}

/////////////////////////////////////////////         GATE DATA (gate_list, gate_payloads)
/* NOTES
    Gate data will eventually be in the same MongoDB account, but will be accessed by the naptcha-gate-api. 
*/

let auth_table = [
    {
        auth: "giJBTahCSr2Cwe6tv96AtxcD2KtWkc38E8Q1VBWU=g4icaUkdQZqSHn/l17Kuf-hfwaMDQa9WRZyybQXT5iM28Fn2UdX5ihUdktOwH?npswwwQucE22dbs!BdPPE8BwDmYY0HvWL0QiRLs2kXnj5U9h?DHFWKvWnhwqE23jSbNbRYM0GKFPtGuu62yEbQpHoybMLHC0!6chlAcgPJ4CfY8=tA5MGfOgaNJI24Xv1FiW2C7=iDHwWBJIcRXrJQRtX", 
        scope: "GATE",
        resource: "Vt8T3dYuCciM5dF", 
        caller: "talismo.io/test", 
        gen_date: "3/14/2023 0:00:00", // BOOKMARK: UPDATE THIS TO THE SHEET.... SCOPE AND RESOURCE ATTYS+
        exp_date: "3/14/2024 0:00:00",
    },
    {
        auth: "pv5ZdQ2Fkzu=T5DG/zOVMrNVvMGJz8qWtBNtf7q!66nUWIecyAWfMqcO/9GZ/XR2!A5rxeidlTlMn!zlB!M!!NrF5OfaUDaCuSe/0wHNEOSHzyBp51PyAd?iZtsNNn!/YL8Y/K52VkiQ!zND4h!uppEmfloJa1eqhrjPqJv5gxM!brrNDXQEzlnZGEhh/P!NSqQ5ymHa=t/?x03TwPJ?4VdQ/8QqcboCjNAFT83vXlJ9KSrAdo075V3B85Diefem", 
        scope: "GATE",
        resource: "lRAeJqX56YUNvA2", 
        caller: "talismo.io/test", 
        gen_date: "3/15/2023 0:00:00", 
        exp_date: "3/15/2024 0:00:00",
    },
    {
        auth: "CwsLe5ypwLG6uZahiCG25HinKWh4Bzrl7cJIaHzWtl08qi9azoQnBnjDjujBkkrFrGYW2LNq6jeiyqb0JHsqOrk?PjWcSERHT5Q1=!wb87a8OQWPHUh!YBzHcx95-zurAod=sJ?LUrxhbkKbXq3SJxmTbnHQsz5wzmJL/p/cvDH-WluE=A!oATMN-l3zeDl8LRzXK7u/qje762I1m1UN7Jhdd2qULeD3/N=cM1/=/1Ej3PolBYz3HO6/gMl!xXMm", 
        scope: "GATE",
        resource: "K99Q00VKBlUntdM", 
        caller: "talismo.io/test", 
        gen_date: "3/16/2023 0:00:00", 
        exp_date: "3/16/2024 0:00:00",
    },/* training wheels off
    {
        auth: "e0e0e0", 
        scope: "USER",
        resource: "m3u7inu3m7V1mvGj8qcg", 
        caller: "talismo.io/test", 
        gen_date: "3/16/2023 0:00:00", 
        exp_date: "3/17/2023 0:00:00",
    }*/
]

let gate_list_table = [
    {
        gatekey_serial: "Vt8T3dYuCciM5dF", 
        utility_category: "Membership", 
        asset_id: "", 
        policy_id: "231904e3ec2b37242f36b7d4a5d10409a02c92e57662c798b48113e1", 
        gatekey_active: true, 
        gatekey_activationdate: "2023-03-15-00-03-00", 
        domain_url: "localhost:3000", 
        account_id: "m3u7inu3m7V1mvGj8qcg",  
        gatekey_title: "Terpene Worlds Test Gate", 
        gatekey_description: "Returns a string, raw output. Used on a Naptcha gate to test on-page payload execution.", 
        gatekey_thumb: "https://i.ibb.co/qJ7WFDP/gate-default.png", 
        use_cap: 100,
        uses: 55,
    },
    {
        gatekey_serial: "lRAeJqX56YUNvA2", 
        utility_category: "Tickets", 
        asset_id: "asset1ewrqv0fpes3h7te57682mpq92jtas9un34s53z", 
        policy_id: "2649cb2cc72cac21d112d3ff4099f64fec5ce9a2d4b17d0102b6bfe9", 
        gatekey_active: true, 
        gatekey_activationdate: "2023-03-18-00-00-00", 
        domain_url: "localhost:3000", 
        account_id: "m3u7inu3m7V1mvGj8qcg",  
        gatekey_title: "Mossy Adventures Test Gate", 
        gatekey_description: "Returns a QR code. Used on a Naptcha gate to test on-page payload execution.", 
        gatekey_thumb: "https://i.ibb.co/qJ7WFDP/gate-default.png",  
        use_cap: 1, 
        uses: 1, 
    },
    {
        gatekey_serial: "K99Q00VKBlUntdM",
        utility_category: "Commerce",  
        asset_id: "", 
        policy_id: "17f3e57dd416cc1d5ea8e4c8f0c55c1d353c1ac272f4f415c6c0ffc3", 
        gatekey_active: false, 
        gatekey_activationdate: "2023-03-20-00-00-00", 
        domain_url: "buttcheeks.io", 
        account_id: "m3u7inu3m7V1mvGj8qcg", 
        gatekey_title: "Buttcheeks IO Test Gate", 
        gatekey_description: "Returns instructions to redirect. Used on a Naptcha gate to test on-page payload execution.",
        gatekey_thumb: "https://i.ibb.co/qJ7WFDP/gate-default.png", 
        use_cap: -1, 
        uses: 545, 
    },
    {
        gatekey_serial: "XliV1uBd98mcKMg", 
        utility_category: "LOGIN", 
        asset_id: "asset1c9gdzqg5j4har3kttk6g7qsmxxv8wh4vqvestt", 
        policy_id: "231904e3ec2b37242f36b7d4a5d10409a02c92e57662c798b48113e1", 
        gatekey_active: true, 
        gatekey_activationdate: "2023-03-15-00-03-00", 
        domain_url: "localhost:3000", 
        account_id: "SYSTEM",  
        gatekey_title: "Talismo Login Token", 
        gatekey_description: "Use this NFT to log into your Talismo account to manage your gates, access other gates, and make payments.", 
        gatekey_thumb: "https://i.ibb.co/1rWFyvP/logo.jpg", 
        use_cap: -1, 
        uses: 65,
    },
]


let gate_payloads = [
    {
        gatekey_serial: "Vt8T3dYuCciM5dF", 
        account_id: "m3u7inu3m7V1mvGj8qcg", 
        gatekey_returnformat: "R_STRING", 
        gatekey_payload: "Hello, Web3 World.", 
        gatekey_lastwalletused: "", 
        send_asset: "", 
        send_identifier: "", 
        server_script: "", 
        reload_allowed: "", 
        reload_cost: "", 
        reload_units: "", 
        add_to_gate: "", 
    },
    {
        gatekey_serial: "lRAeJqX56YUNvA2", 
        account_id: "m3u7inu3m7V1mvGj8qcg", 
        gatekey_returnformat: "P_TICKET", 
        gatekey_payload: "FUCKCINNAMONBUN", 
        gatekey_lastwalletused: "", 
        send_asset: "", 
        send_identifier: "", 
        server_script: "", 
        reload_allowed: "", 
        reload_cost: "", 
        reload_units: "", 
        add_to_gate: "", 
    },
    {
        gatekey_serial: "K99Q00VKBlUntdM", 
        account_id: "fCgydaOGpRLxyMOqdRF8", 
        gatekey_returnformat: "P_REDIRECT", 
        gatekey_payload: "yourmom.com", 
        gatekey_lastwalletused: "", 
        send_asset: "", 
        send_identifier: "", 
        server_script: "", 
        reload_allowed: "", 
        reload_cost: "", 
        reload_units: "", 
        add_to_gate: "", 
    },
    {
        gatekey_serial: "XliV1uBd98mcKMg", 
        account_id: "SYSTEM", 
        gatekey_returnformat: "L_LOGIN", 
        gatekey_payload: "m3u7inu3m7V1mvGj8qcg", 
        gatekey_lastwalletused: "", 
        send_asset: "", 
        send_identifier: "", 
        server_script: "", 
        reload_allowed: "", 
        reload_cost: "", 
        reload_units: "", 
        add_to_gate: "", 
    },
]

/////////////////////////////////////////////         TOKEN DATA (active_nfts)
let nft_usage = [  // nft_usage table logs all ACTUAL assets that used gates, regardless of whether the configured trigger was assetid or policyid.
{
    asset_id: "asset1w29v0g27ghpnuqhdfwwyq8t88g7pud2j7jqnsm",
    gate_id: "Vt8T3dYuCciM5dF", 
    times_used: 99, 
    asset_name: "Asset 1", 
    ipfs_link: "https://ipfs.poolpm.nftcdn.io/ipfs/QmWqTK82FdrYmtea8uuKfPCwaeAN1sSsGbxgZpGawzhep4?tk=ppv3QKgH12ip_DPfEd-irTXhaVkVAguZ7vfhzYJJj0M", 
},
{
    asset_id: "asset1c9gdzqg5j4har3kttk6g7qsmxxv8wh4vqvestt",
    gate_id: "XliV1uBd98mcKMg", 
    times_used: 5, 
    asset_name: "Asset 2", 
    ipfs_link: "https://ipfs.poolpm.nftcdn.io/ipfs/QmWqTK82FdrYmtea8uuKfPCwaeAN1sSsGbxgZpGawzhep4?tk=ppv3QKgH12ip_DPfEd-irTXhaVkVAguZ7vfhzYJJj0M", 
},
{
    asset_id: "asset1ewrqv0fpes3h7te57682mpq92jtas9un34s53z",
    gate_id: "lRAeJqX56YUNvA2", 
    times_used: 3, 
    asset_name: "Asset 3", 
    ipfs_link: "https://ipfs.poolpm.nftcdn.io/ipfs/QmWqTK82FdrYmtea8uuKfPCwaeAN1sSsGbxgZpGawzhep4?tk=ppv3QKgH12ip_DPfEd-irTXhaVkVAguZ7vfhzYJJj0M", 
},
{
    asset_id: "asset1c9gdzqg5j4har3kttk6g7qsmxxv8wh4vqvestt",
    gate_id: "XliV1uBd98mcKMg", 
    times_used: 1, 
    asset_name: "Asset 4", 
    ipfs_link: "https://ipfs.poolpm.nftcdn.io/ipfs/QmWqTK82FdrYmtea8uuKfPCwaeAN1sSsGbxgZpGawzhep4?tk=ppv3QKgH12ip_DPfEd-irTXhaVkVAguZ7vfhzYJJj0M", 
},
]

function getGate(g_id) {
    // returns the full gate object for the given gate id
    console.log("in function getGate with g_id: "+g_id)
    let pervgate = false;
    gate_list_table.forEach(gateobj => {

        if(gateobj.gatekey_serial == g_id) {  // xxx last found bug
            console.log("matchint gateobj found! saving to perv")
            pervgate = gateobj;
            console.log(pervgate)
        }
    })
    console.log("getGate, final return for perv: ")
    console.log(pervgate);
    return pervgate;
}

function getUser(u_id) {
    console.log("in function getUser, with a valid u_id: "+u_id)
    let perv = false;
    UsersList.forEach(user => {
        console.log("looping to user: "+user.account.id)
        if(user.account.id == u_id) {
            console.log("user match found! tryting to STORE user object: ")
            
            perv = user; // hehe
            console.log(perv)
        }
        console.log("fucking loop continues. user: "+user.account.id)
    })
    console.log("returning perv: ")
    console.log(perv)
    return perv;
}

function getGateOwner(g_id) {
    console.log("in function getGateOwner")
    let perv = {};
    gate_list_table.forEach(gateobj => {
        console.log("checking gate "+gateobj.account_id)
        if(gateobj.gatekey_serial == g_id) {
            console.log("found match for given g_id to gate object.")
            let accountID = gateobj.account_id;
            console.log("getting user by account id: "+accountID)
            let user = getUser(accountID);
            console.log("!!!!!!!!!!!!!!returning user object: ")
            console.log(user);
            perv = user;
        }
    })
    console.log("returning perv from getGateOwner: ")
    console.log(perv)
    return perv;
}

function gatesByOwner(u_id) {
    // returns list of gate objects made by account id u_id
    let resultGates = []
    gate_list_table.forEach(gateobj => {
            if(gateobj.account_id == u_id) {
                resultGates.push(gateobj);
            }
    })

    if(Object.keys(resultGates).length === 0) {
        return false;
    }

    return resultGates;
}

function nftUsageByOwner(u_id) {
    console.log("in function nftUsageByOwner")
    let results = [];  // object array of nft usage objects
    let owner = {};
    // filters the nft_usage object array by those owned by one user
    nft_usage.forEach(nftUsageObj => {
        console.log("checking NFT "+nftUsageObj.asset_name+" for gate owner...")
        owner = getGateOwner(nftUsageObj.gate_id)  
        console.log("owner: ")
        console.log(owner)
        if(owner){
            if(u_id == owner.account.id) {
                console.log("gate owner == u_id, pushing results")
                results.push(nftUsageObj);
                console.log("results[] so far:")
                console.log(results)
            }
        }
    })
    console.log("out of nft_usage loop, what is results? ")
    console.log(results);
    if(Object.keys(results).length === 0) {
        console.log("results[] turned out empty")
        return false;
    }
    return results;
}

function mostPopGate(u_id) {
    console.log("in function mostPopGate")
    // Returns the one most-used gate object from nft_usage  // gate object
    //let nft_usage_owned = nftUsageByOwner(u_id); // filters nft_usage table by gate IDs only the user owns.
    //console.log("whew! out of nftUsageByOwner loop hell. nft_usage_owned: ")
    //console.log(nft_usage_owned)
    // Take the gate id of highest value assetobj and fetch gate obj.
    let highestUsage = 0;
    let mostPopG = {};
    let ownedGates = gatesByOwner(u_id);
    ownedGates.forEach(gateObj => {
        console.log("looping gate_list_table. This objecT: ")
        console.log(gateObj)
        if(gateObj.account_id == u_id) {
            console.log("confirmed this gate matches the user")
            if(gateObj.uses > highestUsage) {
                console.log("new highest record gate...")
                mostPopG = gateObj;
                console.log(mostPopG)
            } else {
                console.log("not higher use..." + gateObj.uses)
            }
        } else {
            console.log("skipping this gate, does not belong to user")
        }
        
    })
    console.log("mostPopGate results: ")
    console.log(mostPopG)
    return mostPopG;
}

function mostPopNFT(u_id) {
    let highestUsage = 0;
    let mostPopN = {};
    let owner = {}
    nft_usage.forEach(nftUsageObj => {
        owner = getGateOwner(nftUsageObj.gate_id);
        if(owner != false) {
            if(nftUsageObj.times_used > highestUsage) {
                console.log("this nft was used more than last highest record.")
                highestUsage = nftUsageObj.times_used;
                mostPopN = nftUsageObj;
                console.log("newest mostPopN:")
                console.log(mostPopN);
            }
        }
    })
    if(Object.keys(mostPopN).length === 0) {
        console.log("mostPopN is empty!")
        console.log(mostPopN)
        return false;
    }
    console.log("mostPopNate returning {} mostPopN:")
    console.log(mostPopN)
    return mostPopN;
}

/////////////////////////////////////////////         OTHER FUNCTIOJNS

function userListByStatus(status) {
    let results = [];
    UsersList.forEach(user => {
        if(user.account.status == status) {
            results.push(user);
        }
    })
    return results;
}

function addDays(date, days) {
    date.setDate(date.getDate() + days);
    return date;
}

/////////////////////////////////////////////         Route Handler Framework
app.get('/', (req, res) => {
    res.send('Made by Seamoss. Deal with it. ');
});


///////////////////////////////////////////////////////         USER CALLS

app.get('/api/users/login/:a_id', (req, res) => {
    // finds and returns an existing auth code, generates and returns a new one, or returns false (bad account ID)

    // Doublecheck login request only coming from talismo
    console.log(req.protocol + '://' + req.get('host') + req.originalUrl); 
    if(req.get('host') != 'localhost:3000') {
        res.status(200).send(false);
    }


    // Check REGISTERED accounts for address first, generate and return login auth scope.
    const registeredUsers = userListByStatus("REGISTERED");

    // Find the user matching the account ID.
    registeredUsers.forEach(user => {
        if(user.account.id == req.params.a_id) {
            console.log('User found among REGISTERED accounts. '+user.account.id)

            // Make sure there isn't already a LOGIN type auth code for this user, if so return it
            // Filter the list of auths for USER type only
            let auths = auth_table;
            let userAuths = [];
            auths.forEach(authobj => {
                if(authobj.scope == "USER") userAuths.push(authobj);
            })
            // Search the filtered list for an existing auth code for this user, reuse it if not expired.
            userAuths.forEach(authobj => {
                if(authobj.resource == user.account.id) {
                    // A USER type auth code already exists for this user, returning it to reset the cookie.

                    // ADD LATER: Check expiry date. If expired, delete and return false.
                    res.status(200).send(authobj);
                    return;
                }
            })

            // At this point we found the right user and are still in "if". Confirmed a valid auth code does not exist for user. Making one.
            const { generateApiKey } = require('generate-api-key');
            let authcode = generateApiKey({ 
                method: 'string', 
                length: 20, 
                pool: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
             }); 
            console.log('API: just made auth code: ' + authcode)
              
            let authresource = user.account.id;
            let gDate = new Date();
            let eDate = addDays(gDate, 1);

            let newAuth = {
                auth: authcode, 
                scope: "USER", 
                resource: authresource, 
                caller: req.originalUrl, 
                gen_date: gDate, 
                exp_date: eDate,
            }

            auth_table.push(newAuth);

            res.status(200).send(newAuth);
            //console.log('Providing auth code: ' + authcode)
            //res.status(200).send(authcode);  /// Need to create an auth code and send that, not the user object like now.
            return;
        }
    })
    res.status(200).send(false)   
    });

app.get('/api/configs/tier', (req, res) => {
    let tierConfigs = [
        {
            name: "FREE", 
            price: 0, 
            max_gates: 1,
            max_credits: 1000,  
        },
        {
            name: "STARTER", 
            price: 12, 
            max_gates: 5,
            max_credits: 10000,  
        },
        {
            name: "COMMNITY", 
            price: 50, 
            max_gates: 50,
            max_credits: 100000,  
        },
        {
            name: "ENTERPRISE", 
            price: 300, 
            max_gates: "unlimited",
            max_credits: "unlimited",  
        },
    ]
    res.status(200).send(tierConfigs);
})


// verify an auth is still active or not. If expired, delete it as well as return false.
app.get('/api/validatesesh/:authid', (req, res) => {
    let localAuth = req.params.authid;
    let auths = auth_table;
    auths.forEach(auth => {
        if(auth.auth == localAuth) {
            // NOW need to compare the auth exp date to today... BRB on that
            res.status(200).send(true);
            return;
        }
    })
    res.status(200).send(false);
    // updated the repo name on git side
    return;
})




///////////////////////////////////////////////////////         TOKEN CALLS




///////////////////////////////////////////////////////         GATE CALLS (web app)
/* NOTES
   Eventually these calls will move over to a separate api server for OPS service. 
   Still, that gate server should have some API calls that are public, so the website can contact the gate server for 
   the Gate Search page and can contact the web api server (this) for user data etc.
*/

function gatesByDomain(dname) {
    let gateresults =[];

    gate_list_table.forEach(gate => {
        if(gate.domain_url == dname) {
            gateresults.push(gate);
        }
    })

    return gateresults;
}


// PUBLIC: LIST AND SORT ALL GATES
app.get('/api/listgates', (req, res) => {
    res.send(gate_list_table);
})

// Get all gates by USer
app.get('/api/listgates/:u_id', (req, res) => {
    let ownedGates = gatesByOwner(req.params.u_id);
    res.status(200).send(ownedGates);
})

// Public details for one gate from gate_list table
app.get('/api/gates/:g_id', (req, res) => {
    console.log("NEW REQUEST ::: /api/gates/g_id")
    gate_list_table.forEach(gate => {
        console.log("looping to gate "+gate.gatekey_title)
        if(gate.gatekey_serial == req.params.g_id) {
            console.log("gate found: ")
            console.log(gate)
            res.status(200).send(gate);
        }
    })
    console.log("out of loop with no gate found.")
    res.status(200).send(false);
})



////////////////////////////////            PAYLOAD RELATED SECTION         ////////////////////////////////



// OPS LIST GATES MATCHING DOMAIN AND WALLET ASSETS
app.get('/ops/listgates/:w_id', (req, res) => {
    // Filter by Domain
    let fromDomain = req.get('host');
    console.log("Filtering gates by calling domain :"+fromDomain)
    let domainMatches = gatesByDomain(fromDomain)

    // CARDANO-JS: Extrapolate asset list from wallet address parameter
    // ..

    // res.status(200).send('Calling domain is: ' + fromDomain);
    res.status(200).send(domainMatches);
})



app.listen(3001, () => console.log('Listening on 3001'))