import { goto } from "$app/navigation";
import { writable } from "svelte/store";
import { loadinge } from "./load";
import { resetUser, updateUser } from "./userLogin";

export let logout_ = writable(true);

export const SetCookie = (
  /** @type {string} */ name,
  /** @type {any} */ value,
  /** @type {number} */ mili_secon
) => {
  var expires = "";
  if (mili_secon) {
    var date = new Date();
    date.setTime(date.getTime() + mili_secon);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

export const DelCookie = (/** @type {string} */ name) => {
  var expires = "";

  var date = new Date();
  date.setTime(date.getTime());
  expires = "; expires=" + date.toUTCString();
  document.cookie = name + "=" + ("asda" || "") + expires + "; path=/";
  console.log("dell cokie");
};

export const GetCookie = (/** @type {string} */ name) => {
  var nameEQ = name + "=";

  if (document && document.cookie) {
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
};

let message = "";

export const generateAccesToken = async (/** @type {any} */ act) => {
  const refresh_token = act;
<<<<<<< HEAD
  const response = await fetch("https://be.ekagroup.co/api/api/v1/auth/refresh_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      refresh_token,
    }),
  });
=======
  const response = await fetch(
    "http://localhost:8000/api/api/v1/auth/refresh_token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        refresh_token,
      }),
    }
  );
>>>>>>> e3cd1e68cacc7cc5b78dca51d25603c6a2a46bdb

  const content = await response.json();
  const actNew = content.data.access_token;
  const expired_at = content.data.expired_at;
  console.log(content.data.access_token);

  SetCookie("accesskey", actNew, expired_at);
};

export const logout = async () => {
<<<<<<< HEAD
<<<<<<< HEAD
  try {
    const refreshToken = GetCookie("refreshkey");
=======
  const refresh_token = GetCookie("refreshkey");
  if (refresh_token) {
    const postLogout = await fetch("https://be.ekagroup.co/api/api/v1/auth/logout", {
      method: "POST",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh_token,
      }),
    });
  }
>>>>>>> 5a17fa01db14bf6bb4d37d46cd8a15db1e87efab

    if (refreshToken) {
      const response = await fetch("https://be.ekagroup.co/api/api/v1/auth/logout", {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh_token: refreshToken }),
      });

      if (!response.ok) {
        console.error("Failed to logout", await response.text());
      }
    }

    // Clear all cookies
    document.cookie.split(";").forEach((cookie) => {
      document.cookie = cookie
        .replace(/^ +/, "")
        .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
    });

    // Redirect to login page
    goto("/login");
  } catch (error) {
    console.error("Error during logout:", error);
  }
=======
  // @ts-ignore
  logout_ = false;
  console.log("masuk logout" + logout_);
  resetUser();
  const refresh_token = GetCookie("refreshkey");
  if (refresh_token) {
    const postLogout = await fetch(
      "http://localhost:8000/api/api/v1/auth/logout",
      {
        method: "POST",
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refresh_token,
        }),
      }
    );
    // clear profile
    await clear_cookie();
    // console.log("clear kuki lolos");
  }
  // console.log("logout beres");
  goto("/login");
  // loadinge(false);
};

const clear_cookie = async () => {
  document.cookie.split(";").forEach(function (c) {
    document.cookie = c
      .replace(/^ +/, "")
      .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
  });
  // console.log("clear kuki");
>>>>>>> e3cd1e68cacc7cc5b78dca51d25603c6a2a46bdb
};



