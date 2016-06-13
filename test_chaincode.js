  // Step 1 ==================================
    var Ibc1 = require('ibm-blockchain-js');
    var chaincode = {};
var ibc = new Ibc1();
    // ==================================
    // configure ibc-js sdk
    // ==================================
    var manual ={
  "credentials": {
    "peers": [
      {
        "discovery_host": "12f87457-b12d-4988-89d9-8d6df76233c6_vp1-discovery.blockchain.ibm.com",
        "discovery_port": 30303,
        "api_host": "12f87457-b12d-4988-89d9-8d6df76233c6_vp1-api.blockchain.ibm.com",
        "api_port_tls": 443,
        "api_port": 80,
        "type": "peer",
        "network_id": "12f87457-b12d-4988-89d9-8d6df76233c6",
        "container_id": "a2e79898de126b40ee2ce5367112d63ea6be2f9168b1716bfe2ad9e5d07acc39",
        "id": "12f87457-b12d-4988-89d9-8d6df76233c6_vp1",
        "api_url": "http://12f87457-b12d-4988-89d9-8d6df76233c6_vp1-api.blockchain.ibm.com:80"
      },
      {
        "discovery_host": "12f87457-b12d-4988-89d9-8d6df76233c6_vp2-discovery.blockchain.ibm.com",
        "discovery_port": 30303,
        "api_host": "12f87457-b12d-4988-89d9-8d6df76233c6_vp2-api.blockchain.ibm.com",
        "api_port_tls": 443,
        "api_port": 80,
        "type": "peer",
        "network_id": "12f87457-b12d-4988-89d9-8d6df76233c6",
        "container_id": "584ab60cb39a35690087cd4b64b6f6310c3c81d27c79387090a003a06bdd9520",
        "id": "12f87457-b12d-4988-89d9-8d6df76233c6_vp2",
        "api_url": "http://12f87457-b12d-4988-89d9-8d6df76233c6_vp2-api.blockchain.ibm.com:80"
      }
    ],
    "ca": {
      "12f87457-b12d-4988-89d9-8d6df76233c6_ca": {
        "url": "12f87457-b12d-4988-89d9-8d6df76233c6_ca-api.blockchain.ibm.com:30303",
        "discovery_host": "12f87457-b12d-4988-89d9-8d6df76233c6_ca-discovery.blockchain.ibm.com",
        "discovery_port": 30303,
        "api_host": "12f87457-b12d-4988-89d9-8d6df76233c6_ca-api.blockchain.ibm.com",
        "api_port_tls": 30303,
        "api_port": 80,
        "type": "ca",
        "network_id": "12f87457-b12d-4988-89d9-8d6df76233c6",
        "container_id": "e89d860fa53ab93cf0d509b2ffbd954c96d467582845394843e55de948c26a14"
      }
    },
    "users": [
      {
        "username": "dashboarduser_type0_f38b1bf66d",
        "secret": "fde769b133",
        "enrollId": "dashboarduser_type0_f38b1bf66d",
        "enrollSecret": "fde769b133"
      },
      {
        "username": "dashboarduser_type0_b845cff49c",
        "secret": "0d947860e0",
        "enrollId": "dashboarduser_type0_b845cff49c",
        "enrollSecret": "0d947860e0"
      },
      {
        "username": "user_type1_6e9bf964a8",
        "secret": "4774d10c0a",
        "enrollId": "user_type1_6e9bf964a8",
        "enrollSecret": "4774d10c0a"
      },
      {
        "username": "user_type1_304ae53c59",
        "secret": "51625f4870",
        "enrollId": "user_type1_304ae53c59",
        "enrollSecret": "51625f4870"
      },
      {
        "username": "user_type1_22ccfd91f3",
        "secret": "d8624d59a1",
        "enrollId": "user_type1_22ccfd91f3",
        "enrollSecret": "d8624d59a1"
      },
      {
        "username": "user_type1_5a0157defa",
        "secret": "0a1d342f65",
        "enrollId": "user_type1_5a0157defa",
        "enrollSecret": "0a1d342f65"
      },
      {
        "username": "user_type1_b538d42dd0",
        "secret": "70709bc49a",
        "enrollId": "user_type1_b538d42dd0",
        "enrollSecret": "70709bc49a"
      },
      {
        "username": "user_type2_92696f1724",
        "secret": "1b4a497a92",
        "enrollId": "user_type2_92696f1724",
        "enrollSecret": "1b4a497a92"
      },
      {
        "username": "user_type2_34c7c1c310",
        "secret": "70fb16ff93",
        "enrollId": "user_type2_34c7c1c310",
        "enrollSecret": "70fb16ff93"
      },
      {
        "username": "user_type2_072b711435",
        "secret": "ee6d52c7c3",
        "enrollId": "user_type2_072b711435",
        "enrollSecret": "ee6d52c7c3"
      },
      {
        "username": "user_type2_fbb02ccf17",
        "secret": "3f9b26d63d",
        "enrollId": "user_type2_fbb02ccf17",
        "enrollSecret": "3f9b26d63d"
      },
      {
        "username": "user_type2_33758a2017",
        "secret": "66e17d92ab",
        "enrollId": "user_type2_33758a2017",
        "enrollSecret": "66e17d92ab"
      },
      {
        "username": "user_type4_407c062a4c",
        "secret": "7529db1153",
        "enrollId": "user_type4_407c062a4c",
        "enrollSecret": "7529db1153"
      },
      {
        "username": "user_type4_3fe7305783",
        "secret": "117679fc1a",
        "enrollId": "user_type4_3fe7305783",
        "enrollSecret": "117679fc1a"
      },
      {
        "username": "user_type4_400ac0801c",
        "secret": "b616c4b3ff",
        "enrollId": "user_type4_400ac0801c",
        "enrollSecret": "b616c4b3ff"
      },
      {
        "username": "user_type4_ea5a21e920",
        "secret": "dd2d813a68",
        "enrollId": "user_type4_ea5a21e920",
        "enrollSecret": "dd2d813a68"
      },
      {
        "username": "user_type4_a28df9c3d6",
        "secret": "a6e08da792",
        "enrollId": "user_type4_a28df9c3d6",
        "enrollSecret": "a6e08da792"
      },
      {
        "username": "user_type8_966cc880bc",
        "secret": "f46045e839",
        "enrollId": "user_type8_966cc880bc",
        "enrollSecret": "f46045e839"
      },
      {
        "username": "user_type8_1d057cfa3c",
        "secret": "4492def893",
        "enrollId": "user_type8_1d057cfa3c",
        "enrollSecret": "4492def893"
      },
      {
        "username": "user_type8_b8b60ccd02",
        "secret": "32d4b350ee",
        "enrollId": "user_type8_b8b60ccd02",
        "enrollSecret": "32d4b350ee"
      },
      {
        "username": "user_type8_1424f39085",
        "secret": "58bb540a61",
        "enrollId": "user_type8_1424f39085",
        "enrollSecret": "58bb540a61"
      },
      {
        "username": "user_type8_c0f9453a3b",
        "secret": "578561c6fa",
        "enrollId": "user_type8_c0f9453a3b",
        "enrollSecret": "578561c6fa"
      }
    ]
  }
};
var peers = manual.credentials.peers;
var users = null;                                                                       //users are only found if security is on
if(manual.credentials.users) users = manual.credentials.users;

    var chaincode;
    var options =   {
        network:{
            peers: peers,
            users: users,
            options: {quiet: true, tls:false, maxRetry: 1}
        },
        chaincode:{
            zip_url: 'https://github.com/siddharthhparikh/test_chaincode/archive/master.zip',
            unzip_dir: 'test_chaincode-master',
            git_url: 'https://github.com/siddharthhparikh/test_chaincode',
            deployed_name: '198f19813acec0256040569709cb433bb4d387bd64d573c0fec42bac5b6a8018d61835d61ecaea01d7e314e35441d2e31ec5dbce63610e5dc9eb3d72317638e2'
        }

    };

    // Step 2 ==================================
    ibc.load(options, cb_ready);

    // Step 3 ==================================
    function cb_ready(err, cc){                             //response has chaincode functions
        //app1.setup(ibc, cc);
        //app2.setup(ibc, cc);
        chaincode = cc;
    // Step 4 ==================================
        if(cc.details.deployed_name === "" || !cc.details.deployed_name){                //decide if I need to deploy or not
        //if(cc.details.deployed_name === "") {
            cc.deploy('init', ['99'], null, cb_deployed);
        }
        else{
            console.log('chaincode summary file indicates chaincode has been previously deployed');
            cb_deployed(err);
        }
    }

    // Step 5 ==================================
    function cb_deployed(){
        console.log('sdk has deployed code and waited');

        chaincode.query.read(['hello_world'],function (err, res) {
              console.log("hello_world error:", err);
              console.log("hello_world res:", res);
        });
        chaincode.query.read(['a'],function (err, res) {
          console.log("a error:", err);
          console.log("a res:", res);
        });//chaincode.query.read(a)
}