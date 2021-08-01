<template>
    <div id="homepage-banner" class="border-bottom">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-12 col-md-6 text-center text-md-left pt-4">
                    <h1 class="font-weight-bold">PHP Hosting</h1>
                    <h2>Cepat, handal, penuh dengan <br>modul PHP yang Anda butuhkan</h2>
                    <ul class="list-group list-group-flush position-relative mt-3 ml-n2">
                        <li class="pl-0 list-group-item border-0 py-1" v-for="(feature, index) in features" :key="index">
                            <font-awesome-icon class="mx-2 text-success font-20px position-relative" icon="check-circle"/>
                            {{ feature }}
                        </li>
                    </ul>
                </div>
                <div class="col-12 col-sm-12 col-md-6 text-center text-md-right order-first order-md-2 align-self-center mb-5 mb-lg-0">
                    <img src="/images/illustration_banner_PHP_hosting-01.svg" width="100%">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                features: [
                    'Solusi PHP untuk performa query yang lebih cepat',
                    'Konsumsi memori yang lebih rendah',
                    'Support PHP 5.3, PHP 5.4, PHP 5.5, PHP 5.6, PHP 7',
                    'Fitur enkripsi IonCube dan Zend Guard Loader',
                ]
            }
        }
    }
</script>

<style lang="scss">
#homepage-banner {
    padding: 40px 0;
}
</style>
