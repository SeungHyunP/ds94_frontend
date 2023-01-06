<template>
    <div>
        <div class="text-center text-white">

            <h1 style="margin-bottom: 3rem">Generate more leads with a professional landing page!</h1>

            <form>
                <div class="row">
                    <div class="col">
                        <input class="form-control form-control-lg is-invalid" id="txttotalSearchInput" placeholder="Input Text" />
                        <div class="col-auto"><button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                    </div>
                </div>
            </form>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.text-center {
    text-align: center;
}

.text-white {
    --bs-text-opacity: 1;
    color: rgba(13, 110, 253, var(--bs-text-opacity));
}

.row {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-0.5 * var(--bs-gutter-x));
    margin-left: calc(-0.5 * var(--bs-gutter-x));
}

.col {
    flex: 1 0 0%;
}

.col-auto {
    flex: 0 0 auto;
    width: auto;
}

.form-control {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
        -moz-appearance: none;
            appearance: none;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control-lg {
    min-height: calc(1.5em + 2rem + 2px);
    padding: 1rem 1.25rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
}

.btn {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btn-primary {
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
}

.btn-lg {
    padding: 1rem 1.25rem;
    font-size: 1.25rem;
    border-radius: 0.3rem;
}

.is-invalid {
    border-color: #dc3545;
    padding-right: calc(1.5em + 1.5rem);
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.375rem) center;
    background-size: calc(0.75em + 0.75rem) calc(0.75em + 0.75rem);
}
</style>