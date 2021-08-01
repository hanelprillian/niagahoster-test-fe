<template>
    <div id="navbar">
        <div class="border-bottom py-2">
            <div class="container">
                <div class="row">
                    <div class="position-relative col-12 col-sm-12 col-md-6 text-center text-md-left">
                        <span class="blue-badge text-center">
                            <font-awesome-icon class="icon mx-2 text-white" icon="tag"/>
                        </span>
                        <span class="ml-5">Gratis Ebook 9 Cara Cerdas Menggunakan Domain [x]</span>
                    </div>
                    <div class="col-sm-12 col-md-6 row text-center text-md-right d-flex justify-content-center flex-row flex-nowrap">
                        <a class="btn btn-link">
                            <font-awesome-icon class="mx-1 sm:mx-2" icon="phone-alt"/>
                            0274-5305505
                        </a>
                        <a class="btn btn-link\">
                            <font-awesome-icon class="mx-1 sm:mx-2" icon="comments"/>
                            Live Chat
                        </a>
                        <a class="btn btn-link">
                            <font-awesome-icon class="mx-1 sm:mx-2" icon="user-circle"/>
                            Member Area
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-bottom py-2">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light pl-0 pr-0 py-0">
                    <a class="navbar-brand" href="#">
                        <img src="/images/logo.png" height="60" alt="">
                    </a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item px-1" v-for="(m, index) in menu" :key="index">
                                <a class="nav-link" :href="m.link"> {{ m.title }}</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menu: [
                    {
                        title: 'Hosting',
                        link: '',
                    },
                    {
                        title: 'Domain',
                        link: '',
                    },
                    {
                        title: 'Server',
                        link: '',
                    },
                    {
                        title: 'Website',
                        link: '',
                    },
                    {
                        title: 'Afiliasi',
                        link: '',
                    },
                    {
                        title: 'Promo',
                        link: '',
                    },
                    {
                        title: 'Pembayaran',
                        link: '',
                    },
                    {
                        title: 'Review',
                        link: '',
                    },
                    {
                        title: 'Kontak',
                        link: '',
                    },
                    {
                        title: 'Blog',
                        link: '',
                    }
                ]
            }
        }
    }
</script>
<style lang="scss">
#navbar {
    .blue-badge {
        width: 30px;
        padding: 1px;
        position: absolute;
        top: -8px;
        background: #298eea;

        .icon {
            font-size: 14px;
        }

        &:before, &:after {
            content: "";
            position: absolute;
        }

        &:after {
            height: 0;
            width: 0;
            bottom: -9.5px;
            left: 0;
            border-bottom: 10px solid transparent;
            border-left: 15px solid #298eea;
            border-right: 15px solid #298eea;
        }
    }
}
</style>
