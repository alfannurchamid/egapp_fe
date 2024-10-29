<script>

  import Edit from "$lib/svg/edit.svelte";
  
  import { currentOpenElementEditId,open_element_id } from "$lib/stores/openPopRenKer";
  import EditRencanaKerja from "./edit_rencana_kerja.svelte";


  export let rencana_kerja;
  let local_id_element_pop = "x"

  import { goto } from "$app/navigation";

  const portal = ()=>{
  goto('../rencana_kerja/9s')
}
</script>
<div class=" rencanakerja_card p-1 px-2 min-h-12 my-2  w-full bg-white drop-shadow flex flex-col rounded-lg ">
    <div class=" flex w-full justify-between">
      <button on:click={()=>{portal()}}  class=" text-sm">{rencana_kerja.judul}</button> 
      <div class=" flex justify-between  w-32">
        <button on:click={()=>{currentOpenElementEditId(rencana_kerja.id)}} >
            <Edit kelas='w-5 h5 ' warna="stroke-gray-400"></Edit>
        </button>
        <div class=" w-16 h-3 rounded bg-green-500 text-xxs text-center flex items-center justify-center text-white"> Tercapai  </div>
      </div>
    </div>
    <div class=" flex w-full justify-between text-xxxs mt-2 text-gray-600">
      <h3>deadline : {rencana_kerja.deadline.toDateString()}</h3>
      <div class=" "> Persentase capaian pekerjaan 60% </div>
    </div>
  </div>

  {#if $open_element_id == rencana_kerja.id}
  <EditRencanaKerja rencana_kerja ={rencana_kerja}></EditRencanaKerja>
  {/if}
