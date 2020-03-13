<template>
    <div class="publication">
        <img src="https://miro.medium.com/max/4700/0*2gNPh0hZt_POaNlN" alt="">
        <h2 class="heading">Путь к Простоте</h2>

        <div class="bottom">
            <div class="left">
                <p class="author">Від Василь Пупкін</p>
                <p class="reading-time">Час читання: 4хв</p>
            </div>
            
            <div class="right">
                <p class="hashtags">#мінімалізм #лайфстайл #таймменеджмент</p>
            </div>
        </div>
       
    </div>
</template>

<style scoped>
    .publication {
        position: relative;
    }

    .publication img {
        width: 95%;
    }

    .heading {
        font-size: 24px;
        margin-bottom: 8rem;
    }

    .bottom {
        position: absolute;
        bottom: 0;
    }

    .left {
        float: left;
    }

    .reading-time {
        color: #9B9B9B;
    }
</style>