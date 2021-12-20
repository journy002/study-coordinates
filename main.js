const lineX = document.querySelector(".line-x");
const lineY = document.querySelector(".line-y");
const imgTarget = document.querySelector(".target");
const textTag = document.querySelector(".tag");

// addEventListener('load', () => {}) 안에 코드를 넣어주지 않으면
// 간혹 새로고침을 할때 이미지가 가운데 있지 않을때가 있습니다.
// 그 이유는, html에 script 태그가 defer로 불려져 오는데 defer같은 경우
// window가 load가 되기 전에 스크립트를 먼저 불러 오기 때문입니다.
// 즉, html에서 이미지를 아직 불러오지 못한 상태에서 스크립트가 실행되기 떼문입니다.
// addEventListener('load', () => {})를 이용한다면 window가 load된 후에 이미지의 너비, 높이값을 불러오며
// 마우스오버의 이벤트 또한 load가된 후에 불러와지기 때문에 이미지가 가운데를 벗어나지 않습니다.

// 성능 최적화를 확인해 보고 싶다면
// performance창에서 screen을 통해 직접 사용하는 모습을 찍어본다.
// 코드의 성능이 좋지 않다면 layout shift 경고가 뜬다.
// performance창에서 command + shfit + p => layout shift 관련 항목을 눌러서 검사해보면
// layout shift가 지속적으로 화면에 출력되는것을 볼 수 있다.

addEventListener("load", () => {
    const targetRect = imgTarget.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;

    document.addEventListener("mousemove", (event) => {
        const x = event.clientX;
        const y = event.clientY;

        lineX.style.transform = `translateX(${x}px)`;
        lineY.style.transform = `translateY(${y}px)`;
        imgTarget.style.transform = `translate(${x - targetHalfWidth}px, ${
            y - targetHalfHeight
        }px)`;
        textTag.style.transform = `translate(${x}px, ${y}px)`;
        textTag.innerHTML = `${x}px, ${y}px`;

        // lineX.style.top = `${y}px`;
        // lineY.style.left = `${x}px`;
        // imgTarget.style.left = `${x}px`;
        // imgTarget.style.top = `${y}px`;
        // textTag.style.left = `${x}px`;
        // textTag.style.top = `${y}px`;

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
});
