<script>
    import { createEventDispatcher } from "svelte";
    export let min;
    export let max;
    export let step;
    export let level = 0;
    const dispatch = createEventDispatcher();

</script>

<style>
    input[type="range"] {
        -webkit-appearance: none;
        background: none;
        margin: 0 7px;
        width: 120px;
    }

    input[type="range"]:focus {
        outline: none;
    }

    input[type="range"]::-webkit-slider-runnable-track {
        width: 100%;
        height: 8px;
        cursor: pointer;
        background: #ccc;
        border-radius: 8px;
    }

    input[type="range"]::-webkit-slider-thumb {
        border: 0;
        height: 24px;
        width: 24px;
        border-radius: 12px;
        background: var(--text-color);
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -7px;
    }

    input[type="range"]:focus::-webkit-slider-runnable-track {
        background: var(--highlight);
        border-radius: 4px;
    }

    input[type="range"]::-moz-range-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        background: #3071a9;
        border-radius: 1.3px;
        border: 0.2px solid #010101;
    }
    input[type="range"]::-moz-range-thumb {
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        border: 1px solid #000000;
        height: 36px;
        width: 16px;
        border-radius: 3px;
        background: #ffffff;
        cursor: pointer;
    }

</style>

<input
    type="range"
    {min}
    {max}
    {step}
    bind:value={level}
    on:input={() => dispatch("change", level)}
/>
