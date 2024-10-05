export class Carousel {
    constructor(nizSlika = []) {
        this.nizSlika = nizSlika;
        this.currentIndex = 0;
        this.carouselMoving = false;
    }

    crtajGaleriju(host) {
        let carouselDiv = document.createElement("div");
        carouselDiv.classList.add('carouselDiv');
        host.appendChild(carouselDiv);

        let kontejnerZaSliku = document.createElement("div");
        kontejnerZaSliku.classList.add('kontejnerZaSliku');
        carouselDiv.appendChild(kontejnerZaSliku);

        // Dodajemo slike u carousel, plus kopiramo prvu i poslednju za beskonačnost
        const firstClone = this.nizSlika[0];
        const lastClone = this.nizSlika[this.nizSlika.length - 1];

        let slikaZaDodati = [lastClone, ...this.nizSlika, firstClone];

        slikaZaDodati.forEach((el) => {
            let slika = document.createElement("img");
            slika.src = el;
            slika.alt = 'Slika';
            slika.classList.add('carouselSlika');
            kontejnerZaSliku.appendChild(slika);
        });

        // Postavimo početnu poziciju
        this.currentIndex = 1;
        kontejnerZaSliku.style.transform = `translateX(-${this.currentIndex * 100}%)`;

        this.setupNavigation(carouselDiv, kontejnerZaSliku);
        this.autoScroll(kontejnerZaSliku);
    }

    setupNavigation(carouselDiv, kontejnerZaSliku) {
        let prevBtn = document.createElement("button");
        prevBtn.className = "previous";
        prevBtn.innerHTML = '<';
        carouselDiv.appendChild(prevBtn);

        let nextBtn = document.createElement("button");
        nextBtn.className = "next";
        nextBtn.innerHTML = '>';
        carouselDiv.appendChild(nextBtn);

        prevBtn.addEventListener('click', () => {
            if (!this.carouselMoving) {
                this.moveToPrevious(kontejnerZaSliku);
            }
        });

        nextBtn.addEventListener('click', () => {
            if (!this.carouselMoving) {
                this.moveToNext(kontejnerZaSliku);
            }
        });
    }

    moveToPrevious(kontejnerZaSliku) {
        this.carouselMoving = true;
        this.currentIndex--;
        kontejnerZaSliku.style.transition = "transform 0.5s ease-in-out";
        kontejnerZaSliku.style.transform = `translateX(-${this.currentIndex * 100}%)`;

        // Kada stignemo do klonirane poslednje slike, preskoči nazad na pravu poslednju sliku
        kontejnerZaSliku.addEventListener('transitionend', () => {
            if (this.currentIndex === 0) {
                kontejnerZaSliku.style.transition = "none";
                this.currentIndex = this.nizSlika.length;
                kontejnerZaSliku.style.transform = `translateX(-${this.currentIndex * 100}%)`;
            }
            this.carouselMoving = false;
        });
    }

    moveToNext(kontejnerZaSliku) {
        this.carouselMoving = true;
        this.currentIndex++;
        kontejnerZaSliku.style.transition = "transform 0.5s ease-in-out";
        kontejnerZaSliku.style.transform = `translateX(-${this.currentIndex * 100}%)`;

        // Kada stignemo do klonirane prve slike, preskoči nazad na pravu prvu sliku
        kontejnerZaSliku.addEventListener('transitionend', () => {
            if (this.currentIndex === this.nizSlika.length + 1) {
                kontejnerZaSliku.style.transition = "none";
                this.currentIndex = 1;
                kontejnerZaSliku.style.transform = `translateX(-${this.currentIndex * 100}%)`;
            }
            this.carouselMoving = false;
        });
    }

    autoScroll(kontejnerZaSliku) {
        setInterval(() => {
            if (!this.carouselMoving) {
                this.moveToNext(kontejnerZaSliku);
            }
        }, 3000);
    }
}
