window.onload = () => {
    changePic('img1');
    changePic('img2');
    changePic('img3');
    changePic('img4');
    changePic('img5');
}
let getRan = () => {
    return Math.floor((Math.random() * 3) + 1);
}

function changePic(img) {
    let picSele = document.getElementById(img);
    let ranNum;
    let noRepe;
    do {
        ranNum = getRan();
    } while (noRepe == ranNum || ranNum == picSele.alt.substring(4, 3))
    noRepe = ranNum;
    let a = img.substring(img.length, img.length - 1);
    picSele.src = `./image${ranNum}/img_00${a}.jpg`;
    picSele.alt = `pic${ranNum}`;
    let part1 = document.getElementById('img1').alt;
    let part2 = document.getElementById('img2').alt;
    let part3 = document.getElementById('img3').alt;
    let part4 = document.getElementById('img4').alt;
    let part5 = document.getElementById('img5').alt;
    if (part1 == part2 && part1 == part3 && part1 == part4 && part1 == part5)
        for (let i = 0; i < 5; i++)
            $('img').css('box-shadow', 'red 4px 4px 9px');
    else $('img').css('box-shadow', 'none');
}