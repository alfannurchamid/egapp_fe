<script>
  import "../../app.css";
  import { goto } from "$app/navigation";
  import Bell2 from "$lib/svg/bell2.svelte";
  import { user } from "$lib/stores/userLogin";
  import {
    currentOpenNotifPage,
    currentOpenProfile,
    open_notif,
    open_profile,
  } from "$lib/stores/general";
  import NontifPage from "$lib/compo/nontif_page.svelte";
  import EditProfile from "$lib/compo/edit_profile.svelte";
  import Breadcrumb from "$lib/compo/Breadcrumb.svelte";

  // Breadcrumb items
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Profile", path: "/profile" },
  ];
</script>

<!-- Navbar -->
<div
  class="fixed z-20 top-0 flex w-full p-3 px-6 text-gray-800 bg-white drop-shadow"
>
  <div class="w-full flex justify-between items-center flex-row">
    <div class="flex flex-col">
      <p>hai, {$user.full_name}</p>
      <h5 class="mt-1"></h5>
    </div>
    <div class="flex flex-col justify-end w-40">
      <div class="flex justify-between items-center">
        <button
          on:click={() => currentOpenNotifPage(!$open_notif)}
          class="mx-2"
        >
          <svg class="w-6 h-6 fill-gray-400" viewBox="0 0 512 512">
            <g>
              <path
                d="M193.499,459.298c5.237,30.54,31.518,52.702,62.49,52.702c30.98,0,57.269-22.162,62.506-52.702l0.32-1.86H193.179L193.499,459.298z"
              />
              <path
                d="M469.782,371.98c-5.126-5.128-10.349-9.464-15.402-13.661c-21.252-17.648-39.608-32.888-39.608-96.168v-50.194c0-73.808-51.858-138.572-123.61-154.81c2.876-5.64,4.334-11.568,4.334-17.655C295.496,17.718,277.777,0,255.995,0c-21.776,0-39.492,17.718-39.492,39.492c0,6.091,1.456,12.018,4.334,17.655c-71.755,16.238-123.61,81.002-123.61,154.81v50.194c0,63.28-18.356,78.521-39.608,96.168c-5.052,4.196-10.276,8.533-15.402,13.661l-0.466,0.466v49.798h428.496v-49.798L469.782,371.98z"
              />
            </g>
          </svg>
        </button>
        <button
          on:click={() => currentOpenProfile(!$open_profile)}
          class="h-8 w-8 bg-slate-400 rounded-full"
        ></button>
      </div>
      <ul class="mt-1 self-end text-xs">{$user.jabatan} {$user.nama_divisi}</ul>
    </div>
  </div>
</div>

<!-- Breadcrumb -->
<div class="w-screen mt-24 px-6">
  <Breadcrumb items={breadcrumbItems} />
</div>

<!-- Slot Konten -->
<div class="w-screen items-center flex-col flex">
  <div class="container">
    <slot></slot>
  </div>
</div>

<!-- Notifikasi dan Edit Profile -->
{#if $open_notif}
  <NontifPage />
{/if}

{#if $open_profile}
  <EditProfile />
{/if}
