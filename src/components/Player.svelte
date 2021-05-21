<script>
    import { Howl, Howler } from "howler";

    import { get } from "svelte/store";

    import samples from "../data/samples";
    import { BEATS } from "../data/constants.js";

    const PUB_PATH =
        import.meta.env.MODE === "production"
            ? "./samples/production"
            : "../public/samples/";

    import {
        voices,
        activeBeatIndex,
        voiceAction,
        lastPlayedIndex,
        globalVolume,
    } from "../state/stores.js";

    const sounds = [];

    const addSound = (samplePath, id, volume) => {
        sounds.push({
            id,
            sound: new Howl({
                src: [`${PUB_PATH}${samplePath}`],
                volume,
            }),
        });
    };

    // this doesn't change the overall sounds array
    // it just unloads the old sound and sets the id to 0
    // so it no longer corresponds to a voice
    const removeSound = (id) => {
        const index = sounds.findIndex((sound) => sound.id === id);
        sounds[index].sound.unload();
        sounds[index].id = "0";
    };

    // TODO: do i need to defer this to user action?
    $: Howler.volume($globalVolume);

    $: console.log($voiceAction.type);

    $: switch ($voiceAction.type) {
        case "APP_INIT":
            {
                get(voices).forEach((voice) => {
                    addSound(
                        samples[voice.sampleIndex].sample,
                        voice.id,
                        voice.volume
                    );
                });
            }
            console.log(sounds);
            break;
        case "ADD_VOICE":
            const id = Date.now();
            const volume = 0.7;
            const sampleIndex = $voiceAction.sampleIndex;
            // update voices array
            // instantiate our howl
            voices.update((voices) => [
                ...voices,
                {
                    sampleIndex,
                    id,
                    volume: volume,
                    seq: Array(BEATS).fill(false),
                },
            ]);

            addSound(samples[sampleIndex].sample, id, volume);
            break;
        case "CHANGE_VOICE_SAMPLE":
            {
                // update sample index in the voice
                const { voiceIndex, nextSampleIndex } = $voiceAction;
                const { id, volume } = get(voices)[voiceIndex];

                $voices[voiceIndex].sampleIndex = nextSampleIndex;

                removeSound(id);
                addSound(samples[nextSampleIndex].sample, id, volume);
            }
            break;
        case "DELETE_VOICE":
            {
                const { voiceIndex } = $voiceAction;
                const { id } = get(voices)[voiceIndex];
                voices.update((v) => [
                    ...v.slice(0, voiceIndex),
                    ...v.slice(voiceIndex + 1, v.length),
                ]);
                removeSound(id);
            }
            break;
        case "CHANGE_VOICE_VOLUME":
            {
                const { voiceIndex, level } = $voiceAction;
                const voice = get(voices)[voiceIndex];
                voice.volume = level;
                voices.update((v) => [
                    ...v.slice(0, voiceIndex),
                    voice,
                    ...v.slice(voiceIndex + 1, v.length),
                ]);
                const index = sounds.findIndex(
                    (sound) => sound.id === voice.id
                );
                console.log(sounds[index].sound);
                sounds[index].sound.volume(level);
            }
            break;
        default:
            console.log($voiceAction.type);
            break;
    }

    $: {
        get(voices).forEach((voice) => {
            if (
                voice["seq"][$activeBeatIndex] &&
                voice["volume"] > 0 &&
                $activeBeatIndex != $lastPlayedIndex // we keep track of the last thing played since voices can change any time
            ) {
                const index = sounds.findIndex(
                    (sound) => sound.id === voice.id
                );
                sounds[index].sound.play();
            }
            return;
        });
        lastPlayedIndex.update(() => $activeBeatIndex);
    }

</script>
