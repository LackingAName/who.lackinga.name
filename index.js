var PG = false
var Directories
var BadWordBox = "fuck,bitch,shit,hell,damn"

var Directory = "who\\"
var CurrentWord = "who"
function WordClicked(Clicked) {
    for (var I = 0; I < Directories.length; I++) {
        if (Directories[I] == CurrentWord + "-" + Clicked + ">" + Directories[I].split(">")[1]) {
            CurrentWord = Directories[I].split(">")[1]
            Directory = Directory + CurrentWord + "\\"

            var PGCurrentWord = CurrentWord
            if (PG) {
                for (var B = 0; B < BadWordBox.split(",").length; B++) {
                    if (PGCurrentWord.toLowerCase().includes(BadWordBox.split(",")[B])) {
                        PGCurrentWord = PGCurrentWord.replace(BadWordBox.split(",")[B],"*".repeat(BadWordBox.split(",")[B].length))
                    }
                }
            }

            for (var W = 0; W < document.getElementsByClassName("word").length; W++) {
                if (PG) {document.getElementsByClassName("word")[W].innerHTML = PGCurrentWord}
                else {document.getElementsByClassName("word")[W].innerHTML = CurrentWord}
            }
            break
        }
    }
    
    var PGDirectory = Directory
    if (PG) {
        for (var B = 0; B < BadWordBox.split(",").length; B++) {
            if (PGDirectory.toLowerCase().includes(BadWordBox.split(",")[B])) {
                PGDirectory = PGDirectory.replace(BadWordBox.split(",")[B],"*".repeat(BadWordBox.split(",")[B].length))
            }
        }
        document.getElementById("directory").innerHTML = PGDirectory
    } else {document.getElementById("directory").innerHTML = Directory}
}

function PreviousClicked() {
    if (Directory == "who\\") {return}
    Directory = Directory.split(Directory.split("\\")[Directory.split("\\").length - 2] + "\\").join("")
    CurrentWord = Directory.split("\\")[Directory.split("\\").length - 2]

    var PGCurrentWord = CurrentWord
    if (PG) {
        for (var B = 0; B < BadWordBox.split(",").length; B++) {
            if (PGCurrentWord.toLowerCase().includes(BadWordBox.split(",")[B])) {
                PGCurrentWord = PGCurrentWord.replace(BadWordBox.split(",")[B],"*".repeat(BadWordBox.split(",")[B].length))
            }
        }
    }

    for (var W = 0; W < document.getElementsByClassName("word").length; W++) {
        if (PG) {document.getElementsByClassName("word")[W].innerHTML = PGCurrentWord}
        else {document.getElementsByClassName("word")[W].innerHTML = CurrentWord}
    }

    var PGDirectory = Directory
    if (PG) {
        for (var B = 0; B < BadWordBox.split(",").length; B++) {
            if (PGDirectory.toLowerCase().includes(BadWordBox.split(",")[B])) {
                PGDirectory = PGDirectory.replace(BadWordBox.split(",")[B],"*".repeat(BadWordBox.split(",")[B].length))
            }
        }
        document.getElementById("directory").innerHTML = PGDirectory
    } else {document.getElementById("directory").innerHTML = Directory}
}

function PGToggle() {
    PG = !PG

    if (PG) {document.getElementById("pg").style.background = "#0f0"}
    else {document.getElementById("pg").style.background = "#f00"}
}

