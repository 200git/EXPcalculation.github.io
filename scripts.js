var ModifiedExpUtil=(function() {
	var minExp=
	[0,4000,8000,11000,
		15000,20000,22000,26000,
		30000,40000,60000,132000,
		50000,65000,95000,145000,220000];
	//每个节点的最小经验值
	var perExp=
	[100,200,300,400,
		500,1000,2000,4000,
		5000,20000,72000,-82000,
		3000,6000,10000,15000,21000];
	//每个节点增加的经验值
	var levels=
	[1,41,61,71,
		81,91,93,95,
		96,98,99,100,
		101,106,111,116,121,126];
	//等级组别
	var flag;
	function ModifiedExpUtil(isURorPRY) {
		flag = isURorPRY;
	}
	this.addExp = function(l, s) {
		if (l <= s)
		{
            var sum = 0;
            for (var i = l + 1; i <= s; i++)
			{
                sum += this.switchExp(i);
            }
            return sum;
        }
        return 0;
	};
	this.switchExp = function(level) {
		var formatExp=0;
		for (var i=0;i < (levels.length - 1);i++)
		{
			if (level >= levels[i] && level < levels[i + 1])
			{
				var temp=minExp[i] + (level - levels[i]) * perExp[i];
				//这里不改
				formatExp = !flag ?temp: (i > 4 && i <= 11 ?temp * 1.3: temp * 1.2);
				break;
			}
		}
		return formatExp;
	};
});
MdofiedExpUtil["__class"] = "ModifiedExpUtil";
function getExp()
{
        var flag=false;
	var l_lv=document.getElementById("l_lv");
	var s_lv=document.getElementById("s_lv");
        var exp=document.getElementById("exp");
        var t=document.getElementById("true");
        var f =document.getElementById("false");
         if(t.checked)
                flag=true;
        else if(f.checked)
                flag=false;
	var meu=new ModifiedExpUtil(flag);
        var lv=parseFloat(l_lv.value);
        var sv=parseFloat(s_lv.value);
        var result=meu.addExp(lv,sv)-parseFloat(exp.value);
        alert("还需要:"+(result>=0?result:0)+"经验从"+lv+"级提升到"+sv+"级~");
}

