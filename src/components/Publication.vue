<template>
    <div class="publication">
        <div class="croped-image">
            <img src="https://miro.medium.com/max/4700/0*2gNPh0hZt_POaNlN" alt="">
        </div>
        
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
        height: 10rem;
        overflow: hidden;
    }
    .publication img {
       width: 340px;
       height: 160px;
    }

    .heading {
        font-size: 24px;
        margin-bottom: 8rem;
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