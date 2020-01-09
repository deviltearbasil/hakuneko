import Connector from '../engine/Connector.mjs';

export default class TuMangaOnline extends Connector {

    constructor() {
        super();
        super.id = 'tumangaonline';
        super.label = 'TuMangaOnline';
        this.tags = [ 'manga', 'spanish' ];
        this.url = 'https://tmofans.com';
        this.requestOptions.headers.set('x-referer', this.url);
    }

    async _initializeConnector() {
        await super._initializeConnector();
        await this.wait(2500);
    }

    async _getMangas() {
        let request = new Request('http://cdn.hakuneko.download/' + this.id + '/mangas.json', this.requestOptions);
        let response = await fetch(request);
        return await response.json();
    }

    async _getChapters(manga) {
        let script = `
            var _0x2859=['YkvDlG58w5PCpMOKLsKMTWdJwphfEsOvw7M2woDCnsKTwpPCjMOKTcOrexrDrcKAwqBVwqhHw7HDi8OAw6LCtQPCr1UBwrsX','dcOFdBsC','VCjCun3CgMKUHMK6wq8b','YX7CiMOMPQ==','UxfCplIMw7tcMsKBMhwNw6zCisKBHHtdLMKvAcO7w5zDpsKNAsOhw4PCm2tRw48Lw6A4w7XCtwzCu0bDkcKKVkrCjBQxw70fAcKiJcKUw5B5S8OVJ8Kywq9ow6bCtS/CosOaw68=','IVlNw7Nk','w4drBMO3AsOhNhfCvw==','LHcBdsKC','w4pOY2MAVWY8URVswpnCpsKiDhcwwoYQJADCisKLNAJlw6nCmgnDmGTDtsKnw6jDmhjDi0tgP8Oew5VqMwnCtkxMwrDCg8OFw7U8bsOzw6vDr8OvwrI=','GFkOwrl5','w7LDun8oeg==','LEZPw4hK','w4hnwqUOKA==','AHpOw4NN','w6Fkw6gcwpE=','QcKATEnDlg==','Y1PCvA==','VBbCuRALw6FYLA==','w7bDl3LCii8=','K0dww4pEIFk=','wr/DhsK5cA/DuTMww53DnmEsd3k=','asKWc0s=','ADbDrxk=','JT8Kw64=','SC/CkmPCpg==','csOwaMORw6E=','dcOteQ4H','a0PDkg==','Uy7Co2c=','w77DmMKTVw==','VnXDisOldg==','XVTDiMOqZQ==','ccKLNMKhLw==','L2oR','ZMKBeX7DgyHCqFXDqg==','w73Dn3TCmjM=','a8KNw4XDpiocGcOaRMKZMMKCUjJfVUrDjw==','FsKcw4vCjSs=','w6Z2RDcP','wpzChyUDYjg=','w7ZXwpcJ','fH/ClcOCAA==','WcOjNDMO','wpTCjxsVfQ==','wpvDvsKzbgI=','w6/Dk28zQg==','WiQ4YMKd','w6VPK8O/Eg==','bxrCimnCgA==','w4dOL1fCt8Oi','WAVWwqlW','Olk9esKD'];(function(_0x83fbe8,_0x37b083){var _0xb462be=function(_0x3bc219){while(--_0x3bc219){_0x83fbe8['push'](_0x83fbe8['shift']());}};_0xb462be(++_0x37b083);}(_0x2859,0x100));var _0x3302=function(_0x83fbe8,_0x37b083){_0x83fbe8=_0x83fbe8-0x0;var _0xb462be=_0x2859[_0x83fbe8];if(_0x3302['BUhwwg']===undefined){(function(){var _0x398d70;try{var _0x4552c3=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x398d70=_0x4552c3();}catch(_0xd20d7a){_0x398d70=window;}var _0x22fa2b='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x398d70['atob']||(_0x398d70['atob']=function(_0x1ba942){var _0x4e5a6f=String(_0x1ba942)['replace'](/=+$/,'');for(var _0x5c2481=0x0,_0x1d0821,_0xb0b0b5,_0x551bf9=0x0,_0x44ce65='';_0xb0b0b5=_0x4e5a6f['charAt'](_0x551bf9++);~_0xb0b0b5&&(_0x1d0821=_0x5c2481%0x4?_0x1d0821*0x40+_0xb0b0b5:_0xb0b0b5,_0x5c2481++%0x4)?_0x44ce65+=String['fromCharCode'](0xff&_0x1d0821>>(-0x2*_0x5c2481&0x6)):0x0){_0xb0b0b5=_0x22fa2b['indexOf'](_0xb0b0b5);}return _0x44ce65;});}());var _0x502a37=function(_0x3861c8,_0x37b083){var _0x1b5440=[],_0x559ada=0x0,_0x1dfff4,_0x5e4b69='',_0x3c5443='';_0x3861c8=atob(_0x3861c8);for(var _0x5070d4=0x0,_0x6c6ec3=_0x3861c8['length'];_0x5070d4<_0x6c6ec3;_0x5070d4++){_0x3c5443+='%'+('00'+_0x3861c8['charCodeAt'](_0x5070d4)['toString'](0x10))['slice'](-0x2);}_0x3861c8=decodeURIComponent(_0x3c5443);for(var _0x3f43e3=0x0;_0x3f43e3<0x100;_0x3f43e3++){_0x1b5440[_0x3f43e3]=_0x3f43e3;}for(_0x3f43e3=0x0;_0x3f43e3<0x100;_0x3f43e3++){_0x559ada=(_0x559ada+_0x1b5440[_0x3f43e3]+_0x37b083['charCodeAt'](_0x3f43e3%_0x37b083['length']))%0x100;_0x1dfff4=_0x1b5440[_0x3f43e3];_0x1b5440[_0x3f43e3]=_0x1b5440[_0x559ada];_0x1b5440[_0x559ada]=_0x1dfff4;}_0x3f43e3=0x0;_0x559ada=0x0;for(var _0x365565=0x0;_0x365565<_0x3861c8['length'];_0x365565++){_0x3f43e3=(_0x3f43e3+0x1)%0x100;_0x559ada=(_0x559ada+_0x1b5440[_0x3f43e3])%0x100;_0x1dfff4=_0x1b5440[_0x3f43e3];_0x1b5440[_0x3f43e3]=_0x1b5440[_0x559ada];_0x1b5440[_0x559ada]=_0x1dfff4;_0x5e4b69+=String['fromCharCode'](_0x3861c8['charCodeAt'](_0x365565)^_0x1b5440[(_0x1b5440[_0x3f43e3]+_0x1b5440[_0x559ada])%0x100]);}return _0x5e4b69;};_0x3302['diBNcR']=_0x502a37;_0x3302['wGKYTl']={};_0x3302['BUhwwg']=!![];}var _0x28588d=_0x3302['wGKYTl'][_0x83fbe8];if(_0x28588d===undefined){if(_0x3302['xrzNyu']===undefined){_0x3302['xrzNyu']=!![];}_0xb462be=_0x3302['diBNcR'](_0xb462be,_0x37b083);_0x3302['wGKYTl'][_0x83fbe8]=_0xb462be;}else{_0xb462be=_0x28588d;}return _0xb462be;};new Promise(_0x5a50f5=>{var _0x3b03ee={};_0x3b03ee[_0x3302('0x0','[8%W')]=_0x3302('0x1','raj5');_0x3b03ee[_0x3302('0x2','QF&J')]=function(_0x59f878,_0x439d4c){return _0x59f878(_0x439d4c);};_0x3b03ee[_0x3302('0x3','6)S1')]=_0x3302('0x4',']ZUE');_0x3b03ee[_0x3302('0x5','MdOT')]=_0x3302('0x6','[8%W');_0x3b03ee[_0x3302('0x7','(X#v')]=_0x3302('0x8','r3VQ');_0x3b03ee[_0x3302('0x9','](Oz')]=_0x3302('0xa','2zmH');_0x3b03ee[_0x3302('0xb','tJqQ')]=_0x3302('0xc','yItd');_0x3b03ee[_0x3302('0xd','&6uA')]=function(_0x2e75ce,_0x4adfca){return _0x2e75ce<_0x4adfca;};_0x3b03ee[_0x3302('0xe','lo&X')]=function(_0x341705,_0x4b9f40){return _0x341705+_0x4b9f40;};_0x3b03ee[_0x3302('0xf','](Oz')]=function(_0x5d9458,_0x96a00b){return _0x5d9458+_0x96a00b;};_0x3b03ee[_0x3302('0x10','U!fX')]=function(_0x25cd97,_0xacf198,_0x4fe844){return _0x25cd97(_0xacf198,_0x4fe844);};let _0x2cf5c4={};_0x2cf5c4[_0x3b03ee[_0x3302('0x11','](Oz')]]=[..._0x3b03ee[_0x3302('0x12','4$MV')]($,_0x3b03ee[_0x3302('0x13','0L3t')])][_0x3302('0x14','(X#v')](_0x358880=>$(_0x358880)[_0x3302('0x15','r3VQ')]()[_0x3302('0x16','nYbG')]()[_0x3302('0x17','](Oz')](_0x3302('0x18','B&I$'))[_0x3302('0x19','UBaF')]('h4')[_0x3302('0x1a','lTkR')]()[_0x3302('0x1b','Hvkl')]());_0x2cf5c4[_0x3b03ee[_0x3302('0x1c','[8%W')]]=[..._0x3b03ee[_0x3302('0x1d','CV*J')]($,_0x3b03ee[_0x3302('0x1e','MdOT')])][_0x3302('0x1f',']ZUE')](_0x10d764=>_0x10d764[_0x3302('0x20','[8%W')][_0x3302('0x21','wkl[')]());_0x2cf5c4[_0x3b03ee[_0x3302('0x22','qI5)')]]=[..._0x3b03ee[_0x3302('0x23','qI5)')]($,_0x3b03ee[_0x3302('0x24','MN90')])][_0x3302('0x25','&6uA')](_0x89bf15=>_0x89bf15[_0x3302('0x26','0L3t')][_0x3302('0x27','nYbG')](new RegExp(_0x3302('0x28','vZKt')))[0x1]);let _0xb2a490=[];for(let _0x72a863=0x0;_0x3b03ee[_0x3302('0x29','emk7')](_0x72a863,_0x2cf5c4[_0x3b03ee[_0x3302('0x2a','yItd')]][_0x3302('0x2b','%X&a')]);_0x72a863++){_0xb2a490[_0x3302('0x2c','U!fX')]({'id':_0x72a863,'title':_0x3b03ee[_0x3302('0x2d','(X#v')](_0x3b03ee[_0x3302('0x2e',']8M[')](_0x3b03ee[_0x3302('0x2f','%X&a')](_0x2cf5c4[_0x3b03ee[_0x3302('0x30','B&I$')]][_0x72a863],'\x20['),_0x2cf5c4[_0x3b03ee[_0x3302('0x31','lo&X')]][_0x72a863]),']'),'language':_0x2cf5c4[_0x3b03ee[_0x3302('0x32','2sRz')]][_0x72a863]});}_0x3b03ee[_0x3302('0x33','2zmH')](setTimeout,()=>_0x5a50f5(_0xb2a490),0x9c4);});
        `;
        let request = new Request(this.url + manga.id, this.requestOptions);
        return await Engine.Request.fetchUI(request, script);
    }

