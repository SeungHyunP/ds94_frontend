<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <h1 style="margin-bottom: 3rem">Generate more leads with a professional landing page!</h1>
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
                <b-button block variant="primary">Login</b-button>
            
            </b-card>
        </b-container>
    </div>
    
</template>

<script>


export default {
    data: function() {
        return {

        }
    }
}

</script>

<style>

</style>