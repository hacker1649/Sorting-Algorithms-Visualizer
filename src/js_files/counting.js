async function countingSort(ele)
{
    var start = Date.now();
    var i, z = 0, count = [],output=[], max = 267, n = ele.length;

    for(i = 0; i <= max ; i++)
    {    
        count.push(0);
    }    

    for (i=0; i < ele.length; i++) 
    {
        count[parseInt((ele[i].style.height).slice(0,(ele[i].style.height).length-2))/2]++;
    }
    
    for(i = 1; i <= max; i++)
    {
        count[i] += count[i-1];
    }

    for(var l = n - 1; l >= 0 ; l--)
    {
        output[count[parseInt((ele[l].style.height).slice(0,(ele[l].style.height).length-2))/2] - 1] = parseInt((ele[l].style.height).slice(0,(ele[l].style.height).length-2))/2;
        count[parseInt((ele[l].style.height).slice(0,(ele[l].style.height).length-2))/2]--;
    }

    for(let k  = 0; k < output.length; k++)
    {
        await waitforme(delay);
        ele[k].style.height = output[k]*2+"px";
        ele[k].style.background= 'orange';
    }
    var end = Date.now();
    var time = end - start;
    time = time /1000;
    document.getElementById("heap-time").innerHTML = "Count-Sort Time taken: " + String(time) + " seconds"+ " || Time Complexity: O(n)" + " || Space Complexity: O(n+k)";
}


const countbtn = document.querySelector(".countSortbtn");
countbtn.addEventListener('click', async function()
{
    let ele = document.querySelectorAll('.bar');
    disableSortingBtn();
    await countingSort(ele);
    for(let j = 0; j < ele.length; j++)
    {
        ele[j].style.background= 'green';
    }
    enableSortingBtn();
});