    async _getChapterLink(chapter) {
        let script = `
            window['chapter'] = ${chapter.id};
            var _0xd800=['K8O8FEPDmhJQYMOiwrTDlcOlwqpDwoUSPhPCsxXCgVVBw5JGKMKFwptOw6XCk2lZIEnChsKjVTPCscOZwrHCqQDDqURAwoQ=','BhbDgg4sw4U2','wqZMeiTDjg==','w6rDtcO8w4xQ','N3DDocOFZA==','w44Qw7HCkcKuO8KAIyY=','XMKyw6FWwoA=','w7FOYVzCj8OdCA==','wrPCgFjDhUc=','wqnDqT1uFQDCjAkjTA==','d3LDozFr','wr7Cp1rDgQ==','w4wSw586','w40Vwr3Dvmc=','w613wq4=','wrLCrFlpwoTDnMOaKQ==','woIoBC/DkQ==','SHfDiTVeHsKv','Ti5gwrDCnA==','wq3CqEvDlcOKw5/DnQ==','w7gywpDCgTg=','w57Cr8O4wrhl','IMOKL0pA','w4FcwoYAZg==','FMOMw6rCj8Od','dDxtw7YU'];(function(_0x1498c4,_0x2b4259){var _0x4d60fb=function(_0x1aa56d){while(--_0x1aa56d){_0x1498c4['push'](_0x1498c4['shift']());}};_0x4d60fb(++_0x2b4259);}(_0xd800,0x155));var _0x1204=function(_0x1498c4,_0x2b4259){_0x1498c4=_0x1498c4-0x0;var _0x4d60fb=_0xd800[_0x1498c4];if(_0x1204['SmeXDI']===undefined){(function(){var _0x3d53a6=function(){var _0x4b3955;try{_0x4b3955=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x55efe3){_0x4b3955=window;}return _0x4b3955;};var _0x444060=_0x3d53a6();var _0x2fca36='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x444060['atob']||(_0x444060['atob']=function(_0x123adf){var _0x265906=String(_0x123adf)['replace'](/=+$/,'');for(var _0x513385=0x0,_0x58f5bf,_0x2dc233,_0x12e041=0x0,_0x3194f6='';_0x2dc233=_0x265906['charAt'](_0x12e041++);~_0x2dc233&&(_0x58f5bf=_0x513385%0x4?_0x58f5bf*0x40+_0x2dc233:_0x2dc233,_0x513385++%0x4)?_0x3194f6+=String['fromCharCode'](0xff&_0x58f5bf>>(-0x2*_0x513385&0x6)):0x0){_0x2dc233=_0x2fca36['indexOf'](_0x2dc233);}return _0x3194f6;});}());var _0x552479=function(_0x3e8fd4,_0x2b4259){var _0x393bfa=[],_0x2f5977=0x0,_0x5ddee6,_0x551ddb='',_0xa2774e='';_0x3e8fd4=atob(_0x3e8fd4);for(var _0x596e63=0x0,_0x4f2063=_0x3e8fd4['length'];_0x596e63<_0x4f2063;_0x596e63++){_0xa2774e+='%'+('00'+_0x3e8fd4['charCodeAt'](_0x596e63)['toString'](0x10))['slice'](-0x2);}_0x3e8fd4=decodeURIComponent(_0xa2774e);for(var _0x3ed637=0x0;_0x3ed637<0x100;_0x3ed637++){_0x393bfa[_0x3ed637]=_0x3ed637;}for(_0x3ed637=0x0;_0x3ed637<0x100;_0x3ed637++){_0x2f5977=(_0x2f5977+_0x393bfa[_0x3ed637]+_0x2b4259['charCodeAt'](_0x3ed637%_0x2b4259['length']))%0x100;_0x5ddee6=_0x393bfa[_0x3ed637];_0x393bfa[_0x3ed637]=_0x393bfa[_0x2f5977];_0x393bfa[_0x2f5977]=_0x5ddee6;}_0x3ed637=0x0;_0x2f5977=0x0;for(var _0x1ff12f=0x0;_0x1ff12f<_0x3e8fd4['length'];_0x1ff12f++){_0x3ed637=(_0x3ed637+0x1)%0x100;_0x2f5977=(_0x2f5977+_0x393bfa[_0x3ed637])%0x100;_0x5ddee6=_0x393bfa[_0x3ed637];_0x393bfa[_0x3ed637]=_0x393bfa[_0x2f5977];_0x393bfa[_0x2f5977]=_0x5ddee6;_0x551ddb+=String['fromCharCode'](_0x3e8fd4['charCodeAt'](_0x1ff12f)^_0x393bfa[(_0x393bfa[_0x3ed637]+_0x393bfa[_0x2f5977])%0x100]);}return _0x551ddb;};_0x1204['agDNEQ']=_0x552479;_0x1204['RiKNMv']={};_0x1204['SmeXDI']=!![];}var _0x1e98bc=_0x1204['RiKNMv'][_0x1498c4];if(_0x1e98bc===undefined){if(_0x1204['YiWJuV']===undefined){_0x1204['YiWJuV']=!![];}_0x4d60fb=_0x1204['agDNEQ'](_0x4d60fb,_0x2b4259);_0x1204['RiKNMv'][_0x1498c4]=_0x4d60fb;}else{_0x4d60fb=_0x1e98bc;}return _0x4d60fb;};new Promise((_0x394917,_0xae9ad7)=>{var _0x425549={};_0x425549[_0x1204('0x0','gN^&')]=function(_0x4a26a3,_0x37d0e6){return _0x4a26a3(_0x37d0e6);};_0x425549[_0x1204('0x1','wn))')]=_0x1204('0x2','G&#Q');_0x425549[_0x1204('0x3','U]FM')]=_0x1204('0x4','f7jL');_0x425549[_0x1204('0x5','nqQd')]=_0x1204('0x6','V6e0');_0x425549[_0x1204('0x7','7IS1')]=function(_0xcf194d,_0x28b129,_0x52ef9c){return _0xcf194d(_0x28b129,_0x52ef9c);};let _0x2170e8=$[_0x1204('0x8','%WIS')];$[_0x1204('0x9','smEq')]=_0x3d30c6=>{var _0x1947d3={};_0x1947d3[_0x1204('0xa','*JoM')]=function(_0x5a7cd3,_0x7ce01b){return _0x425549.DOeTM(_0x5a7cd3,_0x7ce01b);};if(_0x3d30c6[_0x1204('0xb','sCfE')][_0x1204('0xc','u&cR')](_0x425549[_0x1204('0xd','0pc$')])){_0x3d30c6[_0x1204('0xe','7IS1')]=_0x174601=>{_0x425549[_0x1204('0xf','*9Wy')](_0x394917,_0x174601[_0x1204('0x10','%WIS')](_0x425549[_0x1204('0x11',')diG')],_0x425549[_0x1204('0x12','bfVG')]));};_0x3d30c6[_0x1204('0x13','5C*3')]=(_0x23e1ca,_0x4ff958,_0x952953)=>{_0x1947d3[_0x1204('0x14','sCfE')](_0xae9ad7,_0x952953);};}_0x425549[_0x1204('0x15','x0cD')](_0x2170e8,_0x3d30c6);};_0x425549[_0x1204('0x16','8ZSL')](setTimeout,()=>$(_0x1204('0x17','@a3p'))[window[_0x1204('0x18','nKM1')]][_0x1204('0x19','5sE1')](),0x3e8);});
        `;
        let request = new Request(this.url + chapter.manga.id, this.requestOptions);
        let data = await Engine.Request.fetchUI(request, script);
        return new URL(data, request.url);
    }

