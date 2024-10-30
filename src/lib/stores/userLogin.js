import { writable } from "svelte/store";

export const user = writable({
  id_karyawan: "",
  username: "",
  full_name: "",
  email: "",
  access: 0,
  noWa: "",
  path_foto: "",
  nik: "",
  alamat: "",
  jabatan: "",
  id_divisi: "",
  nama_divisi: "",
});

export let lengkap = writable(false);

export const updateUser = (
  /** @type {{ id_karyawan: string; username: string; full_name: string; email: string; access: number; noWa: string; path_foto: string; nik: string; alamat: string; jabatan: string;   id_divisi :number ;nama_divisi :string}} */
  target
) => {
  // @ts-ignore
  user.update(() => {
    return target;
  });
};
