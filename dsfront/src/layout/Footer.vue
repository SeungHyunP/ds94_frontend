<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <b-container fluid style="background-color: #AEBDCA">
        <footer>
            <section id="contact" class="section">
                <h1 class="contact__title">Let's Talk</h1>
                <div class="contact__link__container">
                    <div class="contact__links">
                        <font-awesome-icon icon="fa-solid fa-envelope"/>
                        <span> hyunee721@gmail.com</span>
                    </div>
                    <div class="contact__links">
                        <font-awesome-icon icon="fa-brands fa-blogger"/>
                        <span> itteamb.blogspot.com</span>
                    </div>
                </div>

                <p class="contact__rights">
                    2023 D.S. - All rights reserved
                </p>
            </section>
        </footer>
    </b-container>
</template>

<script>


export default {

}
</script>

<style scoped>
/* Contact */
#contact {
    background-color: var(--color-blue);
}

.contact__title,
.contact__email,
.contact__rights {
    color: var(--color-white);
}

.contact__title {
    margin: 32px 0;
}

.contact__link__container{
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
}

.contact__links {
    color: var(--color-white);
    font-size: 30px;
    margin: 1px 0;
    transition: all var(--animation-duration) ease-in;
}

.contact__links:hover {
    transform: scale(1.1);
}

.contact__links span {
    font-size: 25px;
    font-weight: 600;
}
</style>