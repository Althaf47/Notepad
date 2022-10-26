
var count=0;
function add()
{


  
   count=count+1;
    var a=document.getElementById('name').value;
    if(a=="")
    {
    
        document.getElementById('sample').innerHTML="Please Enter The Task";
    }
    
    if(count==1)
    {
      document.getElementById('sample1').innerHTML=a+"<button value=ADD class=b1 onclick=delete1()>"+document.getElementById('knn').innerHTML+"</button>";
 


      document.getElementById('sample1').style.fontSize="20px";
      document.getElementById('sample1').style.fontFamily="sans-serif"
 



    }
    if(count==2)
    {

      
      
      document.getElementById('sample2').innerHTML=document.getElementById('sample1').innerHTML;
      b1=document.getElementById('sample1').innerHTML;
      b1="";
      document.getElementById('sample1').innerHTML=a+"<button value=ADD class=b2 onclick=delete2()>"+document.getElementById('knn').innerHTML+"</button>";
      
      document.getElementById('sample2').style.fontSize="20px";
      document.getElementById('sample2').style.fontFamily="sans-serif"
     
   
      

    


      
    }
    if(count==3)
    {
      document.getElementById('sample3').innerHTML=document.getElementById('sample2').innerHTML;
      document.getElementById('sample2').innerHTML=document.getElementById('sample1').innerHTML;
      c1=document.getElementById('sample1').innerHTML;
      c1="";
      document.getElementById('sample1').innerHTML=a+"<button value=ADD class=b3 onclick=delete3()>"+document.getElementById('knn').innerHTML+"</button>";
      
      document.getElementById('sample3').style.fontSize="20px";
      document.getElementById('sample3').style.fontFamily="sans-serif"
     
    
    }
    if(count==4)
    {
      document.getElementById('sample4').innerHTML=document.getElementById('sample3').innerHTML;
    document.getElementById('sample3').innerHTML=document.getElementById('sample2').innerHTML;
    document.getElementById('sample2').innerHTML=document.getElementById('sample1').innerHTML;

    d1=document.getElementById('sample1').innerHTML;
    d1="";
    document.getElementById('sample1').innerHTML=a+"<button value=ADD class=b4 onclick=delete4()>"+document.getElementById('knn').innerHTML+"</button>";
    
    document.getElementById('sample4').style.fontSize="20px";
    document.getElementById('sample4').style.fontFamily="sans-serif"
  



      
    }
    if(count==5)
    {

      document.getElementById('sample5').innerHTML=document.getElementById('sample4').innerHTML;
      document.getElementById('sample4').innerHTML=document.getElementById('sample3').innerHTML;
    document.getElementById('sample3').innerHTML=document.getElementById('sample2').innerHTML;
    document.getElementById('sample2').innerHTML=document.getElementById('sample1').innerHTML;
    z1=document.getElementById('sample1').innerHTML;
    z1="";
    document.getElementById('sample1').innerHTML=a+"<button value=ADD class=b5 onclick=delete5()>"+document.getElementById('knn').innerHTML+"</button>";
    
    document.getElementById('sample5').style.fontSize="20px";
    document.getElementById('sample5').style.fontFamily="sans-serif"



     
    }
    if(count==6)
    {
      document.getElementById('sample6').innerHTML=document.getElementById('sample5').innerHTML;
      document.getElementById('sample5').innerHTML=document.getElementById('sample4').innerHTML;
      document.getElementById('sample4').innerHTML=document.getElementById('sample3').innerHTML;
    document.getElementById('sample3').innerHTML=document.getElementById('sample2').innerHTML;
    document.getElementById('sample2').innerHTML=document.getElementById('sample1').innerHTML;
    x1=document.getElementById('sample1').innerHTML;
    x1="";
    document.getElementById('sample1').innerHTML=a+"<button value=ADD class=b6  onclick=delete6()>"+document.getElementById('knn').innerHTML+"</button>";
    
    document.getElementById('sample6').style.fontSize="20px";
    document.getElementById('sample6').style.fontFamily="sans-serif"
  
     
    }
  



}


function delete1()

{

document.getElementById('sample6').innerHTML="";

}
function delete2()

{
  document.getElementById('sample5').innerHTML="";
  
}

function delete3()

{
  
  document.getElementById('sample4').innerHTML="";
  
}

function delete4()

{
  document.getElementById('sample3').innerHTML="";
  
}

function delete5()

{
  document.getElementById('sample2').innerHTML="";
}

function delete6()

{
  
  document.getElementById('sample1').innerHTML="";

}

