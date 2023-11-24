let items = document.getElementsByClassName('item-category');
let humber = document.getElementById('humbger-menu-items')
let headlego=document.getElementById('lego-container');
let bool = false;

function selection(value) {
    items[0].style.fontWeight = 400;
    items[0].style.borderBottom = "none";
    items[1].style.fontWeight = 400;
    items[1].style.borderBottom = "none";
    items[2].style.fontWeight = 400;
    items[2].style.borderBottom = "none";
    items[3].style.fontWeight = 400;
    items[3].style.borderBottom = "none";
    items[4].style.fontWeight = 400;
    items[4].style.borderBottom = "none";
    items[5].style.fontWeight = 400;
    items[5].style.borderBottom = "none";

    value == 0 ? items[0].style.fontWeight = 800 : console.log("ok")
    value == 0 ? items[0].style.borderBottom = "3px solid black" : console.log("ok")

    value == 1 ? items[1].style.fontWeight = 800 : console.log("ok")
    value == 1 ? items[1].style.borderBottom = "3px solid black" : console.log("ok")

    value == 2 ? items[2].style.fontWeight = 800 : console.log("ok")
    value == 2 ? items[2].style.borderBottom = "3px solid black" : console.log("ok")

    value == 3 ? items[3].style.fontWeight = 800 : console.log("ok")
    value == 3 ? items[3].style.borderBottom = "3px solid black" : console.log("ok")

    value == 4 ? items[4].style.fontWeight = 800 : console.log("ok")
    value == 4 ? items[4].style.borderBottom = "3px solid black" : console.log("ok")

    value == 5 ? items[5].style.fontWeight = 800 : console.log("ok")
    value == 5 ? items[5].style.borderBottom = "3px solid black" : console.log("ok")
}

function humberger() {

    humber.style.display = 'inline-block';
    humber.style.backgroundColor = '#272727';
    humber.style.width = '100%';
    humber.style.textAlign = 'center';
    humber.style.transition='width 4s';
    humber.style.transitionTimingFunction='linear';
    headlego.style.display='none'

}

function humberback() {

    humber.style.display = 'none';
    headlego.style.display='flex';
    headlego.style.flexDirection='row';
    headlego.style.justifyContent='space-between';

}
function checkemail(textme) {
    if (textme.includes("@gmail.com")){
        alert('باموفقیت انجام شد.')
    }else {
        alert('خطا در انجام عملیات ایمیل وجود دارد. ')
    }
}
function like(elemnt){
    elemnt.src='assets/img/icons8-like2-48.png'
    alert('به سبد علاقه مند ها اضافه شده ')
}