    async _getPages(chapter) {
        let script = `
            var _0x42fe=['HxhLFMKOw7E=','W3pVwowm','w7s+JMO0CsOkw6fDhBJFw54=','w6/CqU9Ew6w=','wr57ciTDo8OxT8KnW8OhwppPDsKLwqLCpQ==','w545K8OwAg==','RsOeEcKjwoJPw7zDrk5JfGbDtMKfFA4=','w6nChAlUVA==','w7rCgyrCm8OGOzPDsA==','wp49DcKFQA==','w4VoLzbCnMODw5V4NAgUJg4=','w6DDnsKmw6o5','HmvCq8OJSUQ=','wpLDvBtCJQ==','wosTw7XCjjE=','wpbCpcO0W2U=','woHDsMKsw7t6','w7Upw47Dh8KK','wpnCvsO4S3s=','w5bDusKPw6zCsA==','VGFZwpw4','ZsK6w6APFGJT','UHNpfhs=','LzHCu15J','W1VzQRI=','w50MXMKKwqc=','wp5xwosHLA==','wpbCmMObRks=','w6zCvRR6bw==','w4rClWBTw4o=','wrsuOsKhN8KFIg==','w7jCoMOdIw==','f1h6wrEO','wqw1Kg==','w4zDmFNweQ==','QsO7GT4F','wp9twrUYAw==','Tm/DoUh/eg==','YsO0J8KMwqc=','w5FKKgPCnw==','wrHCvsOvCXdaScKaLMOnw5PChcOlw7E0S3kuHsO0wrLDuwoDKhU3KMKaZFzDkMO/w5DClkdz','w6ZfwpQXw5Q=','R8OSCcKUwohQ','w7RuD3nDgg==','wprDn8K1','wrXDn8KDw5/Cug==','w4lcJ1jDhQ=='];(function(_0x1f42fa,_0x13f452){var _0x14aa94=function(_0x4652ac){while(--_0x4652ac){_0x1f42fa['push'](_0x1f42fa['shift']());}};_0x14aa94(++_0x13f452);}(_0x42fe,0x13e));var _0x162c=function(_0x1f42fa,_0x13f452){_0x1f42fa=_0x1f42fa-0x0;var _0x14aa94=_0x42fe[_0x1f42fa];if(_0x162c['GFCcNr']===undefined){(function(){var _0xe2f008;try{var _0x4ffa25=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0xe2f008=_0x4ffa25();}catch(_0x555528){_0xe2f008=window;}var _0x5c40f2='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0xe2f008['atob']||(_0xe2f008['atob']=function(_0x38ad7f){var _0x555f69=String(_0x38ad7f)['replace'](/=+$/,'');for(var _0x834583=0x0,_0x1fde36,_0x103212,_0x1dbfc6=0x0,_0x1b96ee='';_0x103212=_0x555f69['charAt'](_0x1dbfc6++);~_0x103212&&(_0x1fde36=_0x834583%0x4?_0x1fde36*0x40+_0x103212:_0x103212,_0x834583++%0x4)?_0x1b96ee+=String['fromCharCode'](0xff&_0x1fde36>>(-0x2*_0x834583&0x6)):0x0){_0x103212=_0x5c40f2['indexOf'](_0x103212);}return _0x1b96ee;});}());var _0x38e8d4=function(_0xdd5bb0,_0x13f452){var _0x292a04=[],_0x5b6b47=0x0,_0x14956f,_0x339f05='',_0x37529d='';_0xdd5bb0=atob(_0xdd5bb0);for(var _0x222b04=0x0,_0x522858=_0xdd5bb0['length'];_0x222b04<_0x522858;_0x222b04++){_0x37529d+='%'+('00'+_0xdd5bb0['charCodeAt'](_0x222b04)['toString'](0x10))['slice'](-0x2);}_0xdd5bb0=decodeURIComponent(_0x37529d);for(var _0x38b1db=0x0;_0x38b1db<0x100;_0x38b1db++){_0x292a04[_0x38b1db]=_0x38b1db;}for(_0x38b1db=0x0;_0x38b1db<0x100;_0x38b1db++){_0x5b6b47=(_0x5b6b47+_0x292a04[_0x38b1db]+_0x13f452['charCodeAt'](_0x38b1db%_0x13f452['length']))%0x100;_0x14956f=_0x292a04[_0x38b1db];_0x292a04[_0x38b1db]=_0x292a04[_0x5b6b47];_0x292a04[_0x5b6b47]=_0x14956f;}_0x38b1db=0x0;_0x5b6b47=0x0;for(var _0x15bc7d=0x0;_0x15bc7d<_0xdd5bb0['length'];_0x15bc7d++){_0x38b1db=(_0x38b1db+0x1)%0x100;_0x5b6b47=(_0x5b6b47+_0x292a04[_0x38b1db])%0x100;_0x14956f=_0x292a04[_0x38b1db];_0x292a04[_0x38b1db]=_0x292a04[_0x5b6b47];_0x292a04[_0x5b6b47]=_0x14956f;_0x339f05+=String['fromCharCode'](_0xdd5bb0['charCodeAt'](_0x15bc7d)^_0x292a04[(_0x292a04[_0x38b1db]+_0x292a04[_0x5b6b47])%0x100]);}return _0x339f05;};_0x162c['HUZOiU']=_0x38e8d4;_0x162c['bpAzzG']={};_0x162c['GFCcNr']=!![];}var _0xbdb8a0=_0x162c['bpAzzG'][_0x1f42fa];if(_0xbdb8a0===undefined){if(_0x162c['dBpcmd']===undefined){_0x162c['dBpcmd']=!![];}_0x14aa94=_0x162c['HUZOiU'](_0x14aa94,_0x13f452);_0x162c['bpAzzG'][_0x1f42fa]=_0x14aa94;}else{_0x14aa94=_0xbdb8a0;}return _0x14aa94;};new Promise((_0x5cf9a2,_0x57d50a)=>{var _0x53c660={};_0x53c660[_0x162c('0x0','M]oc')]=_0x162c('0x1','P(xp');_0x53c660[_0x162c('0x2','*M&j')]=function(_0x1033bf,_0x35743f){return _0x1033bf(_0x35743f);};_0x53c660[_0x162c('0x3','xY^S')]=_0x162c('0x4','YKAU');_0x53c660[_0x162c('0x5','DC2T')]=_0x162c('0x6','*M&j');_0x53c660[_0x162c('0x7','RqjF')]=_0x162c('0x8','[#09');_0x53c660[_0x162c('0x9','s*65')]=function(_0x4aa21e,_0x17c802){return _0x4aa21e(_0x17c802);};_0x53c660[_0x162c('0xa','RqjF')]=_0x162c('0xb','O#BE');_0x53c660[_0x162c('0xc','QQzk')]=_0x162c('0xd','I6VP');_0x53c660[_0x162c('0xe','EbA6')]=_0x162c('0xf','Tw%%');_0x53c660[_0x162c('0x10','I6VP')]=_0x162c('0x11','*M&j');_0x53c660[_0x162c('0x12','%eha')]=_0x162c('0x13','KLvu');_0x53c660[_0x162c('0x14','d^RY')]=_0x162c('0x15','xY^S');_0x53c660[_0x162c('0x16','meCO')]=_0x162c('0x17','aF(p');_0x53c660[_0x162c('0x18','%gym')]=function(_0x543046,_0x5a91a9,_0x1f38e1){return _0x543046(_0x5a91a9,_0x1f38e1);};this[_0x53c660[_0x162c('0x19','hPji')]][_0x53c660[_0x162c('0x1a','YKAU')]]=Number[_0x53c660[_0x162c('0x1b','[#09')]];let _0x1058e9=this[_0x53c660[_0x162c('0x1c','lPNc')]][_0x53c660[_0x162c('0x1d','YKAU')]];this[_0x53c660[_0x162c('0x1e','GVFO')]][_0x53c660[_0x162c('0x1f','QQzk')]]=()=>{var _0x507846={};_0x507846[_0x162c('0x20','Q3LN')]=_0x53c660[_0x162c('0x21',']AS]')];return _0x507846;};this[_0x53c660[_0x162c('0x22','UxN%')]][_0x53c660[_0x162c('0x23',']AS]')]](new CustomEvent(_0x53c660[_0x162c('0x24','d#@]')]));_0x53c660[_0x162c('0x25','M]oc')](setTimeout,()=>{try{let _0x4d6647=[..._0x53c660[_0x162c('0x26','YKAU')]($,_0x53c660[_0x162c('0x27','%eha')])][_0x53c660[_0x162c('0x28','EbA6')]](_0x3d156b=>_0x1058e9(_0x3d156b)[_0x162c('0x29','4C9]')]!==_0x162c('0x2a','!%)R'))[_0x53c660[_0x162c('0x2b','QQzk')]](_0x5dc14c=>_0x5dc14c[_0x162c('0x2c','4C9]')]);_0x53c660[_0x162c('0x2d','h1[H')](_0x5cf9a2,_0x4d6647);}catch(_0x88c465){_0x53c660[_0x162c('0x2e','tZi5')](_0x57d50a,_0x88c465);}},0x3e8);});
        `;
        let uri = await this._getChapterLink(chapter);
        let request = new Request(uri, this.requestOptions);
        let data = await Engine.Request.fetchUI(request, script);
        return data.map(img => this.createConnectorURI({
            url: this.getAbsolutePath(img, request.url),
            referer: request.url
        }));
    }

    _handleConnectorURI( payload ) {
        /*
         * TODO: only perform requests when from download manager
         * or when from browser for preview and selected chapter matches
         */
        this.requestOptions.headers.set( 'x-referer', payload.referer );
        let promise = super._handleConnectorURI( payload.url );
        this.requestOptions.headers.delete( 'x-referer' );
        return promise;
    }
}