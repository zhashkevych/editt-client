<template>
    <Wrapper>
        <div class="feed">
            <h1 v-if="$route.params.type === 'latest'">Останні публікації:</h1>
            <h1 v-else>Популярне:</h1>

            <FeedPublication
                v-for="(publication, index) in publications"
                :publication="publication"
                :index="index"
                :key="publication.id"/>
        </div>
    </Wrapper>
</template>

<script>
    import FeedPublication from '@/components/FeedPublication'
    import Wrapper from "@/components/Wrapper"
    import { api } from "@/utils/api";

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
            FeedPublication,
            Wrapper
        }
    }
</script>

<style lang="scss" scoped>
    .feed {
        max-width: 60%;
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
