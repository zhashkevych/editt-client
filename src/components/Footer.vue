<template>
    <footer class="footer">
        <div class="credentials">
            <Logo class="logo" />
            <small class="copyright">&copy; 2020</small>
        </div>
        <div class="feedback">
            <span class="proposal">Маєш питання чи пропозиції? Пиши нам:</span>
            <ul class="socials">
                <li class="socials-item">
                    <a href="https://t.me/zhashkevych" class="socials-link" target="_blank">
                        <img class="socials-icon" src="../assets/icons/telegram.png" alt="Telegram" />
                    </a>
                </li>
                <li class="socials-item">
                    <a href="https://www.instagram.com/editt.network/" class="socials-link" target="_blank">
                        <img class="socials-icon" src="../assets/icons/instagram.png" alt="Instagram" />
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>
    import Logo from "@/components/Logo"

    export default {
        name: "Footer",
        components: {
            Logo
        }
    }
</script>

<style lang="scss" scoped>
    .footer {
        box-sizing: border-box;
        width: calc(100vw - 200px);
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #b7b7b7;
        padding: 20px 0;
        background: #ffffff;
        margin: auto auto 0;

        @include tablet {
            flex-direction: column;
            box-sizing: border-box;
            width: 100%;
        }
    }

    .credentials {
        display: flex;
        justify-content: space-between;
        align-items: baseline;

        @include tablet {
            flex-direction: column;
            margin-bottom: 20px;
            align-items: center;
        }
    }

    .logo {
        padding-left: 0;
    }

    .copyright {
        margin-left: 5px;
        font-size: 16px;

        @include tablet {
            margin-left: 0;
        }
    }

    .proposal {
        margin-right: 20px;

        @include tablet {
            margin-right: 0;
            margin-bottom: 10px;
        }
    }

    .feedback {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @include tablet {
            flex-direction: column;

        }
    }

    .socials {
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
        margin: 0;
        padding: 0;

        &-item {
            padding: 0;
            margin: 0 10px;
        }

        &-icon {
            box-sizing: border-box;
            $size: 30px;
            width: $size;
            height: $size;
            padding: 0;
            margin: 0;
        }
    }
</style>
