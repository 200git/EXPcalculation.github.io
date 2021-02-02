/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
var ExpUtils = /** @class */ (function () {
    function ExpUtils(isURorPRY) {
        this.level_rate = 1;
        this.minExp = [0, 4000, 8000, 11000, 15000, 20000, 22000, 26000, 30000, 40000, 60000, 132000, 70000, 78000, 85000, 145000, 235000];
        this.perExp = [100, 200, 300, 400, 500, 1000, 2000, 4000, 5000, 20000, 72000, -62000, 2000, 7000, 12000, 18000, 21000];
        this.out_minExp = (function (s) { var a = []; while (s-- > 0)
            a.push(0); return a; })(this.minExp.length);
        this.out_perExp = (function (s) { var a = []; while (s-- > 0)
            a.push(0); return a; })(this.perExp.length);
        if (isURorPRY) {
            for (var i = 0; i < this.perExp.length; i++) {
                {
                    this.out_perExp[i] = ((1.2 * this.perExp[i]) | 0);
                    this.out_minExp[i] = ((1.2 * this.minExp[i]) | 0);
                }
                ;
            }
            this.level_rate = 1.3;
        }
        else {
            for (var i = 0; i < this.perExp.length; i++) {
                {
                    this.out_perExp[i] = this.perExp[i];
                    this.out_minExp[i] = this.minExp[i];
                }
                ;
            }
        }
    }
    ExpUtils.prototype.addExp = function (l, s) {
        if (l <= s) {
            var sum = 0;
            for (var i = l+1; i <= s; i++) {
                sum += this.switchExp(i);
            }
            return sum;
        }
        return 0;
    };
    ExpUtils.prototype.switchExp = function (level) {
        var formatExp = 0;
        if (level > 0 && level <= 41) {
            formatExp = (this.out_minExp[0] + (level - 1) * this.out_perExp[0]);
        }
        else if (level > 41 && level <= 61) {
            formatExp = (this.out_minExp[1] + (level - 41) * this.out_perExp[1]);
        }
        else if (level > 61 && level <= 71) {
            formatExp = (this.out_minExp[2] + (level - 61) * this.out_perExp[2]);
        }
        else if (level > 71 && level <= 81) {
            formatExp = (this.out_minExp[3] + (level - 71) * this.out_perExp[3]);
        }
        else if (level > 81 && level <= 91) {
            formatExp = (this.level_rate > 1 && level === 91) ? (((this.minExp[4] + (level - 81) * this.perExp[4]) * this.level_rate) | 0) : (this.out_minExp[4] + (level - 81) * this.out_perExp[4]);
        }
        else if (level > 91 && level <= 93) {
            formatExp = (((this.minExp[5] * this.level_rate + this.perExp[5] * this.level_rate * (level - 91))) | 0);
        }
        else if (level > 93 && level <= 95) {
            formatExp = (((this.minExp[6] * this.level_rate + this.perExp[6] * this.level_rate * (level - 93))) | 0);
        }
        else if (level > 95 && level <= 96) {
            formatExp = (((this.minExp[7] * this.level_rate + this.perExp[7] * this.level_rate * (level - 95))) | 0);
        }
        else if (level > 96 && level <= 98) {
            formatExp = (((this.minExp[8] * this.level_rate + this.perExp[8] * this.level_rate * (level - 96))) | 0);
        }
        else if (level > 98 && level <= 99) {
            formatExp = (((this.minExp[9] * this.level_rate + this.perExp[9] * this.level_rate * (level - 98))) | 0);
        }
        else if (level > 99 && level <= 100) {
            formatExp = (((this.minExp[10] * this.level_rate + this.perExp[10] * this.level_rate * (level - 99))) | 0);
        }
        if (level > 100 && level <= 101) {
            formatExp = (this.out_minExp[11] + (level - 100) * this.out_perExp[11]);
        }
        else if (level > 101 && level <= 105) {
            formatExp = (this.out_minExp[12] + (level - 101) * this.out_perExp[12]);
        }
        else if (level > 105 && level <= 106) {
            formatExp = (this.out_minExp[13] + (level - 105) * this.out_perExp[13]);
        }
        else if (level > 106 && level <= 111) {
            formatExp = (this.out_minExp[14] + (level - 106) * this.out_perExp[14]);
        }
        else if (level > 111 && level <= 116) {
            formatExp = (this.out_minExp[15] + (level - 111) * this.out_perExp[15]);
        }
        else if (level > 116 && level <= 120) {
            formatExp = (this.out_minExp[16] + (level - 116) * this.out_perExp[16]);
        }
        return formatExp;
    };
    return ExpUtils;
}());
ExpUtils["__class"] = "ExpUtils";
function getExp()
{
        var flag;
	var l_lv=document.getElementById("l_lv");
	var s_lv=document.getElementById("s_lv");
        var t=document.getElementById("true");
        var f =document.getElementById("false");
         if(t.checked)
                flag=true;
        else if(f.checked)
                flag=false;
	var e=new ExpUtils(flag);
	window.alert(e.addExp(l_lv.value,s_lv.value));
}
