<template>
    <div class="header">
        <h1>editt.</h1>
    </div>
</template>

<style>
    .header {
        overflow: hidden;
        text-align: left;
    }

    .header h1 {
        font-size: 48px;
        font-weight: bold;
        padding-left: 2em;
    }

    @media screen and (max-width: 500px) {
        .header {
            text-align: center;
        }
        .header h1 {
            padding: 0;
        }
    }
</style>