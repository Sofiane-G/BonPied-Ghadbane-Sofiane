AOS.init();

// accordions

function accordeon() {
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

fetch("bonpied.json")
    .then(rep => {
        return rep.json()
    })
    .then(data => {
        console.log(data)
        afficheInfo(data)
        afficheProduit(data.produits)
        afficheService(data.services)
        afficheTemoignage(data.temoignages)
        accordeon()
        afficheInformation(data)
    })


//Insertion données JSON Section 1

// role : piocher les données des information pour le hero hero dans le tableau
// parametre : objet JSON
//return : renvoie dans la section 1

function afficheInfo(info) {

    let heroInfo = `

<div>
            <h1 class="colorwhite">${info.nomCommercial}</h1>
            <p class="color-white mt-32 mb-32">${info.phraseAccroche}</p>
            <a href="" class="btn mt-32">${info.texteAppelAction}</a>
        </div>

`

    document.querySelector("#info-container").innerHTML += heroInfo

}

// Insertion données JSON Section 2

// role : piocher les données des differents produits dans le tableau
// parametre :tableau de produit
// return :l'envoie dans la section ( Nos Produits )

function afficheProduit(tableauProduit) {
    tableauProduit.forEach(produit => {

        let produitCard = `
            <div data-aos="fade-up" class="w-30 card mt-64">
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

// Insertion données JSON Section 3

// role : piocher les données des differents services dans le tableau
// parametre :tableau des services
// return :l'envoie dans la section ( Nos Services )

function afficheService(tableauService) {
    tableauService.forEach(service => {

        let serviceCard = `
        
        <div data-aos="fade-up" class="accordion align-center card-service mt-32">
            <div class="accordion-title color-green">
                <h4>${service.nom}</h4>
                <i class="ph ph-caret-right"></i>
            </div>
            <div class="accordion-content">
                <div>
                    <p class="background-white color-white">${service.description}</p>
                </div>
            </div>
        </div>
        
        `

        document.querySelector("#service-container").innerHTML += serviceCard

    });
}

// Insertion données JSON Section 4

// role : piocher les données des differents temoignages dans le tableau
// parametre :tableau des temoignages
// return :l'envoie dans la section ( Vos Temoignages )

function afficheTemoignage(tableauTemoignage) {
    tableauTemoignage.forEach(temoignage => {
        const star = "★".repeat(temoignage.note) + "☆".repeat(5 - temoignage.note)

        let temoignageCard = `
        
        <div data-aos="fade-up" class="avis w-30 card">
                <div class="flex gap-16 align-center">
                    <div><img src="asset/avatar.jpg" alt="photo" width="60px" height="60px" class="photo-border"></div>
                    <div>
                        <h4>${temoignage.prenom}</h4>
                        <p>${temoignage.typeExperience}</p>
                        <div class="stars color-green">
                            ${star}
                        </div>
                    </div>
                </div>
                <p class="mt-8">${temoignage.commentaire}</p>
            </div>
        
        `

        document.querySelector("#temoignage-container").innerHTML += temoignageCard

    });
}

// role : piocher les données des information pour la section 5 dans le tableau
// parametre : objet JSON
//return : renvoie dans la section 5

function afficheInformation(information) {

    let informationCard = `
    
<div data-aos="fade-up" class="w-30 text-center">
<img src="asset/img-eco.jpg" alt="" class="illustration">
                <h4 class="mb-16 mt-16">Eco-Responsable</h4>
                <p>${information.avantagesClients[0]}</p>
            </div>
            <div data-aos="fade-up" class="w-30 text-center">
                <img src="asset/img-eco-2.jpg" alt="" class="illustration">
                <h4 class="mb-16 mt-16">Style Unique</h4>
                <p>${information.avantagesClients[1]}</p>
            </div>
            <div data-aos="fade-up" class="w-30 text-center">9
                <img src="asset/engagement-logo.jpg" alt="" class="illustration">
                <h4 class="mb-16 mt-16">Engagement</h4>
                <p>${information.avantagesClients[2]}</p>
            </div>

`

    document.querySelector("#information-container").innerHTML += informationCard

}