<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    export let type = "text";
    export let large = false;

    $: classList = ["button", type, large ? "large" : ""].join(" ");

</script>

<style>
    button {
        background: var(--text-color);
        color: var(--bg-color);
        border: none;
        font-size: 16px;
        border-radius: 32px;
        font-weight: 700;
        cursor: pointer;
        transition: transform 75ms ease-out;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button.text {
        padding: 12px 24px;
    }

    button.icon {
        width: 36px;
        height: 36px;
        flex: 0 0 36;
        border-radius: 50%;
    }

    button.icon.large {
        width: 48px;
        height: 48px;
    }

    button.text.large {
        padding: 20px 32px;
    }

    button:hover {
        transform: scale(1.05);
    }

    button:active {
        transform: scale(0.98);
    }

</style>

<button on:click={() => dispatch("click")} class={classList}>
    <slot />
</button>
