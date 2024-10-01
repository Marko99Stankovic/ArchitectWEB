export class Carousel {
    constructor(nizSlika = []) {
        this.nizSlika = nizSlika;
        this.currentIndex = 0;
    }

    crtajGaleriju(host) {
        let carouselDiv = document.createElement("div");
        carouselDiv.classList.add('carouselDiv');
        host.appendChild(carouselDiv);

        let kontejnerZaSliku = document.createElement("div");
        kontejnerZaSliku.classList.add('kontejnerZaSliku');
        carouselDiv.appendChild(kontejnerZaSliku);
        
        // kada primi niz ...

        this.nizSlika.forEach((el) => {
            let slika = document.createElement("img");
            slika.src = el;
            slika.alt = 'SlikaNaseZgrade';
            slika.classList.add('carouselSlika');
            kontejnerZaSliku.appendChild(slika);
        });

        this.setupNavigation(carouselDiv, kontejnerZaSliku);
        this.autoScroll(kontejnerZaSliku);
        this.updateCarousel(kontejnerZaSliku);
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
            this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.nizSlika.length - 1;
            this.updateCarousel(kontejnerZaSliku);
        });

        nextBtn.addEventListener('click', () => {
            this.currentIndex = (this.currentIndex < this.nizSlika.length - 1) ? this.currentIndex + 1 : 0;
            this.updateCarousel(kontejnerZaSliku);
        });
    }

    updateCarousel(kontejnerZaSliku) {
        const offset = -this.currentIndex * 450; // 450px je širina slike
        kontejnerZaSliku.style.transform = `translateX(${offset}px)`; // Animacija za pomeranje slika
        localStorage.setItem('currentIndex', this.currentIndex); // Sačuvaj trenutni indeks u localStorage
    }

    autoScroll(kontejnerZaSliku) {
        setInterval(() => {
            this.currentIndex = (this.currentIndex < this.nizSlika.length - 1) ? this.currentIndex + 1 : 0;
            this.updateCarousel(kontejnerZaSliku);
        }, 3000); // Pomeranje svake 3 sekunde
    }
}