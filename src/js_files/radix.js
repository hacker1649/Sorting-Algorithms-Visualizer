function getMax(random)
{
	let max = random[0];
		for (let i = 1; i < random.length; i++)
			if (random[i] > max)
				max = random[i];
		return max;
}

function countSort(random, exp)
{
	let output = [], i, count = [];
    
    for(i = 0; i < 10; i++ )
        count[i] = 0;

    for (i = 0; i < random.length; i++)
        count[Math.floor(random[i] / exp) % 10]++;

    for (i = 1; i < 10; i++)
        count[i] += count[i - 1];

    for (i = random.length - 1; i >= 0; i--) 
    {
        output[count[Math.floor(random[i] / exp) % 10] - 1] = random[i];
        count[Math.floor(random[i] / exp) % 10]--;
    }

    for (i = 0; i < random.length; i++)
    {
        random[i] = output[i];
    }
}

async function radixsort(ele)
{
    var start = Date.now();
    var random = [], i, exp;
    for(i = 0 ;i < ele.length ; i++)
    {
        random[i] = parseInt((ele[i].style.height).slice(0,(ele[i].style.height).length-2))/2;
    }
    console.log(random);

	let m = getMax(random);

    for (exp = 1; Math.floor(m / exp) > 0; exp *= 10)
        countSort(random, exp);

    for(i  = 0; i < ele.length; i++)
    {
        await waitforme(delay);
        ele[i].style.height = random[i]*2+"px";
        ele[i].style.background = 'lightgreen';
        console.log((ele[i].style.height).slice(0,(ele[i].style.height).length-2)/2);
    }    
    var end = Date.now();
    var time = end - start;
    time = time /1000;
    document.getElementById("radix-time").innerHTML = "Radix-Sort Time taken: " + String(time) + " seconds" + " || Time Complexity: O(nd)" + " || Space Complexity: O(n+2^d)";
}

const radixbtn = document.querySelector(".radixSortbtn");
radixbtn.addEventListener('click', async function()
{
    let ele = document.querySelectorAll('.bar');
    disableSortingBtn();
    await radixsort(ele);
    for(let j = 0; j < ele.length; j++)
    {
        ele[j].style.background= 'green';
    }
    enableSortingBtn();
});