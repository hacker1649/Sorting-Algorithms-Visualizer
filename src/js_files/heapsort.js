async function heapSort(ele)
{
    var N = ele.length;

    for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
        await heapify(ele, N, i);

    for (var i = N - 1; i > 0; i--) 
    {
        swap(ele[0],ele[i]);
        await waitforme(delay);
        await heapify(ele, i, 0);
    }

}
 
async function heapify(ele, N, i)
{
    var largest = i; 
    var l = 2 * i + 1; 
    var r = 2 * i + 2; 
    
    if (l < N && parseInt(ele[l].style.height) > parseInt(ele[largest].style.height))
        largest = l;

    if (r < N && parseInt(ele[r].style.height) > parseInt(ele[largest].style.height))
        largest = r;

    if (largest != i) 
    {
        swap(ele[i],ele[largest]);
        await waitforme(delay);

        await heapify(ele, N, largest);
    }
}

const heapSortbtn = document.querySelector(".heapSort");
heapSortbtn.addEventListener('click', async function()
{
    let ele = document.querySelectorAll('.bar');
    disableSortingBtn();
    start = Date.now();
    await heapSort(ele);
    var end = Date.now();
    var time = end - start;
    time = time /1000;
    document.getElementById("heap-time").innerHTML = "Heap-Sort Time taken: " + String(time) + " seconds" + " || Time Complexity: O(nlogn)" + " || Space Complexity: O(1)";
    for(let j = 0; j < ele.length; j++)
    {
        ele[j].style.background= 'green';
    }
    enableSortingBtn();
});