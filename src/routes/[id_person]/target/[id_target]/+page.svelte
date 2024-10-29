   <script>
    import Plus from "$lib/svg/plus.svelte";
    
    import Bell2 from "$lib/svg/bell2.svelte";
    import { fade,fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";
  
    
    import TambahRencanaKerja from "$lib/compo/tambah_rencana_kerja.svelte";
  import { currentOpenTambahRk, open_pop_tambah_rk } from "$lib/stores/openPopRenKer"
  import Edit from "$lib/svg/edit.svelte";
  import RencanaKerjaRow from "$lib/compo/rencana_kerja_row.svelte";
  import { currentOpenUpCapaian, open_pop_up_capaian } from "$lib/stores/openPopTarget";
  import UploadCapaianTarget from "$lib/compo/upload_capaian_target.svelte";

  const rencanaKerjas = [{'id':'sw124','judul':'Pelaksanaan SOP produksi Konten','deskripsi':'Lorem, ipsum iunt itaque atque cupiditate ab facere iste harum laborum quo animi earum, rerum totam!','kpi':'file sistem sop sesuai rapat 09/23/2024','deadline':new Date()},{'id':'sw123','judul':'membuat kontenplan oktober','deskripsi':'Lorem, ipsum iunt itaque atque cupiditate ab facere iste harum laborum quo animi earum, rerum totam!','kpi':'file sistem sop sesuai rapat 09/23/2024','deadline':new Date()}]

 

   </script>
   <h2 class=" mt-20 w-full p-2 text-lg text-center">Target divisi markrting</h2>
   <div class="flex text-gray-700 p-5 w-fullh-40 mt-3 bg-slate-50 flex-col mx-2.5">
     <h3>1. Omset cafe 200 jt bulan september</h3>
      <div class="  h-full w-fuull flex  ">
        <div class=" w-7/12 pr-3 text-xs mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
        <div class=" border-l w-5/12 p-2 h-[80%] mt-2 flex justify-center flex-col">
          <button on:click={()=>{currentOpenUpCapaian(true)}} class=" text-xxs BtnSubmitMini w-auto p-1 mb-2">update capaian</button>
          <h6>KPI : omset </h6>
          <h6 class=" text-xxxs mt-2">Current omset </h6>
          <h6 class=" ">Rp 50.000.000 </h6>
          <h6 class=" text-xxxs mt-2">persentase capaian 25%</h6>
          <div class=" w-28 h-1 bg-slate-200 ">
            <div class=" h-1 w-[25%] bg-green-500"></div>
          </div>
          <h6 class=" text-xxxs mt-2">diperbarui 10 september</h6>
        </div>
      </div>
    </div>

    <!-- rencana kerja -->
<!-- llist rencana kerja-->
<div class=" container p-5">
  <h5 class="ml-2 mb-2 text-gray-500 text-center text-sm">rencana kerja</h5>

  {#each rencanaKerjas as rk}
    <RencanaKerjaRow rencana_kerja = {rk}></RencanaKerjaRow>
  {/each}
  <!-- card -->

  
  

<div class=" w-full flex justify-center"> <a href="/#" class=" text-xxs text-blue-500 mt-2">lihat lebih banyak v</a></div>
</div>

<button on:click={()=>{ currentOpenTambahRk(true)}} class=" fixed w-10 h-10 bg-red-400 rounded-full bottom-2 right-2"><Plus ukuran='w-10 h-10' warna='stroke-white' ></Plus></button>

<!-- pop up tambah Rencana kerja -->
{#if $open_pop_tambah_rk} 
<TambahRencanaKerja ></TambahRencanaKerja>
{/if}

{#if $open_pop_up_capaian}
<UploadCapaianTarget KPI='Omset 200 jt'></UploadCapaianTarget>
{/if}