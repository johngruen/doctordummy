<script>
    import { createEventDispatcher } from "svelte";
    import Button from "./Button.svelte";
    import FeatherSprite from "./FeatherSprite.svelte";
    import Slider from "./Slider.svelte";
    export let level = 1;

    let lastLevel;

    const dispatch = createEventDispatcher();

    $: name = ["volume", level > 0 ? null : "-x"].join("");

    const manageToggle = () => {
        if (level > 0) {
            lastLevel = level;
            level = 0;
        } else level = lastLevel;
        dispatch("toggle", level);
    };

    const handleChange = (e) => {
        level = e.detail;
        dispatch("change", level);
    };

</script>

<style>
    div {
        display: flex;
        align-items: center;
    }

</style>

<div>
    <Button type="icon" on:click={manageToggle}>
        <FeatherSprite {name} size={16} />
    </Button>

    <Slider min="0" max="1" step=".1" {level} on:change={handleChange} />

    <strong>{level}</strong>
</div>
