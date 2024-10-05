export class Kontakt{
    constructor(ime, prezime, broj, email, poruka){
        this.ime = ime;
        this.prezime = prezime;
        this.broj = broj;
        this.email = email;
        this.poruka = poruka;

        this.kontKontakt = null;
    }
    crtajSekcijuKontakt(host){

        this.kontKontakt = document.createElement("div");
        this.kontKontakt.classList.add("kontKontakt");
        host.appendChild(this.kontKontakt);

        let kontaktSekcija = document.createElement("div");
        kontaktSekcija.classList.add("kontakt");
        kontaktSekcija.innerHTML = "<h2>Kontakt</h2>";
        this.kontKontakt.appendChild(kontaktSekcija);

        let nizLabela = ["Ime", "Prezime", "Broj telefona", "Email",  "Poruka"];
        let nizInputa = ["ime", "prezime", "broj", "email", "poruka"];
        let labela;
        let polje;

        nizLabela.forEach((el, indeks) => {
            labela = document.createElement("label");
            labela.innerHTML = el;
            kontaktSekcija.appendChild(labela);
            
            if (el === "Poruka") {
                // Ako je labela "Poruka", koristi textarea
                polje = document.createElement("textarea");
                polje.classList.add(nizInputa[indeks]);
                polje.placeholder = "Unesite vašu poruku"; // Placeholder za textarea
                polje.rows = 10; // Postavljanje broja redova
            } else {
                // Za ostale inpute koristi input tipa text
                polje = document.createElement("input");
                polje.type = "text";
                polje.classList.add(nizInputa[indeks]);
                polje.placeholder = `Unesite ${el}`; // Placeholder za input
            }
            
            kontaktSekcija.appendChild(polje);
        });

        //-------------------------------... ubaciti fetch/ post metoda podaci -> bazu
        let posaljiBtn = document.createElement("button");
        posaljiBtn.innerHTML = "Posalji";
        kontaktSekcija.appendChild(posaljiBtn);

        posaljiBtn.addEventListener("click", ()=>{
            let podaci = [];
            nizInputa.forEach((input)=>{
                let poljeInput = kontaktSekcija.querySelector(`.${input}`);
                podaci[input] = poljeInput.value;
                //ovde 
            });
            console.log("Poslati podaci:", podaci);
            
            alert("Podaci su poslati!");
        });


        let kontaktDesno = document.createElement("div");
        kontaktDesno.classList.add("kontaktDesno");
        kontaktDesno.innerHTML = "<h2>Info</h2>";
        this.kontKontakt.appendChild(kontaktDesno);
//---------------------------------------------------------------------------------------------------------------------------------
        let nizInformacijaHeader = ["Lokacija:" , "Telefon:", "Email:", "Radno vreme:"];
        let nizInformacija = [" Ulica 123, 18000 Niš, Srbija", " 06x-xxxx-xxx", " info@architect.com", " Pon-Pet - 10-18h"];
        let divKontaktInfo;
        nizInformacijaHeader.forEach((el, index)=>{
            divKontaktInfo = document.createElement("div");
            divKontaktInfo.innerHTML = el + nizInformacija[index];
            kontaktDesno.appendChild(divKontaktInfo);

        });
    }
}