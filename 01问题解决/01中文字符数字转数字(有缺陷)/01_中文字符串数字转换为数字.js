//
var checkIsNum = function(str)
{
    let ChineseItem = ['零','一', '二', '三', '四', '五', '六', '七', '八', '九','十','百','千','万','两'] //十,百
    let numItem = [0,1, 2, 3, 4, 5, 6, 7, 8, 9,10,100,1000,10000,2]
    let doubleNum =[]
    let NumIndex = []
    for (let i = 0; i < str.length; i++) {
        let ChineseOne = str.charAt(i);
        for (let j = 0; j < ChineseItem.length; j++) {
            if (ChineseOne == ChineseItem[j]) {
                let a = {
                    index: j,
                    seat: i
                }
                NumIndex.push(a)
            }
        }
    }
    let double=[];
    let float=[];
    let Num=0;
    for(var k=0;k<NumIndex.length;k++){
        if(NumIndex[k].index == 0){
        
        }else{
            if(k%2 == 0){ //单数
                float.push(numItem[NumIndex[k].index]) 
            }
            if(k%2 == 1){
                double.push(numItem[NumIndex[k].index])
            }
        }
        
        
    }
    if(double.length  == 0){
        Num = float[0]
    }
    for(var j=0;j<double.length;j++){
        if(double.length<float.length){
            
            if(float[j] == 0){
                
            }else{
                Num = Num + double[j]*float[j]
                if(j == double.length-1 && j<float.length){
                    if(float[j+1]>10){
                        Num = Num * float[j+1]
                    }else{
                        Num = Num + float[j+1]
                    }
                    
                }
            }
            
        }else if(double.length == float.length){
            
            if(float[j]==0){
                Num = Num + double[j]*float[j+1]
            }else{
                Num = Num + double[j]*float[j]
            }
        }
    }
    console.log(Num)
}

word = "今天吃饭花了二百零六块"

checkIsNum(word)