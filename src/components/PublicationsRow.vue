<template>
    <div class="row">
        <Publication class="column"></Publication>
        <Publication class="column"></Publication>
        <Publication class="column"></Publication>
    </div>
</template>

<script>
import Publication from '@/components/Publication'

export default {
    name: 'publication-row',
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
</style>