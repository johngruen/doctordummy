import {writable, readable} from 'svelte/store'; 

export const activeBeatIndex = writable(0);

export const lastPlayedIndex = writable(0);

export const voices = writable([]);

export const voiceAction = writable({type: "APP_INIT"});

export const bpm = writable(120);

export const isPlaying = writable(false);

export const globalVolume = writable(.7);
