<template>
    <div>

        <!-- BLOCK 1 -->
        
        <div class="block1">
            <div class="heading">
                <h1>Платформа твого розвитку.</h1>
                <h4>Знаходь цікавий контент. Поширюй важливі думки.</h4>
            </div>

            <div class="popular">
                <h2>Популярне:</h2>
                
                <PublicationsRow />
                
                <div class="create">
                    <button class="btn">Створити публікацію</button>
                </div>
            </div>
        </div>

        <!-- BLOCK 2 -->

        <div class="block2">
            <div class="heading">
                <h1>Насолоджуйся якісним контентом.<br>Без реклами.</h1>
                <h4>Ми не Facebook, щоб продавати твої данні рекламодавцям.<br>Ми цінуємо твою конфіденційність.</h4>
            </div>

            <div class="row">
                <div class="column for-readers">
                    <h1>Для читачів</h1>

                    <div class="benefits">
                        <ul class="benefits-list">
                            <li>Актуальний контент</li>
                            <li>Перегляд публікацій без надоїдливої реклами</li>
                            <li>Можливість знаходити однодумців</li>
                        </ul>
                    </div>
                    
                    <div class="create">
                        <button class="btn popular-btn">Популярне на editt.</button>
                    </div>
                </div>
                <div class="column for-creators">
                    <h1>Для кріейторів</h1>

                    <div class="benefits">
                        <ul class="benefits-list">
                            <li>Органічне просування публікацій</li>
                            <li>Створення лояльної аудиторії та<br>розвиток особистого бренду <strong><i>(Coming Soon)</i></strong></li>
                            <li>Можливості для монетизації власної творчості <strong><i>(Coming Soon)</i></strong></li>
                        </ul>
                    </div>

                    <div class="create">
                        <button class="btn">Створити публікацію</button>
                    </div>  
                </div>
            </div>
        </div>    

        <!-- BLOCK 3 -->

        <div class="block1">
            <div class="heading">
                <h1>Платформа твого розвитку.</h1>
                <h4>Знаходь цікавий контент. Поширюй важливі думки.</h4>
            </div>

            <div class="popular">
                <h2>Популярне:</h2>
                
                <PublicationsRow />
                
                <div class="create">
                    <button class="btn">Створити публікацію</button>
                </div>
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
    /* Block 1 */
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

    .btn {
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
        background-color: #65587F;
        padding: 1rem 4em;
        margin: 0 auto;
    }

    .popular-btn {
        background-color: #9B9B9B;
    }

    /* Block 2 */
    .block2 {
        margin: 5rem 0;
    }

    .block2 .heading{
        padding-bottom: 3rem;
    }

    .row {
        margin: auto;
    }

    .column {
        float: left;
        width: 50%;
        text-align: center;
    }

    .row:after {
        content: "";
        display: table;
        clear: both;
    }

    .for-readers {
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        border-right: 2px solid #707070;
    }

    /* List */
    .benefits{
        min-height: 12rem;
    }

    .benefits-list {
        text-align: left;
        list-style:none;
    }

    .benefits-list li {
        margin: 0;
        padding: 14px 0 14px 32px;
        list-style: none;
        background-image: url('../img/BulletPoint.png');
        background-repeat: no-repeat;
        background-position: left center;
        background-size: 20px;
    }

</style>