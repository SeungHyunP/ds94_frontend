<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <!-- <b-nav> -->
            <b-navbar style="background-color: darkgrey" >
                <b-navbar-brand>DS</b-navbar-brand>

                <b-navbar-nav>
                    <b-nav-item to="/Research/AttackResearch">Attack</b-nav-item>
                    <!-- <b-nav-item herf="#">Attack</b-nav-item> -->
                    <b-nav-item to="/Research/DefenseResearch">Defense</b-nav-item>
                    <b-nav-item to="/Research/Board">Board</b-nav-item>
                    <b-nav-item-dropdown text="Inform" right>
                        <b-dropdown-item to="/Research/User">User</b-dropdown-item>
                        <b-dropdown-item to="/Research/Monster">Monster</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>

                <b-navbar-nav>
                    <b-nav-form>
                        <b-form-input size="sm" placeholder="Search"></b-form-input>
                        <b-button size="sm" type="submit">
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                        </b-button>
                    </b-nav-form>
                </b-navbar-nav>
            </b-navbar>
        <!-- </b-nav> -->
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>