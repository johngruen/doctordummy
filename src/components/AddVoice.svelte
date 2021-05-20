<script>
    import Button from "./Button.svelte";
    import Modal from "./Modal.svelte";

    import { voiceAction, voices } from "../state/stores.js";

    import samples from "../data/samples.js";

    let displayVoiceModal = false;
    let sampleIndex = 0;

    const toggleVoiceModal = () => {
        displayVoiceModal = !displayVoiceModal;
    };

    const initVoice = () => {
        voiceAction.update(() => {
            return {
                type: "ADD_VOICE",
                sampleIndex,
            };
        });

        toggleVoiceModal();
        sampleIndex = 0;
    };

</script>

{#if $voices.length === 0}
    <Button on:click={toggleVoiceModal} large={true}>Make Some Drums</Button>
{:else}
    <Button on:click={toggleVoiceModal} large={true}>Add Voice</Button>
{/if}

{#if displayVoiceModal}
    <Modal handleClick={() => (displayVoiceModal = false)}>
        <h2>Choose a sample</h2>
        <select bind:value={sampleIndex}>
            {#each samples as sample, i}
                <option value={i}>{sample.name}</option>
            {/each}
        </select>
        <br />
        <Button on:click={initVoice}>Add Voice</Button>
    </Modal>
{/if}
