<template>
    <div class="publication">
        <p class="hashtags">
        <span
            v-for="tag in publication.tags"
            v-bind:key="tag"
        >#{{tag}} </span>
        </p>

        <h1 class="title">{{publication.title}}</h1>
        <p class="article-info">Від {{publication.author}} | Опубліковано: {{publication.publishedAt | formatDate}} | Час читання: {{publication.readingTime}} хв</p>

        <img :src="publication.imageLink" class="article-image" alt="">

        <span v-html="publication.body" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            publication: {}
        }
    },
    mounted() {
         // fetch publication by id
        fetch('http://localhost:8000/api/publications/'+this.$route.params.id)
        .then(response => response.json())
        .then(json => this.publication = json)
    }
}
</script>

<style scoped>
.publication {
    max-width: 60%;
    margin: 0 auto;
    text-align: left;
}

.title {
    margin: 0;
}

.article-info {
    color: #9B9B9B;
    margin: 0 0 1rem 0;
}

.article-image {
    max-width: 100%;
}
</style>