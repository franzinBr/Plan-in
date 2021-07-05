export function cookieExists(key, value) {
    const cookie = document.cookie.split(';');
    cookie.filter((c) => c.split('=')[0] === key && c.split('=')[1] === value);
    return cookie[0] === `${key}=${value}` ? true : false;
}
