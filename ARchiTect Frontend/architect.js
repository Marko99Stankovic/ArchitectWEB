import { Carousel } from "./carousel.js";
import { Kontakt } from "./kontakt.js";

export class Architect{
    constructor(){
        this.kontejner = null;
    }
    crtajMainKontejner(host){
        this.kontejner = document.createElement("div");
        this.kontejner.classList.add("mainContainer");
 //              this.kontejner.innerHTML = "MAIN";
        host.appendChild(this.kontejner);

    //-----------------------------------------------------    
        this.crtajNavbarDiv(this.kontejner);
        new Carousel().crtajGaleriju(this.kontejner);
        
        this.crtajSekcijuOnama(this.kontejner);
        this.crtajSekcijuUsluge(this.kontejner);
        this.crtajSekcijuProjekti(this.kontejner);

        //pravi objekat klase Kontakt i poziva njenu funkciju koja iscrtava
        new Kontakt().crtajSekcijuKontakt(this.kontejner);

      

    }
    crtajNavbarDiv(host){
        let navbar = document.createElement("div"); 
    //    this.navbar.innerHTML = "navbar";
        navbar.classList.add("navbar");
        host.appendChild(navbar);
    
    // contents
        this.crtajLogoDiv(navbar);
        this.crtajDesniNAVdiv(navbar);
    }
    crtajLogoDiv(host){
        let logoBtnDiv = document.createElement("div");
        logoBtnDiv.className = "logoBtnDiv";
        logoBtnDiv.innerHTML = "ARchiTect";
        host.appendChild(logoBtnDiv);
    }
    crtajDesniNAVdiv(host){
        let DesniDiv = document.createElement("div");
        DesniDiv.classList.add("desniNavDiv");
        host.appendChild(DesniDiv);

        let nizIzbora = ["O nama", "Usluge", "Projekti", "Kontakt"];
        let linkBtn;
        
        nizIzbora.forEach((el, index) =>{
            linkBtn = document.createElement('div');
            linkBtn.className = "linkBtn";
            linkBtn.innerHTML = el;

            linkBtn.addEventListener('click', ()=>{
                const sekcija = document.querySelector(`.${nizIzbora[index].toLowerCase().replace(" ", "")}`);
                if (sekcija){
                    sekcija.scrollIntoView({behavior: 'smooth'});
                }
            });



            DesniDiv.appendChild(linkBtn);
        });

    }

