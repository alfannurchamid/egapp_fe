import { writable } from "svelte/store";

export let open_pop_tambah_rk = writable(false);
export let open_pop_edit_rk = writable(false);
export let open_element_id = writable("");
export let open_catatan = writable(false);
export let open_report = writable(false);

export const currentOpenTambahRk = (/** @type {boolean} */ open) => {
  open_pop_tambah_rk.update(() => {
    return open;
  });
};

export const currentOpenEditRk = (/** @type {boolean} */ open) => {
  open_pop_edit_rk.update(() => {
    return open;
  });
};

export const currentOpenElementEditId = (/** @type {string} */ open) => {
  open_element_id.update(() => {
    return open;
  });
};

export const currentOpenCatatan = (/** @type {boolean} */ open) => {
  open_catatan.update(() => {
    return open;
  });
};

export const currentOpenReport = (/** @type {boolean} */ open) => {
  open_report.update(() => {
    return open;
  });
};
