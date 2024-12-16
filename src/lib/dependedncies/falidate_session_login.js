import { goto } from "$app/navigation";
import { RefreshToken } from "$lib/stores/auth";
import { GetCookie, logout } from "$lib/stores/cokies";
import { user, updateUser } from "$lib/stores/userLogin";
import { Portal } from "./portal";

export const Falidate = async () => {
  let accessKey = GetCookie("accesskey");
  let refreshKey = GetCookie("refreshkey");
  if (refreshKey) {
    console.log("revresh key ada");
    if (!accessKey) {
      //   console.log("access key  tdkada");
      await RefreshToken(refreshKey);
      await Falidate();
    } else {
      let accessKey = GetCookie("accesskey");
      //   console.log("asccess key ada");

      const response = await fetch(
        "be.ekagroup.co/api/api/v1/auth/get_profile",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + accessKey,
          },
          credentials: "include",
        }
      );

      const content = await response.json();
      // console.log(content);
      // console.log(content.data);

      updateUser(content.data);

      // console.log(content.data);
      if (content.data.access == 0) {
        alert(
          "menunnggu persetujuan akses dari HRGA , mohon hubungi nomor Hrga unntuk meminta akses"
        );
        goto("/login");
      }
    }
  } else {
    // console.log("revers key ada");
    await logout();
  }
};
