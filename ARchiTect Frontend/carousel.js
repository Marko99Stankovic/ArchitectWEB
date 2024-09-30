class Carousel {
    constructor() {
        this.nizSlika = [
            "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
            "https://plus.unsplash.com/premium_photo-1661883982941-50af7720a6ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
            "https://plus.unsplash.com/premium_photo-1686782502813-51579b55f6d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
            "https://www.dsidesign.rs/wp-content/uploads/2017/03/3D-Enerijer-dnevnog-boravka-10.jpg"
        ];
        this.currentIndex = 0;
    }

    crtajGaleriju(host) {
        let carouselDiv = document.createElement("div");
        carouselDiv.classList.add('carouselDiv');
        host.appendChild(carouselDiv);

        let kontejnerZaSliku = document.createElement("div");
        kontejnerZaSliku.classList.add('kontejnerZaSliku');
        carouselDiv.appendChild(kontejnerZaSliku);

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