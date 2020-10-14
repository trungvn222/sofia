<template>
<footer class="footer">
    <div class="container-full footer__inner">
        <div class="row footer__inner__row">
            <div class="col-12 col-md-6 col-lg-2 footer__inner__row__col">
                <Logo dark="true" :logoUrlDark="LogoFooterUrl" />
                <socials class="footer__social" facebookUrl="https://www.facebook.com" youtubeUrl="https://www.youtube.com/" instagramUrl="https://www.instagram.com/" size="small" />
            </div>
            <div class="col-12 col-md-6 col-lg-2 footer__inner__row__col">
                <h3 class="footer__inner__row__col__title">THE COMPANY</h3>
                <ul class="reset-ul">
                    <li>
                        <router-link :to="{ name: 'Products' }">
                            Products
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'OurStory' }">
                            Our Story
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="col-12 col-md-6 col-lg-3 footer__inner__row__col">
                <h3 class="footer__inner__row__col__title">Contact</h3>
                <icon-text class="d-block mb-3" text="contact@company.com.vn" :iconUrl="emailIconUrl" href="mailto:contact@company.com.vn" />
                <icon-text class="d-block" text="(+84) 96 123 1233" :iconUrl="phoneIconUrl" href="tel:084961231233" />
            </div>
            <div class="col-12 col-md-6 col-lg-5 footer__inner__row__col">
                <h3 class="footer__inner__row__col__title">Location</h3>
                <div class="option-property-address">
                    <p>Head Office | Main Factory | Showroom<br>Tran Huu Duc, Cau Dien ward, Nam Tu Liem district, Hanoi, Vietnam</p>
                    <p>Branch Office | Factory 2<br>Vinh Phu 24, Trung quarter, Vinh Phu ward, Thuan An town, Binh Duong, Vietnam</p>

                </div>
            </div>

        </div>
    </div>
    <div class="footer__copyright">
        <div class="container-full">© Copyright Sofia Interior Joint Stock Company</div>
    </div>
</footer>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue';
import Socials from "@/components/Socials.vue";
import LogoFooter from "@/assets/imgs/footer-logo.png";
import Logo from "@/components/Logo.vue";
import IconText from "@/components/IconText.vue";
import EmailIcon from "@/assets/imgs/email.png";
import PhoneIcon from "@/assets/imgs/phone.png";

export default defineComponent({
    components: {
        Logo,
        Socials,
        IconText
    },
    data() {
        return {
            LogoFooterUrl: LogoFooter,
            emailIconUrl: EmailIcon,
            phoneIconUrl: PhoneIcon
        }
    },

})
</script>

<style lang="scss">
@import '../assets/scss/mixins';

.footer {
    background: var(--background-color-light);
    padding-top: 40px;

    &__social {
        margin-top: 30px;
    }

    &__copyright {
        padding-top: 15px;
        padding-bottom: 15px;

        border-top: 1px solid var(--border-color);
    }

    &__inner {
        &__row {
            &__col {
                margin-bottom: 20px;

                &__title {
                    font-size: 16px;
                    color: var(--text-color-light);
                    font-family: var(--font-body);
                    text-transform: uppercase;
                }

                ul {
                    li {
                        margin-bottom: 20px;

                        &:last-child {
                            margin-bottom: 0px;
                        }

                        a {
                            display: block;
                            color: #666666;

                            &:hover {
                                color: var(--text-color-light);
                                text-decoration: none;
                            }
                        }
                    }
                }
            }
        }
    }

    @include respond-to('medium') {
        &__inner {
            &__row {
                &__col {
                    margin-bottom: 30px;

                    &__title {
                        margin-bottom: 44px;
                    }
                }
            }
        }
    }

    @include respond-to('large') {
        padding-top: 60px;
    }
}
</style>
