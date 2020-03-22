<template>
    <div>
        <div :class="publicationsClassName">

            <PublicationPreview
                class="publication"
                v-for="(publication, index) in publications"
                :publication="publication"
                :index="index"
                :key="publication.id"
            />

        </div>
    </div>

</template>

<script>
    import PublicationPreview from '@/components/PublicationPreview'

    export default {
        name: 'publication-row',
        props: ['publications', 'desktopRow'],
        components: {
            PublicationPreview
        },
        computed: {
            publicationsClassName() {
                if (this.desktopRow) return "publications-row";
                return "publications-column";
            }
        }
    }
</script>

<style lang="scss" scoped>
    .publications-row {
        margin: auto;
        display: flex;

        .publication {
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

        @include mobile {
            flex-direction: column;
            align-items: center;
        }
    }

    .publications-column {
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        .publication {
            margin: 0 auto 3rem;

            @include mobile {
                margin-bottom: 0;
            }
        }

        &::v-deep .title-link {
            display: flex;
            align-items: flex-start;
            flex: 1 1 0px;

            .cropped-image {
                margin-right: 1rem;
            }
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
