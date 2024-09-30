import { Carousel } from "./carousel.js";

export class Projekti extends Carousel{
    constructor(){
        super();
    }
    crtajSekcijuProjekti(host){
        let projektiDiv = document.createElement("div");
        projektiDiv.classList.add("sekcijaProjekti", "projekti");
        projektiDiv.innerHTML = "Naši projekti";
        host.appendChild(projektiDiv);

        let carouselDiv = document.createElement("div");
        carouselDiv.classList.add('carouselDiv');
        projektiDiv.appendChild(carouselDiv);

        let kontejnerZaSliku = document.createElement("div");
        kontejnerZaSliku.classList.add('kontejnerZaSliku');
        carouselDiv.appendChild(kontejnerZaSliku);
    }

}