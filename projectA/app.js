const menuList = document.getElementById("menuList")

menuList.style.maxHeight = "0px"

const toggleMenu = () =>{
    if (menuList.style.maxHeight === "0px")
    {
        menuList.style.maxHeight = "150px"
        console.log("abri")
    }
    else{
        menuList.style.maxHeight = "0px"
        console.log("fechei")
    }
}