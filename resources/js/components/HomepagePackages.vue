<template>
    <div id="homepage-packages">
        <div class="my-4 py-1">
            <div class="container">
                <div class="d-flex align-items-start flex-column align-items-center justify-content-center">
                    <h2 class="h1 mb-auto p-2 text-center">Paket Hosting Singapura yang Tepat</h2>
                    <h3 class="h3 p-2 text-center">Diskon 40% + Domain dan SSL Gratis untuk Anda</h3>
                </div>
            </div>
        </div>
        <div class="my-4 py-1">
            <div class="container">
                <div class="row align-items-start justify-content-center mb-3 text-center">
                    <div v-for="(pkg) in packages" :class="{'card mb-4 mx-0 col-10 col-sm-6 col-md-6 col-lg-3' : !pkg.is_best_seller, 'card card-best-seller border-primary mb-4 mx-0' : pkg.is_best_seller }">
                        <div class="card-header bg-white py-2">
                            <h4 class="my-0 font-weight-bold">{{ pkg.name }}</h4>
                        </div>
                        <div class="card-body card-body-price font-monthserrat border-bottom pt-2 pb-0">
                            <p class="mb-0"><s>Rp. {{ pkg.price }}</s></p>
                            <p class="card-title pricing-card-title mb-0">
                                <sup class="sup-price-text">
                                    Rp
                                </sup>
                                <span class="price">{{ pkg.promo_price_leading_number }}</span>
                                <sup class="sup-price-text">
                                    <b>.{{ pkg.promo_price_back_number }}</b>/ bln
                                </sup>
                            </p>
                        </div>
                        <div class="card-body total-users py-2">
                            <strong>{{ pkg.total_users }}</strong> Pengguna Terdaftar
                        </div>
                        <div class="card-body py-2">
                            <ul class="list-unstyled mt-2 mb-4">
                                <li class="py-1" v-for="(feature) in pkg.features" v-html="feature"></li>
                            </ul>
                        </div>
                        <div class="card-body">
                            <button type="button" class="btn btn-lg font-weight-bold btn-block round-40px" :class="{'btn-primary' : pkg.is_best_seller, 'btn-light bg-white border-2px' : !pkg.is_best_seller}">
                                <span v-if="pkg.discount_percent">Diskon {{pkg.discount_percent}}%</span>
                                <span v-else>Pilih Sekarang</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                packages: [
                    {
                        name: 'Bayi',
                        is_best_seller: false,
                        price: '19.900',
                        promo_price_leading_number: '14',
                        promo_price_back_number: '900',
                        total_users: '938',
                        features: [
                            '<b>0.5X RESOURCE POWER</b>',
                            '<b>500 MB</b> Disk Space',
                            '<b>Unlimited</b> Bandwidth',
                            '<b>Unlimited</b> Database',
                            '<b>1</b> Domain',
                            '<b>Instant</b> Backup',
                            '<b>Unlimited SSL</b> Gratis Selamanya',
                        ]
                    },
                    {
                        name: 'Pelajar',
                        is_best_seller: false,
                        price: '16.900',
                        promo_price_leading_number: '23',
                        promo_price_back_number: '450',
                        total_users: '4.168',
                        features: [
                            '<b>1X RESOURCE POWER</b>',
                            '<b>500 MB</b> Disk Space',
                            '<b>Unlimited</b> Bandwidth',
                            '<b>Unlimited</b> POP3 Email',
                            '<b>Unlimited</b> Database',
                            '<b>10</b> Addon Domains',
                            '<b>Instant</b> Backup',
                            '<b>Domain</b> Gratis Selamanya',
                            '<b>Unlimited SSL</b> Gratis Selamanya',
                        ]
                    },
                    {
                        name: 'Personal',
                        is_best_seller: true,
                        price: '58.900',
                        promo_price_leading_number: '38',
                        promo_price_back_number: '900',
                        total_users: '10.017',
                        features: [
                            '<b>2X RESOURCE POWER</b>',
                            '<b>500 MB</b> Disk Space',
                            '<b>Unlimited</b> Bandwidth',
                            '<b>Unlimited</b> POP3 Email',
                            '<b>Unlimited</b> Database',
                            '<b>Unlimited</b> Addon Domains',
                            '<b>Instant</b> Backup',
                            '<b>Domain</b> Gratis Selamanya',
                            '<b>Unlimited SSL</b> Gratis Selamanya',
                            '<b>Private</b> Nameserver',
                            '<b>SpamAssasin </b> Mail Protection',
                        ]
                    },
                    {
                        name: 'Bisnis',
                        is_best_seller: false,
                        discount_percent: 40,
                        price: '109.900',
                        promo_price_leading_number: '65',
                        promo_price_back_number: '900',
                        total_users: '3.552',
                        features: [
                            '<b>2X RESOURCE POWER</b>',
                            '<b>500 MB</b> Disk Space',
                            '<b>Unlimited</b> Bandwidth',
                            '<b>Unlimited</b> POP3 Email',
                            '<b>Unlimited</b> Database',
                            '<b>Unlimited</b> Addon Domains',
                            '<b>Instant</b> Backup',
                            '<b>Domain</b> Gratis Selamanya',
                            '<b>Unlimited SSL</b> Gratis Selamanya',
                            '<b>Private</b> Nameserver',
                            '<b>Prioritas</b> Layanan Support <br> ',
                            '[FIVE_STARS_ICONS]',
                            '<b>SpamExpert</b> Pro Mail Protection <br> ',
                        ]
                    },
                ],
            }
        },
    }
</script>
<style lang="scss">
#homepage-packages {
    .price {
        font-size: 40px;
        font-weight: bold;
    }

    .sup-price-text {
        top: -1.1rem;
        font-size: 14px;
    }

    .total-users {
        border-bottom: 1px solid #e5e5e5;
    }

    .border-2px {
        border: 2px solid #1c1c1c;
    }

    .card-best-seller {
        .card-header {
            background: #298eea !important;
            color: #ffffff !important;
            border: none;

           &:after, &:before {
                position: absolute;
                content: '';
                top: -8px;
                left: -10px;
                background: url('/images/best-seller-green.png') left top no-repeat;
                background-size: contain;
                width: 100px;
                height: 100px;
            }
        }
        .card-body-price {
            background: #298eea !important;
            color: #ffffff !important;
            border-bottom: none !important;
        }

        .border-primary {
            border: 1px solid #298eea;
        }

        .total-users {
            background: #177eda !important;
            color: #ffffff !important;
            border-bottom: 1px solid #298eea !important;
        }
    }
}
</style>
