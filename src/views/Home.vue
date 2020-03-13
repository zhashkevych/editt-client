<template>
    <div>
        
        <div class="heading">
            <h1>Платформа твого розвитку.</h1>
            <h4>Знаходь цікавий контент. Поширюй важливі думки.</h4>
        </div>

        <div class="popular">
            <h2>Популярне:</h2>
            
            <PublicationsRow />
            
            <div class="create">
                <button class="create-publication-btn">Створити публікацію</button>
            </div>
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
        margin: 0;
    }

    .heading h4 {
        margin: 10px;
        color: #9B9B9B;
    }

    .popular {
        text-align: left;
        padding: 1em 10em;
    }

     @media screen and (max-width: 500px) {
        .heading h1 {
            font-size: 32px;
        }
    }

    /* Button */

    .create {
        margin: 2rem 0rem;
    }

    .create-publication-btn {
        font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
        border: none;
        display: block;
        text-align: center;
        cursor: pointer;
        outline: none;
        overflow: hidden;
        position: relative;
        color: #fff;
        font-weight: 700;
        font-size: 16px;
        background-color: #9b9b9b;
        padding: 1rem 4em;
        margin: 0 auto;
    }
</style>