    crtajSekcijuOnama(host){
        let sekcijaOnama = document.createElement("div");
        sekcijaOnama.classList.add("onama");
        sekcijaOnama.innerHTML = `
            <h1>O nama</h1>
            <p> Naša arhitektonska firma posvećena je stvaranju inovativnih i funkcionalnih prostora koji kombinuju estetiku i praktičnost. 
            Sa timom iskusnih arhitekata i inženjera, ponosno pružamo visokokvalitetne usluge u oblasti projektovanja, 
            nadzora i renovacije objekata. Verujemo da svaki projekat nosi posebnu priču, 
            a naš pristup je prilagođen individualnim potrebama svakog klijenta. 
            Kroz godine, izgradili smo reputaciju na osnovu pažljivog planiranja, 
            korišćenja najsavremenijih tehnologija i bliske saradnje sa klijentima, 
            kako bismo osigurali da su njihovi snovi pretvoreni u stvarnost. Naša misija je da oblikujemo budućnost arhitekture, 
            stvarajući prostore koji inspirišu i ostavljaju trajni utisak.</p>
        `;  ;
        host.appendChild(sekcijaOnama);


        
  

    }
    crtajSekcijuUsluge(host){
        let sekcijaUsluge = document.createElement("div");
        sekcijaUsluge.classList.add("usluge");
        host.appendChild(sekcijaUsluge);

        let uslugeTextDiv = document.createElement("div");
        uslugeTextDiv.classList.add("tekstUsluge");
        uslugeTextDiv.innerHTML = "<h1>Naše usluge</h1>Bilo da planirate novu zgradu ili renoviranje postojećeg prostora, mi smo ovde da vam pomognemo.";
        sekcijaUsluge.appendChild(uslugeTextDiv); 

        let nosacDivova = document.createElement("div");
        nosacDivova.classList.add("nosacDivova");
        
        sekcijaUsluge.appendChild(nosacDivova);
        
        let nizNaslova = ["<h2>Projektovanje i planiranje</h2>", " <h2>Nadzor gradnje i implementacija</h2>", "<h2>Renoviranje i adaptacija prostora</h2>"];
        let nizOpisa = [`<p>Naša firma pruža usluge kompletnog projektovanja i planiranja. Od konceptualnog dizajna do detaljnih planova, osiguravamo da 
                            svaki projekat zadovoljava funkcionalne i estetske potrebe klijenata. </p>`,
                        `<p>Sprovodimo detaljan nadzor tokom svih faza izgradnje. 
                            Naš tim osigurava da svaki korak bude izveden po najvišim standardima, 
                            garantujući kvalitetan i pouzdan završetak </p>`,
                        `<p>Bilo da se radi o obnovi starijih objekata ili prilagođavanju prostora novim potrebama, 
                            nudimo stručno renoviranje i adaptaciju, sa akcentom na modernizaciju i funkcionalnost.</p>`
                        ];
        let maliDivUsluge;
        nizNaslova.forEach((el, index)=>{
            maliDivUsluge = document.createElement("div");
            maliDivUsluge.innerHTML = el + nizOpisa[index];
            maliDivUsluge.classList.add("mala3diva");
            nosacDivova.appendChild(maliDivUsluge);
        });
     
    }
    crtajSekcijuProjekti(host){
        let projektiDiv = document.createElement("div");
        projektiDiv.classList.add("sekcijaProjekti", "projekti");
        projektiDiv.innerHTML = "Naši projekti";
        host.appendChild(projektiDiv);

        //ovde ostaje karusel bez vecih izmena
        let carouselDiv = document.createElement("div");
        carouselDiv.classList.add('carouselDiv');
        projektiDiv.appendChild(carouselDiv);

        let kontejnerZaSliku = document.createElement("div");
        kontejnerZaSliku.classList.add('kontejnerZaSliku');
        carouselDiv.appendChild(kontejnerZaSliku);

        // ovde da bude fetch sa get metodom koja vraca neke slike
        
        let slika;
        let nizSlika = [
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/171764238.jpg?k=00b6ecacd87725586a1959d1af9612b2cd84d85b909bf071818a13645148804b&o=&hp=1",
            "https://assets-news.housing.com/news/wp-content/uploads/2022/03/31010142/Luxury-house-design-Top-10-tips-to-add-luxury-to-your-house-FEATURE-compressed.jpg",
            "https://www.thelocationguys.co.uk/wp-content/uploads/2023/03/Perfect-Luxury-Location-Houses.jpg",
            "https://i.pinimg.com/originals/7e/e2/56/7ee2569fb6fe306ecaad1d18c78ea362.jpg"
           
        ];
        nizSlika.forEach((el,i)=>{
            slika = document.createElement("img");
            slika.src = el;
            slika.alt = 'SlikaNaseZgrade';
            slika.classList.add('carouselSlika');
            kontejnerZaSliku.appendChild(slika);
        });

        let prevBtn = document.createElement("button");
        prevBtn.className = "previous";
        prevBtn.innerHTML = '<';
        carouselDiv.appendChild(prevBtn);

        let nextBtn = document.createElement("button");
        nextBtn.className = "next";
        nextBtn.innerHTML = '>';
        carouselDiv.appendChild(nextBtn);

        let currentIndex = localStorage.getItem('currentIndex') ? parseInt(localStorage.getItem('currentIndex')) : 0;        
        
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : nizSlika.length - 1;
            updateCarousel();
        });
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex < nizSlika.length - 1) ? currentIndex + 1 : 0; // Ispravljen deo koda za sledeću sliku
            updateCarousel();
        });
        //funkc za azuriranje karusela
        function updateCarousel() {
            const offset = -currentIndex * 700; // 300px je širina slike
            kontejnerZaSliku.style.transform = `translateX(${offset}px)`; // Animacija za pomeranje slika
            localStorage.setItem('currentIndex', currentIndex); // Sačuvaj trenutni indeks u localStorage
        }
       updateCarousel(); 

    }

   
}