document.addEventListener("DOMContentLoaded", () => {
    function Update() {
        document.body.style.setProperty("--offset", (Math.random() * (50 - (-50)) + (-50)) + "px")
    }

    var IvaGqzW, dz1s9Cy, waluKY, ZlXiyS, SU1OiA, wyk3xOm, PQhwPtD, Ctj88ba, lBAIb7q, c9AsFy;
    const HrBZUFZ = [0x0, 0x1, 0x8, 0xff, "length", "undefined", 0x3f, 0x6, "fromCodePoint", 0x7, 0xc, "push", 0x5b, 0x1fff, 0x58, 0xd, 0xe, 0x71];
    function hMUVTYo(IvaGqzW) {
        var dz1s9Cy = "A0?`u]\"*V<PQ@:.&,>h~TL%{ot2$!^}vkn7a+B4C#6IX3(8ydHZjmrUEO=c_gDbsYeWl/1R[|JM5qSfwp;iG)9FxNKz", waluKY, ZlXiyS, SU1OiA, wyk3xOm, PQhwPtD, Ctj88ba, lBAIb7q;
        D9AXQb(waluKY = "" + (IvaGqzW || ""), ZlXiyS = waluKY.length, SU1OiA = [], wyk3xOm = HrBZUFZ[0x0], PQhwPtD = HrBZUFZ[0x0], Ctj88ba = -HrBZUFZ[0x1]);
        for (lBAIb7q = HrBZUFZ[0x0]; lBAIb7q < ZlXiyS; lBAIb7q++) {
            var c9AsFy = dz1s9Cy.indexOf(waluKY[lBAIb7q]);
            if (c9AsFy === -HrBZUFZ[0x1])
                continue;
            if (Ctj88ba < HrBZUFZ[0x0]) {
                Ctj88ba = c9AsFy
            } else {
                D9AXQb(Ctj88ba += c9AsFy * HrBZUFZ[0xc], wyk3xOm |= Ctj88ba << PQhwPtD, PQhwPtD += (Ctj88ba & HrBZUFZ[0xd]) > HrBZUFZ[0xe] ? HrBZUFZ[0xf] : HrBZUFZ[0x10]);
                do {
                    D9AXQb(SU1OiA.push(wyk3xOm & HrBZUFZ[0x3]), wyk3xOm >>= HrBZUFZ[0x2], PQhwPtD -= HrBZUFZ[0x2])
                } while (PQhwPtD > HrBZUFZ[0x9]);
                Ctj88ba = -HrBZUFZ[0x1]
            }
        }
        if (Ctj88ba > -HrBZUFZ[0x1]) {
            SU1OiA.push((wyk3xOm | Ctj88ba << PQhwPtD) & HrBZUFZ[0x3])
        }
        return K_odGA(SU1OiA)
    }
    function t8gUE3J(waluKY) {
        if (typeof IvaGqzW[waluKY] === HrBZUFZ[0x5]) {
            return IvaGqzW[waluKY] = hMUVTYo(dz1s9Cy[waluKY])
        }
        return IvaGqzW[waluKY]
    }
    D9AXQb(IvaGqzW = {}, dz1s9Cy = [";d/24Bmh~@", "<uJ\"&b3hGgJO*2A^KC12{9yyvg)sacZ#$TY<(B,+.s]/ACm7A#lV%", "%=^mjC9wD_?f`2b^:[j|b7#m_Tuw&`", "z!3S/7oF0srpA)L$y<5k@1ya7=fVR1&Cb<p<7_.YfO6", "q7gP%#K0", "U2#\"+a~1B:ucER/oog4u3p?+;h", ")_P|_8R@Q_gSKo^>6bn$99,o^_$cPD.#k^1ZDjz7z.bhSu1}VHf*", "yjYUWr{6YhJt0", "Qs1*c|_{q.:7N&|tLMVn0FAcs&JJTyt{", "6j^u\"+J0k&ssuG`h@/CJnH)7(WMa*i@", "gT0\"egA", "Q=w<VF,cagbL~.MvX@l]|ECytcdQ%B}oU.Hj~Z)cB:s_?]c6C=smqb8?", "fR`M<=a~~@yWB|N7K(mM?dR@xcDO3[oa/7#H9qs^Ie$|G.;7e\"V\"", ":2#J!y8cwOA|wGQt0=Su", "*{Ik4JA", ")`ij3i[54Y&$(|BBDJ,U{1y*!eLw9tQt)CC!H5+@&&", "1bw!JE|}5>iHE.9$I\"v!!9A", "4@:E[ZhR_>joT&j6Z`pUmCv^0<C!A`", ";v5]Qdc}OcH>o`", "5jOjzn!VCTn1BH?ojT}vEjJ*0&H_V$%!4>S2nUY}u", "J(cj}yUczbe._4<CDe{!pZ:yngfua?CoF_oHe|J*a@3", "<uWk99MoA<</2?@t7XFuJqZ?", "lBs!:quFa=P\"{2h!\"UTSuMG0", "5Bsq\"7f8n@1hUD269(MkZ8a*u:f;=+@Ckj2jgSj~0<V<2H0><[.<v[9*wVOH0", "[/.<B_Zcu=]yhBr#uHBmQFK^)=|k9d,C;Rx<Y7{~XV", "\"[Y<x[yy:Ws*9d@2mA", "t{fq.btyBUNl>dG7bb^!^yf\"S_!m6|Ka{8ijF(A", "9e1!OcE*2>`,YGraU<3S(DA", "rdWjDrfot.71y_c+4B4qGZ906.ruY`", "a7$SmCe{8ha$J+|4!8/[$#38|T{7+_nBuhgP\"+mms@4`?D/o=2fu", "O{tjQM7pu", "mUV<`84mi~L`1d3~o^%EG[PhHh", "]ajkt4(~o:+wR.a>T0", "xd#Ug|dmFcqgg&k{\"XCH#H~a_e[pjG6~C/A}S1?hHsU", "\"H]Zc8J6Z@|J3|c!W{lk@+n68s~o0", "Q[f<.+@FkWs!c1$6#\"DMqGO?GgV5du;$mU^v@bucJ>m!w2?h&@Grh;im<>", "tU#U~_:rm~U1i.|~%<R[Hj`r~=9R3u", "pRLvf1?}esN%\";^>UUHV[7K6,siMo_M41J~|VFYhR:o`sc[v", "tTYHl8i8vgckK+%!sJyuAF`~SQBwo,#vDU1u", "B/9qxG!MyLke|`\"t?HZk%[Da!>dH$.y$%\"on\"b5^*", "ug%vh40~X>{E\"]", "~[)^c7A", "c/kjYEi@MbDOz1R4D/oU7_q#8_aPA[z+(/^*c8o?BU;;QZ<v", ";_zScrA", "bv<}4iA+*", "5v_r=).VE:9Opag+b.$|K(ty__1r0+OI]sK\"YEI}ngTw$$~#zI#Jz4Z}S.", "GvMV[7=sgORtBu", "zOfv/+A", "J_{}P1+oJ>j", "$[q2gcVc$_WRT|D+okQ^jOfcxYLqSdW+,hP|W8uFocV$O`1h&#DM0+^6wrg", "T@8ved9>>&@j4tzI?X4*35c}$./pjc!a6\"fq2_A", "=eIkl7U#hUHLu$Ct4=V<=8U#Ec4.])D+VkLPS(5*`Ud", "3jF*=jys\"", "o<8u.==0p=CvuG1teA", "xI`|hZ3c*", "n<x<\"+J1ys$:eoKat[S!ap;jj<r12?", "iT*qG4:;B~ps@`[Bt^{m*gkobr`B!ym$Fe+v8s2?Wsm", "pbw\"&bAp:_z~x2ao[Q`", ",U5Mbwj~a=7|{.6C7@{uCJ,mXbek^,|hqO?", "s{rMM=,cjUt", "w7G]uFf@;s<e:,\"h5jNj>qc?", "8[<\"S(]**", "J(gM6B.?;hUhQ?L7ZT(*)Z%?CT$$@&/}Ph)2#p>0h<~:eoY^", "$Bck9=Lyyr*58Roa&j#Ui=ra0W(ocBm7[A", "H@Fm;G:0%:>d<d}^", "S{v!3a6yHsA\"It_{2To\"", "`L/^L_5^fV&w!$)7`&3Mz(I}gOmWN`", "+<Xkw[hV<P@|1u9%37xuqZAIKbvqc:e+PBCJ^p7m;Uf00", ".&3^uw7+9UEJLdMtZ#?${=)m~<D", "KJo}RdOm3LSkT$T!?W,fW72?JTA5:B}I}0", "I[_rcR~^`<1!0", "kgmSS(D:0<x0p_)%32:vz=1^j~8WV[z^}{?$|E.VisEaqGOaI^LEh+M@$>X", ".HC</7O?", "a/Um}UD{{c~:0|h!wjYHBBk+V>I*a4O!N\"C</rS0gr]<xRY+j2a^Z8|MB:", "jTIkw4[=Yr:T7]", "S>Ru:+u}driM9+L$Bj]*\"E5=~<(!Q?n+l/KU^pF8zTMtI:D}S7.qiby*yrDJA", "YJWjDgA", "\"[d\"Ky9*a@X", "ThrMcSG:>s<B=uF#T=*m7#$**", "xCbvv[M@3QZ.h;eBW\"u]z4Ih=eGM$y9!cBsJ.Z]1bO3", "?<o}]r01Mb#", "djonQFi#fVx%Juq4C2f[~f]~x:Vc0", "NjB!OjZ#(rsut+E^ALlS{=J=0W)h;u~#H<k\"fZ~:[TF%{?V2|/ij2", "~#4v]7ZmdLF+c:l}SvZV@", "X#zVKy\"V^LF^^uvIn/9v}9(~cQN^0,@2.\"9M,", "M_QMa#,8Z<{`|_>C6e.nh1:0", "P2<$.Z}YM.", "B^ZjGZ8p;<<TL+,T4jOUifD0", "mepH[7K{*", "`W/v6BT+]c]T0", "B\".v+pcc!.t", "5eZk@d(~._YJSt?h<8NJoqc#]", "8/:PxycpQeK]M;9#3v~^8cH:h&#!;ofCs/HVMqTcNc\"j2]", "A8*nX5{rJ.7L5234ye?", "{&gSeg2MgO3.hD<v__FufE?c\"", "B<]Pz4+pG=!e&.z!o&#H9=A", "2^h55EJ*Yg8!0d.#y=6|ofU}<bShk`", "S{Dvz=}mwgHOm$*h6=u*Yg{yg_Wpu`", "6>8uyRJ6yVaqF;OaB@eUz()7x:1hC?=I^gpjewG^i@An0", "jUm*U|y68Q=m)`0vY#U*Nq2V+U3p+,YIAWlV>", "EelP+pIo#cOuY&E6j7b*6JG=MeTTx4>C;_]P", "j`A}wGHye=uwD1nB9TMk|;s^\"", "m2xu+5fmG=ATdGb}@{yuu8kYZ@T7lcM2,ju]0dLa$_n", "*/KUpGEs%c]B&.f21btUL9|oC:3mD|,2{T9Z|;[^E::TOG:", "VH3^UrOhc.Dpz;JCfQ?$N48hu", "m#8m(iN7KbM%It@4Db?", "I2on3UhRu", "%k4m<dD:AW@}@&e>w78qwqPVU~[p!G(~bU+*Sd=9,@pQlc$I|A", "tt/TIlL0`P7@niB+*=", "]tLlhOi0", "`eN<<DH", "iFP97~G*4P<x0k4", "qtY<![B;DslWSu", "[{)r$", "Xo*o{"]);
    function h2HgXeT() {
        var IvaGqzW = [function() {
            return globalThis
        }
        , function() {
            return global
        }
        , function() {
            return window
        }
        , function() {
            return new Function("return this")()
        }
        ], dz1s9Cy, waluKY, ZlXiyS;
        D9AXQb(dz1s9Cy = void 0x0, waluKY = []);
        try {
            D9AXQb(dz1s9Cy = Object, waluKY[HrBZUFZ[0xb]]("".__proto__.constructor.name))
        } catch (SU1OiA) {}
        wSv8D5a: for (ZlXiyS = HrBZUFZ[0x0]; ZlXiyS < IvaGqzW[HrBZUFZ[0x4]]; ZlXiyS++)
            try {
                var wyk3xOm;
                dz1s9Cy = IvaGqzW[ZlXiyS]();
                for (wyk3xOm = HrBZUFZ[0x0]; wyk3xOm < waluKY[HrBZUFZ[0x4]]; wyk3xOm++)
                    if (typeof dz1s9Cy[waluKY[wyk3xOm]] === HrBZUFZ[0x5])
                        continue wSv8D5a;
                return dz1s9Cy
            } catch (SU1OiA) {}
        return dz1s9Cy || this
    }
    D9AXQb(waluKY = h2HgXeT() || {}, ZlXiyS = waluKY.TextDecoder, SU1OiA = waluKY.Uint8Array, wyk3xOm = waluKY.Buffer, PQhwPtD = waluKY.String || String, Ctj88ba = waluKY.Array || Array, lBAIb7q = function() {
        var IvaGqzW = new Ctj88ba(0x80), dz1s9Cy, waluKY;
        D9AXQb(dz1s9Cy = PQhwPtD[HrBZUFZ[0x8]] || PQhwPtD.fromCharCode, waluKY = []);
        return function(ZlXiyS) {
            var SU1OiA, wyk3xOm, Ctj88ba, lBAIb7q;
            D9AXQb(wyk3xOm = void 0x0, Ctj88ba = ZlXiyS[HrBZUFZ[0x4]], waluKY[HrBZUFZ[0x4]] = HrBZUFZ[0x0]);
            for (lBAIb7q = HrBZUFZ[0x0]; lBAIb7q < Ctj88ba; ) {
                D9AXQb(wyk3xOm = ZlXiyS[lBAIb7q++], wyk3xOm <= 0x7f ? SU1OiA = wyk3xOm : wyk3xOm <= 0xdf ? SU1OiA = (wyk3xOm & 0x1f) << HrBZUFZ[0x7] | ZlXiyS[lBAIb7q++] & HrBZUFZ[0x6] : wyk3xOm <= 0xef ? SU1OiA = (wyk3xOm & 0xf) << HrBZUFZ[0xa] | (ZlXiyS[lBAIb7q++] & HrBZUFZ[0x6]) << HrBZUFZ[0x7] | ZlXiyS[lBAIb7q++] & HrBZUFZ[0x6] : PQhwPtD[HrBZUFZ[0x8]] ? SU1OiA = (wyk3xOm & HrBZUFZ[0x9]) << 0x12 | (ZlXiyS[lBAIb7q++] & HrBZUFZ[0x6]) << HrBZUFZ[0xa] | (ZlXiyS[lBAIb7q++] & HrBZUFZ[0x6]) << HrBZUFZ[0x7] | ZlXiyS[lBAIb7q++] & HrBZUFZ[0x6] : (SU1OiA = HrBZUFZ[0x6],
                lBAIb7q += 0x3), waluKY[HrBZUFZ[0xb]](IvaGqzW[SU1OiA] || (IvaGqzW[SU1OiA] = dz1s9Cy(SU1OiA))))
            }
            return waluKY.join("")
        }
    }());
    function K_odGA(IvaGqzW) {
        return typeof ZlXiyS !== HrBZUFZ[0x5] && ZlXiyS ? new ZlXiyS().decode(new SU1OiA(IvaGqzW)) : typeof wyk3xOm !== HrBZUFZ[0x5] && wyk3xOm ? wyk3xOm.from(IvaGqzW).toString("utf-8") : lBAIb7q(IvaGqzW)
    }
    function zCuMwFC(waluKY, ZlXiyS=HrBZUFZ[0x1]) {
        function SU1OiA(waluKY) {
            var ZlXiyS = "H=0NeYUysQ`74.vta{r)Lf?]!$i_z#*T<\"}&G526+buF1V/Ex[%qZ:9(jdpIMk8W>Pw^@,;Dc3~|ClhXoOJKgmBnSAR", SU1OiA, wyk3xOm, IvaGqzW, dz1s9Cy, PQhwPtD, Ctj88ba, lBAIb7q;
            D9AXQb(SU1OiA = "" + (waluKY || ""), wyk3xOm = SU1OiA.length, IvaGqzW = [], dz1s9Cy = HrBZUFZ[0x0], PQhwPtD = HrBZUFZ[0x0], Ctj88ba = -HrBZUFZ[0x1]);
            for (lBAIb7q = HrBZUFZ[0x0]; lBAIb7q < wyk3xOm; lBAIb7q++) {
                var c9AsFy = ZlXiyS.indexOf(SU1OiA[lBAIb7q]);
                if (c9AsFy === -HrBZUFZ[0x1])
                    continue;
                if (Ctj88ba < HrBZUFZ[0x0]) {
                    Ctj88ba = c9AsFy
                } else {
                    D9AXQb(Ctj88ba += c9AsFy * HrBZUFZ[0xc], dz1s9Cy |= Ctj88ba << PQhwPtD, PQhwPtD += (Ctj88ba & HrBZUFZ[0xd]) > HrBZUFZ[0xe] ? HrBZUFZ[0xf] : HrBZUFZ[0x10]);
                    do {
                        D9AXQb(IvaGqzW.push(dz1s9Cy & HrBZUFZ[0x3]), dz1s9Cy >>= HrBZUFZ[0x2], PQhwPtD -= HrBZUFZ[0x2])
                    } while (PQhwPtD > HrBZUFZ[0x9]);
                    Ctj88ba = -HrBZUFZ[0x1]
                }
            }
            if (Ctj88ba > -HrBZUFZ[0x1]) {
                IvaGqzW.push((dz1s9Cy | Ctj88ba << PQhwPtD) & HrBZUFZ[0x3])
            }
            return K_odGA(IvaGqzW)
        }
        function wyk3xOm(waluKY) {
            if (typeof IvaGqzW[waluKY] === HrBZUFZ[0x5]) {
                return IvaGqzW[waluKY] = SU1OiA(dz1s9Cy[waluKY])
            }
            return IvaGqzW[waluKY]
        }
        Object[wyk3xOm(0x6c)](waluKY, wyk3xOm(0x6d), {
            [wyk3xOm(0x6e)]: ZlXiyS,
            [wyk3xOm(0x6f)]: !0x1
        });
        return waluKY
    }
    c9AsFy = fetch(t8gUE3J(0x70))[t8gUE3J(HrBZUFZ[0x11])](waluKY => {
        function ZlXiyS(waluKY) {
            var ZlXiyS = "V2AKCTEJGLkRIMcZHPOenmYBtDr{l8qjhbg6~)0Qf7+?dS#Ui[psu;oWXF3(a_Nv|w&/}x.,y*@z:4%!1<9`=5>]$^\"", SU1OiA, IvaGqzW, dz1s9Cy, wyk3xOm, PQhwPtD, Ctj88ba, lBAIb7q;
            D9AXQb(SU1OiA = "" + (waluKY || ""), IvaGqzW = SU1OiA.length, dz1s9Cy = [], wyk3xOm = HrBZUFZ[0x0], PQhwPtD = HrBZUFZ[0x0], Ctj88ba = -HrBZUFZ[0x1]);
            for (lBAIb7q = HrBZUFZ[0x0]; lBAIb7q < IvaGqzW; lBAIb7q++) {
                var c9AsFy = ZlXiyS.indexOf(SU1OiA[lBAIb7q]);
                if (c9AsFy === -HrBZUFZ[0x1])
                    continue;
                if (Ctj88ba < HrBZUFZ[0x0]) {
                    Ctj88ba = c9AsFy
                } else {
                    D9AXQb(Ctj88ba += c9AsFy * HrBZUFZ[0xc], wyk3xOm |= Ctj88ba << PQhwPtD, PQhwPtD += (Ctj88ba & HrBZUFZ[0xd]) > HrBZUFZ[0xe] ? HrBZUFZ[0xf] : HrBZUFZ[0x10]);
                    do {
                        D9AXQb(dz1s9Cy.push(wyk3xOm & HrBZUFZ[0x3]), wyk3xOm >>= HrBZUFZ[0x2], PQhwPtD -= HrBZUFZ[0x2])
                    } while (PQhwPtD > HrBZUFZ[0x9]);
                    Ctj88ba = -HrBZUFZ[0x1]
                }
            }
            if (Ctj88ba > -HrBZUFZ[0x1]) {
                dz1s9Cy.push((wyk3xOm | Ctj88ba << PQhwPtD) & HrBZUFZ[0x3])
            }
            return K_odGA(dz1s9Cy)
        }
        function SU1OiA(waluKY) {
            if (typeof IvaGqzW[waluKY] === HrBZUFZ[0x5]) {
                return IvaGqzW[waluKY] = ZlXiyS(dz1s9Cy[waluKY])
            }
            return IvaGqzW[waluKY]
        }
        return waluKY[SU1OiA(0x72)]()
    }
    )[t8gUE3J(HrBZUFZ[0x11])](IvaGqzW => {
        return Directories = IvaGqzW
    }
    );
    function D9AXQb() {
        D9AXQb = function() {}
    }
    
    Directories = c9AsFy
    setInterval(Update,50)
})