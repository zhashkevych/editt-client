<template>
    <div class="publication">
        
        <router-link :to="{ name: 'publications', params: {id: publication.id } }" class="title-link">
           
            <div class="croped-image"
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
            </div>

        </router-link>
    
        <div class="bottom">
            <div class="left">
                <p class="author">Від {{publication.author}}</p>
                <p class="reading-time">{{publication.publishedAt | formatDate}} | Час читання: {{publication.readingTime}} хв</p>
            </div>
        </div>
       
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

<style scoped>
    .publication {
        position: relative;
    }

    .croped-image {
        width: 95%;
        height: 160px;
        overflow: hidden;
        background-position: 50% 50% !important;
        background-origin: border-box!important;
        background-size: cover!important;
    }

    .heading {
        font-size: 24px;
        margin-bottom: 6rem;
        margin-top: 0;
    }
    
    .hashtags {
        font-size: 12px;
    }

    .title-link {
        text-decoration: none;
        color: #2e2e2e;
    }

    .bottom {
        position: absolute;
        bottom: 0;
    }

    .author {
        margin-bottom: 0;
    }

    .reading-time {
        margin-top: 0.2rem;
        color: #9B9B9B;
    }
</style>