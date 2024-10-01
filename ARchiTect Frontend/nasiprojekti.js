import { Carousel } from "./carousel.js";

export class Projekti extends Carousel{
    constructor(){
        super();
    }
    crtajSekcijuProjekti(host){
    //    let projektiDiv = document.createElement("div");
    //    projektiDiv.classList.add("sekcijaProjekti", "projekti");
    //    projektiDiv.innerHTML = "Naši projekti";
    //    host.appendChild(projektiDiv);
//
    //    let carouselDiv = document.createElement("div");
    //    carouselDiv.classList.add('carouselDiv');
    //    projektiDiv.appendChild(carouselDiv);
//
    //    let kontejnerZaSliku = document.createElement("div");
    //    kontejnerZaSliku.classList.add('kontejnerZaSliku');
    //    carouselDiv.appendChild(kontejnerZaSliku);
        this.nizSlika = [ "https://cf.bstatic.com/xdata/images/hotel/max1024x768/171764238.jpg?k=00b6ecacd87725586a1959d1af9612b2cd84d85b909bf071818a13645148804b&o=&hp=1",
            "https://assets-news.housing.com/news/wp-content/uploads/2022/03/31010142/Luxury-house-design-Top-10-tips-to-add-luxury-to-your-house-FEATURE-compressed.jpg",
            "https://www.thelocationguys.co.uk/wp-content/uploads/2023/03/Perfect-Luxury-Location-Houses.jpg",
            "https://i.pinimg.com/originals/7e/e2/56/7ee2569fb6fe306ecaad1d18c78ea362.jpg"
           ];
        



    }

}