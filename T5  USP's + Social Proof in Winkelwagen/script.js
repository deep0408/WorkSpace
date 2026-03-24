/* T5 | USP's + Social Proof in Winkelwagen */
(() => {
    'use strict';
    const testInfo = {
        className: 'gmd-05',
        debug: 0,
        testName: "T5 | USP's + Social Proof in Winkelwagen",
        testVersion: 'v1'
    };

    function waitForElement(waitFor, callback, minElements = 1, isVariable = false, timer = 10000, frequency = 25) {
        let elements = isVariable ? window[waitFor] : document.querySelectorAll(waitFor);
        if (timer <= 0) return;
        (!isVariable && elements.length >= minElements) || (isVariable && typeof window[waitFor] !== 'undefined') ?
        callback(elements): setTimeout(() => waitForElement(waitFor, callback, minElements, isVariable, timer - frequency), frequency);
    }

    var dataJsonText = [
        {
            "author": "Chris, Vlaardingen",
            "heading": "Keurig geleverd tegen een nette prijs",
            "review": "Voor de eerste keer hier besteld. Keurige en makkelijke website en ook de prijzen zijn erg netjes. De levering was snel en keurig verpakt. Bedankt!"
        },
        {
            "author": "Renee, Valkenswaard",
            "heading": "Altijd prima service",
            "review": "Levering keurig en producten top. Altijd lekker om er ook nog dropjes bij te krijgen, dankjewel!"
        },
        {
            "author": "Meijer, Nieuwerkerk aan den IJssel",
            "heading": "Vandaag bestelt, morgen in huis",
            "review": "Supersnelle service. ik had een foutje gemaakt tijdens het bestellen maar heel snel en doeltreffend opgelost en de bestelling werd de volgende dag bezorgd. Chapeau."
        },
    ];

    const sliderEle = document.createElement('div');
    sliderEle.className = 'gmd-review-wrapper';
    sliderEle.innerHTML = `
    <div class="gmd-review">
        <h2 class="gmd-heading">Klanten beoordelen ons met:</h2>
        <div class="gmd-rating-number-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="15" viewBox="0 0 75 15" fill="none">
                <g clip-path="url(#clip0_182_1170)">
                <g clip-path="url(#clip1_182_1170)">
                <path d="M7.21875 0.5L9.13095 5.47165L14.2188 5.84752L10.3127 9.29605L11.545 14.5L7.21875 11.6597L2.89251 14.5L4.12475 9.29605L0.21875 5.84752L5.30655 5.47165L7.21875 0.5Z" fill="#EF233C"/>
                </g>
                <g clip-path="url(#clip2_182_1170)">
                <path d="M22.2188 0.5L24.1309 5.47165L29.2188 5.84752L25.3127 9.29605L26.545 14.5L22.2188 11.6597L17.8925 14.5L19.1248 9.29605L15.2188 5.84752L20.3066 5.47165L22.2188 0.5Z" fill="#EF233C"/>
                </g>
                <g clip-path="url(#clip3_182_1170)">
                <path d="M37.2188 0.5L39.1309 5.47165L44.2188 5.84752L40.3127 9.29605L41.545 14.5L37.2188 11.6597L32.8925 14.5L34.1248 9.29605L30.2188 5.84752L35.3066 5.47165L37.2188 0.5Z" fill="#EF233C"/>
                </g>
                <g clip-path="url(#clip4_182_1170)">
                <path d="M52.2188 0.5L54.1309 5.47165L59.2188 5.84752L55.3127 9.29605L56.545 14.5L52.2188 11.6597L47.8925 14.5L49.1248 9.29605L45.2188 5.84752L50.3066 5.47165L52.2188 0.5Z" fill="#EF233C"/>
                </g>
                <g clip-path="url(#clip5_182_1170)">
                <path d="M67.2188 0.5L69.1309 5.47165L74.2188 5.84752L70.3127 9.29605L71.545 14.5L67.2188 11.6597L62.8925 14.5L64.1248 9.29605L60.2188 5.84752L65.3066 5.47165L67.2188 0.5Z" fill="#EF233C"/>
                </g>
                </g>
                <defs>
                <clipPath id="clip0_182_1170">
                <rect width="75" height="15" fill="white"/>
                </clipPath>
                <clipPath id="clip1_182_1170">
                <rect width="15" height="15" fill="white"/>
                </clipPath>
                <clipPath id="clip2_182_1170">
                <rect width="15" height="15" fill="white" transform="translate(15)"/>
                </clipPath>
                <clipPath id="clip3_182_1170">
                <rect width="15" height="15" fill="white" transform="translate(30)"/>
                </clipPath>
                <clipPath id="clip4_182_1170">
                <rect width="15" height="15" fill="white" transform="translate(45)"/>
                </clipPath>
                <clipPath id="clip5_182_1170">
                <rect width="15" height="15" fill="white" transform="translate(60)"/>
                </clipPath>
                </defs>
            </svg>
            <div class="gmd-info">
                <p class="gmd-rating"><b>9.5 </b>/ 10</p>
            </div>
        </div>
        <a href="https://www.kiyoh.com/reviews/1043128/Webshop_viv_nl" class="shopreviews__summary-link review-summary-link" target="_blank" rel="noopener"> Toon alle <u>8392 reviews</u> </a>
    </div>
    <div class="features-wrapper">
        <p><svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
        <path d="M14 1C14 1.25587 13.9023 1.51187 13.707 1.70687L5.70703 9.70687C5.5125 9.90312 5.25625 10 5 10C4.74375 10 4.48813 9.90234 4.29313 9.70703L0.293125 5.70703C0.0978125 5.5125 0 5.25625 0 5C0 4.42875 0.467188 4 1 4C1.25587 4 1.51188 4.09766 1.70688 4.29297L5 7.5875L12.2937 0.29375C12.4875 0.0978125 12.7437 0 13 0C13.5344 0 14 0.428125 14 1Z" fill="#65CA6F"/>
        </svg> Binnen 1 à 2 werkdagen geleverd</p>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
        <path d="M14 1C14 1.25587 13.9023 1.51187 13.707 1.70687L5.70703 9.70687C5.5125 9.90312 5.25625 10 5 10C4.74375 10 4.48813 9.90234 4.29313 9.70703L0.293125 5.70703C0.0978125 5.5125 0 5.25625 0 5C0 4.42875 0.467188 4 1 4C1.25587 4 1.51188 4.09766 1.70688 4.29297L5 7.5875L12.2937 0.29375C12.4875 0.0978125 12.7437 0 13 0C13.5344 0 14 0.428125 14 1Z" fill="#65CA6F"/>
        </svg> Altijd goed geholpen</p>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none">
        <path d="M14 1C14 1.25587 13.9023 1.51187 13.707 1.70687L5.70703 9.70687C5.5125 9.90312 5.25625 10 5 10C4.74375 10 4.48813 9.90234 4.29313 9.70703L0.293125 5.70703C0.0978125 5.5125 0 5.25625 0 5C0 4.42875 0.467188 4 1 4C1.25587 4 1.51188 4.09766 1.70688 4.29297L5 7.5875L12.2937 0.29375C12.4875 0.0978125 12.7437 0 13 0C13.5344 0 14 0.428125 14 1Z" fill="#65CA6F"/>
        </svg> Scherpe prijzen - Hoge kwaliteit</p>
    </div>
    <div class="slider-data-wrapper">
        <div class="custom-slider-wrapper">
            <div class="swiper gmd-customSwiper" id="custom-gallery">
                <div class="swiper-wrapper"></div>
            </div>
        </div>
    </div>`;


    waitForElement(".block-minicart", ([cartItem]) => {
        document.body.classList.add(testInfo.className);

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.id = 'gmd-swiper-css'
        link.href = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
        if (!document.querySelector('#gmd-swiper-css')) {
            document.getElementsByTagName('head')[0].appendChild(link);
        }

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
        script.type = 'text/javascript';
        script.id = 'gmd-swiper-js'
        if (!document.querySelector('#gmd-swiper-js')) {
            document.getElementsByTagName('body')[0].appendChild(script);
        }


        const targetEle = document.querySelector('.form-cart');
        const miniCartContainer = document.querySelector('.block-minicart');
        const mobileContainer = document.querySelector('.cart__bought-together');

        function moveSlider() {
            const sliderClone = sliderEle.cloneNode(true);
            sliderEle.classList.add('slider-main');
            sliderClone.classList.add('slider-mini');
            if(targetEle){
                targetEle.after(sliderEle);
            }
            if(!miniCartContainer.querySelector('.slider-mini')){
                miniCartContainer.append(sliderClone);
            }

            if (window.innerWidth <= 1023) {
                if(mobileContainer){
                    if (!mobileContainer.previousElementSibling?.classList?.contains('slider-main')) {
                        mobileContainer.before(sliderEle);
                    }
                }

            } else if(targetEle) {

                if (!targetEle.previousElementSibling?.classList?.contains('slider-main')) {
                    targetEle.after(sliderEle);
                }

            }
        }

        window.addEventListener('resize', moveSlider);
        
        if (!document.querySelector('.gmd-review-wrapper')) {
            // targetEle.insertAdjacentHTML('beforebegin', sliderEle);
            moveSlider();
            for (var i = 0; dataJsonText.length > i; i++) {
                document.querySelectorAll('.gmd-review-wrapper .swiper-wrapper').forEach(function (e) {
                    e.insertAdjacentHTML('beforeend', ` 
                        <div class="swiper-slide">
                            <div class="gmd-review-card">
                                <div class="gmd-review-header">
                                    <div class="gmd-rating-number-wrapper">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="92" height="16" viewBox="0 0 92 16" fill="none">
                                            <path d="M8.03516 0.78125C8.22269 0.407745 8.7743 0.405544 8.96484 0.779297V0.780273L11.04 4.91797L11.1572 5.15137L11.416 5.18848L16.0586 5.85449C16.463 5.91216 16.6197 6.36062 16.3955 6.64844L16.3457 6.7041L12.9873 9.92285L12.7949 10.1074L12.8408 10.3691L13.6348 14.916C13.702 15.3049 13.2758 15.6417 12.8828 15.4385L8.72949 13.292L8.5 13.1738L8.27051 13.292L4.11719 15.4385L4.11621 15.4395C3.72668 15.6425 3.29745 15.3078 3.36523 14.916L4.15918 10.3691L4.20508 10.1074L4.0127 9.92285L0.654297 6.7041L0.604492 6.64844C0.395371 6.37994 0.517604 5.97161 0.863281 5.87109L0.941406 5.85449L5.58398 5.18848L5.84277 5.15137L5.95996 4.91797L8.03516 0.78125Z" fill="#E30614" stroke="#ECECEC"/>
                                            <path d="M26.0352 0.78125C26.2227 0.407745 26.7743 0.405544 26.9648 0.779297V0.780273L29.04 4.91797L29.1572 5.15137L29.416 5.18848L34.0586 5.85449C34.463 5.91216 34.6197 6.36062 34.3955 6.64844L34.3457 6.7041L30.9873 9.92285L30.7949 10.1074L30.8408 10.3691L31.6348 14.916C31.702 15.3049 31.2758 15.6417 30.8828 15.4385L26.7295 13.292L26.5 13.1738L26.2705 13.292L22.1172 15.4385L22.1162 15.4395C21.7267 15.6425 21.2975 15.3078 21.3652 14.916L22.1592 10.3691L22.2051 10.1074L22.0127 9.92285L18.6543 6.7041L18.6045 6.64844C18.3954 6.37994 18.5176 5.97161 18.8633 5.87109L18.9414 5.85449L23.584 5.18848L23.8428 5.15137L23.96 4.91797L26.0352 0.78125Z" fill="#E30614" stroke="#ECECEC"/>
                                            <path d="M44.0352 0.78125C44.2227 0.407745 44.7743 0.405544 44.9648 0.779297V0.780273L47.04 4.91797L47.1572 5.15137L47.416 5.18848L52.0586 5.85449C52.463 5.91216 52.6197 6.36062 52.3955 6.64844L52.3457 6.7041L48.9873 9.92285L48.7949 10.1074L48.8408 10.3691L49.6348 14.916C49.702 15.3049 49.2758 15.6417 48.8828 15.4385L44.7295 13.292L44.5 13.1738L44.2705 13.292L40.1172 15.4385L40.1162 15.4395C39.7267 15.6425 39.2975 15.3078 39.3652 14.916L40.1592 10.3691L40.2051 10.1074L40.0127 9.92285L36.6543 6.7041L36.6045 6.64844C36.3954 6.37994 36.5176 5.97161 36.8633 5.87109L36.9414 5.85449L41.584 5.18848L41.8428 5.15137L41.96 4.91797L44.0352 0.78125Z" fill="#E30614" stroke="#ECECEC"/>
                                            <path d="M62.0352 0.78125C62.2227 0.407745 62.7743 0.405544 62.9648 0.779297V0.780273L65.04 4.91797L65.1572 5.15137L65.416 5.18848L70.0586 5.85449C70.463 5.91216 70.6197 6.36062 70.3955 6.64844L70.3457 6.7041L66.9873 9.92285L66.7949 10.1074L66.8408 10.3691L67.6348 14.916C67.702 15.3049 67.2758 15.6417 66.8828 15.4385L62.7295 13.292L62.5 13.1738L62.2705 13.292L58.1172 15.4385L58.1162 15.4395C57.7267 15.6425 57.2975 15.3078 57.3652 14.916L58.1592 10.3691L58.2051 10.1074L58.0127 9.92285L54.6543 6.7041L54.6045 6.64844C54.3954 6.37994 54.5176 5.97161 54.8633 5.87109L54.9414 5.85449L59.584 5.18848L59.8428 5.15137L59.96 4.91797L62.0352 0.78125Z" fill="#E30614" stroke="#ECECEC"/>
                                            <path d="M80.0352 0.78125C80.2227 0.407745 80.7743 0.405544 80.9648 0.779297V0.780273L83.04 4.91797L83.1572 5.15137L83.416 5.18848L88.0586 5.85449C88.463 5.91216 88.6197 6.36062 88.3955 6.64844L88.3457 6.7041L84.9873 9.92285L84.7949 10.1074L84.8408 10.3691L85.6348 14.916C85.702 15.3049 85.2758 15.6417 84.8828 15.4385L80.7295 13.292L80.5 13.1738L80.2705 13.292L76.1172 15.4385L76.1162 15.4395C75.7267 15.6425 75.2975 15.3078 75.3652 14.916L76.1592 10.3691L76.2051 10.1074L76.0127 9.92285L72.6543 6.7041L72.6045 6.64844C72.3954 6.37994 72.5176 5.97161 72.8633 5.87109L72.9414 5.85449L77.584 5.18848L77.8428 5.15137L77.96 4.91797L80.0352 0.78125Z" fill="#E30614" stroke="#ECECEC"/>
                                        </svg>
                                        <div class="gmd-info">
                                            <p class="gmd-rating"><b>5 </b>/ 5</p>
                                        </div>
                                    </div>
                                </div>
                                <h2 class="gmd-card-title">${dataJsonText[i].heading}</h2>
                                <p class="gmd-review-text">${dataJsonText[i].review}</p>
                                <span class="gmd-author">${dataJsonText[i].author}</span>
                            </div>
                        </div>
                    `);
                });
            }

            const checkSlider = setInterval(() => {
                if (typeof Swiper !== 'undefined') {
                    clearInterval(checkSlider);
                    new Swiper(".slider-main .gmd-customSwiper", {
                        loop: true,
                        slidesPerView: 1,
                        spaceBetween: 20,
                        centeredSlides: false,      // keep slides aligned to the left
                        autoplay: {
                            delay: 8000, // 3 seconds
                            disableOnInteraction: false
                        },
                        breakpoints: {
                            768: {
                                slidesPerView: 2
                            },
                        }
                    });
                    new Swiper(".slider-mini .gmd-customSwiper", {
                        loop: true,
                        slidesPerView: 1,
                        spaceBetween: 20,
                        centeredSlides: false,      // keep slides aligned to the left
                        autoplay: {
                            delay: 8000, // 3 seconds
                            disableOnInteraction: false
                        },
                    });
                }
            }, 500);
        }
    });
})();