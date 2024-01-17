﻿oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, oSnowPea, oChomper, oRepeater, oPuffShroom, oSunShroom, oFumeShroom, oGraveBuster, oHypnoShroom, oScaredyShroom, oIceShroom, oDoomShroom, oLilyPad, oSquash, oThreepeater, oTangleKlep, oJalapeno, oSpikeweed, oTorchwood, oTallNut, oCactus, oPlantern, oSplitPea, oStarfruit, oPumpkinHead, oFlowerPot, oCoffeeBean, oGarlic, oSeaShroom, oOxygen, ostar, oTTS, oSeaAnemone, oGatlingPea, oGloomShroom, oTwinSunflower, oSpikerock, oTenManNut, oSnowRepeater, oLing, oLotusRoot, oMagneticmuShroom, oLaserBean, oBigChomper], 
    ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie, oBucketheadZombie, oCXZombie, oJackinTheBoxZombie, oFootballZombie, oCConeheadZombie, oPoleVaultingZombie, oHeiFootballZombie, oXBZombie, oCZombie, oCBucketheadZombie, oMustacheZombie, oTrashZombie, oDancingZombie, oBackupDancer, oBalloonZombie],
    PicArr: function() {
        return ["images/interface/backgroundX2.jpg"]
    } (),
    backgroundImage: "images/interface/backgroundX2.jpg",
    CanSelectCard: 1,
    LevelName: "常青之塔 47层",
    LvlEName: 197,
    SunNum: 9900,
    LF: [0, 1, 1, 3, 1, 1, 0], 
    StartGameMusic: "The Great Wall1",  
    LargeWaveFlag: {
        5 : $("imgFlag3"),
        10 : $("imgFlag2"),
        15 : $("imgFlag1")
    },
    DKind: 0,
    Monitor: {
        f: AppearTombstones,
        ar: [5, 9, 11]
    },
    UserDefinedFlagFunc: function(a) {
        oP.FlagNum == oP.FlagZombies && oP.SetTimeoutTomZombie([oDancingZombie])
    }
},
{
    AZ: [[oZombie, 1, 1], [oZombie2, 1, 1], [oZombie3, 1, 1], [oConeheadZombie, 1, 1], [oBucketheadZombie, 1, 1], [oCXZombie, 1, 1], [oJackinTheBoxZombie, 1, 1], [oFootballZombie, 1, 1],  [oCConeheadZombie, 1, 1], [oPoleVaultingZombie, 1, 1], [oHeiFootballZombie, 1, 1], [oCZombie, 1, 1], [oXBZombie, 1, 1], [oCBucketheadZombie, 1, 1], [oMustacheZombie, 1, 1], [oTrashZombie, 1, 1], [oDancingZombie, 1, 1], [oBalloonZombie, 1, 1]],
    FlagNum: 15,
    FlagToSumNum: {
        a1: [98, 115, 138, 167, 180, 209, 208],
        a2: [98, 115, 138, 167, 180, 209, 227]
    },
    FlagToMonitor: {
        4 : [ShowLargeWave, 0],
        9 : [ShowLargeWave, 0],
        14 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
 NewImg("imgSF", "images/interface/trophy.png", "left:260px;top:233px", EDAll, {
            onclick: function() {
                SelectModal(198)
            }
        });
        NewImg("PointerUD", "images/interface/PointerDown.gif", "top:185px;left:676px", EDAll)
    }
});