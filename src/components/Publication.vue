<template>
    <div class="publication">

        <router-link :to="{ name: 'publications', params: {id: publication.id } }" class="title-link">

            <div class="cropped-image"
                v-bind:style="{backgroundImage: 'url(' + publication.imageLink + ')'}"
            />
            <div class="heading">
                <p class="hashtags">
                    <span
                        v-for="tag in publication.tags"
                        v-bind:key="tag"
                    >#{{tag}} </span>
                </p>
                <h2 class="heading">{{publication.title}}</h2>
                <div class="bottom">
                    <div class="left">
                        <p class="author">Від {{publication.author}}</p>
                        <p class="reading-time">{{publication.publishedAt | formatDate}} | Час читання: {{publication.readingTime}} хв</p>
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
  },
}
</script>

<style lang="scss" scoped>
    .publication {
        position: relative;
    }

    .cropped-image {
        width: 100%;
        height: 160px;
        overflow: hidden;
        background-position: 50% 50%;
        background-origin: border-box;
        background-size: cover;
    }

    .heading {
        font-size: 15px;
        margin-top: 0;
    }

    .hashtags {
        font-size: 12px;
        margin: 1rem 0 0 0;
    }

    .title-link {
        text-decoration: none;
        color: #2e2e2e;
    }

    .author {
        margin-bottom: 0;
        margin-top: 1rem;
    }

    .reading-time {
        margin-top: 0.2rem;
        color: #9B9B9B;
    }

    @media screen and (max-width: 500px) {
        .publication {
            margin-bottom: 1rem;
        }

        .cropped-image {
            height: 100px;
            width: 100px;
            flex: 0 0 auto;
            margin-right: 1rem;
        }

        .title-link {
            display: flex;
            text-align: right;
        }

        .heading {
            font-size: 16px;
            margin-top: 0;
            text-align: left;
        }

        .heading h2 {
            display: inline-block;
            margin-bottom: 0;
        }

        .author {
            font-size: 12px;
        }

        .hashtags {
            font-size: 10px;
            margin: 0;
        }

        .reading-time {
            font-size: 13px;
        }
    }
</style>
