<script>
  import Header from "./components/Header.svelte";
  import Bay from "./components/Bay.svelte";
  import ControlPanel from "./components/ControlPanel.svelte";
  import Timer from "./components/Timer.svelte";
  import Player from "./components/Player.svelte";
  import AddVoice from "./components/AddVoice.svelte";
  import OffLoad from "./components/OffLoad.svelte";

</script>

<style>
  main {
    min-height: 60vh;
    background: var(--bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    width: 100vw;
    overflow: scroll;
  }

  div {
    display: grid;
    height: 100vh;
    max-width: 100vw;
    overflow: scroll;
    grid-template-rows: 64px 1fr 80px;
  }

</style>

<Timer />
<Player />
<OffLoad />
<div>
  <Header />
  <main>
    <Bay />
    <AddVoice />
  </main>
  <ControlPanel />
</div>
