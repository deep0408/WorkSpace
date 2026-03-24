/* T2 | Testimonials PDP */
(() => {
    'use strict';
    const testInfo = {
        className: 'gmd-02',
        debug: 0,
        testName: 'T2 | Social Proof above fold- Homepage',
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
            "author": "Anja Kamstra",
            "rating": "1 week geleden",
            "review": "Heerlijke handdoeken en zelfde kleur badmatten Goede kwaliteit ook na vele malen wassen. Blij mee. "
        },
        {
            "author": "Gosewijn Tulleners",
            "rating": "2 weken geleden",
            "review": "Fijne zachte handdoeken, goede service, makkelijk contact "
        },
        {
            "author": "Menno Mors",
            "rating": "2 maanden geleden",
            "review": "Wat een heerlijke dikke handdoeken. Ik kan ze iedereen ten zeerste aanraden "
        },
    ];

    const sliderEle = document.createElement('section');
    sliderEle.className = 'gmd-review-slider';
    sliderEle.innerHTML = `
    <div class="gmd-rating-number-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" width="108" height="20" viewBox="0 0 108 20" fill="none">
            <g clip-path="url(#clip0_227_771)">
            <rect width="20" height="20" fill="#219653"/>
            <path d="M10 13.6761L13.0417 12.8616L14.3125 17L10 13.6761ZM17 8.32704H11.6458L10 3L8.35417 8.32704H3L7.33334 11.6289L5.6875 16.956L10.0208 13.6541L12.6875 11.6289L17 8.32704Z" fill="white"/>
            <rect width="20" height="20" transform="translate(22)" fill="#219653"/>
            <path d="M32 13.6761L35.0417 12.8616L36.3125 17L32 13.6761ZM39 8.32704H33.6458L32 3L30.3542 8.32704H25L29.3333 11.6289L27.6875 16.956L32.0208 13.6541L34.6875 11.6289L39 8.32704Z" fill="white"/>
            <rect width="20" height="20" transform="translate(44)" fill="#219653"/>
            <path d="M54 13.6761L57.0417 12.8616L58.3125 17L54 13.6761ZM61 8.32704H55.6458L54 3L52.3542 8.32704H47L51.3333 11.6289L49.6875 16.956L54.0208 13.6541L56.6875 11.6289L61 8.32704Z" fill="white"/>
            <rect width="20" height="20" transform="translate(66)" fill="#219653"/>
            <path d="M76 13.6761L79.0417 12.8616L80.3125 17L76 13.6761ZM83 8.32704H77.6458L76 3L74.3542 8.32704H69L73.3333 11.6289L71.6875 16.956L76.0208 13.6541L78.6875 11.6289L83 8.32704Z" fill="white"/>
            <rect width="20" height="20" transform="translate(88)" fill="#219653"/>
            <rect x="101.5" width="7" height="20" fill="#D5D5D5"/>
            <path d="M98 13.6761L101.042 12.8616L102.313 17L98 13.6761ZM105 8.32704H99.6458L98 3L96.3542 8.32704H91L95.3333 11.6289L93.6875 16.956L98.0208 13.6541L100.687 11.6289L105 8.32704Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_227_771">
            <rect width="108" height="20" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        <p class="gmd-rating"><b>4.7/5</b> uit meer dan
            <a href="https://nl.trustpilot.com/review/misstowels.nl" target="_blank" rel="noopener"> 346+ reviews</a> Op Trustpilot
        </p>
    </div>
    <div class="slider-data-wrapper">
        <div class="custom-slider-wrapper">
            <div class="swiper gmd-customSwiper" id="custom-gallery">
                <div class="swiper-wrapper"></div>
            </div>
            <div class="swiper-button-prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none">
                    <path d="M9.98437 17.8125L2.08594 9.60937L9.98437 1.35937C10.1719 1.20312 10.2656 1.03516 10.2656 0.855469C10.2656 0.675781 10.1719 0.492187 9.98437 0.304687C9.82812 0.101562 9.66016 -5.29318e-08 9.48047 -6.86405e-08C9.30078 -8.43493e-08 9.11719 0.101562 8.92969 0.304687L0.234374 9.07031C0.0781242 9.24219 -8.23003e-07 9.41406 -8.38029e-07 9.58594C-8.53055e-07 9.75781 0.0781241 9.94531 0.234374 10.1484L8.92969 18.9141C9.11719 19.1172 9.30078 19.2187 9.48047 19.2187C9.66015 19.2187 9.82812 19.1172 9.98437 18.9141C10.1719 18.7422 10.2656 18.5625 10.2656 18.375C10.2656 18.1875 10.1719 18 9.98437 17.8125Z" fill="#0E1311"/>
                </svg>
            </div>
            <div class="swiper-button-next">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none">
                    <path d="M0.28125 1.40625L8.17969 9.60938L0.28125 17.8594C0.09375 18.0156 0 18.1836 0 18.3633C0 18.543 0.09375 18.7266 0.28125 18.9141C0.4375 19.1172 0.605469 19.2188 0.785156 19.2188C0.964844 19.2188 1.14844 19.1172 1.33594 18.9141L10.0312 10.1484C10.1875 9.97656 10.2656 9.80469 10.2656 9.63281C10.2656 9.46094 10.1875 9.27344 10.0312 9.07031L1.33594 0.304688C1.14844 0.101562 0.964844 0 0.785156 0C0.605469 0 0.4375 0.101562 0.28125 0.304688C0.09375 0.476562 0 0.65625 0 0.84375C0 1.03125 0.09375 1.21875 0.28125 1.40625Z" fill="#0E1311"/>
                </svg>
            </div>
        </div>
    </div>`;


    waitForElement(".hero", ([cartItem]) => {
        document.body.classList.add(testInfo.className);

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
        script.type = 'text/javascript';
        script.id = 'gmd-swiper-js'
        if (!document.querySelector('#gmd-swiper-js')) {
            document.getElementsByTagName('body')[0].appendChild(script);
        }


        const targetEle = document.querySelector('.hero');
        
        if (!document.querySelector('.gmd-review-slider')) {
            targetEle.after(sliderEle);
            for (var i = 0; dataJsonText.length > i; i++) {
                document.querySelectorAll('.gmd-review-slider .swiper-wrapper').forEach(function (e) {
                    e.insertAdjacentHTML('beforeend', ` 
                        <div class="swiper-slide">
                            <div class="gmd-review-card">
                                <div class="gmd-review-header">
                                    <div class="gmd-rating-wrapper">
                                        <div class="gmd-info">
                                            <span class="gmd-author">${dataJsonText[i].author}</span>
                                            <p class="gmd-tag">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                                    <path d="M10.9863 6.45996L8.32031 9.8584C8.11523 10.1221 7.84424 10.2783 7.50732 10.3271C7.17041 10.376 6.86523 10.3027 6.5918 10.1074C6.57227 10.0879 6.55029 10.0684 6.52588 10.0488C6.50146 10.0293 6.47949 10.0098 6.45996 9.99023L4.84863 8.4668C4.70215 8.32031 4.62646 8.14453 4.62158 7.93945C4.6167 7.73438 4.6875 7.55859 4.83398 7.41211C4.9707 7.25586 5.1416 7.17529 5.34668 7.17041C5.55176 7.16553 5.73242 7.23633 5.88867 7.38281L7.30957 8.73047L9.81445 5.53711C9.94141 5.37109 10.1074 5.27588 10.3125 5.25146C10.5176 5.22705 10.7031 5.27832 10.8691 5.40527C11.0254 5.53223 11.1157 5.69824 11.1401 5.90332C11.1646 6.1084 11.1133 6.29395 10.9863 6.45996ZM13.5645 7.5C13.5742 7.05078 13.4497 6.64062 13.1909 6.26953C12.9321 5.89844 12.5879 5.63965 12.1582 5.49316C12.3633 5.09277 12.4316 4.66797 12.3633 4.21875C12.2949 3.76953 12.1045 3.37891 11.792 3.04688C11.4893 2.72461 11.1182 2.5293 10.6787 2.46094C10.2393 2.39258 9.82422 2.46094 9.43359 2.66602C9.30664 2.23633 9.06494 1.88477 8.7085 1.61133C8.35205 1.33789 7.94922 1.20117 7.5 1.20117C7.05078 1.20117 6.64795 1.33789 6.2915 1.61133C5.93506 1.88477 5.69336 2.23633 5.56641 2.66602C5.17578 2.46094 4.76074 2.39258 4.32129 2.46094C3.88184 2.5293 3.51074 2.72461 3.20801 3.04688C2.89551 3.37891 2.70508 3.76953 2.63672 4.21875C2.56836 4.66797 2.63672 5.09277 2.8418 5.49316C2.42188 5.64941 2.08252 5.91064 1.82373 6.27686C1.56494 6.64307 1.43555 7.05078 1.43555 7.5C1.43555 7.94922 1.56494 8.35693 1.82373 8.72314C2.08252 9.08936 2.42188 9.35059 2.8418 9.50684C2.63672 9.90723 2.56836 10.332 2.63672 10.7812C2.70508 11.2305 2.89551 11.6211 3.20801 11.9531C3.51074 12.2754 3.88184 12.4707 4.32129 12.5391C4.76074 12.6074 5.17578 12.5391 5.56641 12.334C5.69336 12.7637 5.93506 13.1152 6.2915 13.3887C6.64795 13.6621 7.05078 13.7988 7.5 13.7988C7.94922 13.7988 8.35205 13.6621 8.7085 13.3887C9.06494 13.1152 9.30664 12.7637 9.43359 12.334C9.82422 12.5391 10.2393 12.6074 10.6787 12.5391C11.1182 12.4707 11.4893 12.2754 11.792 11.9531C12.1045 11.6211 12.2949 11.2305 12.3633 10.7812C12.4316 10.332 12.3633 9.90723 12.1582 9.50684C12.5879 9.36035 12.9321 9.10156 13.1909 8.73047C13.4497 8.35938 13.5742 7.94922 13.5645 7.5Z" fill="#5B51D8"/>
                                                </svg>
                                                Geverifieerd
                                            </p>
                                        </div>
                                        <div class="rating-wrapper">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="16" viewBox="0 0 80 16" fill="none">
                                                <path d="M8.0625 1.54688L6.32812 6.39062H1.70312L5.48438 9.23438L4.14062 14.25L8.0625 11.25L11.9844 14.25L10.625 9.23438L14.4219 6.39062H9.79688L8.0625 1.54688Z" fill="#F4B400"/>
                                                <path d="M24.0625 1.54688L22.3281 6.39062H17.7031L21.4844 9.23438L20.1406 14.25L24.0625 11.25L27.9844 14.25L26.625 9.23438L30.4219 6.39062H25.7969L24.0625 1.54688Z" fill="#F4B400"/>
                                                <path d="M40.0625 1.54688L38.3281 6.39062H33.7031L37.4844 9.23438L36.1406 14.25L40.0625 11.25L43.9844 14.25L42.625 9.23438L46.4219 6.39062H41.7969L40.0625 1.54688Z" fill="#F4B400"/>
                                                <path d="M56.0625 1.54688L54.3281 6.39062H49.7031L53.4844 9.23438L52.1406 14.25L56.0625 11.25L59.9844 14.25L58.625 9.23438L62.4219 6.39062H57.7969L56.0625 1.54688Z" fill="#F4B400"/>
                                                <path d="M72.0625 1.54688L70.3281 6.39062H65.7031L69.4844 9.23438L68.1406 14.25L72.0625 11.25L75.9844 14.25L74.625 9.23438L78.4219 6.39062H73.7969L72.0625 1.54688Z" fill="#F4B400"/>
                                            </svg>
                                            <p>${dataJsonText[i].rating}</p>
                                        </div>
                                    </div>
                                </div>
                                <p class="gmd-review-text">${dataJsonText[i].review}</p>
                            </div>
                        </div>
                    `);
                });
            }

            const checkSlider = setInterval(() => {
                if (typeof Swiper !== "undefined") {
                    clearInterval(checkSlider);
                    new Swiper("#custom-gallery", {
                        direction: "horizontal",
                        loop: true,
                        slidesPerView: 1,
                        spaceBetween: 20,
                        autoplay: {
                            delay: 5000, // 5 seconds
                            disableOnInteraction: false
                        },
                        centeredSlides: false,      // keep slides aligned to the left
                        navigation: {
                            nextEl: ".custom-slider-wrapper .swiper-button-next",
                            prevEl: ".custom-slider-wrapper .swiper-button-prev",
                        },
                    });
                }
            }, 500);
        }
    });
})();