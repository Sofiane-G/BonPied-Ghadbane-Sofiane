// accordions
let currentAcc = null;
const accordions = document.querySelectorAll(".accordion")
if(accordions){
    accordions.forEach(acc => {
    const acctitle = acc.querySelector(".accordion-title")


    acctitle.addEventListener("click", () => {
        if (currentAcc == acc) {
            closeAcc(currentAcc)
            currentAcc = null
            return
        }
        closeAcc(currentAcc)
        if (acc.classList.contains("accordion-open") == false) {
            currentAcc = acc
            openAcc(acc)
        }
    })


})
}


function closeAcc(acc) {
    if (acc != null) {
        acc.classList.remove('accordion-open')

        const acccontent = acc.querySelector(".accordion-content")
        acccontent.style.height = 0 + "px"
    }

}

function openAcc(acc) {
    if (acc != null) {
        acc.classList.add('accordion-open')
        const acccontent = acc.querySelector(".accordion-content")
        const accdiv = acccontent.children[0]
        acccontent.style.height = accdiv.clientHeight + "px"
    }

}