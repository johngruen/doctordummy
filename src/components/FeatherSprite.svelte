<script>
    export let name = "anchor";
    export let size = 24;

</script>

{#if name === "x"}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-x"
        ><line x1="18" y1="6" x2="6" y2="18" /><line
            x1="6"
            y1="6"
            x2="18"
            y2="18"
        /></svg
    >
{:else if name === "volume-x"}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-volume-x"
        ><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><line
            x1="23"
            y1="9"
            x2="17"
            y2="15"
        /><line x1="17" y1="9" x2="23" y2="15" /></svg
    >
{:else if name === "pause"}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-pause"
        ><rect x="6" y="4" width="4" height="16" /><rect
            x="14"
            y="4"
            width="4"
            height="16"
        /></svg
    >
{:else if name === "play"}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-play"
        ><polygon points="5 3 19 12 5 21 5 3" /></svg
    >
{:else if name === "volume"}
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-volume-2"
        ><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path
            d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
        /></svg
    >
{/if}
