// alert("Hello")

document.getElementsByClassName("one")[0].onclick=function(){
    document.getElementsByClassName("start")[0].classList.add("green")
     document.getElementsByClassName("start")[0].classList.remove("red")

};
document.getElementsByClassName("two")[0].onclick=function(){
    document.getElementsByClassName("start")[0].classList.add("red")
     document.getElementsByClassName("start")[0].classList.remove("green")
};

