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

    this.crtajNavbarDiv(this.kontejner);

    let nizSlikaF=[];
    let nizProjekataF=[];
    fetch('https://x8ki-letl-twmt.n7.xano.io/api:0UhJQwb3/galerija').then(resp=>{
            resp.json().then(slike=>{
                slike.forEach(el=>{
                    console.log(el);
                    nizSlikaF.push(el.slike_najboljih_projekata.url);
                
                })
                let galerijaF = new Carousel(nizSlikaF);
                galerijaF.crtajGaleriju(this.kontejner);
                        
            //        this.nizSlika1 = [
                        "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
                        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
                        "https://plus.unsplash.com/premium_photo-1661883982941-50af7720a6ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
                        "https://plus.unsplash.com/premium_photo-1686782502813-51579b55f6d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
                        "https://www.dsidesign.rs/wp-content/uploads/2017/03/3D-Enerijer-dnevnog-boravka-10.jpg"
            //        ];
            //    //GALERIJA
            //    let galerija = new Carousel(this.nizSlika1);
            //    galerija.crtajGaleriju(this.kontejner);
                
                this.crtajSekcijuOnama(this.kontejner);
                this.crtajSekcijuUsluge(this.kontejner);      
                this.crtajSekcijuProjekti(this.kontejner);

        //        this.nizSlika2 = [
        //            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/171764238.jpg?k=00b6ecacd87725586a1959d1af9612b2cd84d85b909bf071818a13645148804b&o=&hp=1",
        //            "https://assets-news.housing.com/news/wp-content/uploads/2022/03/31010142/Luxury-house-design-Top-10-tips-to-add-luxury-to-your-house-FEATURE-compressed.jpg",
        //            "https://www.thelocationguys.co.uk/wp-content/uploads/2023/03/Perfect-Luxury-Location-Houses.jpg",
        //            "https://i.pinimg.com/originals/7e/e2/56/7ee2569fb6fe306ecaad1d18c78ea362.jpg",
        //            "https://studioe.sk/wp-content/uploads/2023/07/interier_2.webp"
        //        
        //        ];
        //        let projekti = new Carousel(this.nizSlika2);
        //        projekti.crtajGaleriju(this.kontejner);

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
                    })
                });
            })
        });

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
}
