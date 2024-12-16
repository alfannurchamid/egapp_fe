<script>
    import "../../app.css";
    import Bell2 from "$lib/svg/bell2.svelte"
  import { goto } from "$app/navigation";
  import { user } from "$lib/stores/userLogin";

    import { currentOpenNotifPage, currentOpenProfile, open_notif, open_profile } from "$lib/stores/general";
  import NontifPage from "$lib/compo/nontif_page.svelte";
  import EditProfile from "$lib/compo/edit_profile.svelte";
</script>
<div class="fixed z-20 top-0 flex w-full   p-3 px-6 text-gray-800 bg-white drop-shadow">
    <div class="w-full flex justify-between items-center flex-row">
        <div class=" flex flex-col">
            <p class=" ">hai, {$user.full_name} </p>
            <h5 class=" mt-1"> </h5>
        </div>
        <div class="flex flex-col justify-end w-40 ">
            <div class=" flex justify-between items-center ">
                <button on:click={()=>{currentOpenNotifPage(!$open_notif)}} class=" mx-2">     
                    <svg class=" w-6 h-6 fill-gray-400" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 512 512"  xml:space="preserve">
                    
                    <g>
                        <path  d="M193.499,459.298c5.237,30.54,31.518,52.702,62.49,52.702c30.98,0,57.269-22.162,62.506-52.702l0.32-1.86
                        H193.179L193.499,459.298z"/>
                        <path class="st0" d="M469.782,371.98c-5.126-5.128-10.349-9.464-15.402-13.661c-21.252-17.648-39.608-32.888-39.608-96.168v-50.194
                        c0-73.808-51.858-138.572-123.61-154.81c2.876-5.64,4.334-11.568,4.334-17.655C295.496,17.718,277.777,0,255.995,0
                        c-21.776,0-39.492,17.718-39.492,39.492c0,6.091,1.456,12.018,4.334,17.655c-71.755,16.238-123.61,81.002-123.61,154.81v50.194
                        c0,63.28-18.356,78.521-39.608,96.168c-5.052,4.196-10.276,8.533-15.402,13.661l-0.466,0.466v49.798h428.496v-49.798
                        L469.782,371.98z"/>
                    </g>
                </svg>
            </button>
            <button on:click={()=>{currentOpenProfile(!$open_profile)}} class="h-8 w-8 bg-slate-400 rounded-full"></button>
        </div>
        <ul class=" mt-1 self-end text-xs">{$user.jabatan} {$user.nama_divisi}</ul>
    </div> 
</div>
</div>
<div class="  w-screen items-center flex-col flex">
    <div class="container">
        <slot ></slot>
</div>
</div>


{#if $open_notif}
    <NontifPage></NontifPage>
{/if}

{#if $open_profile}
<EditProfile></EditProfile>
{/if}

