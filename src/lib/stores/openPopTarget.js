import { writable } from "svelte/store";

export let open_pop_up_capaian = writable(false);

export const currentOpenUpCapaian = (/** @type {boolean} */ open) => {
  open_pop_up_capaian.update(() => {
    return open;
  });
};
