function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

selector = $$
async function click(buttonArray, timeoutMs) {
    let prevScrollY;
    let scrollY = window.scrollY;

    do {
        window.scrollTo(0, document.body.scrollHeight);
        prevScrollY = scrollY;
        scrollY = window.scrollY;

        await sleep(timeoutMs);
        Array.from($("span:not(:contains('Following')):contains('Follow')")).forEach(button => button.click());


    } while ((scrollY - prevScrollY) > 0)
}



click(500);
