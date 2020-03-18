<template>
    <div class="header noselect">
        <h1 class="logo">
            <router-link to="/" class="link">editt.</router-link>
        </h1>
    </div>
</template>

<style>
    .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
                user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Opera and Firefox */
    }

    .link {
        text-decoration: none;
        color: #2e2e2e;
    }

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
        .logo {
            max-width: 100%;
        }
    }
</style>
