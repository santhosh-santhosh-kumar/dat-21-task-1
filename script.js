let res=fetch("https://restcountries.com/v2/all")
res.then((data)=>data.json()).then((data1)=>{
   console.log(data1)
    for(var i in data1){
         var s=document.getElementById('select')
         var opt1=`<option value=${data1[i].alpha2Code} id="option">${data1[i].name}</option>`
         s.insertAdjacentHTML("beforeend", opt1);
         
      }
}).catch((err)=>{
    console.log(err)
})
function show1(){
    var d=document.getElementById('select')
for(i=0;i<250;i++){
    if(d.options[i].selected){
        var n=d.options[i].value
    }
}
var date=document.getElementById('date')
console.log(date.value)
var arr=date.value
arr=arr.split('-')
console.log(arr)
console.log(n)
show(n,arr[0],arr[1],arr[2])
}

function show(city,year,month,day){
    
      let w=fetch('https://holidays.abstractapi.com/v1/?api_key=42681a3c7bc44695a9dd9509c4123e1b&country='+city+'&year='+year+'&month='+month+'&day='+day+'')
      w.then((ans)=>ans.json()).then((res)=>{
      console.log('res=',res)
      console.log("c=",city)
      var tr=document.createElement('tr')
      tr.setAttribute('id','tr')
 
 
      if(res.length==0){
        console.log('no events')
       var t=document.getElementById('tr')
       var n1=new create('td','#')
       var n2=new create('td',city)
       var n3=new create('td','no events')
       var n4=new create('td',`${day}-${month}-${year}`)
       tr.append(n1,n2,n3,n4)
       var body=document.getElementById('body')
       body.append(tr)
      }else{
        var n1=new create('td','#')
        var n2=new create('td',res[0].location)
        var n3=new create('td',res[0].name)
        var n4=new create('td',res[0].date)
        tr.append(n1,n2,n3,n4)
        var body=document.getElementById('body')
        body.append(tr)
  
      }
    }).catch((error)=>{
        alert('please select country name and date. . . . .')
    })
}
function create(tagname,content){
    var td=document.createElement('td')
    td.innerHTML=content
    return td;
}