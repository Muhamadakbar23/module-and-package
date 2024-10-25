const luasPersegi = (sisi) => {
    return sisi * sisi;
}

const luasPersegiPanjang = (panjang, lebar) => {
    return panjang * lebar;
}

const lingkaran = {
    luas: (r) => {
        return Math.PI * r * r;
    },
    keliling: (r) => {
        return 2 * Math.PI * r * r;
    } 
}

module.exports = {
    luasPersegi,
    luasPersegiPanjang,
    lingkaran
}