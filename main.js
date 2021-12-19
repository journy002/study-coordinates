const lineX = document.querySelector(".line-x");
const lineY = document.querySelector(".line-y");
const imgTarget = document.querySelector(".target");
const textTag = document.querySelector(".tag");

document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    lineX.style.top = `${y}px`;
    lineY.style.left = `${x}px`;
    imgTarget.style.left = `${x}px`;
    imgTarget.style.top = `${y}px`;

    textTag.style.left = `${x}px`;
    textTag.style.top = `${y}px`;
    textTag.innerHTML = `${x}px, ${y}px`;

    // textContent(
    //     (textTag.style.left = `${x}px`),
    //     (textTag.style.top = `${y}px`)
    // );
});

// callback 함수를 이용하는 방법도 있습니다.
// function textContent(x, y) {
//     textTag.innerHTML = `${x}, ${y}`;
// }

// textContent(0, 0);
