function bookRangeSort(data, rangeLow, rangeHigh)
{
  console.log("hello");
  var max = Math.max(...data);
  var countArr = new Array(max + 1).fill(0);

for (var i = 0; i < data.length; i++) 
    {
      ++countArr[data[i]];
    }
    for (var i = 1; i < max + 1; i++) 
    {
      countArr[i] = countArr[i] + countArr[i - 1];
    }
    var answer = countArr[rangeHigh] - countArr[rangeLow];
    // document.getElementById("book2Time").innerHTML = String(time) + " seconds";
    // var result = document.getElementById("nums");
    // result.innerHTML = String(answer);
    console.log(answer);
}



const eight = document.querySelector(".eightSortbtn");
eight.addEventListener('click', async function(){
    var data = [];
    let ele = document.querySelectorAll('.bar');
    disableSortingBtn();
    var count = 0;
    for(var i = 0 ;i < ele.length ; i++)
    {
      data[i] = parseInt((ele[i].style.height).slice(0,(ele[i].style.height).length-2))/2;
    }
    var rangeLow = Math.floor(Math.random() * (data.length));
    var rangeHigh = Math.floor(Math.random() * (data.length))+(data.length-rangeLow);
    bookRangeSort(data, rangeLow, rangeHigh);
    enableSortingBtn();
})