<template>
    <Wrapper>
        <div class="publication">
            <p class="hashtags">
                <span v-for="tag in publication.tags" :key="tag">
                    #{{ tag }}
                </span>
            </p>

            <h1 class="title">{{ publication.title }}</h1>
            <p class="article-info">
                Від {{ publication.author }} | Опубліковано:
                {{ publication.publishedAt | formatDate }} | Час читання:
                {{ publication.readingTime }} хв
            </p>

            <img :src="publication.imageLink" class="article-image" alt="" />

            <span v-html="publication.body" class="article-body" />

            <PublicationFooter :reactions="publication.reactions" />
        </div>
    </Wrapper>
</template>

<script>
import Wrapper from "@/components/Wrapper";
import PublicationFooter from "@/components/PublicationFooter";
import { api } from "@/utils/api";

export default {
    data() {
        return {
            publication: {}
        };
    },
    components: {
        Wrapper,
        PublicationFooter
    },
    mounted() {
        api(`publications/${this.$route.params.id}`)
            .then(response => response.json())
            .then(json => (this.publication = json));
    }
};
</script>

<style lang="scss" scoped>
.publication {
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

.title {
    margin: 0;
}

.article {
    &-info {
        color: #9b9b9b;
        margin: 0 0 1rem 0;
    }

    &-image {
        max-width: 100%;
    }

    &-body {
        line-height: 1.58;

        &::v-deep {
            p {
                margin: 20px 0 0 0;
            }

            blockquote {
                color: rgba(0, 0, 0, 0.6);
                text-align: center;
                font-style: italic;
                font-size: 20px;
            }
        }
    }
}
</style>

<style lang="scss">
.article-body {
    & img {
        max-width: 100%;
    }
}
</style>

