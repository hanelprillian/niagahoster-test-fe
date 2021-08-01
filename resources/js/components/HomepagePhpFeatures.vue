<template>
    <div id="homepage-php-features">
        <div class="container">
            <div class="row justify-content-md-center">
                <div class="col-12 col-md-3 h6 text-center" v-for="(feature, index) in features" :key="index">
                    <div class="d-flex min-h-300px">
                        <img :src="feature.img" class="rounded mx-auto d-block align-self-center"  width="200">
                    </div>
                    {{ feature.text }}
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
                    {
                        text:'PHP Zend Guard Loader',
                        img:'/images/icon_PHP_Hosting_zendguard.png',
                    },
                    {
                        text:'PHP Composer',
                        img:'/images/icon_PHP_Hosting_composer.png',
                    },
                    {
                        text:'PHP ionCube Loader',
                        img:'/images/icon_PHP_Hosting_ioncube.png',
                    },
                ]
            }
        }
    }
</script>

<style lang="scss">
#homepage-php-features {
    padding: 40px 0;

    .min-h-300px {
        min-height: 300px !important;
    }
}
</style>
