export function delay(time) {
    return new Promise((res) => setTimeout(res, time));
}
