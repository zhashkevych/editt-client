<template>
    <div class="row">

        <Publication class="column"
            v-for="(publication, index) in publications"
            v-bind:publication="publication"
            v-bind:index="index"
            v-bind:key="publication.id"
        />

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
}

.column {
  float: left;
  width: 33.33%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
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
</style>