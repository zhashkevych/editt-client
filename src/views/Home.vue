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

                <PublicationsRow
                        :publications="popularPublications"
                        :rowType="typePopular"
                />

                <div class="create">
                    <router-link :to="'create'" class="btn-link">
                        <button class="btn">Створити публікацію</button>
                    </router-link>
                </div>
            </div>
        </div>

        <!-- BLOCK 2 -->

        <div class="block2 margin-bottom">
            <div class="heading">
                <h1>Насолоджуйся якісним контентом.<br>Без реклами.</h1>
                <h4>Ми не Facebook, щоб продавати твої дані рекламодавцям.<br>Ми цінуємо твою конфіденційність.</h4>
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
                        <router-link :to="{name: 'feed', params: {type: 'popular'} }" class="btn-link">
                            <button class="btn popular-btn">Популярне на editt.</button>
                        </router-link>
                    </div>
                </div>
                <div class="column for-creators">
                    <h1>Для кріейторів</h1>

                    <div class="benefits">
                        <ul class="benefits-list">
                            <li>Органічне просування публікацій</li>
                            <li>Створення лояльної аудиторії та<br>розвиток особистого бренду</li>
                            <li>Створення публікацій за лічені секунди</li>
                        </ul>
                    </div>

                    <div class="create">
                        <button class="btn">Створити публікацію</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- BLOCK 3 -->

        <div class="block3 margin-bottom">
            <div class="heading">
                <h1>Ділись думками за лічені секунди.</h1>
                <h4>Від натхення до публікації один editt.</h4>
            </div>

            <div class="latest">
                <h2>Останні публікації:</h2>

                <PublicationsRow
                        :publications="latestPublications"
                        :rowType="typeLatest"
                />

                <div class="create">
                    <router-link :to="'create'" class="btn-link">
                        <button class="btn">Створити публікацію</button>
                    </router-link>
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
        },
        data() {
            return {
                popularPublications: [],
                latestPublications: [],
                typePopular: 'popular',
                typeLatest: 'latest',
            }
        },
        mounted() {
            // fetch popular publications
            fetch('http://localhost:8000/api/publications?type=popular&limit=3')
                .then(response => response.json())
                .then(json => this.popularPublications = json.publications)

            // fetch latest publications
            fetch('http://localhost:8000/api/publications?type=latest&limit=3')
                .then(response => response.json())
                .then(json => this.latestPublications = json.publications)
        },
    }
</script>

<style lang="scss" scoped>
    /* Block 1 */
    .heading {
        @include mobile {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }

        & h1 {
            font-size: 32px;
            margin: 0;

            @include mobile {
                font-size: 32px;
            }
        }

        & h4 {
            margin: 10px;
            color: #9B9B9B;

            @include mobile {
                text-align: center;
                font-size: 12px;
            }
        }
    }

    .popular {
        text-align: left;

        @include mobile {
            padding: 1em 0;
        }
    }

    .latest {
        text-align: left;
    }


    .column {
        &.for-readers, &.for-creators {
            @include mobile {
                width: 100%;
                border: none;
            }
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

    .btn-link {
        text-decoration: none;
        color: #fff;
    }

    /* Block 2 */
    .margin-bottom {
        margin: 5rem 0;
    }

    .block2 .heading {
        padding-bottom: 3rem;
    }

    .row {
        margin: auto;

        &:after {
            content: "";
            display: table;
            clear: both;
        }
    }

    .column {
        float: left;
        width: 50%;
        text-align: center;
    }

    .for-readers {
        box-sizing: border-box;
        border-right: 2px solid #707070;
    }

    /* List */
    .benefits {
        min-height: 12rem;
    }

    .benefits-list {
        text-align: left;
        list-style: none;

        & li {
            margin: 0;
            padding: 14px 0 14px 32px;
            list-style: none;
            background-image: url('../img/BulletPoint.png');
            background-repeat: no-repeat;
            background-position: left center;
            background-size: 20px;
        }
    }

</style>
