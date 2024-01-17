﻿oS.Init({
    PName: [oPeashooter, oSunFlower, oCherryBomb, oWallNut],
    ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie],
    PicArr: function() {
        var a = oPotatoMine.prototype,
        b = a.PicArr;
        return ["images/interface/background1.jpg", "images/interface/crater1.png", b[a.CardGif], b[a.NormalGif]]
    } (),
    backgroundImage: "images/interface/background1.jpg",
    CanSelectCard: 0,
    LevelName: "1-5 特别关：陨石坑",
    LvlClearFunc: function() {
        oSym.TimeStep = 10
    },
    LvlEName: 5,
    LargeWaveFlag: {
        10 : $("imgFlag1")
    },
    StartGameMusic: "Watery Graves",
    LoadAccess: function(a) {
        NewImg("dDave", "images/interface/Dave.gif", "left:0;top:81px", EDAll);
        NewEle("DivTeach", "div", 0, 0, EDAll); (function(d) {
            var b = arguments.callee,
            c = $("DivTeach");
            switch (d) {
            case 0:
                PlayAudio("crazydaveshort1");
                $("dDave").src = "images/interface/Dave3.gif";
                oSym.addTask(1,
                function() {
                    $("dDave").src = "images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [1])
                    }
                },
                []);
                innerText(c, "邻居，进过努力我们总算击退了一些僵尸！可喜可贺(点击继续)");
                break;
            case 1:
                PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                c.onclick = null;
                $("dDave").src = "images/interface/Dave3.gif";
                oSym.addTask(2,
                function() {
                    $("dDave").src = "images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [2])
                    }
                },
                []);
                innerText(c, "现在，我有个惊喜要给你。(点击继续)");
                break;
            case 2:
                PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                c.onclick = null;
                $("dDave").src = "images/interface/Dave3.gif";
                oSym.addTask(2,
                function() {
                    $("dDave").src = "images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [3])
                    }
                },
                []);
                innerText(c, "但是首先，你必须清理下你的草坪。(点击继续)");
                break;
            case 3:
                PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                c.onclick = null;
                $("dDave").src = "images/interface/Dave3.gif";
                oSym.addTask(2,
                function() {
                    $("dDave").src = "images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [4])
                    }
                },
                []);
                innerText(c, "用你的铲子挖出那些植物！(点击继续)");
                break;
            case 4:
                PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
                c.onclick = null;
                $("dDave").src = "images/interface/Dave3.gif";
                oSym.addTask(2,
                function() {
                    $("dDave").src = "images/interface/Dave.gif";
                    c.onclick = function() {
                        oSym.addTask(10, b, [5])
                    }
                },
                []);
                innerText(c, "开始挖吧！(点击继续)");
                break;
            case 5:
                $("dDave").src = "images/interface/Dave2.gif";
                ClearChild($("DivTeach"));
                oSym.addTask(5,
                function() {
                    ClearChild($("dDave"));
                    a(0)
                },
                [])
            }
        })(0)
    },
    StartGame: function() {
        SetHidden($("dSunNum"));
        SetVisible($("tdShovel"), $("dTop"));
        NewEle("DivTeach", "div", 0, 0, EDAll);
        oP.Monitor({
            ar: [0],
            f: function(c) {
                var d, a = oGd.$,
                b = oS.Chose;
                switch (c) {
                case 0:
                    innerText($("DivTeach"), "点击拾取铲子！");
                    NewImg("PointerUD", "images/interface/PointerUP.gif", "top:36px;left:250px", EDAll);
                    oSym.addTask(10, arguments.callee, [++c]);
                    break;
                case 1:
                    b < 0 && (innerText($("DivTeach"), "点击移除一棵植物！"), ++c);
                    oSym.addTask(10, arguments.callee, [c]);
                    break;
                case 2:
                    !(a["2_6_1"] && a["3_8_1"] && a["4_7_1"]) ? (innerText($("DivTeach"), "一直挖吧，直到你的草坪上没有植物！"), ++c) : b > -1 && (innerText($("DivTeach"), "点击铲子挖出那些植物！"), c = 1);
                    oSym.addTask(10, arguments.callee, [c]);
                    break;
                default:
                    ! (a["2_6_1"] || a["3_8_1"] || a["4_7_1"]) ? (function() {
                        SetHidden($("DivTeach"), $("PointerUD"));
                        SetVisible($("dSunNum"), $("dFlagMeter"), $("dTop"));
                        StopMusic();
                        PlayMusic(oS.LoadMusic = oS.StartGameMusic);
                        oS.InitLawnMower();
                        PrepareGrowPlants(function() {
                            BeginCool();
                            AutoProduceSun(25);
                            oSym.addTask(2000,
                            function() {
                                oP.AddZombiesFlag();
                                SetVisible($("dFlagMeterContent"))
                            },
                            [])
                        })
                    })() : oSym.addTask(10, arguments.callee, [3])
                }
            }
        },
        function() {
            var c = Math.floor(1 + Math.random() * 5),
            f = Math.floor(1 + Math.random() * 9),
            g = GetX(f) - 55,
            e = GetY(c) - 60,
            b = c + "_" + f,
            a = oP.FlagZombies,
            d;
            switch (true) {
            case a > 3 : SetStyle(d = $("imgCrater"), {
                    left: g + "px",
                    top: e + "px",
                    zIndex: 3 * c
                });
                delete oGd.$Crater[d.getAttribute("S")];
                oGd.$Crater[b] = 2;
                d.setAttribute("S", b); (d = oGd.$[b + "_1"]) && d.Die();
                break;
            case a > 2 : (NewImg("imgCrater", "images/interface/crater1.png", "left:" + g + "px;top:" + e + "px;z-index:" + 3 * c, EDAll)).setAttribute("S", b); (d = oGd.$[b + "_1"]) && d.Die();
                oGd.$Crater[b] = 2
            }
        });
        SetVisible($("dFlagMeter"));
        CustomPlants(0, 2, 6);
        CustomPlants(0, 3, 8);
        CustomPlants(0, 4, 7)
    }
},
{
    AZ: [[oZombie, 3, 1], [oZombie2, 2, 1], [oZombie3, 2, 1], [oConeheadZombie, 3, 1]],
    FlagNum: 10,
    FlagToSumNum: {
        a1: [3, 5, 9],
        a2: [1, 2, 3, 10]
    },
    FlagToMonitor: {
        9 : [ShowFinalWave, 0]
    },
    FlagToEnd: function() {
        NewImg("imgSF", "images/Card/Plants/PotatoMine.png", "left:587px;top:270px;clip:rect(auto,auto,60px,auto)", EDAll, {
            onclick: function() {
                GetNewCard(this, oPotatoMine, 6)
            }
        });
        NewImg("PointerUD", "images/interface/PointerDown.gif", "top:235px;left:596px", EDAll)
    }
});