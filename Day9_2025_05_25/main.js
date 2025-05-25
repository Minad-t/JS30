function doiHinhNen() {
    const luaChon = document.getElementById("chonanh");
    const anhLuaChon =luaChon.value;
    const body = document.body;

    body.style.opacity = 0;

    setTimeout(() => {
        body.style.backgroundImage = `url('${anhLuaChon}')`;
        body.style.opacity = 1;
    }, 300);
}