async function book1sort(ele)
{   
    var start = Date.now();
    console.log(start);
    let data = [];
    for(var i = 0 ;i < ele.length ; i++)
    {
        data[i] = parseInt((ele[i].style.height).slice(0,(ele[i].style.height).length-2))/2;
        console.log(data[i]);
    }
    
    bookQuickSort(data, 0, data.length-1);
    async function bookQuickSort(data, low, high)
    {
        var k =  Math.floor(data.length / 2);
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        while (low < high) 
        {
            if (high - low + 1 < k) 
            {
                insSort(data, low, high);
                break;
            } 
            else 
            {
                var pivot = await part(data, low, high);
                if (pivot - low < high - pivot) 
                {
                    // let random = [];
                    await bookQuickSort(data, low, pivot - 1);
                    low = pivot + 1;
                } 
                else 
                {
                    await bookQuickSort(data, pivot + 1, high);
                    high = pivot - 1;
                }
            }
        }
        console.log(data);
        
        for(var i = 0; i < data.length ; i++)
        {
            await waitforme(delay);
            console.log(data[i]);
            ele[i].style.height = data[i]*2+"px";
            ele[i].style.background = "#" + randomColor;
        }
    }    
    await waitforme(delay);
    var end = Date.now();
    console.log(end);
    var time = end - start;
    console.log(time);
    time = time /1000; 
    return time;
} 

async function part(data, low, high)
{
    var pivot = Number(data[high]);
    var i, j;
    j = low;

    for (var i = low; i < high; i++) 
    {
        if (Number(data[i]) < pivot) 
        {
            [data[i], data[j]] = [data[j], data[i]];
            j += 1;
        }
    }
    
    [data[j], data[high]] = [data[high], data[j]];
    
    return j;
}

async function insSort(data, low, high)
{
    for (var i = low + 1; i < high + 1; i++) 
    {
        var val = data[i];
        var j = i;
        while (j > low && Number(data[j - 1]) > val) 
        {
            data[j] = data[j - 1];
            j -= 1;
        }
        data[j] = val;
    }
}

const seven = document.querySelector(".sevenSortbtn");
seven.addEventListener('click', async function(){
    var data = [];
    let ele = document.querySelectorAll('.bar');
    disableSortingBtn();
    var time = await book1sort(ele);
    console.log(time);
    document.getElementById("book1-time").innerHTML = 
        "7.4.5-Sort Time taken: " + String(time) + "seconds";
    await waitforme(delay);
    await enableSortingBtn();
})