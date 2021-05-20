<script>
    import { fade, fly } from "svelte/transition";
    export let handleClick = () => {};

</script>

<style>
    .wrapper {
        position: fixed;
        z-index: 2;
        background: #0009;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .inner {
        background: #fff;
        padding: 24px;
        border-radius: 32px;
        min-width: 320px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

</style>

<div class="wrapper" on:click|self={handleClick} out:fade={{ duration: 50 }}>
    <div class="inner" in:fly={{ y: 30, duration: 250 }}>
        <slot />
    </div>
</div>
