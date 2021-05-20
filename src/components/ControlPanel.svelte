<script>
    import Button from "./Button.svelte";
    import Volume from "./Volume.svelte";
    import Slider from "./Slider.svelte";
    import { bpm, isPlaying, globalVolume, voices } from "../state/stores.js";
    import { fly } from "svelte/transition";

    // init level with global volume;
    const level = $globalVolume;

    const visible = true;

    const toggleIsPlaying = () => {
        isPlaying.update((val) => !val);
    };

    const handleVolumeUpdate = (event) => {
        globalVolume.set(event.detail);
    };

</script>

<style>
    section {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #fff;
    }

    .row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px;
    }

    .bpm {
        flex: 0 0 207px;
        display: flex;
        align-items: center;
    }

</style>

{#if visible}
    <section in:fly={{ y: 50, delay: 100 }}>
        <div class="row">
            <Volume
                on:toggle={handleVolumeUpdate}
                {level}
                on:change={handleVolumeUpdate}
            />

            <Button on:click={toggleIsPlaying} type="icon" large={true}>
                {#if $isPlaying}
                    <FeatherSprite name="pause" />
                {:else}
                    <FeatherSprite name="play" />
                {/if}
            </Button>

            <span class="bpm">
                <strong>BPM</strong>
                <Slider
                    min="40"
                    max="240"
                    step="1"
                    level={$bpm}
                    on:change={(e) => bpm.set(e.detail)}
                />
                <strong>{$bpm}</strong>
            </span>
        </div>
    </section>
{/if}
