var dayarray=new Array("Chủ Nhật","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7") 
var montharray=new Array("1","2","3","4","5","6","7","8","9","10","11","12") 

function getthedate(){ 
var mydate=new Date() 
var year=mydate.getYear() 
if (year<2000) 
year="19"+year 
var day=mydate.getDay() 
var month=mydate.getMonth() 
var daym=mydate.getDate() 
if (daym<10) 
daym="0"+daym 
var hours=mydate.getHours() 
var minutes=mydate.getMinutes() 
var seconds=mydate.getSeconds() 
var dn="<br><br>Chúc Ấy Một Buổi Sáng Sôi Động, Nhộn Nhịp."
if (hours>11){ 
dn="<br><br>Chúc Ấy Một Buổi Chiều Vui Vẻ & Một Buổi Tối Hạnh Phúc."
hours=hours-12
} 
if (hours==0) 
hours=12 
if (minutes<=9) 
minutes="0"+minutes 
if (seconds<=9) 
seconds="0"+seconds 
//change font size here 
var cdate="<font color=#FFFFFF>"+dayarray[day]+", Ngày "+daym+" Tháng "+montharray[month]+" Năm "+year+".<br><br><font color=#FFFFFF><u><b>Bây Giờ Là : </b></font></u><br>"+hours+" Giờ "+minutes+" Phút "+seconds+" Giây. "+dn+" </font>" 
if (document.all) 
document.all.clock.innerHTML=cdate 
else 
document.write(cdate) 
} 
if (!document.all) 
getthedate() 
function goforit(){ 
if (document.all) 
setInterval("getthedate()",1000) 
}
onLoad=goforit()