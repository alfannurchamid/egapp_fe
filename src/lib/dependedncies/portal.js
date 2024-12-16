import { goto } from "$app/navigation";
import { logout } from "$lib/stores/cokies";

export const Portal = (
  /** @type {number} */ access,
  /** @type {string} */ id_karyawan,
  /** @type {string} */ divisi
) => {
  // lihat akses sampai sini
  switch (access) {
    // jika akses = 0
    case 0:
      logout();
    // jika akses = 1
    case 1:
      goto("/" + id_karyawan + "/dashboard_divisi/" + divisi);
    // jika akses = 2
    case 2:
      goto("/" + id_karyawan + "/dashboard_divisi/" + divisi);
    // jika akses = 3
    case 3:
      goto("/" + id_karyawan + "/dashboard_divisi/" + divisi);
    // setelah masuk ke  dashboard, akan ada tombol ke dasb hrga
    // jika akses = 4
    case 4:
      goto("/" + id_karyawan + "/dashboard_direksi");
    // jika akses = 5
    case 5:
      goto("/" + id_karyawan + "/dashboard_direksi");
  }
};
