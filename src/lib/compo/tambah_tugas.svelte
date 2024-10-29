
<script>
    import { circInOut, quintOut } from "svelte/easing";
    import Check from "$lib/svg/check.svelte";

    import { currentOpenTambahTugas } from "$lib/stores/openPopTugas"
    import { fly, slide } from "svelte/transition";
    import Dropdown from "$lib/svg/dropdown.svelte";

    // form pengisian
    let openform = false
    let opDdStaff = false;
    const staff = [{'nama':'alpen','id':'A004','atribut':'text-black stroke-green-400'},{'nama':'devi','id':'A005','atribut':'text-black stroke-green-400'},{'nama':'nanang','id':'A003','atribut':'text-black stroke-green-400'},{'nama':'sibon','id':'A006','atribut':'text-black stroke-green-400'}]
    /**
   * @type {any[]}
   */
    let staf_terpilih = []
    let staf_terpilih_value =''
    let is_lengkap = true


    const updateStaffPilih= (/** @type {string} */ id_staff) =>() =>{
        // cek id in staf terpilih
        const target = document.getElementById(id_staff)?.classList
        if(staf_terpilih.some(element => element.id === id_staff)){
            // remove jika ga ada
            staf_terpilih = staf_terpilih.filter( staf_terpilih => staf_terpilih.id !== id_staff)
            // styling
            target?.remove('stroke-green-500')
            target?.remove('text-black')
        }else{
            // add jika ada
            staf_terpilih.push(staff.filter( staff => staff.id == id_staff)[0])
            // styling
            target?.add('text-black')
            target?.add('stroke-green-500')
        }

        if(staf_terpilih.length !== 0){
            is_lengkap = false
            // @ts-ignore
            staf_terpilih_value = staf_terpilih.map(function(item) {
                                                    return item['nama'];
                                                    });
        }else{
            is_lengkap = true
            staf_terpilih_value=''
        }
    }
</script>
<div transition:fly={{ delay: 250, duration: 700, x: 0, y: 900, opacity: 0.5, easing: quintOut }} id="popaddrk" class=" flex absolute w-screen min-h-screen flex-col pb-20  items-center pt-20 top-0 z-30 backdrop-blur-xl backdrop-brightness-100  bg-gray-200 bg-opacity-5">

    <div class="w-80 flex bg-black rounded-3xl p-5 bg-opacity-30 flex-col  ">
      <h4 class=" text-white  text-center w-full ">Tambah </h4>
      <form action="" class=" flex flex-col form_pop ">
         <label for="judul" class=" text-sm text-white mb-1">judul</label>
         <input name="judul" type="text" class=" h-8 rounded-lg px-2 mb-4" >
  
         <label for="deskripsi" class=" text-sm text-white mb-1">deskripsi</label>
         <textarea name="deskripsi"  class=" min-h-20 rounded-lg px-2 mb-4" > </textarea>
  
         <label for="kpi" class=" text-sm text-white mb-1">KPI</label>
         <input name="kpi" type="text" class=" h-8 rounded-lg px-2 mb-4" >
  
         <label for="kpi" class=" text-sm text-white mb-1">deadline</label>
  
         <input name="kpi" type="date" class=" h-8 rounded-lg px-2 mb-4" >
  
         <label for="kpi" class=" text-sm text-white mb-1">pelaksanaan
  </label>
              
          <div class=" bg-white py-2 rounded-lg px-2 mb-4  cursor-pointer">
              <button on:click={()=>{opDdStaff = !opDdStaff}} class=" w-full flex justify-between items-center px-2">
                  <label for="">{staf_terpilih_value}</label>
                  {#if opDdStaff}
                      
                  <div  class="rotate-180">
                      <Dropdown kelas='w-8 h-8'></Dropdown>
                  </div>
                  {:else}
                  <Dropdown kelas='w-8 h-8'></Dropdown>
                  {/if}
              </button>
              {#if  opDdStaff}
              <div transition:slide={{ delay: 250, duration: 300, easing: circInOut, axis: 'y' }}  
                  id="dropdownstaff" class=" duration-700  w-full flex-col text-gray-500  flex overflow-hidden ">
                  {#each staff as stafff }
                    <button on:click={updateStaffPilih(stafff.id) } id='{stafff.id}' class=" {stafff.id} p-1 px-5 border-b  flex justify-between  {stafff.atribut} " >{stafff.nama} {stafff.atribut} <Check kelas='w-5 h-5  ' kelas2='stroke-2 '></Check></button> 
                  {/each}
              </div>
              {/if}
              
         </div>
  
         <div class=" mt-5 grid grid-cols-2 grid-rows-1 gap-3">
            <button on:click={()=>{currentOpenTambahTugas(false) }}  class=" BtnNegative  ">batal</button>
            <button id="BtnSubmit" type="submit" disabled ={is_lengkap} class="   BtnSubmit w-full h-10  ">simpan</button>
          </div>
          
      </form>
    </div>
  </div>