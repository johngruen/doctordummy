<script>
    import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
    import Card from "../FeatherSprite.svelte/Card.svelte";

</script>

<Meta
    title="Card"
    component={Card}
    argTypes={{
        text: { control: "text" },
        width: { control: { type: "range", min: 240, max: 500, step: 10 } },
        radius: { control: { type: "range", min: 0, max: 64, step: 1 } },
    }}
/>

<Template let:args>
    <Card {...args} />
</Template>

<Story name="Hello" args={{ text: "hah" }} />
