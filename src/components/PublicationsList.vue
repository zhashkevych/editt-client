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
            align-items: flex-start;

            .publication {
              margin-bottom: 10px;
            }
        }
    }

    .publications-column {
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 600px;

        .publication {
            margin: 0 auto 3rem;
            width: 100%;

            @include mobile {
                margin-bottom: 10px;
            }
        }

        &::v-deep .title-link {
            display: flex;
            align-items: flex-start;

            .cropped-image {
                margin-right: 1rem;
                min-width: 170px;
                max-width: 170px;
                box-sizing: border-box;
                @include mobile {
                    max-width: 100px;
                    min-width: 100px;
                }
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
