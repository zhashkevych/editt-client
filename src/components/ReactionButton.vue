<template>
    <div class="reaction">
        <!-- TODO: clickable image -->
        <img
            src="../assets/icons/fire2.svg"
            class="reaction-icon"
            @click="onClick"
        />

        <p class="reaction-count" v-if="reactionsSum == 1">
            {{ reactionsSum }} Реакція
        </p>
        <p class="reaction-count" v-else-if="reactionsSum >= 2 && reactionsSum <= 4">
            {{ reactionsSum }} Реакції
        </p>
        <p class="reaction-count" v-else-if="reactionsSum >= 5">
            {{ reactionsSum }} Реакцій
        </p>
        <p class="reaction-count" v-else>
            Оціни цей editt першим! {{ reactionsSum }}
        </p>
    </div>
</template>

<script>
export default {
    name: "ReactionButton",
    props: ["reactions", "onReaction"],
    data: function() {
        return { userReactions: 0 };
    },
    methods: {
        onClick: function() {
            this.onReaction();
            this.userReactions += 1;
        }
    },
    computed: {
        reactionsSum: function () {
            return this.reactions + this.userReactions;
        },
    },
};
</script>

<style scoped lang="scss">
.reaction {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include tablet {
        flex-direction: column;
        margin-bottom: 20px;
        align-items: center;
    }

    &-count {
        box-sizing: border-box;
    }

    &-icon {
        box-sizing: border-box;
        $size: 60px;
        width: $size;
        height: $size;
        padding: 0;
        margin: 0;
        margin-right: 10px;
        transition: 0.3s;

        &:active {
            transform: scale(1.1);
        }
    }
}
</style>
