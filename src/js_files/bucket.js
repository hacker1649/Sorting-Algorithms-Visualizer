async function bucketSort(ele)
{
    var start = Date.now();
    var i, z, random = [];

    for(i = 0 ;i < ele.length ; i++)
    {
        random[i] = parseInt((ele[i].style.height).slice(0,(ele[i].style.height).length-2))/2;
        random[i] = random[i]/1000;
    }
    console.log(random);

    if(ele.length <= 0)
        return;

    var bucket = [];
    for(i = 0 ; i < ele.length ; i++)
    {
        console.log("Initializing bucket...");
        bucket[i] = [];
    }

    for (i = 0; i < ele.length; i++) 
    {
        console.log("In Maths floor..");
        let idx = random[i] * ele.length;
        bucket[Math.floor(idx)].push(random[i]);
    }

    for (i = 0; i < ele.length; i++) 
    {
        console.log("In Sorting...");
        bucket[i].sort(function(a,b){return a-b;});
    }

    let index = 0;
    for (i = 0; i < ele.length; i++) 
    {
        for (z = 0; z < bucket[i].length; z++) 
        {
            random[index++] = bucket[i][z];
        }
    }

    for(i  = 0; i < ele.length; i++)
    {
        await waitforme(delay);
        ele[i].style.height = random[i]*2*1000+"px";
        ele[i].style.background= 'yellow';
        console.log((ele[i].style.height).slice(0,(ele[i].style.height).length-2)/2);
    }

    var end = Date.now();
    var time = end - start;
    time = time /1000;
    document.getElementById("heap-time").innerHTML = "Bucket-Sort Time taken: " + String(time) + " seconds" + " || Time Complexity: O(n+k)" + " || Space Complexity: O(n+k)";
    console.log(random);
}

const bucketbtn = document.querySelector(".bucketSortbtn");
bucketbtn.addEventListener('click', async function()
{
    let ele = document.querySelectorAll('.bar');
    disableSortingBtn();
    await bucketSort(ele);
    for(let j = 0; j < ele.length; j++)
    {
        ele[j].style.background= 'green';
    }
    enableSortingBtn();
});