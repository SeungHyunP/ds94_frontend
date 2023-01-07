<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <h1 style="margin-bottom: 3rem">Welcom this page!</h1>
        <b-container fluid="sm" style="max-width: fit-content;">
            <b-card>
                <b-form>
                    <b-row class="my-1">
                        <b-col>
                            <b-form-input id="txtId" type="text" placeholder="ID"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="my-1">
                        <b-col>
                            <b-form-input id="txtPassword" type="text" placeholder="Password"></b-form-input>
                        </b-col>
                    </b-row>
                </b-form>
                <b-button block variant="primary" @click="loginSubmit">Login</b-button>
            </b-card>
        </b-container>
    </div>
    
</template>

<script>


export default {
    data: function() {
        return {

        }
    },

    methods: {
        loginSubmit() {

            // TDOO :: 로그인 토큰 추가

            this.$router.push("/Home");

        }
    },
}

</script>

<style>

</style>