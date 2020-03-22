<template>
    <div>
        <div class="row">

            <Publication class="column"
                         v-for="(publication, index) in publications"
                         :publication="publication"
                         :index="index"
                         :key="publication.id"
            />

        </div>

        <div class="see-more">
            <router-link
                    :to="{name: 'feed', params: {type: rowType} }"
                    class="see-more-link">
                <p>Більше &rarr;</p>
            </router-link>
        </div>
    </div>

</template>

<script>
    import Publication from '@/components/Publication'

    export default {
        name: 'publication-row',
        props: ['publications', 'rowType'],
        components: {
            Publication
        }
    }
</script>

<style lang="scss" scoped>
    .row {
        margin: auto;
        display: flex;

        @include mobile {
            flex-direction: column;
            align-items: center;
        }
    }

    .column {
        margin: 0 40px 0 0;
        flex: 1 1 0px;

        &:last-child {
            margin-right: 0;
        }

        @include tablet {
            margin-right: 20px;
        }

        @include mobile {
            margin: 0;
        }
    }

    .see-more {
        text-align: right;

        & p {
            margin: 0;
        }

        &-link {
            text-decoration: none;
            color: #2e2e2e;
        }
    }
</style>
