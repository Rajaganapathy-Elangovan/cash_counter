function ra(){
    var a=Number(document.getElementById("ss").value);
    var c=a*500;
    var t1=document.getElementById("ff").innerText=c

    var b=Number(document.getElementById("s1").value);
    var c=b*200;
    var t2=document.getElementById("f1").innerText=c

    
    var d=Number(document.getElementById("s2").value);
    var c=d*100;
    var t3=document.getElementById("f2").innerText=c

    
    var e=Number(document.getElementById("s3").value);
    var c=e*50;
    var t4=document.getElementById("f3").innerText=c
    

    var f=Number(document.getElementById("s4").value);
    var c=f*20;
    var t5=document.getElementById("f4").innerText=c

    var g=a+b+d+e+f
    document.getElementById("f5").innerText=g

    var o=t1+t2+t3+t4+t5
    document.getElementById("f6").innerText=o

    var m=o
    document.getElementById("f7").innerText=m

    var d=Number(document.getElementById("op").value);
    var c=o+d;
    document.getElementById("f7").innerText=c







}

