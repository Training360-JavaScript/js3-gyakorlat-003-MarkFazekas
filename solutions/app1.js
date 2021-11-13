
const setCookie = (value, key = "token") => {
    const saveDate = new Date();
    saveDate.setMinutes(saveDate.getMinutes() + 15);
    document.cookie = `${key}=${value};expires=${saveDate.toUTCString()}`;
}
export default setCookie;