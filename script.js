let txt1 = document.querySelector("#text1")
let txt2 = document.querySelector("#text2")
let txt3 = document.querySelector("#text3")
let txt4 = document.querySelector("#text4")
let txt5 = document.querySelector("#text5")

async function dot(x){
    
    // addind dot 
    let text = await x.textContent
    let up1;
    let up2;
    
        setTimeout(() => {
        up1 = x.textContent = text + '.'
    }, 1000)
        setTimeout(() => {
        up2 = x.textContent = up1 + '.'
    }, 2000)
        setTimeout(() => {
        x.textContent = up2 + '.'
    }, 3000)
    return 0;
}



async function main(){
    setTimeout(() => {
        txt1.innerText = "Initializing Hacking"
        dot(txt1)
    }, 0)  

    setTimeout(() => {
        txt2.innerText = "Reading your Files"
        dot(txt2)
    }, 3000)

    setTimeout(() => {
        txt3.innerText = "Password files Detected"
        dot(txt3)
    }, 6000)

    setTimeout(() => {
        txt4.innerText = "Sending all passwords and personal files to server"
        dot(txt4)
    }, 9000)

    setTimeout(() => {
        txt5.innerText = "Cleaning Up"
        dot(txt5)
    }, 12000)
}
main()
// dot()