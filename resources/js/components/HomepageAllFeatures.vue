<template>
    <div id="homepage-all-features">
        <div class="container">
            <div class="text-center mb-5">
                <h2>Semua Paket Hosting Sudah Termasuk</h2>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6 col-12" v-for="feature in features">
                    <div class="features-icons-item mb-5 mb-lg-0 mb-lg-5">
                        <div class="features-icons-icon mb-3">
                            <img class="features-icons-img":src="feature.img">
                        </div>
                        <h3 class="features-title">{{ feature.title }}</h3>
                        <p class="lead mb-0">{{ feature.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
        <hr class="line-separator my-4">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                features: [
                    {
                        img: '/images/icon PHP Hosting_PHP Semua Versi.svg',
                        title: 'PHP Semua Versi',
                        desc: 'Pilih mulai dari versi PHP 5.3 s/d PHP 7. Ubah sesuka Anda!',
                    },
                    {
                        img: '/images/icon PHP Hosting_My SQL.svg',
                        title: 'MySQL Versi 5.6',
                        desc: 'Nikmati MySQL versi terbaru, tercepat dan kaya akan fitur.',
                    },
                    {
                        img: '/images/icon PHP Hosting_CPanel.svg',
                        title: 'Panel Hosting Cpanel',
                        desc: 'Kelola website dengan panel canggih yang familiar di hati Anda.',
                    },
                    {
                        img: '/images/icon PHP Hosting_garansi uptime.svg',
                        title: 'Garansi Uptime 99.9%',
                        desc: 'Data center yang mendukung kelangsungan website Anda 24/7.',
                    },
                    {
                        img: '/images/icon PHP Hosting_InnoDB.svg',
                        title: 'Database InnoDB Unlimited',
                        desc: 'Jumlah dan ukuran database yang tumbuh sesuai kebutuhan Anda.',
                    },
                    {
                        img: '/images/icon PHP Hosting_My SQL remote.svg',
                        title: 'Wildcard Remote MySQL',
                        desc: 'Mendukung s/d 25 max_user_connections dan 100 max_connections.',
                    },
                ],
            }
        }
    }
</script>

<style lang="scss">
#homepage-all-features {
    text-align: center;
    padding: 40px 0;
}
    .showcase .showcase-text {
        padding: 3rem;
    }

    .showcase .showcase-img {
        min-height: 30rem;
        background-size: cover;
    }

    @media (min-width: 768px) {
        .showcase .showcase-text {
            padding: 7rem;
        }
    }

    .features-title {
        font-size: 1.1rem;
        font-weight: 700;
    }

    .features-icons {
        padding-top: 7rem;
        padding-bottom: 7rem;
    }

    .features-icons-img {
        margin: 0px auto;
        width: 60px;
    }

    .features-icons .features-icons-item {
        max-width: 20rem;
    }

    .features-icons .features-icons-item .features-icons-icon {
        height: 7rem;
    }

    .features-icons .features-icons-item .features-icons-icon i {
        font-size: 4.5rem;
    }

    .features-icons .features-icons-item:hover .features-icons-icon i {
        font-size: 5rem;
    }

    .testimonials {
        padding-top: 7rem;
        padding-bottom: 7rem;
    }

    .testimonials .testimonial-item {
        max-width: 18rem;
    }

    .testimonials .testimonial-item img {
        max-width: 12rem;
        box-shadow: 0px 5px 5px 0px #adb5bd;
    }

    .call-to-action {
        position: relative;
        background-color: #343a40;
        /* background: url("../img/bg-masthead.jpg") no-repeat center center; */
        background-size: cover;
        padding-top: 7rem;
        padding-bottom: 7rem;
    }

    .call-to-action .overlay {
        position: absolute;
        background-color: #212529;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        opacity: 0.3;
    }

    footer.footer {
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
</style>
