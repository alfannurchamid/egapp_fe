<script>
  import { currentOpenProfile, open_profile } from "$lib/stores/general";
  import EditProfile from "./edit_profile.svelte";

</script>
<button on:click={()=>{currentOpenProfile(true)}} class=" w-full flex p-1 border-b my-2 px-5">
    <div class=" w-1/3 h-10   flex items-center border-r border-slate-300">
      <div class="h-8 w-8 bg-slate-400 mx-2 rounded-full"></div>
      <h4>Alpen</h4>
    </div>
    <div class=" w-2/3 h-10  justify-between flex items-start p-1 ">
        <div class="">
            <h4>Kafe</h4> 
            <h4 class=" text-xs">staff</h4> 
        </div>

        <div class=" flex flex-col" >

        </div>
    </div>
</button>

{#if $open_profile}
<EditProfile></EditProfile>
{/if}
