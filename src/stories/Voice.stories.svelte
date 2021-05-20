<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Voice from "../FeatherSprite.svelte/Voice.svelte";

</script>

<Meta
    title="Voice"
    component={Voice}
    argTypes={{
        states: { control: false },
        activeBeatIndex: { control: { type: "range", min: 0, max: 15 } },
    }}
/>

<Template let:args>
    <Voice {...args} />
</Template>

<Story name="Off" />

<Story
    name="Sequenced"
    args={{
        states: [1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1],
    }}
/>
