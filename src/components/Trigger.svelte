<script>
    import { isPlaying } from "../../src/state/stores.js";

    export let active = false;
    export let on = false;
    export let dominant = false;
    export let mute = false;
    export let handleClick;

    $: classList = [
        "outer",
        on ? "on" : "",
        active && !mute && $isPlaying ? "active" : "",
        mute ? "mute" : "",
        dominant ? "dominant" : "",
    ].join(" ");

</script>

<style>
    .outer {
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        transition: opacity 125ms;
        flex: 1;
    }

    .mute {
        opacity: 0.5;
    }

    .inner {
        height: 36px;
        flex: 0 0 36px;
        background: var(--bg-color);
        transition: background-color 75ms, box-shadow 10ms,
            transform 125ms ease-out;
        box-shadow: 0 0 0 2px transparent;
        border-radius: 50%;
    }

    .on .inner {
        background: rgb(245 122 122);
    }

    .dominant {
        background: #ddd;
    }

    .active:not(.mute) .inner {
        box-shadow: 0 0 0 4px var(--highlight);
    }

    .active:not(.mute).on .inner {
        transform: scale(2);
    }

</style>

<div class={classList} on:click={handleClick}>
    <div class="inner" />
</div>
