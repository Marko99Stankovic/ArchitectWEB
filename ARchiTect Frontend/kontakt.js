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

        let nizInputa = ["Ime", "Prezime", "Broj", "Email", "Poruka"];
        let labela;
        let polje;

        nizInputa.forEach((el, indeks) => {
            labela = document.createElement("label");
            labela.innerHTML = el;
            kontaktSekcija.appendChild(labela);
            
            if (el === "Poruka") {
                // Ako je labela "Poruka", koristi textarea
                polje = document.createElement("textarea");
                polje.classList.add(nizInputa[indeks]);
                polje.placeholder = "Unesite vašu poruku"; // Placeholder za textarea
                polje.classList.add(nizInputa[indeks]);
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
        posaljiBtn.className = "posaljiBtn";
        posaljiBtn.innerHTML = "Posalji";
        kontaktSekcija.appendChild(posaljiBtn);  

        posaljiBtn.onclick = (e)=>{
            e.preventDefault();
            let Ime = document.querySelector('.Ime').value;
            let Prezime = document.querySelector('.Prezime').value;
            let Broj = document.querySelector('.Broj').value;
            let Email = document.querySelector('.Email').value;
            let Poruka = document.querySelector('.Poruka').value;

            if (!Ime || !Prezime || !Broj || !Email || !Poruka) {
                alert("Molimo popunite sva polja!");
                return;
            }            
            // Validacija email formata koristeći regularni izraz
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(Email)) {
                alert("Unesite validnu email adresu.");
                return;
            }
        
            let formData = new FormData();
            formData.append('Ime', Ime);
            formData.append('Prezime', Prezime);
            formData.append('Broj', Broj);
            formData.append('Email', Email);
            formData.append('Poruka', Poruka);

            fetch("https://x8ki-letl-twmt.n7.xano.io/api:0UhJQwb3/klijenti", {
                method: 'POST',
                body: formData
            }).then(resp => {
                resp.json().then(data=>{
                    console.log("ovo ide u bazu", data);
                }).catch(error=>{
                    console.log('Greska', error);
                    alert("Doslo je do greske! Pogledati konzolu!");
                })
            })
        }
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