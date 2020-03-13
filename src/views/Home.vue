<template>
    <div>
        <div class="heading">
            <h1>Платформа твого розвитку.</h1>
            <h4>Знаходь цікавий контент. Поширюй важливі думки.</h4>
        </div>
        <div class="popular">
            <h2>Популярне:</h2>
            <PublicationsRow />
        </div>
    </div>
</template>

<script>
import PublicationsRow from '@/components/PublicationsRow'

export default {
    name: 'home',
    components: {
        PublicationsRow
    }
}
</script>

<style scoped>
    .heading h1 {
        font-size: 32px;
        margin-bottom: 0;
    }

    .heading h4 {
        margin: 10px;
        color: #9B9B9B;
    }

    .popular {
        text-align: left;
    }

     .popular h2 {
        padding: 1em 10em;
    }

     @media screen and (max-width: 500px) {
        .heading h1 {
            font-size: 32px;
        }
    }
</style>