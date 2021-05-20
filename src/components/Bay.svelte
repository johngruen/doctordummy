<script>
    import Voice from "./Voice.svelte";
    import { voices } from "../state/stores.js";

    $: console.log($voices);

</script>

<style>
    div {
        margin-bottom: 24px;
    }

</style>

<div>
    {#each $voices as voice, voiceIndex}
        <Voice {voiceIndex} />
    {/each}
</div>
