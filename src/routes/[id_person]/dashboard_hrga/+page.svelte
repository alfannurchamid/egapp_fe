<script>
  import { goto } from "$app/navigation";
  import PersonRow from "$lib/compo/person_row.svelte";
  import Search from "$lib/svg/search.svelte";

  const portal = ()=>{
    goto('dashboard_manager')
  }

  const divisi = [{'nama_divisi':'le coffee'},{'nama_divisi':'le skin'},{'nama_divisi':'the kotenang'},{'nama_divisi':'agro bisnis'},{'nama_divisi':'BPNT'},{'nama_divisi':'LPG'},{'nama_divisi':'semen'},{'nama_divisi':'konstruksi'},]

</script>
<div  class=" relative w-full h-20 max-w-screen-md overflow-x-scroll mt-24 flex items-center ">

    <div style=" width: auto;" class="flex absolute   w-full  h-16  items-center px-2  "> 
        {#each divisi as div }   
        <div class="flex text-gray-700 items-center min-w-24 flex-col mx-2.5  ">
            <div class="  h-14 w-14 rounded-full bg-gray-400"></div>
            <ul>{div.nama_divisi}</ul>
        </div>
        {/each}
    </div> 

</div>

<div class=" w-full flex  mt-10 px-8">
    <div class=" flex justify-center items-center pl-3 bg-gray-100 rounded-l-lg ">
        <Search warna='stroke-gray-400' ukuran='w-6 h-6 '></Search>
    </div>
    <input type="text" class="bg-gray-100 outline-none rounded-r-lg  h-10 w-full px-3 placeholder:text-lg placeholder:font-light font-light  text-lg"  placeholder="cari karyawan">

</div>


<div class=" w-full flex flex-col text-sm pt-6 ">
    
    <!-- inni card jobs divisi report  -->
    <PersonRow></PersonRow>
    <PersonRow></PersonRow>
    <PersonRow></PersonRow>
    <PersonRow></PersonRow>
    <PersonRow></PersonRow>



</div>