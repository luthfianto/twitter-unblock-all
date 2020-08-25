function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

selector = $$
async function unblock(timeoutMs) {
    let prevScrollY;
    let scrollY = window.scrollY;

    do {
        window.scrollTo(0, document.body.scrollHeight);
        prevScrollY = scrollY;
        scrollY = window.scrollY;

        await sleep(timeoutMs);

        const blockedButtons = selector("[aria-label=Blocked]")
        blockedButtons.forEach(button => button.click());
    } while ((scrollY - prevScrollY) > 0)
}

unblock(500);
