<template>
    <div class="publication">
        <a href="" class="image">
            <div class="croped-image"
                style='background-image: url("https://miro.medium.com/max/4700/0*2gNPh0hZt_POaNlN");'>
            </div>
        </a>
        
        <div class="heading">
            <p class="hashtags">#мінімалізм #лайфстайл #таймменеджмент</p>
            <h2 class="heading">Путь к Простоте</h2>
        </div>
    
        <div class="bottom">
            <div class="left">
                <p class="author">Від Василь Пупкін</p>
                <p class="reading-time">Час читання: 4хв</p>
            </div>
        </div>
       
    </div>
</template>

<style scoped>
    .publication {
        position: relative;
    }

    .croped-image {
        width: 95%;
        height: 160px;
        overflow: hidden;
        background-position: 50% 50% !important;
        background-origin: border-box!important;
        background-size: cover!important;
    }

    .heading {
        font-size: 24px;
        margin-bottom: 6rem;
        margin-top: 0;
    }
    
    .hashtags {
        font-size: 12px;
    }

    .bottom {
        position: absolute;
        bottom: 0;
    }

    .author {
        margin-bottom: 0;
    }

    .reading-time {
        margin-top: 0.2rem;
        color: #9B9B9B;
    }
</style>