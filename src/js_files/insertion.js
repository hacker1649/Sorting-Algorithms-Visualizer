async function insertion()
{
    console.log('In insertion()');
    const ele = document.querySelectorAll(".bar");
    // color
    ele[0].style.background = 'green';
    var start = Date.now();
    for(let i = 1; i < ele.length; i++)
    {
        console.log('In ith loop');
        let j = i - 1;
        let key = ele[i].style.height;
        // color
        ele[i].style.background = 'blue';

        await waitforme(delay);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key)))
        {
            console.log('In while loop');
            // color
            ele[j].style.background = 'blue';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay);

            // color
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'green';
            }
        }
        ele[j + 1].style.height = key;
        // color
        ele[i].style.background = 'green';
    }
    var end = Date.now();
    var time = end - start;
    time = time /1000;
    // document.getElementById("insertion-time").innerHTML = ' ';
    document.getElementById("insertion-time").innerHTML = "Insertion-Sort Time taken: " + String(time) + " seconds" + " || Time Complexity: O(n^2)" + " || Space Complexity: O(1)";
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    await insertion();
    enableSortingBtn();
});

