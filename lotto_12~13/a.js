var p = [0,0,0,0,0,0];
p[0] = 1;
p[1] = 3;
p[2] = 5;
p[3] = 7;
p[4] = 9;
p[5] = 10;

var r = [0,0,0,0,0,0];
r[0] = Math.floor(Math.random()*45+1);

while(true){
    r[1] = Math.floor(Math.random()*45+1);
    if(r[1] != r[0]){
       break;
    }
}
while(true){
    r[2] = Math.floor(Math.random()*45+1);
    if(r[2] != r[0] && r[2] != r[1]){
       break;
    }
}
while(true){
    r[3] = Math.floor(Math.random()*45+1);
    if(r[3] != r[0] && r[3] != r[1] && r[3] != r[2]){
       break;
    }
}
while(true){
    r[4] = Math.floor(Math.random()*45+1);
    if(r[4] != r[0] && r[4] != r[1] && r[4] != r[2] && r[4] != r[3]){
       break;
    }
}
while(true){
    r[5] = Math.floor(Math.random()*45+1);
    if(r[5] != r[0] && r[5] != r[1] && r[5] != r[2] && r[5] != r[3] && r[5] != r[4]){
       break;
    }
}

var b;
while(true){
    b = Math.floor(Math.random()*45+1);
    if(b != r[0] && b != r[1] && b != r[2] && b != r[3] && b != r[4] && b != r[5]){
       break;
    }
}

var win = 0; /* 2등, 3등 디버깅 포인트 */

for(i = 0; i <=5; i++){
    for(j = 0; j <= 5; j++){
        if(p[i] == r[j]){
            win += +1;
        }
    }    
}

var rank = "";
switch(win){
    case 0: case 1: case 2:
        rank = "꽝입니다"
    break;
    case 3:
        rank = "5등입니다"
    break;
    case 4:
        rank = "4등입니다"
    break;
    case 5:
        rank = "3등입니다"
        for(var i = 0; i <= 5; i++){
            if(p[i] == b){
                rank = "2등입니다"
            }
        }
    break;
    case 6:
        rank = "1등입니다"
    break;
}

dw(r[0]);
br();
dw(r[1]);
br();
dw(r[2]);
br();
dw(r[3]);
br();
dw(r[4]);
br();
dw(r[5]);
br();
dw("보너스 번호:" + b);
br();
dw(rank);
br();

dw("총" + win +"개 맞았습니다");
