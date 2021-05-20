<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Bay from "../FeatherSprite.svelte/Bay.svelte";

</script>

<Meta
    title="Bay"
    component={Bay}
    argTypes={{
        states: { control: false },
        activeBeatIndex: { control: { type: "range", min: 0, max: 15 } },
    }}
/>

<Template let:args>
    <Bay {...args} />
</Template>

<Story name="Off" />
