async function bubble() 
{
    const ele = document.querySelectorAll(".bar");
    var start = Date.now();
    for(let i = 0; i < ele.length-1; i++)
    {
        for(let j = 0; j < ele.length-i-1; j++)
        {
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'blue';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height))
            {
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = 'cyan';
            ele[j+1].style.background = 'cyan';
        }
        ele[ele.length-1-i].style.background = 'green';
    }
    var end = Date.now();
    var time = end - start;
    time = time /1000;
    document.getElementById("bubble-time").innerHTML = "Bubble-Sort Time taken: " + String(time) + " seconds" + " || Time Complexity: O(n^2)" + " || Space Complexity: O(1)";
    ele[0].style.background = 'green';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function()
{
    disableSortingBtn();
    await bubble();
    enableSortingBtn();
});