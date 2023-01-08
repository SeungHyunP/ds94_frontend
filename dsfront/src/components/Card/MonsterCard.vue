<template>
    <!-- <b-card
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        class="mb-2"
        style="max-width: 20rem;"
        
    > -->
    <b-card
        :img-src="require('@/assets/image/sample.png')"
        img-alt="Image"
        class="mb-2"
        style="max-width: 15rem;"
    >

    <b-input-group prepend="이름" class="mt-3">
        <b-form-input size="sm" placeholder="Name"></b-form-input>
        <b-button size="sm" type="submit">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </b-button>
    </b-input-group>
        
    <b-button-group class="btn__container">
        <b-button class="attr__btn" pill size="sm" variant="outline-danger">불</b-button>
        <b-button class="attr__btn" pill size="sm" variant="outline-primary">물</b-button>
        <b-button class="attr__btn" pill size="sm" variant="outline-info">풍</b-button>
        <b-button class="attr__btn" pill size="sm" variant="outline-warning">빛</b-button>
        <b-button class="attr__btn" pill size="sm" variant="outline-dark">암</b-button>
    </b-button-group>

    </b-card>
</template>

<script>
export default {

}
</script>

<style scoped>

.btn__container {
    margin-top: 10px;
    width: 100%;
    display: inline-flex;
    justify-content: space-evenly;
}

.attr__btn {
    max-width: 32px;
}

</style>