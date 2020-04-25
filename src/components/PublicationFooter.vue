<template>
    <footer class="publication-footer">
        <div class="reaction">
            <ReactionButton 
                class="button"
                :reactions="reactions"
            />
        </div>
        
        <!-- Share buttons won't be used for MVP -->

        <!-- <div class="share">
            <ul class="socials">
                <li class="socials-item">
                    <a href="https://t.me/zhashkevych" class="socials-link" target="_blank">
                        <img class="socials-icon" src="../assets/icons/linkedin.png" alt="LinkedIn" />
                    </a>
                </li>
                <li class="socials-item">
                    <a :href="'https://www.facebook.com/sharer/sharer.php?u' + publication_link" class="socials-link" target="_blank">
                        <img class="socials-icon" src="../assets/icons/facebook.png" alt="Facebook" />
                    </a>
                </li>
                <li class="socials-item">
                    <a href="https://www.instagram.com/editt.network/" class="socials-link" target="_blank">
                        <img class="socials-icon" src="../assets/icons/twitter.png" alt="Twitter" />
                    </a>
                </li>
            </ul>
        </div> -->
    </footer>
</template>

<script>
   import ReactionButton from "@/components/ReactionButton"

    export default {
        name: "PublicationFooter",
        props: ["reactions"],
        components: {
            ReactionButton
        },
    }
</script>

<style scoped lang="scss">
  .publication-footer {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        // border-top: 1px solid #b7b7b7;
        padding: 20px 0;
        background: #ffffff;
        margin: auto auto 0;

        @include tablet {
            flex-direction: column;
        }
    }

    .reaction {
        display: flex;
        justify-content: space-between;
        align-items: baseline;

        @include tablet {
            flex-direction: column;
            margin-bottom: 20px;
            align-items: center;
        }
    }

    .button {
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

    .share {
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