'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "d190c2591a83e3a7c70bd8c16ced7e7f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d18c8f73307112f466c6c5fe1447a60c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "12e675cedb6eb11a0b39812ebd5beaa1",
".git/logs/refs/heads/main": "4a520b804869e46abc4af0107f255a37",
".git/logs/refs/remotes/origin/main": "2bde8e1c9a2159371ba27824c3b2796a",
".git/objects/00/1954ef59b466a8db7d1e2f1c887ad09065c879": "da6d0f561e414f45c9612a01a81c18d9",
".git/objects/00/353ed3e81d9979f36e708f5b2b006aab2b908d": "e1c09155e7e7426692de19840b4ec5c6",
".git/objects/00/846f8fd5a505c514e6b0f83bc264aeaf408299": "1334b91cd264bb0b456b8dd0e283bb2f",
".git/objects/02/3745a23a5ac349d37f0a2619f3ffe786c5ff89": "d820950d8e063edda660ebc8bd044d03",
".git/objects/03/1b57b7b6067d7d62105ce2ea2857fef3a1dbbc": "fa72fd6ec0990c56126334b6a8960202",
".git/objects/03/96730bdab4093fe40284111b9ae0bdfacfebff": "fce02074519ae1dc9a806fe79253258e",
".git/objects/04/f608a783c68dae6aacc1a2a0d76d7ff0ecfc9f": "b84a4278941b63b51cf9b89c51c3e721",
".git/objects/06/60fd20d4c525975e4a0b7b43d6fd16a93e0695": "e3d3f542190de74189f971a5b7460154",
".git/objects/09/86ad653eb9d56153cae7dd1459bc801b705a54": "09d0ea87371492aad5ea1e306cfc0b26",
".git/objects/0b/db9a3438419ddab27e6cdb6b883c0bfd52e606": "ab1c300d6be2797a31998882b7e17852",
".git/objects/0f/87145bd4f6c805ce7d5771471213950cd572ce": "18a2def3ebd31dcb9809fe2fdfc8127b",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/14/7af61242d93cd6a85900c3946702bf33f99b62": "bb68c1bf4aa27eb7d5e0859d0600afe6",
".git/objects/16/6d5ee0d440e3e9210604b2779a26248e5dca03": "008b8967785164511cf5631dae49653b",
".git/objects/17/ff681c6d069999c22121c34bc303cc6873d19b": "a6712b391b45b4db2d4bf70f678ac8d1",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/83b6bae6c0dacb6499f350088bd77f0d90484d": "57666903e3574fe47f13b428b3b5b7f3",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/23/301d3b1f684a93eaf015455296432580b531f4": "458291c4e7110c66a6bee2bfed93d2b7",
".git/objects/24/cfd5e05fc9d27c687ffd5524d60885260eb918": "182b95cd3fccd1e89fc94fc60756d73a",
".git/objects/24/e69b31c1291022fc204a02f19b825ffc58ac3e": "6f63e2851c19baf6cc494de380866df9",
".git/objects/25/df8268f796e11f47274288f57ec04453ba0381": "d38a0b061112ead5034b19a7247d2e86",
".git/objects/25/f65692cb9347d3b2c794cf40a4e02c05a6a199": "5950dc66436bc33f4bc6c7559f21daa2",
".git/objects/26/0e138a03c5efea037b970f2b5aa10d4951a661": "a9846c8c58566ecac23eed0259856bd2",
".git/objects/2b/694ea034397aea11e5126896be52653865966a": "2bf2fe9bd2e2745753e5f813b664ae5b",
".git/objects/2c/5f143226cb7c3817fe00f95bbd31baeeabdf36": "0bfba148b11a8496a99902dbb47b57e7",
".git/objects/2f/c7d3e3cd72c05d1112135215a47858e60eee4e": "d62a0e5d257ba244754fe014794a5c28",
".git/objects/30/2066a42ef6d3ab66d3196e6f22ce685074da9a": "9772c8ede531433fc48cdce07453d153",
".git/objects/30/442c1066ba59c65c144add2009a6e5eb358357": "284762990d5b99955de59539c189725c",
".git/objects/31/064317d16438cc796b83c4febd711152131d3e": "d9d38cbd299455078ff49e6300c1427f",
".git/objects/31/dceec44d45ce1d35b38657d00265061963e41e": "beffbd0f72896b7e756360a725986632",
".git/objects/32/0070de394cac37f29c870fb1aa22ed483468c3": "dafe26f8c0e73bf8d7622f8cb3bec664",
".git/objects/32/54b677f55c324d54a7776f68ee91e926b47ab2": "230d8edd73e7a83f34c9f78df0615699",
".git/objects/35/89e96e6f5f87a5b1af9c5581ca3a58e47263d2": "277af991b802c0f50342f27ee51532af",
".git/objects/38/f1d09b9095367a0eb8788c35ffd859650b34ac": "5ad39541326d1dd20cf1fd1edf78a2e6",
".git/objects/39/39ee3a49b30a9d23487a7964353486724675cb": "9f193a5984925a5d0688aa4f359595e1",
".git/objects/3a/2cc74cb3cfd208ac830b23086745e0afe15ed4": "456757ab5e49e1e0c88251227fa409a2",
".git/objects/3b/dff9fe37ea25413888fc610fd85103f391878e": "63f5973b8ae16c2c0510a77235a5dfb9",
".git/objects/3e/5a1e546c5984a99337aaf844df477f490393f6": "429901f3474ecaec393f6d570858561e",
".git/objects/3e/5e0402a5f6c421633d6bbe33dd9a268805e275": "2f243234004a54e902d00b978e9fc552",
".git/objects/43/477b3e6005c949edda6f57cfb2cde56f9c3b2c": "4076408b74259379a43965156a291021",
".git/objects/44/676b514842c9ddd22008e21b6858411851cf55": "24e1eee618cd561e07ae622d2254a4d0",
".git/objects/44/abe5c5379c877b3c12238d384dfdbe0da78273": "d5b481863a3103ec77f1e3755cac2f7b",
".git/objects/45/1c65440dfbcae74a21cc6a97bcecabb24b5637": "68ae8144aed1a792306fbb5506f45635",
".git/objects/49/5e01acabba6052a23575da53b73ae696efac10": "7e32c74dd33b5b7be4c44f000c47d8eb",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/0a1dcc85bc5f0a9434e61053fcfe02ecd5678c": "8199243f98639fcec8063a6abeb24dbe",
".git/objects/4b/6e690bd16be4a4adddf3c8d611fe650097635e": "ffc7805de0c5f0fc06ae2038d9fc69fa",
".git/objects/4d/dcba2763c1f29e92ae6e3de28d6d920b883650": "e57fc74f19881adfb29b8355ae23a5ff",
".git/objects/4f/85be5f1d29372c994edb35c7caa307358c6360": "b469c6124d0a91f46d8d56d68e9a4563",
".git/objects/50/4e6cd676547344986c85a9e40462705c96e417": "5cd4be9806fe815c42242546994a597c",
".git/objects/53/325ca79663d3e676f69dd917b44ca6e3ba3ab2": "7493d2d6311733441274df28041c4b75",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/56/71951a6860de2486112dcb79fc536c3d36158d": "985421822223eaa97857c5e638cf6e59",
".git/objects/57/0b2d678e08ffb0c098809a7e3b3fd0f2456391": "5678270ea1769fd7bfa150b9859160a4",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/aa0a27cf00430efa53f45ecf52c6b75889a7f0": "e06fdd0dea429d8097c30e77ddddbab1",
".git/objects/5d/6d766c523c1e2e7a82bffe65108037e258a265": "32647d9652e3c76ed8beef5dac620f81",
".git/objects/5d/f78d8906a4b36f0d0702c2a969697deb69cf52": "681652b023fcc7010d83cb9858e454c7",
".git/objects/5f/2101167c6e8f64155c5e28456e020d76100a0b": "849f5313df450808c9251a196bcc4232",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/d5956da0a41f880ef4503210d93d2fa5a8ace2": "e237c0d606a9caebf082dc022eb0e946",
".git/objects/65/1c2429c552dbe9c730e12f9c95ddab62f1a388": "fc1725fe10913bb3311c9affd8a65151",
".git/objects/65/e2284be95d888e74da6eda27e7e3aebe9732ab": "44817f0034083a7b408aecc8e71922c3",
".git/objects/66/6b7a223f38792e6d5083cf827053429ec8a5c0": "c945a5397038f3559c338bf9484dab66",
".git/objects/67/bccc80b13fa5d1b8d4fddd9dff022e6c7a5c78": "c26d2f5ca4d824924fe1935f31891347",
".git/objects/6a/5f86a0ddaa5d0c21fa255816c0161583ece658": "4c2ea28de96f4e2c76e8abb37c2d79df",
".git/objects/6a/7b3af8aade0a84bad59394e284cc18a59ad32c": "c9ca77821b4a09979f747fd13d3c0202",
".git/objects/6b/1c69975fa22e9d06afc5c2305bd33c99c81542": "41795ffb50ef00559f17da7c8a3be8db",
".git/objects/6b/1e3b7d134809229f3ad3bc6d27a6ddf4a8f36f": "d40605e4aeeca19c06c5db56186beb40",
".git/objects/6c/46a139312ab7a8b3de20aea6d38cdcf0077831": "cf90a205960aebb5c6cb8bc73b392084",
".git/objects/6d/18934edf10663ca859ba4ceb398ce5fb732fd7": "c37e1ea5a9019db50f7e180d4398dfea",
".git/objects/6e/f8938680d5062db004352499cc95dc35337ae1": "3a9d3e73cd70b938a550a82dfafbc0d1",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/72/87faafee31fa183594f070191b261899797ec2": "807f1062d9a30dfbb839fe9b56bb6632",
".git/objects/72/ba9db5b15939fd620aa47b9e364f1b97da4a8e": "8e7bef349fc03cc8d1014d771ed362bd",
".git/objects/73/4e7a881e31d889fb8e79a411abde3f30d4098f": "b90ec67de6b5d50ac973183c1b53fef4",
".git/objects/74/9e4fddc0333204783002fbd33752789094370d": "249f65360f9cfcf5265a8a93ed67a595",
".git/objects/74/ae597351ed9398af66f51374a49217def75812": "642c7c4da94cd8bc9cc16885e5eebc77",
".git/objects/75/ab8bd31be2f455edc80549e947056e48060bb4": "e3bf967311a5aa0c8fbc2134b2643d3d",
".git/objects/75/b19797d142e0d9c29894580e6310bb2f78fb96": "a73e6f8ccbe99d21e5276271b8956609",
".git/objects/76/6c40e7a7ddf81fca8121ce2fe2909dcbdb1bae": "1f3a6d85dd2dbb1fac5646e7c7b33d58",
".git/objects/78/f8e946c048d1f7ec8731aef78f76ddea79c085": "3858cc8785e2c1b02cf0866011cd2247",
".git/objects/79/9c9b8f77c9b656a9cd096d5d1d1ff38a943b3f": "50f2f552c4939613e2e66b1d9fd1ba93",
".git/objects/7a/8075a49649223e1d1200ff8373f693eb961090": "38ee5a2570d833198ab0218e95b12212",
".git/objects/7a/ad430c105a8027572145fa83925a26772b2ee8": "fe55840e352ecff394b4e3556fb040ca",
".git/objects/7b/01bf2ce22881216729066f0dabf85c5fb1bd1e": "2c9c14545e10344a7aeb477727b210f2",
".git/objects/7c/06a1c7b7b92e12c15ef73f697c813a5c098b90": "9b302b0b753c2581b8aea6925a38061f",
".git/objects/7c/6f2e979fef9bdd382daa49ea8437a81b0d24eb": "8297f6556c3be5c5f7eb7fcb1de725f3",
".git/objects/83/88116efb7e198ecd5feace2a0d97e26bf22a52": "059efc459b35b653da2f5fa95c5d0ea8",
".git/objects/84/21552499a7efa1a504ac6c8fb04710b0ae01b2": "27a30e3e7ae62017bb6be83d826804ac",
".git/objects/84/8801b46bdf549d9552f754a14fc2d274a1cf8d": "3d3c3523e9e4f9c52e2e6ce4be67a37d",
".git/objects/85/0862026154464d812f9efece33ea8de46254e8": "01019f580ace41c8232833eaaefd9637",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/26b8ff4a489f91ae5e71c30d9496f7930166b7": "0245d1d35c8e4410648e15401514338a",
".git/objects/89/b46e7b8d40b8eedb4363aede515c64929c8f2d": "e7baf8e814370c0964d9b9b16355704b",
".git/objects/8a/3f59e62607c07614a0eda5a9f7e6c2fc37de55": "37c1b4b793860d2151051c6237e3f9b1",
".git/objects/8a/5f84467cbd0ab17348bfe64221636c1c6e6088": "ec400f1a3bf2ae1b42d99df56fbd465e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/49fe3054598172a3be0b7d9ce1b98ca04fb1a0": "570dd906e1a33eefaca3b3d65588b782",
".git/objects/8d/3ffed32e9969d6ec9efe7f559d9cbfbace6ab4": "65df77129f1d386f36cd97025ba95b73",
".git/objects/8e/d62fca6afdf9efaf6bb6cf3083a82ad571a4e7": "ab65b33f69ce3cbd156cb7afab34586a",
".git/objects/8e/f5e2f92e07096a2f89bf186316421e28512e05": "bb4e2e79b8d00c41cfaacfd1a700550d",
".git/objects/8f/8609b137c954f6262b03b55321cd7ff50aa478": "9c56e5da62be50b0f95a82eda2cdc4b6",
".git/objects/90/ab6024e302e30fe09a1550dd2b4206718e8acd": "ad7f52639788cfb1566debca3287c893",
".git/objects/93/7b1e9b4971410e09c5b8e0a5d7be760a11212d": "8d08e988fd9b8de3d8ce8a3d694a8ce3",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/f5946471642fe3f485859558b22f8478ae9845": "023b0f7525c9e947f1951fac694ddeca",
".git/objects/9a/d4a7a2f2878e075d382f4b766d1685db772640": "4259b512ca84a172bec79ebf0f286e13",
".git/objects/9c/78bb4c34bdbbf3817c613a065579555d41f21f": "9cdd0f2376fde0f19b3b21475ad32c25",
".git/objects/9f/48bebb887f5e908530a409676a3f83244a5cca": "464dee7f8c31219b7f1d81eb1160f906",
".git/objects/a0/c8ec8ad17d5292f2e8dbff759a9a54c05103fc": "b15047f5087963187ad51066363e4138",
".git/objects/a0/e7bd9fd066f02914cd6ea43cd2a2f430b2b579": "197c3780f044cd03a59ef5b9c1dc7ac4",
".git/objects/a1/139629c2ea4bcd0652f143512574f85a205fb9": "41ee0a33ed9628a0ae57f455cae58784",
".git/objects/a1/8b58b3d37c203e2e10b1177c938e54c80e82a4": "4b004b54f963916f237e16feb8a72d41",
".git/objects/a3/70383aa2f61949952acef36facc47fb21eb841": "2957ed34f0131d35140f8179eb527749",
".git/objects/a4/a5270053cf2b896267d3bdd803b8fd9b937fc5": "11298d7a430a369bfbdabfa735c30ccc",
".git/objects/a5/c21eb9612bd7db89ada8ef5235a31d70d8afa1": "8042b42671426911f909c168258706fd",
".git/objects/a7/6e79a7b70a495ac0645361f499d6cb37a43ffc": "fce116f9a35eb179e48714659081bc9e",
".git/objects/a7/ac7d5021e8f0486d80aeaf2c169250c537b4ad": "6d3d5ad667c30f60534fed9dc3bcd296",
".git/objects/a9/c92731b2b85c4c977034a74d5c6bccb06580cc": "f378d3144a7fa61850bf126440cf8435",
".git/objects/ab/5ac0c0844a3343aa4eeb4bc29ec530730abfe1": "056e971380b038a95472e29c9405a5a6",
".git/objects/ab/a5597c85aea65c32e49f015867c255abcc9da2": "e2f96b1e3afee972374bcc3149b2a56d",
".git/objects/b0/54f14821fafce22e7f50f2a8ba9351b8f52449": "53f28c3306a4dee61ad7a14e46417cb2",
".git/objects/b0/e33b77b5383d422f41d5c39880ce69b0aec81a": "e7da43ab4929e30cfedd4137d44d359a",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b5/0f4a9cfccdc2700bb17cf6f1ab7c493cbb24db": "5066f4be82464660ccdce9842e2daaba",
".git/objects/b5/1db6895b860877ff9c699bb769bd88edcc0cec": "dd65a350d39c3ffc308838dc66489107",
".git/objects/b5/c2057f567e9925a339188dd8c462728b32b204": "82bc653c98ed455812792e8976538f1e",
".git/objects/b5/cb6a01f37ba3706f93a7667f935f4b109f020f": "1a59a0332d0643583202769d9d8998c5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/dc99b0190df6c25d87d940a2dfe14a8930e0ca": "a9666c3eab5238a691d51de44f53ef76",
".git/objects/b8/f5b061fff300636ad483ba976fb07cce91904a": "70ea3f1c91e9ef23b75d4b582a928b5f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/9421b51aabf77131647eae9b40f89143dd7645": "47bee90c738caa3766fdd37433607cb2",
".git/objects/b9/ad894d5563fcfcdf3da1fecfd098e62492bcd7": "427de8b23ccfdd0e5cbae9ae2d6e1975",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/6fbd3f49f393846e8066b419c9b12427ea2993": "54a12efc761b10c44835d72cac257883",
".git/objects/bc/2e22dd790fb33a9ebb783a1b9a4c82b9c09dac": "fb4ac178941b5a7a03faf87fe08f98ce",
".git/objects/bf/e4527fe25a0773b4875ee7d8be6ba8e4d9d595": "65a2fd31fc84044f071ac5150403fd65",
".git/objects/c0/1e16e3e62b24e4bf95082745f36ce3c71ee4b4": "9a2d6bf9513744ddf101d7b568ff2a2e",
".git/objects/c3/631c30135a9ee493dce3c4e38f85bb88299d05": "2dfe9acd775187817c49a541906eb6ba",
".git/objects/c3/6502b6bf90d044bb53bae785e84a34e5ef836e": "2b22fcd13ec1cb7874ac5f5f5ccb6dd8",
".git/objects/c3/b3abf17cb79a6825395a0c791fcb070c7147e4": "636296e1ab90b79e40ca672db9d24061",
".git/objects/c4/86cc14165c435d2991b5e2535194b470004f5e": "a55368f8fcef02514bdef3c092e68591",
".git/objects/c5/5f2a5001cda1c8c5c3c381892ff716dfd503fd": "46199b933482c974474c7275135cdc3d",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ce/df53dd70358840cdf74407aecba080ab4c11a2": "46f0da13e8c3c8b4289f0c18a4006430",
".git/objects/cf/00b0e56b6ebac867233f2bfed351de378c4ef9": "631988e5e80cbb73dc9578bd5e40d152",
".git/objects/cf/4c7bd7bb340167880da56d4b88bdfce5bb9548": "bc7bd8cdaf179f7eb051e0208e9d523f",
".git/objects/d0/7b7d8998f57c63e2fde7945023cc89d457faa0": "2e234fae27f580206e3b7ae955bac864",
".git/objects/d1/0874a61e5e9f698778a2c2e450419a49c4a22e": "2d929e802f46a9d1b2b9cdef041caf1d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/972d54fc7deef50ae0c3208f7ecddfaeffdfb1": "e84df605b25458808719f06a010fe70c",
".git/objects/d7/e451315f2d183d01d503df600f3db3a6d85ab8": "d02368f25f4492df540e20f22bf3f039",
".git/objects/d9/e2d244cf1ce092403bd5f0a56c64dc2f78b944": "df45e804f1087c12844310e1a75f1ff5",
".git/objects/db/533b664f113ea12dc03a1078ecf167d13bfa14": "af166793e94992b9f3e903fa55ee39b3",
".git/objects/dc/525d0592369eb5f6e1d3db567b3d1b854cb674": "4c5445bcee34984446eb45c36f710aef",
".git/objects/dc/b15c7afadac0968daef3bab69fda188e59dc99": "b9cb5aaba49e921bb7a53cacfe9d23db",
".git/objects/dd/213ac1cc1a03f4175f0a8671f438230a8ef199": "89e6f75e5ae421a81fa4cf22eb882805",
".git/objects/dd/de9d95f2cb79bc1f4b09ce6f616d38865fa37d": "dc72a58d7c66785f8e0693a82e0197e9",
".git/objects/df/7e738507902494fde9a1017a979f13a6ec7970": "c0e92ba171926d629358b98a96e24d49",
".git/objects/df/ba08f8791c5cff2b96191b197a520aa972d2b8": "3f3d4db652f89afeda37b04456bd361d",
".git/objects/e0/9236866101d571232b48f5b5643747aa46c4c9": "bbdcbf3fc56ad0a44946c20260f138f6",
".git/objects/e1/8212ddade35f71419a47daa9b912c8b5f77208": "7bc283ce82ea7fd538a6527980c068f6",
".git/objects/e4/8144efaf4f3e8d2b3899c0127f26640bcc8e9b": "e5b1aa35a0a0ca7bd7935fe5a29f0e34",
".git/objects/e5/34994480411e7a1f70265252346cfe12620641": "3b7d7411971a3810d7a485cd8dde56be",
".git/objects/e7/a3005acd1ca47ef847b33847ddb15f68886af9": "34c7c145dac17e2bc2d8dbe83fc98fea",
".git/objects/e7/efa04cd52475d76c3d9385ae767fc002b15863": "25f18de2f34f9101bd6ad8d48d626a5a",
".git/objects/e8/2da2b77980d0465f23d618a0fe49de022eacb5": "fea871331aa57ba9f3445a553a3591db",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/a88248eceed22f3a605e33b9d9a50e5ee7b73c": "ad840342172be1200a9510a67203f83f",
".git/objects/ec/f4828055053ecdfa06fafbb25e8ad252f229db": "590b3e506be3b966d5658a8ec146042a",
".git/objects/ed/2d3760fa766485d086cc80930e1d0399e27039": "bb804b3f5bcb123f5d7649d023dc863d",
".git/objects/ef/21006c6c0b378d97e29648dd5f7c84f7507514": "b41a32ce00b0e3f9c43de0772cac1b3e",
".git/objects/f0/fe2262eba55bc1734a986451959e7e8c9f2e43": "8c95309cc0497f458588e4ffe867ef7a",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/1832e7bd63e06f1416c51afb36b4db9b4619b4": "49ac9b3300b7521f11ff0bb192933456",
".git/objects/f3/45150fc4184bde85fdd66bf0860d30d78f0873": "3ffef381c0a41b387b2db0218384833e",
".git/objects/f4/a95a0dc1a822ef4759c3d657b55afe7555b674": "3b920cf78dde07198811149658b84325",
".git/objects/f8/b995b2369c9eeff90a31c0dd55bf6e2b023d30": "a688b4d528a9dcc3b4303e981d46ccbc",
".git/objects/fa/b47a5ed314d5ef1fd8a2109f95bb907e46f675": "048d7427ca493010770a9e00e05d6774",
".git/objects/fa/f6dcbf33ce599a41fafdc6bcd4818bbd30db4f": "15b36d47247ad831ef73503858fff23d",
".git/objects/fb/abce4533b43a4283c73c4f83c36097069ec8e5": "7b1bc378c0168f3f5013f40ba43b1b08",
".git/objects/fc/060bcc7050118c7994f856437ef8ce4ffc2a8f": "aee5f39ac63ee6c9bc2bb73751431a2a",
".git/objects/fd/08513ba45ebc8ccea9cdbf7cad87820a67d37a": "60c9e319b5bbfb1e2f02a2bb073e7597",
".git/objects/fe/23a646c2ae650082a4ec67f1be84701a9c999c": "d2f6125b1ba1d74b68537f07f0ade5bc",
".git/objects/fe/8b2919c8901dfe46166dc6a28010266b9426f1": "f08fdba79bba7ae84980fc2700aba784",
".git/objects/ff/cb7f915534cc81378b5f96e99c58ef06e4135d": "1a652918412d2d77a5239186ed8eb577",
".git/objects/ff/e6a5541eb942c877f134992cccffe7c8fd7ef1": "c3fb328e9b30b0ddf628f882ccb90fb4",
".git/refs/heads/main": "1515c823c6fe4b6e90f66912bf880b6f",
".git/refs/remotes/origin/main": "1515c823c6fe4b6e90f66912bf880b6f",
"assets/AssetManifest.bin": "4372a8bec5d3feeb25c4b562a34b8a8e",
"assets/AssetManifest.bin.json": "171ae0a7bd3f364546b02fc72ba1be46",
"assets/AssetManifest.json": "593f90e6ba979a8b1cb24bfd2b8d9b88",
"assets/assets/fonts/poppins/Poppins-Black.ttf": "9a3a3c0803219892727ed9d85ad5caea",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "124cd57d8f41f6db22a724f882dca3f4",
"assets/assets/fonts/poppins/Poppins-ExtraBold.ttf": "4252dae8574e434c7bb0127b8ffd06df",
"assets/assets/fonts/poppins/Poppins-ExtraLight.ttf": "a0f2eadb0002101ea5da28381ce16cde",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "07502c4fe46025097dd8b1e331182ee0",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "1bb10326b972c92be6c59c048a4327e4",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "614a91afc751f09d049231f828801c20",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "cd6b896a19b4babd1a2fa07498e9fc47",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "0fc985df77c6b59d37e79b97ed7fb744",
"assets/assets/fonts/shantell_sans/ShantellSans-Bold.ttf": "3f27bd4b2d3b52e2a070784ccc0bb6f2",
"assets/assets/fonts/shantell_sans/ShantellSans-ExtraBold.ttf": "7f33160b6a6ff926451c11fa753659cd",
"assets/assets/fonts/shantell_sans/ShantellSans-Italic.ttf": "dd649de8940523775efcace606541e62",
"assets/assets/fonts/shantell_sans/ShantellSans-Light.ttf": "4c7abd86e9797d0c26f93f5fb34ce938",
"assets/assets/fonts/shantell_sans/ShantellSans-Medium.ttf": "e7e23424662df693e295dbce4e29ab57",
"assets/assets/fonts/shantell_sans/ShantellSans-Regular.ttf": "eea56a073c0622f7157892918d1c336b",
"assets/assets/fonts/shantell_sans/ShantellSans-SemiBold.ttf": "70f404c91428f6427571f1684a62ba56",
"assets/assets/images/certificates/deep_learning.jpg": "9a6cc3a0d5e5a51205ca2364ad9f5a2a",
"assets/assets/images/certificates/graphql.jpg": "29bef6e2f34cc3eb1e24230a1ead491f",
"assets/assets/images/certificates/intermediate_python.jpg": "b6464ffce448b572932192c728075fdd",
"assets/assets/images/certificates/jst_japan_asia.jpg": "41b3fbad48bb6d344a8774702ad86da9",
"assets/assets/images/certificates/tmesek.jpg": "ecb7b17281f8b8e4d9d85e201bbb51df",
"assets/assets/images/personal/coffee.svg": "de27833429e0102727e17caa82d7ea9b",
"assets/assets/images/personal/complexity.svg": "684f184354ed5c2a9c145869e7192b46",
"assets/assets/images/personal/earth.svg": "ba131e34c9d2b74dff88e028fb2fbfd6",
"assets/assets/images/personal/galaxy.svg": "d0c49e57159dea3c38a655b3ba6126b5",
"assets/assets/images/personal/logo.svg": "22244fc4b3bf5f514737b592eabd6f6b",
"assets/assets/images/personal/me.jpg": "37b63c916cd7ad612cbccfc89c0ab3e7",
"assets/assets/images/personal/mess.svg": "9f6dc326fadfbdeb31c284abb91c9e3e",
"assets/assets/images/personal/message.svg": "807b4e8375f8c0948531908d4c1c965f",
"assets/assets/images/personal/my_showcase_style.png": "19356a83521eea544a93dd09939aa6c2",
"assets/assets/images/personal/work_stump.svg": "0bb6c81971fa97d047ec102a8ac529af",
"assets/assets/images/projects/ai_chat_bot.png": "9d41e8eb12bb98afd6007d8a788839df",
"assets/assets/images/projects/animated_buttons.png": "6adf04371ccfdb14959e97d8eee42250",
"assets/assets/images/projects/design_patterns.png": "0274f5986b14139edd72021ccbd1326c",
"assets/assets/images/projects/ggone.jpg": "4212f1730f81119ff06eb14a10a8d36a",
"assets/assets/images/projects/graphql_notes.png": "45eda8f8a37c58819a6100631b8c7465",
"assets/assets/images/projects/iron_man.png": "8708dc927d907d844431378307225a16",
"assets/assets/images/projects/notee.png": "264a912225cccd84854bd8ffe39658b3",
"assets/assets/images/projects/pulse_x.png": "4583c5c8f45338f72f4ac6001faff5ca",
"assets/assets/images/projects/the_golden_land.png": "c862492f15f121d0f849779928c76f74",
"assets/assets/images/projects/thread.png": "23c161c332c9518d5a6910b17d70d814",
"assets/assets/images/tools/dart.svg": "77736b70355db3b992d712891749acd5",
"assets/assets/images/tools/flutter.svg": "749737f954a8acaae1b3d389b3fc857f",
"assets/assets/images/tools/graphql.svg": "fa9917f65a8a054a150ed6cc318b163d",
"assets/assets/images/tools/html5.svg": "4447440d22b307c33a57c729e7d7c599",
"assets/assets/images/tools/python.svg": "a1872cef0fb917ddf4d387e298d9f160",
"assets/assets/images/van_gogh/blossom.jpg": "edd66f35236f9c40230f1661b6f591ba",
"assets/assets/images/van_gogh/irises.jpg": "635508d65ecf46f0d10fe99c3a7e0633",
"assets/assets/images/van_gogh/the-harvest.jpg": "728eeed80696e11c7aa2bd300a5c91e3",
"assets/assets/images/van_gogh/the-potato-eaters.jpg": "6b3d9a5439c71c19f48d5c212af731cc",
"assets/assets/images/van_gogh/the-starry-night.jpg": "e6510bbbc3323389a97301589c1d23f1",
"assets/assets/images/van_gogh/wheat-field-with-cypresses.jpg": "840970e2bd83dc59ffdf05e29f9ed5e4",
"assets/FontManifest.json": "0f73c5a79ef8f2f6d2f42497c59ed9cb",
"assets/fonts/MaterialIcons-Regular.otf": "d138398f0a7c8934d13e5e1a1d3521b9",
"assets/NOTICES": "01b8c16e56545a74dac8a90b6fd10ce8",
"assets/packages/atlas_icons/lib/fonts/achievement/achievement.ttf": "b4aaadf0bf250f17427edc2bf8d6fffa",
"assets/packages/atlas_icons/lib/fonts/arrow/arrow.ttf": "b1de896027e8f8bce86ecb62033361bb",
"assets/packages/atlas_icons/lib/fonts/audio/audio.ttf": "3f1061077885938f7d7950997d204c5d",
"assets/packages/atlas_icons/lib/fonts/basic-ui/basic-ui.ttf": "66ce98cbb527bcc6ebe7ee107c5b4c7b",
"assets/packages/atlas_icons/lib/fonts/business-finance/business-finance.ttf": "f2acea65ddcc3cc9f4f603eeda551ef0",
"assets/packages/atlas_icons/lib/fonts/christmas/christmas.ttf": "0d5b397bbefbc79ec6962cab78cdfa7a",
"assets/packages/atlas_icons/lib/fonts/cinema/cinema.ttf": "2c4d6cff8e18f0d725ff07aa98ef5951",
"assets/packages/atlas_icons/lib/fonts/communication/communication.ttf": "98765079271bc5f10b094f70ec20ef35",
"assets/packages/atlas_icons/lib/fonts/construction/construction.ttf": "cd4e1da1de050086fca243af5904e782",
"assets/packages/atlas_icons/lib/fonts/content-box/content-box.ttf": "bdac94c1cf513f6765423de96650ca97",
"assets/packages/atlas_icons/lib/fonts/data-document/data-document.ttf": "a9a08ede494be44999414f064b76e564",
"assets/packages/atlas_icons/lib/fonts/ecology/ecology.ttf": "b83e0c5a4760275984251b83c4ae8288",
"assets/packages/atlas_icons/lib/fonts/electronic-gadget/electronic-gadget.ttf": "e24858c0b60a69c5646b1547210fff28",
"assets/packages/atlas_icons/lib/fonts/fitness-gym/fitness-gym.ttf": "4271c3a0c2c52db8714961e022c43119",
"assets/packages/atlas_icons/lib/fonts/food-beverage/food-beverage.ttf": "3bd6a218528261210afd0fecba202a31",
"assets/packages/atlas_icons/lib/fonts/furniture/furniture.ttf": "a3ec0d78085d4bd960a42ad5690c74c9",
"assets/packages/atlas_icons/lib/fonts/goals/goals.ttf": "0f4c7d9e8c7493ce5c97ed3a6900f454",
"assets/packages/atlas_icons/lib/fonts/hand-gesture/hand-gesture.ttf": "23cf587d654b727258bdd2e539cbf3ef",
"assets/packages/atlas_icons/lib/fonts/hotel-service/hotel-service.ttf": "50c923469385bd7b44dcb324fe548559",
"assets/packages/atlas_icons/lib/fonts/internet-security/internet-security.ttf": "1a54b082a574356bf84cc740303ed2a2",
"assets/packages/atlas_icons/lib/fonts/laboratory/laboratory.ttf": "2ac143285c91dfeaa7bd76b1b9531503",
"assets/packages/atlas_icons/lib/fonts/leadership/leadership.ttf": "027bd6ee2dd9c7eb2fd83ce8c3112024",
"assets/packages/atlas_icons/lib/fonts/love/love.ttf": "d1bb0864325a76ac12868703585dca7e",
"assets/packages/atlas_icons/lib/fonts/marketing/marketing.ttf": "a3c9127874bdf909d03f23340ca680e2",
"assets/packages/atlas_icons/lib/fonts/medical/medical.ttf": "1870469962656e437fe59fbdc1d41f57",
"assets/packages/atlas_icons/lib/fonts/partnership/partnership.ttf": "153e3d7bf92828c0b6f344462c96b3a1",
"assets/packages/atlas_icons/lib/fonts/personal-development/personal-development.ttf": "cc1fffe7122f1837e50149b9469cb537",
"assets/packages/atlas_icons/lib/fonts/real-estate/real-estate.ttf": "6a12f5fce5044802569cafaa0468851d",
"assets/packages/atlas_icons/lib/fonts/school/school.ttf": "df386f18a52a9184d05a34e44611fc29",
"assets/packages/atlas_icons/lib/fonts/social/social.ttf": "14e2653eb89f982208a1c844d145ec0b",
"assets/packages/atlas_icons/lib/fonts/sport/sport.ttf": "35b11c59b869732d524129e81095ee7f",
"assets/packages/atlas_icons/lib/fonts/thanksgiving/thanksgiving.ttf": "3361220d1c358b8e5b9705250af2031f",
"assets/packages/atlas_icons/lib/fonts/transportation/transportation.ttf": "7fe16a999c74f8d1d1c5b380eef01d81",
"assets/packages/atlas_icons/lib/fonts/travel/travel.ttf": "ad2106403b4f3178091e5b9b65fbc636",
"assets/packages/atlas_icons/lib/fonts/virtual-reality/virtual-reality.ttf": "4f154c6974c3ca6c64e6eabdac9aca8b",
"assets/packages/atlas_icons/lib/fonts/weather/weather.ttf": "bf22ee4acf5483d84fcd4fb215f949e7",
"assets/packages/atlas_icons/lib/fonts/web-design/web-design.ttf": "63e6ea1eeede5eb6d7d1b7e7ea5c5797",
"assets/packages/atlas_icons/lib/fonts/winter/winter.ttf": "498547350c07410d7d2b5ef388786d85",
"assets/packages/atlas_icons/lib/fonts/working-together/working-together.ttf": "0bb881a4d35082e410776be5e1207d49",
"assets/packages/atlas_icons/lib/fonts/world-monuments/world-monuments.ttf": "b4838b4465611323a6f32f6085fb6629",
"assets/packages/atlas_icons/lib/fonts/yoga/yoga.ttf": "66b3143038a6ac7a5b3f98ff41ef1002",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "58bceaa5961579e8580eba464e20807a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "7183bb1605636b30d02bc755cb2a519c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8814ca14594212ab0d87665203f785b4",
"/": "8814ca14594212ab0d87665203f785b4",
"main.dart.js": "27b7c5f7e9425de5030f8850d05688bf",
"manifest.json": "e122dff0ba3e8923fde1b87380444017",
"version.json": "de4ffd71a80d2614a1abebb3b10ceda2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
