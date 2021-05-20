<script>
    import { fade } from "svelte/transition";

    import Trigger from "./Trigger.svelte";
    import FeatherSprite from "./FeatherSprite.svelte";
    import Button from "./Button.svelte";
    import Volume from "./Volume.svelte";

    import { activeBeatIndex, voices, voiceAction } from "../state/stores.js";

    import { BEATS } from "../data/constants.js";
    import samples from "../data/samples.js";

    // what index in the voices array are we?
    export let voiceIndex = 0;

    const level = $voices[voiceIndex].volume;

    let nextSampleIndex = $voices[voiceIndex].sampleIndex;

    const handleDeleteClick = () => {
        voiceAction.update(() => {
            return {
                type: "DELETE_VOICE",
                voiceIndex,
            };
        });
    };

    const handleTriggerClick = (i) => {
        $voices[voiceIndex].seq[i] = !$voices[voiceIndex].seq[i];
    };

    const handleSampleChange = () => {
        voiceAction.set({
            type: "CHANGE_VOICE_SAMPLE",
            voiceIndex,
            nextSampleIndex,
        });
    };

    const handleVolumeUpdate = (event) => {
        voiceAction.set({
            type: "CHANGE_VOICE_VOLUME",
            voiceIndex,
            level: event.detail,
        });
    };

</script>

<style>
    .voice {
        display: grid;
        grid-template-columns: 194px 120px calc(var(--beats) * 48px) 36px;
        grid-gap: 20px;
        margin: 0 0 16px;
    }

    .triggers {
        display: flex;
    }

    select {
        margin-right: 16px;
    }

    .control {
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>

<div in:fade class="voice" style={`--beats: ${BEATS}`}>
    <Volume
        on:toggle={handleVolumeUpdate}
        {level}
        on:change={handleVolumeUpdate}
    />
    <!-- svelte-ignore a11y-no-onchange -->
    <select bind:value={nextSampleIndex} on:change={handleSampleChange}>
        {#each samples as sample, i}
            <option value={i}>{sample.name}</option>
        {/each}
    </select>
    <div class="triggers">
        {#each $voices[voiceIndex].seq as state, i}
            <Trigger
                on={state}
                dominant={i % 4 === 0}
                active={i === $activeBeatIndex}
                handleClick={() => handleTriggerClick(i)}
                mute={$voices[voiceIndex].volume === 0}
            />
        {/each}
    </div>

    <div class="control">
        <Button on:click={handleDeleteClick} type="icon">
            <FeatherSprite name="x" size={16} />
        </Button>
    </div>
</div>
