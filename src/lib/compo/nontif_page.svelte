<script>
    import NotifRow from "$lib/compo/notif_row.svelte";
    import { fly } from "svelte/transition";
    import { quintInOut } from "svelte/easing";
  import { currentOpenNotifPage, open_notif } from "$lib/stores/general";
   let notifications = [
    {
    'subject':'nia',
    'contex':'membuat rencana kerja baru',
    'object':'brand aw poundfit horizon',
    'date_time':'1 menit'    
    },
    {
    'subject':'sibon',
    'contex':'membuat tugas baru',
    'object':'konten plan mminggu 1,2',
    'date_time':'1 menit'    
    },
    {
    'subject':'sibon',
    'contex':'membuat tugas baru',
    'object':'konten plan mminggu 1,2',
    'date_time':'1 menit'    
    },
    {
    'subject':'alpen',
    'contex':'membuat rencana kerja baru',
    'object':'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus numquam quidem ',
    'date_time':'1 menit'    
    }
    ]
</script>

<div transition:fly={{ delay: 100, duration: 700, x: 900, y: 0, opacity: 1, easing: quintInOut }} class=" px-4 w-screen fixed top-0 z-50 bg-white min-h-screen flex  flex-col py-8  " >
<button on:click={()=>{currentOpenNotifPage(!open_notif)}} class=" w-full h-20 p-3 text-2xl flex px-5  "> 
    <div class=" rotate-45 translate-y-2  w-4 h-4 border-b-2 border-l-2 border-black"> </div>
    <h1 class="mx-2">Notifikasi</h1>
</button>
    {#each notifications as notif }
    <NotifRow data={notif}></NotifRow>
    {/each}
</div>