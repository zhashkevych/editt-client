<template>
    <div class="publication">
        <router-link
            :to="{ name: 'publications', params: { id: publication.id } }"
            class="title-link"
        >
            <div
                class="cropped-image"
                :style="{ backgroundImage: `url(${publication.imageLink})` }"
            />
            <div class="heading">
                <p class="hashtags">
                    <span v-for="tag in publication.tags" :key="tag"
                        >#{{ tag }}
                    </span>
                </p>
                <h2 class="title">{{ publication.title }}</h2>
                <div class="bottom">
                    <div class="left">
                        <p class="author">Від {{ publication.author }}</p>
                        <p class="reading-time">
                            {{ publication.publishedAt | formatDate }} | Час
                            читання: {{ publication.readingTime }} хв
                        </p>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        publication: {
            type: Object,
            required: true
        },
        index: Number
    }
};
</script>

<style lang="scss" scoped>
.publication {
    position: relative;

    @include mobile {
        margin-bottom: 1rem;
    }
}

.cropped-image {
    width: 100%;
    height: 160px;
    overflow: hidden;
    background-position: 50% 50%;
    background-origin: border-box;
    background-size: cover;

    @include mobile {
        height: 100px;
        width: 100px;
        flex: 0 0 auto;
        margin-right: 1rem;
    }
}

.heading {
    font-size: 15px;
    margin-top: 0;

    @include mobile {
        font-size: 16px;
        margin-top: 0;
        text-align: left;

        display: inline-block;
        margin-bottom: 0;
    }
}

.title {
    font-size: 15px;
    margin-top: 0;

    @include mobile {
        font-size: 16px;
        margin-top: 0;
        text-align: left;
    }
}

.hashtags {
    font-size: 12px;
    margin: 1rem 0 0 0;

    @include mobile {
        font-size: 10px;
        margin: 0;
    }
}

.title-link {
    text-decoration: none;
    color: #2e2e2e;

    @include mobile {
        display: flex;
        text-align: right;
    }
}

.author {
    margin-bottom: 0;
    margin-top: 1rem;

    @include mobile {
        font-size: 12px;
    }
}

.reading-time {
    margin-top: 0.2rem;
    color: #9b9b9b;

    @include mobile {
        font-size: 13px;
    }
}

@media screen and (max-width: 500px) {
}
</style>
