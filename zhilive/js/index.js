function compareDate(beginDateStr, endDateStr) {
    var curDate = new Date(),
        beginDate = new Date(beginDateStr),
        endDate = new Date(endDateStr);
    if (curDate >= beginDate && curDate <= endDate) {
        return true;
    }
    return false;
}

let contents = document.getElementsByClassName('zj_liveInfo_info_p2');
let aaa =document.getElementById("aaaaa");
if(compareDate('2022/05/12 23:05', '2022/05/12 23:59')){
  console.log('直播进行中');
  console.log(contents);
  console.log(aaa);
}