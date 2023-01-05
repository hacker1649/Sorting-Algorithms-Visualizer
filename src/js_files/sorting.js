// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
function swap(el1, el2) 
{
    let temp = el1.style.height;
    el1.style.height = el2.style.height;
    el2.style.height = temp;
}

function disableSortingBtn()
{
    document.querySelector(".bubbleSort").disabled = true;
    document.querySelector(".insertionSort").disabled = true;
    document.querySelector(".mergeSort").disabled = true;
    document.querySelector(".quickSort").disabled = true;
    document.querySelector(".heapSort").disabled = true;
    document.querySelector(".countSortbtn").disabled = true;
    document.querySelector(".bucketSortbtn").disabled = true;
    document.querySelector(".radixSortbtn").disabled = true;
    document.querySelector(".sevenSortbtn").disabled = true;
    document.querySelector(".eightSortbtn").disabled = true;
}

async function enableSortingBtn()
{
    document.querySelector(".bubbleSort").disabled = false;
    document.querySelector(".insertionSort").disabled = false;
    document.querySelector(".mergeSort").disabled = false;
    document.querySelector(".quickSort").disabled = false;
    document.querySelector(".heapSort").disabled = false;
    document.querySelector(".countSortbtn").disabled = false;
    document.querySelector(".bucketSortbtn").disabled = false;
    document.querySelector(".radixSortbtn").disabled = false;
    document.querySelector(".sevenSortbtn").disabled = false;
    document.querySelector(".eightSortbtn").disabled = false;
}

function waitforme(milisec) 
{ 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

function fileupload()
{
    let upload = document.getElementById('upload');
    
    let arr=[];
    let arrfile;
    upload.addEventListener('change',()=>{
    let fr = new FileReader();
    fr.onload = function()
    {
        arrfile = JSON.parse(fr.result);
        arr = arrfile.split(",");
        console.log(arr);
        createNewArray(arr);
    };
    fr.readAsText(upload.files[0]);
    })
}

// Default input for waitforme function (260ms)
let delay = 260;

// Selecting speed slider from DOM
let delayElement = document.querySelector('#speed_input');

// Event listener to update delay time 
delayElement.addEventListener('input', function()
{
    console.log(delayElement.value, typeof(delayElement.value));
    delay = 320 - parseInt(delayElement.value);
});

let array = [];

fileupload();

function createNewArray(arr=[]) 
{
    deleteChild();
    console.log(arr);

    array = [];
    for (let i = 0; i < arr.length; i++) 
    {
        array.push(arr[i]);
    }
    console.log(array);

    // select the div #bars element
    const bars = document.querySelector("#bars");

    // create multiple element div using loop and adding class 'bar col'
    for (let i = 0; i < arr.length; i++) 
    {
        const bar = document.createElement("div");
        bar.style.height = `${array[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

// Helper function to delete all the previous bars so that new can be added
function deleteChild() 
{
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

const newfile = document.querySelector(".upload");
upload.addEventListener("change",function(){
    enableSortingBtn();
    fileupload();
})