<script>
    export let checked = true;
    export let handleChange = () => {};

</script>

<style>
    .switch {
        position: relative;
        display: block;
        width: 48px;
        height: 24px;
    }

    /* Hide default HTML checkbox */
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #999;
        transition: 0.4s;
        border-radius: 16px;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 4px;
        bottom: 4px;
        background-color: var(--bg-color);
        transition: 0.4s;
        border-radius: 50%;
    }

    input:checked + .slider {
        background-color: var(--text-color);
    }

    input:focus + .slider {
        box-shadow: 0 0 1px var(--text-color);
    }

    input:checked + .slider:before {
        transform: translateX(24px);
    }

</style>

<label class="switch">
    <input type="checkbox" {checked} on:change={handleChange} />
    <span class="slider" />
</label>
