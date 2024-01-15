
let slide_index = 1;
let slide1 = document.getElementById("slide1");
let slide2 = document.getElementById("slide2");
let slide3 = document.getElementById("slide3");
let slide4 = document.getElementById("slide4");

function showSlide(n) {
    slide_index = slide_index + n;
    // console.log(slide_index);
    display(slide_index);
}

function display(n){
    // console.log(n,slide_index);

    if (n%4===1 || n%4===-1)
    {
        slide1.style.display="block"
        slide2.style.display="none"
        slide3.style.display="none"
        slide4.style.display="none"
    }

    else if (n%4===2 || n%4===-2)
    {
        slide2.style.display="block"
        slide1.style.display="none"
        slide3.style.display="none"
        slide4.style.display="none"
    }

    else if (n%4===3 || n%4===-3)
    {
        slide3.style.display="block"
        slide1.style.display="none"
        slide2.style.display="none"
        slide4.style.display="none"
    }
    else  
    {
        slide4.style.display="block"
        slide1.style.display="none"
        slide3.style.display="none"
        slide2.style.display="none"
    }
}

