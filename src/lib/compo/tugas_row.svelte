<script>
// @ts-nocheck

  import { pelaksana ,open_pop_element_id, currentOpenElementId  } from "$lib/stores/openPopTugas";
  import Edit from "$lib/svg/edit.svelte";
  import Person from "$lib/svg/person.svelte";
  import Work from "$lib/svg/work.svelte";
  import EditTugas from "./edit_tugas.svelte";

  export let tugas;
  let this_elaksana = tugas.pelaksana

  let local_id_element_pop = "x"

  let open_edit = false

  const staff = [{'nama':'alpen','id':'A004','atribute':''},{'nama':'devi','id':'A005','atribute':''},{'nama':'nanang','id':'A003','atribute':''},{'nama':'sibon','id':'A006','atribute':''}]
  const klik_open = (id_element = '')=>{
    // deklaradi var store op element id
    currentOpenElementId(id_element)
    // if($open_pop_element_id == id_element){
    //     open_edit = true
    // }
  }

  import { goto } from "$app/navigation";

const portal = ()=>{
goto('../tugas/9s')
}
  
</script>
<div  class=" flex w-full  bg-slate-50 my-2 py-2 px-5 ">
    <div class=" items-center flex border-r pr-2 ">
        <div class=" h-8 w-8  rounded-full bg-slate-200 flex justify-center items-center">
            <Person kelas='w-5 h-5 fill-gray-500' ></Person> 
        </div>
        <div>

            {#each this_elaksana as pelaksana}
            <h3 class=" ml-3 ">{pelaksana['nama']}</h3>
            {/each}
        </div>
    </div>
    <div class=" block w-full ">
        <div class=" flex justify-between flex-row w-full">
            <button on:click={()=>{portal()}} class=" text-xs ml-2">{tugas.judul}</button> 
            <div class=" flex justify-between  max-w-32">
                <button class=" z-40" on:click={()=>{klik_open(tugas.id)}} >
                    <Edit kelas='w-5 h-5 mx-2 ' warna="stroke-gray-400"></Edit>
                </button>
                <Work kelas=' fill-green-500 w-5 h-5'></Work>
              </div>
        </div>
        <p class=" text-gray-600 text-xxs ml-2 text-end">deadline : 12/08/2024</p> 
    </div>
</div>



{#if $open_pop_element_id == tugas.id} 
<EditTugas tugas={tugas} staff = {staff}></EditTugas>
{/if}
