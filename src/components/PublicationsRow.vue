<template>
    <div>
        <div class="row">

            <Publication class="column"
                v-for="(publication, index) in publications"
                v-bind:publication="publication"
                v-bind:index="index"
                v-bind:key="publication.id"
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

<style>
.row {
    margin: auto;
    display: flex;
}

.column {
    margin: 0 0.5rem;
    flex: 1 1 0px;
}

.see-more {
    text-align: right;
}

.see-more p {
    margin: 0;
}

.see-more-link {
    text-decoration: none;
    color: #2e2e2e;
}

    @media screen and (max-width: 500px) {
        .row {
            flex-direction: column;
            align-items: center;
        }
    }
</style>
