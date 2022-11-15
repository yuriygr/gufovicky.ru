<template>
    <div class="card" :class="[
        '--type_' + card.type,
        '--size_' + card.size
    ]">
        <a class="card__link" :href="card.link" target="_blank" rel="noreferrer noopener"></a>
        <div class="card__hover-mask"></div>
        <div class="card__content">
            <div class="card__title" v-text="card.title"></div>
            <div class="card__information" v-html="card.information"></div>
        </div>
        <div v-if="card.cover" class="card__cover" :style="{ 'background-image': 'url(' + card.cover + ')' }"></div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: ['card']
    }
</script>

<style scoped lang="scss">
.card {
    position: relative;
    background: #fff;
    border-radius: 4px;
    user-select: none;
    transition: box-shadow .1s ease-out;
    box-shadow: 0 0.0005rem 0.1rem 0 hsla(210,7%,61%,.15),
                0 2px 15px 0 hsla(210,7%,61%,.15);

    &.--type_twitch {
        background: linear-gradient(45deg, #4b367c 33%, #6441A4 66%, #4b367c);
        .card__title { color: #fff; }
        .card__information { color: #ccc; }
    }

    &.--type_youtube .card__title { color: #ff0000; }
    &.--type_vk .card__title { color: #4680C2; }
    &.--type_telegram .card__title { color: #0088cc; }
    &.--type_tiktok  .card__title {
      color: #000;
    }
    &.--type_zen .card__title { color: #000; }
    &.--type_donate .card__title { color: #f77222; }
}

.card:hover {
    box-shadow: 0 0.0005rem 0.1rem 0 hsla(210,7%,61%,.2),
                0 2px 15px 0 hsla(210,7%,61%,.2);

    .card__hover-mask {
        opacity: .2;
    }
    .card__cover {
        visibility: visible;
        opacity: 1;
        left: 45px;
    }
}

.card__hover-mask,
.card__link {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
.card__link {
    z-index: 5;
}
.card__hover-mask {
    background-color: hsla(0,0%,100%,.4);
    transition: opacity .1s ease-out;
    opacity: 0;
    z-index: 2;
}
.card__content {
    z-index: 4;
    padding: 4rem 1rem;
    text-align: center;
}
.card__title {
    font-weight: bold;
    font-size: 2.5rem;
    padding: 0;
    margin: 0;
}
.card__information {
    padding: .3rem 0 0;
    font-size: 1.5rem;
    color: #959ca3;
}
.card__cover {
    visibility: hidden;
    opacity: 0;
    background-position: center center;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    height: 220px;
    width: 220px;
    z-index: 4;
    transition: visibility 0s, opacity 0.5s linear, left 0.2s linear;
}
</style>