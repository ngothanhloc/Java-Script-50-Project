let blockEl = document.querySelector('#block');
let verticalPostion = document.querySelector('#position-y');
let horizontalPosion = document.querySelector('#position-x');
let blockSize = document.querySelector('#size');
let shapeSelector = document.querySelector('#shape-select');
let okBtn = document.querySelector("#ok-btn");
let rgbaR = document.querySelector("#rgba-r");
let rgbaG = document.querySelector("#rgba-g");
let rgbaB = document.querySelector("#rgba-b");
let rgbaA = document.querySelector("#rgba-a");
let rgbaContainer = document.querySelector('.rgba-container');
let rgbaInputs = rgbaContainer.querySelectorAll('input');

// Vertical Position Changer
verticalPostion.addEventListener("change", () => {
    blockEl.style.top = verticalPostion.value + "px";
});

// Horizontal Position Changer
horizontalPosion.addEventListener("change", () => {
    blockEl.style.left = horizontalPosion.value + "px";
});

// Size Changer 
blockSize.addEventListener('change', () => {
    blockEl.style.transform = 'scale(' + blockSize.value + ')';
});

// Shape Changer
okBtn.addEventListener('click', () => {
    let shapeOption = shapeSelector.value;
    if (shapeOption === '1') {
        blockEl.style.borderRadius = '0';
    } else if (shapeOption === '2') {
        blockEl.style.borderRadius = "50%";
    }
})

//Background Color Changer
for (let i = 0; i < rgbaInputs.length; i++) {
    // console.log(rgbaInputs[i])
    rgbaInputs[i].addEventListener("change", () => {
        blockEl.style.backgroundColor =
            "rgba(" +
            rgbaR.value +
            "," +
            rgbaG.value +
            "," +
            rgbaB.value +
            "," +
            rgbaA.value +
            ")";
    });
}