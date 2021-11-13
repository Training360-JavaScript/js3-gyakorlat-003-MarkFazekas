import setCookie from "./app1.js";

setCookie("5", "viewed");
setCookie("354774631237", "uid");
setCookie("Bx55OWbHJ0Vt_IGIF", "ssid");

const cookieHandler = {
    getAll: () => document.cookie.split("; ").reduce((prev, next) => ({ ...prev, [next.split("=")[0]]: next.split("=")[1] }), {}),
    toSessionStorage: () => Object.entries(cookieHandler.getAll()).forEach(elem => sessionStorage.setItem(elem[0], elem[1])),
    flush: () => Object.entries(cookieHandler.getAll()).forEach(elem => document.cookie = `${elem[0]}=;max-age=0`)
}

export { cookieHandler };