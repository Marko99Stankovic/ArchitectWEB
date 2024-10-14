import { Carousel } from "./carousel.js";
import { Kontakt } from "./kontakt.js";

export class Architect{
    constructor(){
        this.kontejner = null;
    }
    crtajMainKontejner(host){
        this.kontejner = document.createElement("div");
        this.kontejner.classList.add("mainContainer");
        host.appendChild(this.kontejner);

    ///////////////////////////////////////////////////////
            let loaderOverlay = document.createElement("div");
            loaderOverlay.classList.add("loaderOverlay");
            this.kontejner.appendChild(loaderOverlay);

            let loader = document.querySelector('.loaderOverlay');

            let ldsRipple = document.createElement("div");
            ldsRipple.className = "lds-ripple";
                            
            for(let i = 0; i < 2; i++){
                console.log(i);
                let divload = document.createElement("div");
                ldsRipple.appendChild(divload);
            }
            loaderOverlay.appendChild(ldsRipple);
    ///////////////////////////////////////////////////////

                                      loader.style.display = 'flex'; 

    let nizSlikaF=[];
    let nizProjekataF=[];
    fetch('https://x8ki-letl-twmt.n7.xano.io/api:0UhJQwb3/galerija').then(resp=>{
            resp.json().then(slike=>{
                slike.forEach(el=>{
                    //console.log(el);
                    nizSlikaF.push(el.slike_najboljih_projekata.url);    
                })

                this.crtajNavbarDiv(this.kontejner);
                let galerijaF = new Carousel(nizSlikaF);
                galerijaF.crtajGaleriju(this.kontejner);

                this.crtajSekcijuOnama(this.kontejner);
                this.crtajSekcijuUsluge(this.kontejner);      
                this.crtajSekcijuProjekti(this.kontejner);


                fetch('https://x8ki-letl-twmt.n7.xano.io/api:0UhJQwb3/projekti').then(resp=>{
                    resp.json().then(slike => {
                        slike.forEach(el=>{
                            console.log(el);
                            nizProjekataF.push(el.slikeprojekta.url);
                        })
                        let projetiF = new Carousel(nizProjekataF);
                        projetiF.crtajGaleriju(this.kontejner);

                        //pravi objekat klase i poziva njenu funkciju
                    let kontakt = new Kontakt();
                    kontakt.crtajSekcijuKontakt(this.kontejner);
                    
                    this.crtajFooter(this.kontejner);
                    })
                                    loader.style.display = 'none';
                });
            })
        });

    }
    crtajNavbarDiv(host){
        let navbar = document.createElement("div"); 
        navbar.classList.add("navbar");
        host.appendChild(navbar);
    
        this.crtajLogoDiv(navbar);
        this.crtajDesniNAVdiv(navbar);
    }
    crtajLogoDiv(host){
        let logoBtnDiv = document.createElement("div");
        logoBtnDiv.className = "logoBtnDiv";
        logoBtnDiv.innerHTML = `<span style = "color: cyan">AR</span>chi<span style = "color: cyan">T</span>ect`;
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
    }
    crtajFooter(host){
        let footerDiv = document.createElement("div");
        footerDiv.className = "footerDiv";
        footerDiv.innerHTML = "Copyright © 2024. Developed by Marko Stanković";
        host.appendChild(footerDiv);
    }
}
