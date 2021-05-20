<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Trigger from "../FeatherSprite.svelte/Trigger.svelte";

</script>

<Meta
    title="Trigger"
    component={Trigger}
    argTypes={{
        on: { control: "boolean" },
        active: { control: "boolean" },
    }}
/>

<Template let:args>
    <Trigger {...args} />
</Template>

<Story name="Default" />

<Story name="Active" args={{ active: true }} />
