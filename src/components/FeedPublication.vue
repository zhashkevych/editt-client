<template>
    <div class="publication row">
        
        <router-link :to="{ name: 'publications', params: {id: publication.id } }" class="title-link">
           
            <div class="croped-image column"
                v-bind:style="{backgroundImage: 'url(' + publication.imageLink + ')'}"
            />

            <div class="column">
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

<style scoped>
    .publication {
        /* position: relative; */
        margin: 0 auto;
        margin-bottom: 3rem;
    }

    .croped-image {
        max-width: 50%;
        height: 160px;
        overflow: hidden;
        background-position: 50% 50% !important;
        background-origin: border-box!important;
        background-size: cover!important;
    }

    .heading {
        font-size: 24px;
        margin-top: 0;
        margin-left: 1rem;
        text-align: left;
    }
    
    .hashtags {
        font-size: 12px;
        margin: 1rem 0 0 0; 
        text-align: left;
        margin-left: 1rem;
    }

    .title-link {
        text-decoration: none;
        color: #2e2e2e;
    }

    .bottom {
        /* position: absolute;
        bottom: 0; */
        text-align: left;
    }

    .author {
        margin-bottom: 0;
        margin-left: 1rem;
    }

    .reading-time {
        margin-top: 0.2rem;
        color: #9B9B9B;
        margin-left: 1rem;
    }

    .column {
        float: left;
        width: 50%;
        text-align: center;
    }
</style>