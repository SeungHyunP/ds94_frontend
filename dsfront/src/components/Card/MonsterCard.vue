<template>
    <div>
        <b-card
            :img-src="require('@/assets/image/sample.png')"
            img-alt="Image"
            class="mb-2"
            style="max-width: 210px;"
        >

        <b-input-group prepend="이름">
            <b-form-input size="sm" placeholder="Name"></b-form-input>
            <b-button size="sm" type="submit">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </b-button>
        </b-input-group>
            
        <b-button-group class="btn__container">
            <b-button class="attr__btn" v-bind:class="{active: this.PROPERTY_LIST[0]}" @click="ActiveProperty(this.PROPERTY_FIRE)"     pill size="sm" variant="outline-danger">불</b-button>
            <b-button class="attr__btn" v-bind:class="{active: this.PROPERTY_LIST[1]}" @click="ActiveProperty(this.PROPERTY_WATER)"    pill size="sm" variant="outline-primary">물</b-button>
            <b-button class="attr__btn" v-bind:class="{active: this.PROPERTY_LIST[2]}" @click="ActiveProperty(this.PROPERTY_WIND)"     pill size="sm" variant="outline-info">풍</b-button>
            <b-button class="attr__btn" v-bind:class="{active: this.PROPERTY_LIST[3]}" @click="ActiveProperty(this.PROPERTY_BRIGHT)"   pill size="sm" variant="outline-warning">빛</b-button>
            <b-button class="attr__btn" v-bind:class="{active: this.PROPERTY_LIST[4]}" @click="ActiveProperty(this.PROPERTY_DARK)"     pill size="sm" variant="outline-dark">암</b-button>
        </b-button-group>

        </b-card>
    </div>

</template>

<script>
export default {

    compatConfig: { MODE: 3 },
    
    data() {
        return {
            PROPERTY_FIRE    : '0',
            PROPERTY_WATER   : '1',
            PROPERTY_WIND    : '2',
            PROPERTY_BRIGHT  : '3',
            PROPERTY_DARK    : '4',

            PROPERTY_LIST : [false,false,false,false,false]
        }
    },

    methods: {
        ActiveProperty(category){
            this.PROPERTY_LIST = [false,false,false,false,false];       // Init
            this.PROPERTY_LIST[category] = true;
        }
    }

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