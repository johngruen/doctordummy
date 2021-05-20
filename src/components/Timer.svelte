<script>
    import { activeBeatIndex, bpm, isPlaying } from "../state/stores.js";
    import * as workerTimers from "worker-timers";
    import { BEATS } from "../data/constants.js";

    const timer = () => {
        const callBack = () => {
            workerTimers.setTimeout(callBack, 60000 / (4 * $bpm));
            return activeBeatIndex.update((n) => {
                if (!$isPlaying) return n;
                if (n === BEATS - 1) return 0;
                else return n + 1;
            });
        };

        workerTimers.setTimeout(callBack, 60000 / (4 * $bpm));
    };

    timer();

</script>
