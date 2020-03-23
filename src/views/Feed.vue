<template>
    <Wrapper>
        <div class="feed">
            <h1>{{feedText}}</h1>

            <PublicationsList
                :publications="publications"
                :stretch-publication="false"
            />
        </div>
    </Wrapper>
</template>

<script>
    import PublicationsList from "@/components/PublicationsList"
    import Wrapper from "@/components/Wrapper"
    import { api } from "@/utils/api"

    export default {
        data() {
            return {
                publications: [],
            }
        },
        created() {
            api(`publications?type=${this.$route.params.type}`)
                .then(response => response.json())
                .then(json => this.publications = json.publications)
        },
        components: {
            Wrapper,
            PublicationsList,
        },
        computed: {
            feedText() {
                if (this.$route.params.type === 'latest') return "Останні публікації:";
                return "Популярне:";
            }
        }
    }
</script>

<style lang="scss" scoped>
    .feed {
        margin: 0 auto;
        text-align: left;

        @include tablet {
            max-width: 80%;
        }

        @include mobile {
            max-width: 100%;
        }
    }
</style>
