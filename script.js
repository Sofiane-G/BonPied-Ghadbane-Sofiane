// accordions
let currentAcc = null;
const accordions = document.querySelectorAll(".accordion")
if (accordions) {
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

// Insertion données JSON Section 1

fetch("bonpied.json")
    .then(rep => {
        return rep.json()
    })
    .then(data => {
        console.log(data)
        afficheProduit(data.produits)
    })

    // role : piocher les données des differents produits dans le tableau
    // parametre :tableau de produit
    // return :l'envoie dans la section ( Nos Produits )

function afficheProduit(tableauProduit) {
    tableauProduit.forEach(produit => {

        let produitCard = `
            <div class="w-30 card mt-64">
                <img src="${produit.image}" alt="" width="100%" class="img-border">
                <div>
                    <h3 class="mt-16 mb-16">${produit.nom}</h3>
                    <p>${produit.description}</p>
                </div>
            </div>
`

        document.querySelector("#produit-container").innerHTML += produitCard

    });
}