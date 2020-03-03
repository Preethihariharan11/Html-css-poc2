arr=[];
i=1;
 let one=document.getElementById('name');
 let two=document.getElementById('ids');
 let three=document.getElementById('pronam');
 let four=document.getElementById('facnam');
document.getElementById('box5').addEventListener('click',Display);
function Display()
{
    var pp={};
  
    let flg = 1;
    arr.forEach(element =>{
        if(element.a1 == one.value && element.a2 == two.value && element.a3==three.value && element.a4==four.value)
        {
            flg=0;
        }
    });
    if(flg == 1){
    pp.a1=one.value;
    pp.a2=two.value;
   pp.a3=three.value;
   pp.a4=four.value;
    arr.push(pp);
    document.getElementById('disp').style.visibility='visible';
let rows='';
arr.forEach(obj=>
{
    const tr=`<tr>
    <td>${obj.a1}</td>
        <td>${obj.a2}</td>
        <td>${obj.a3}</td>
        <td>${obj.a4}</td>
        </tr>`;
        rows+=tr;
        document.getElementById("tableBody").innerHTML=rows;
});
    }
}