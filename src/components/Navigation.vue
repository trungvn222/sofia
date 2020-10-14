<template>
<navigation :class="containerClass">
    <div class="main-navigation__header">
        <ul>
            <li>
                <router-link :to="{ name: 'Home' }">
                    Home
                </router-link>
            </li>
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

    <div class="main-navigation__footer">
        <socials class="text-center" facebookUrl="https://www.facebook.com" youtubeUrl="https://www.youtube.com/" instagramUrl="https://www.instagram.com/" />
        <div class="main-navigation__footer__contact">
            <icon-text text="contact@company.com.vn" :iconUrl="emailIconUrl" href="mailto:contact@company.com.vn" />
            <icon-text text="(+84) 96 123 1233" :iconUrl="phoneIconUrl" href="tel:084961231233" />
        </div>
    </div>
</navigation>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue';
import Socials from "@/components/Socials.vue";
import IconText from "@/components/IconText.vue";
import EmailIcon from "@/assets/imgs/email.png";
import PhoneIcon from "@/assets/imgs/phone.png";

export default defineComponent({
    data() {
        return {
            emailIconUrl: EmailIcon,
            phoneIconUrl: PhoneIcon
        }
    },
    components: {
        Socials,
        IconText
    },
    props: {
        show: Boolean
    },
    computed: {
        containerClass(): any {
            return {
                'main-navigation': true,
                'main-navigation--show': this.show
            }
        }
    }
})
</script>

<style lang="scss">
@import '../assets/scss/mixins';

.main-navigation {
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    width: 100%;
    max-width: 100%;
    background: #fff;
    transform: translateX(100%);
    transition: transform 0.3s linear;
    will-change: transform;
    padding: 110px 15px 15px 15px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;

    &__header,
    &__footer {
        width: 100%;
    }

    &__footer {
        margin-bottom: 15px;

        &__contact {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 30px;

            .icon-text {
                margin: 0 5px;
            }
        }
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;

        li {
            margin-bottom: 30px;

            a {
                color: #000;
                font-size: 16px;
                font-family: var(--font-heading);
                position: relative;

                &:before {
                    content: '';
                    display: block;
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    width: 0px;
                    border-bottom: 1px solid #000;
                    transition: width 0.3s linear;
                    will-change: width;
                }

                &:hover {
                    text-decoration: none;

                    &:before {
                        width: 100%;
                    }
                }
            }
        }
    }

    &--show {
        transform: translateX(0);
    }

    @include respond-to('medium') {
        width: 500px;

        padding: 110px 30px 30px 30px;

        ul {
            li {
                margin-bottom: 40px;

                a {
                    font-size: 28px;
                }
            }
        }

        &__footer {
            &__contact {
                justify-content: space-between;

                .icon-text {
                    margin: 0 0;
                }
            }
        }
    }

}
</style>
