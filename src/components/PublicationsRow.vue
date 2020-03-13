<template>
    <div class="row">

        <Publication class="column"
            v-for="(publication, index) in publications"
            v-bind:publication="publication"
            v-bind:index="index"
            v-bind:key="publication.id"
        />
        <!-- <Publication class="column"></Publication> -->
        <!-- <Publication class="column"></Publication> -->
        <div class="see-more">
            <p>Більше &rarr;</p>
        </div>
    </div>
</template>

<script>
import Publication from '@/components/Publication'

export default {
    name: 'publication-row',
    props: ['publications'],
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
</style>