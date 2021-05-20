<script>
    import { voices, bpm } from "../state/stores.js";

    $: window.localStorage.setItem(
        "voices",
        window.btoa(JSON.stringify($voices))
    );
    $: {
        if ($bpm > 1) {
            window.localStorage.setItem("bpm", `${$bpm}`);
        }
    }

</script>
