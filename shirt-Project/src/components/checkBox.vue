<template>
    <div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
            <label class="form-check-label" for="inlineRadio1">S</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
            <label class="form-check-label" for="inlineRadio2">M</label>
        </div>

        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
            <label class="form-check-label" for="inlineRadio2">L</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
            <label class="form-check-label" for="inlineRadio2">XL</label>
        </div>
    </div>
</template>

<script setup>

</script>

<style  scoped>
.form-check-input[type="radio"]:checked {
    background-color: #0d1321; /* Change the background color */
    border-color: #0d1321; /* Change the border color */
}

.form-check-input[type="radio"]:checked + .form-check-label {
    color: #0d1321; /* Change the label color */
}
</style>